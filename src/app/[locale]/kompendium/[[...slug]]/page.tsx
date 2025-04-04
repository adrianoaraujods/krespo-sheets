import { notFound } from "next/navigation";

import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody } from "fumadocs-ui/page";
import { getLocale } from "next-intl/server";

import { source } from "@/lib/source";
import { getSpells } from "@/app/actions/spells";
import SpellPage from "@/components/layouts/spells/spell-page";
import SpellsList from "@/components/layouts/spells/spells-list";

import type { System } from "@/lib/config";

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
    return (
      <SpellsList
        spells={await getSpells({ locale, system: slug[0] as System })}
      />
    );
  } else if (page.data.spell) {
    return (
      <SpellPage spell={page.data.spell}>
        <DocsBody>
          <MDX components={{ ...defaultMdxComponents }} />
        </DocsBody>
      </SpellPage>
    );
  } else {
    return (
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    );
  }
}
