import { Suspense } from "react";

import { navItems } from "@/lib/config";

import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarLayout,
  NavbarLinks,
  NavbarMenu,
  NavbarMenuLinks,
} from "@/components/ui/navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { Logo } from "@/components/icons/logo";

import LocaleSelector from "./_locale-selector";
import SearchBar from "./_search-bar";
import ThemeSelector from "./_theme-selector";

export default function Navbar() {
  return (
    <NavbarLayout>
      <Suspense fallback={<NavbarSkeleton />}>
        <NavbarContent />
      </Suspense>
    </NavbarLayout>
  );
}

export async function NavbarContent() {
  return (
    <>
      <div className="flex">
        <NavbarMenu side="left">
          <NavbarMenuLinks items={navItems} />

          <div className="mt-auto flex">
            <LocaleSelector />

            <ThemeSelector />
          </div>
        </NavbarMenu>

        <Logo />
      </div>

      <NavbarLinks className="max-md:hidden" items={navItems} />

      <div className="flex gap-4">
        <SearchBar />

        <div className="flex gap-4 max-md:hidden">
          <LocaleSelector />

          <ThemeSelector />
        </div>
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

      <Skeleton className="h-6 w-64 rounded-full max-md:hidden" />

      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-40 lg:w-64" />

        <Skeleton className="aspect-square size-10 rounded-full" />
      </div>
    </>
  );
}
