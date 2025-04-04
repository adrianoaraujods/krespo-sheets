import { Suspense } from "react";

import { getTranslations } from "next-intl/server";

import SpellsList from "@/components/layouts/spells/list";

import type { Locale } from "@/lib/config";
import type { Spell } from "@/systems/dnd5";
import type { Metadata } from "next";

export default async function SpellsListPage({ locale }: { locale: Locale }) {
  const spells = await getSpells(locale);

  return (
    <Suspense>
      <SpellsList spellsList={spells} />
    </Suspense>
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
