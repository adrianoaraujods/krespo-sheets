import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { getTranslations } from "next-intl/server";

import "fumadocs-ui/style.css";
import "katex/dist/katex.css";
import "@/styles/globals.css";
import "@/styles/themes.css";

import { Locale, locales } from "@/lib/config";

import Providers from "./_providers";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${GeistSans.className} ${GeistMono.className} min-h-svh overflow-x-hidden`}
      >
        <Providers locale={locale}>{children}</Providers>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}
