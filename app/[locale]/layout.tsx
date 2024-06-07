import { GeistSans } from "geist/font/sans";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale as setRequestLocale,
} from "next-intl/server";

import { Locale, locales } from "@/lib/config";

import "fumadocs-ui/style.css";
import "@/styles/globals.css";
import "@/styles/themes.css";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${GeistSans.className} overflow-x-hidden font-sans`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
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
