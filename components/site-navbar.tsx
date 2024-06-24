import { Suspense } from "react";

import type { NavLinkWithItems } from "@/lib/navigation";

import { auth } from "@/lib/auth";
import { navItems } from "@/lib/config";

import { Button } from "@/components/ui/button";
import {
  Navbar,
  NavbarLinks,
  NavbarMenu,
  NavbarMenuLinks,
} from "@/components/ui/navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { Logo } from "@/components/icons/logo";
import LocaleSelector from "@/components/locale-selector";
import LoginDialog from "@/components/login-dialog";
import ThemeSelector from "@/components/theme-selector";
import UserSettings from "@/components/user-settings";

import { SearchBar } from "./search-bar";

export function SiteNavbar() {
  return (
    <Navbar>
      <Suspense fallback={<NavbarSkeleton />}>
        <NavbarContent />
      </Suspense>
    </Navbar>
  );
}

export async function NavbarContent() {
  const session = await auth();

  const { authOnly: authOnlyItems, public: publicItems } = navItems;

  let mainItems: NavLinkWithItems[] = !session
    ? publicItems
    : [...authOnlyItems, ...publicItems];

  let menuItems: NavLinkWithItems[] = [...mainItems];

  return (
    <>
      <div className="flex">
        <NavbarMenu side="left">
          <NavbarMenuLinks items={menuItems} />

          <div className="mt-auto flex">
            <LocaleSelector />

            <ThemeSelector />
          </div>
        </NavbarMenu>

        <Logo />
      </div>

      <NavbarLinks className="-md:hidden" items={mainItems} />

      <div className="flex gap-4">
        <SearchBar />

        {!session && (
          <div className="flex gap-4 -md:hidden">
            <LocaleSelector />

            <ThemeSelector />
          </div>
        )}

        {session ? <UserSettings session={session} /> : <LoginDialog />}
      </div>
    </>
  );
}

export function NavbarSkeleton() {
  return (
    <>
      <Button variant="none" className="gap-2 px-2" asChild>
        <Logo />
      </Button>

      <Skeleton className="h-6 w-64 rounded-full -md:hidden" />

      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-40 lg:w-64" />

        <Skeleton className="aspect-square size-10 rounded-full" />
      </div>
    </>
  );
}
