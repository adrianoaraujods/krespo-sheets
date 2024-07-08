"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { MenuIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import type { NavLinkWithItems } from "@/lib/navigation";
import type { VariantProps } from "class-variance-authority";

import { Link, usePathname } from "@/lib/navigation";
import { cn } from "@/lib/utils";

import { Heading } from "@/components/typography/heading";
import { Paragraph, Span } from "@/components/typography/text";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Section } from "@/components/ui/section";
import {
  Sheet,
  SheetContent,
  sheetContentVariants,
  SheetTrigger,
} from "@/components/ui/sheet";

const navbarVariants = cva(
  "sticky top-0 z-10 flex min-h-14 items-center justify-between gap-4 border-b py-2",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        blur: "bg-background/80 text-foreground backdrop-blur-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface NavbarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarVariants> {}

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ className, variant, ...props }, ref) => (
    <Section className={cn(navbarVariants({ variant }), className)} asChild>
      <header ref={ref} {...props} />
    </Section>
  )
);
Navbar.displayName = "Navbar";

const navbarLinksVariants = cva("hidden w-fit flex-wrap items-center", {
  variants: {
    hide: {
      never: "flex",
      sm: "sm:flex",
      md: "md:flex",
      lg: "lg:flex",
      xl: "xl:flex",
    },
    center: {
      never: "",
      sm: "flex-nowrap sm:absolute sm:left-1/2  sm:-translate-x-1/2",
      md: "flex-nowrap md:absolute md:left-1/2  md:-translate-x-1/2",
      lg: "flex-nowrap lg:absolute lg:left-1/2  lg:-translate-x-1/2",
      xl: "flex-nowrap xl:absolute xl:left-1/2  xl:-translate-x-1/2",
    },
  },
  defaultVariants: {
    hide: "never",
    center: "never",
  },
});

export interface NavbarLinksProps
  extends Omit<React.ComponentProps<typeof NavigationMenu>, "children">,
    VariantProps<typeof navbarLinksVariants> {
  items: NavLinkWithItems[];
}

const NavbarLinks = React.forwardRef<HTMLDivElement, NavbarLinksProps>(
  ({ className, items, hide, center, ...props }, ref) => {
    const pathname = usePathname();
    const t = useTranslations();

    return items.length ? (
      <NavigationMenu
        ref={ref}
        className={cn(navbarLinksVariants({ center, hide, className }))}
        {...props}
      >
        <NavigationMenuList>
          {items.map(({ href, title, items }, i) => (
            <NavigationMenuItem key={`NavbarLink:${i + 1}`}>
              {items ? (
                <>
                  <Button variant="ghost" asChild>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-foreground/60 hover:text-foreground/80",
                        pathname.startsWith(href) && "text-foreground"
                      )}
                    >
                      <Span size="sm">{t(title)}</Span>
                    </NavigationMenuTrigger>
                  </Button>

                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {items.map(({ href, title, description }, j) => (
                        <li key={`NavbarLink:${i + 1}-${j + 1}`}>
                          <Link
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href={href}
                          >
                            <Heading className="text-lg text-muted-foreground">
                              {t(title)}
                            </Heading>

                            {description && (
                              <Paragraph>{t(description)}</Paragraph>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild>
                  <Button variant="ghost" asChild>
                    <Link
                      href={href}
                      className={cn(
                        "text-foreground/60 hover:text-foreground/80",
                        pathname.startsWith(href) && "text-foreground"
                      )}
                    >
                      <Span size="sm">{t(title)}</Span>
                    </Link>
                  </Button>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    ) : null;
  }
);
NavbarLinks.displayName = "NavbarLinks";

const navbarMenuVariants = cva("", {
  variants: {
    show: {
      xs: "xs:hidden",
      sm: "sm:hidden",
      md: "md:hidden",
      lg: "lg:hidden",
      xl: "xl:hidden",
    },
  },
  defaultVariants: {
    show: "md",
  },
});

export interface NavbarMenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarMenuVariants> {
  trigger?: React.ReactNode;
  side?: VariantProps<typeof sheetContentVariants>["side"];
}

const NavbarMenu = React.forwardRef<HTMLDivElement, NavbarMenuProps>(
  ({ className, show, trigger, side, ...props }, ref) => {
    return (
      <Sheet>
        <SheetTrigger asChild>
          {trigger || (
            <Button
              className={cn(navbarMenuVariants({ show, className }))}
              variant="outline"
              size="icon"
            >
              <MenuIcon />
            </Button>
          )}
        </SheetTrigger>

        <SheetContent side={side}>
          <nav className="grid h-full gap-4" ref={ref} {...props} />
        </SheetContent>
      </Sheet>
    );
  }
);
NavbarMenu.displayName = "NavbarMenu";

export interface NavbarMenuLinksProps
  extends Omit<React.HTMLAttributes<HTMLUListElement>, "children"> {
  items: NavLinkWithItems[];
}

const NavbarMenuLinks = React.forwardRef<
  HTMLUListElement,
  NavbarMenuLinksProps
>(({ className, items, ...props }, ref) => {
  return items.length === 0 ? null : (
    <ul ref={ref} className={cn("grid", className)} {...props}>
      {items.map((item, i) => {
        const key = `NavbarMenuLink:${i + 1}`;

        return (
          <NavbarMenuLinksItem
            className="text-foreground"
            item={item}
            key={key}
            reactKey={key}
          />
        );
      })}
    </ul>
  );

  function NavbarMenuLinksItem({
    item: { href, items, title },
    className,
    reactKey,
  }: {
    item: NavLinkWithItems;
    className?: string;
    reactKey: string;
  }) {
    const pathname = usePathname();
    const t = useTranslations();

    return (
      <li>
        <Button variant="none" className="px-1" asChild>
          <Link
            className={cn(
              "relative mr-auto text-foreground/60 hover:text-foreground/80",
              pathname === href && "text-foreground",
              className
            )}
            href={href}
          >
            {t(title)}
          </Link>
        </Button>

        {items && (
          <ul>
            {items.map((item, i) => {
              const key = `${reactKey}-${i + 1}`;

              return (
                <NavbarMenuLinksItem
                  className="text-sm"
                  item={item}
                  key={key}
                  reactKey={key}
                />
              );
            })}
          </ul>
        )}
      </li>
    );
  }
});
NavbarMenuLinks.displayName = "NavbarMenuLinks";

export { Navbar, NavbarLinks, NavbarMenu, NavbarMenuLinks };
