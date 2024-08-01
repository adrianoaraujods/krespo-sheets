import { getTranslations } from "next-intl/server";

import type { Locale } from "@/lib/config";
import type { Spell } from "@/systems/dnd5";
import type { Metadata } from "next";

import SpellsList from "./_list";

export default async function Dnd5SpellsPage({
  params: { locale },
}: {
  params: { slug?: string[]; locale: Locale };
}) {
  const spells = await getSpells(locale);

  return (
    <div className="pl-4">
      <SpellsList spellsList={spells} />
    </div>
  );
}

async function getSpells(locale: Locale) {
  const { SPELLS }: { SPELLS: Spell[] } = await import(
    `@/public/kompendium/dnd5/spells/${locale}`
  );

  return SPELLS;
}

export async function generateMetadata() {
  const t = await getTranslations();

  return {
    title: `${t("systems.dnd5.spells.title")} | krespo-sheets`,
  } satisfies Metadata;
}
