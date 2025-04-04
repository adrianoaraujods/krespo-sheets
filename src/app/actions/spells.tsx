"use server";

import defaultMdxComponents from "fumadocs-ui/mdx";

import { source } from "@/lib/source";
import { spellSchema } from "@/systems/dnd5";

import type { Locale, System } from "@/lib/config";
import type { Spell as SpellPrimitive } from "@/systems/dnd5";

export type Spell = SpellPrimitive & { url: string };

export async function getSpells({
  locale,
  system,
}: {
  locale: Locale;
  system: System;
}) {
  const path = `/${locale}/kompendium/${system}/spells/`;

  const spells: Spell[] = [];

  for (const page of source.getPages(locale)) {
    if (!page.url.includes(path)) continue;

    const parsedData = spellSchema
      .omit({ name: true, description: true })
      .safeParse(page.data.spell);

    if (!parsedData.success) continue;

    const MDX = page.data.body;

    spells.push({
      name: page.data.title,
      description: <MDX components={defaultMdxComponents} />,
      url: page.url,
      ...parsedData.data,
    });
  }

  return spells;
}
