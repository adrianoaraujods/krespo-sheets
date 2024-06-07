import React from "react";
import { I18nProvider } from "fumadocs-ui/i18n";
import { DocsLayout } from "fumadocs-ui/layout";
import { RootProvider } from "fumadocs-ui/provider";

import { Locale } from "@/lib/config";
import { mdxTranslations } from "@/lib/intl";

import { SiteNavbar } from "@/components/site-navbar";

import { pageTree } from "@/app/source";

export default async function RootDocsLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <I18nProvider locale={locale} translations={mdxTranslations}>
      <RootProvider theme={{ enabled: false }}>
        <DocsLayout
          tree={pageTree[locale]}
          nav={{
            component: <SiteNavbar />,
          }}
        >
          {children}
        </DocsLayout>
      </RootProvider>
    </I18nProvider>
  );
}
