import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

import type { Locale } from "@/lib/config";

import { SiteNavbar } from "@/components/site-navbar";

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
      <SiteNavbar />

      {children}
    </>
  );
}
