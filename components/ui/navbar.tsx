import * as React from "react";
import { cva } from "class-variance-authority";

import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

import { Section } from "./section";

const navbarVariants = cva(
  "sticky top-0 z-30 flex min-h-14 items-center justify-between gap-4 border-b py-2",
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
  ({ className, variant, ...props }, ref) => {
    return (
      <Section className={cn(navbarVariants({ variant, className }))} asChild>
        <header ref={ref} {...props} />
      </Section>
    );
  }
);
Navbar.displayName = "Navbar";

export { Navbar, navbarVariants };
