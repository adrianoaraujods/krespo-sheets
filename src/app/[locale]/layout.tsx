import { Geist, Geist_Mono } from "next/font/google";

import { getMessages, getTranslations } from "next-intl/server";

import "@/styles/globals.css";

import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { RootProvider } from "fumadocs-ui/provider";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

import { defaultLocale, Locale, locales } from "@/lib/config";
import { source } from "@/lib/source";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-svh overflow-x-hidden font-sans antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <RootProvider
              i18n={{
                locale,
                locales: [
                  { locale: "en-US", name: "English" },
                  { locale: "pt-BR", name: "Português" },
                ],
              }}
            >
              <DocsLayout
                tree={source.pageTree[locale]}
                githubUrl="https://github.com/adrianoaraujods/krespo-sheets"
                i18n={{
                  defaultLanguage: defaultLocale,
                  languages: [...locales],
                }}
              >
                {children}
              </DocsLayout>
            </RootProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata() {
  const t = await getTranslations("metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}
