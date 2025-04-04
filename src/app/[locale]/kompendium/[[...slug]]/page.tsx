import { notFound } from "next/navigation";

import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody } from "fumadocs-ui/page";
import { getLocale } from "next-intl/server";

import { source } from "@/lib/source";

import SpellsListPage from "./_spell-list-page";

export default async function KompendiumPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const locale = await getLocale();
  const { slug } = await params;
  const page = source.getPage(slug, locale);

  if (!page || !slug) notFound();

  const MDX = page.data.body;

  if (slug.length === 2 && slug[1] === "spells") {
    return <SpellsListPage locale={locale} />;
  }

  return (
    <DocsBody>
      <MDX components={{ ...defaultMdxComponents }} />
    </DocsBody>
  );
}
