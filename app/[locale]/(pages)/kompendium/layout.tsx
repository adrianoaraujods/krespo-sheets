import React from "react";
import { DocsLayout } from "fumadocs-ui/layout";

import type { Locale } from "@/lib/config";

import { locales } from "@/lib/config";

import { getPages, pageTree } from "@/app/source";

export default function RootDocsLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { slug?: string[]; locale: Locale };
}) {
  return (
    <DocsLayout
      tree={pageTree[locale]}
      nav={{ enabled: false }}
      sidebar={{
        defaultOpenLevel: 0,
        footer: <div className="min-w-36" />,
      }}
    >
      {children}
    </DocsLayout>
  );
}

export function generateStaticParams() {
  return locales.map((locale) =>
    getPages(locale)!.map((page) => ({
      slug: page.slugs,
      locale,
    }))
  );
}
