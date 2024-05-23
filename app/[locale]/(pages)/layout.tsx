import { Suspense } from "react";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

import type { Locale } from "@/lib/config";

import { auth } from "@/lib/auth";

import { NavbarContent, NavbarSkeleton } from "@/components/navbar-content";

export default function PagesLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  setRequestLocale(locale);

  return (
    <>
      <Suspense fallback={<NavbarSkeleton />}>
        <Navbar />
      </Suspense>

      {children}
    </>
  );
}

async function Navbar() {
  const session = await auth();

  return <NavbarContent session={session} />;
}
