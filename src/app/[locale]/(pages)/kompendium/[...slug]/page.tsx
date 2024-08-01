import { notFound } from "next/navigation";
import { DocsBody, DocsPage } from "fumadocs-ui/page";
import { unstable_setRequestLocale as setRequestLocale } from "next-intl/server";

import type { Locale } from "@/lib/config";
import type { Metadata } from "next";

import { Heading } from "@/components/typography/text";

import { getPage, getPages } from "@/app/source";

export default function KompendiumPage({
  params: { slug, locale },
}: {
  params: {
    slug?: string[];
    locale: Locale;
  };
}) {
  setRequestLocale(locale);

  const page = getPage(slug, locale);

  if (!page) notFound();

  const MDX = page.data.exports.default;

  return (
    <DocsPage
      toc={page.data.exports.toc}
      lastUpdate={page.data.exports.lastModified}
    >
      <Heading element="h1">{page.data.title}</Heading>

      {page.data.description && (
        <Heading roleType="subtitle">{page.data.description}</Heading>
      )}

      <DocsBody>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug?: string[]; locale: Locale };
}) {
  const page = getPage(slug, locale);

  if (page == null) notFound();

  return {
    title: `${page.data.title} | krespo-sheets`,
    description: page.data.description,
  } satisfies Metadata;
}
