import { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocsBody, DocsPage } from "fumadocs-ui/page";

import type { Locale } from "@/lib/config";

import { getPage } from "@/app/source";

export default function KompendiumPage({
  params: { slug, locale },
}: {
  params: { slug?: string[]; locale: Locale };
}) {
  const page = getPage(slug, locale);

  if (!page) notFound();

  const MDX = page.data.exports.default;

  return (
    <DocsPage toc={page.data.exports.toc}>
      <DocsBody>
        <h1>{page.data.title}</h1>

        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export function generateMetadata({
  params: { slug, locale },
}: {
  params: { slug?: string[]; locale: Locale };
}) {
  const page = getPage(slug, locale);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
