import { RollButton } from "fumadocs-ui/components/roll-button";
import { getLocale } from "next-intl/server";

import type { Locale } from "@/lib/config";
import type { Spell } from "@/systems/dnd5";

import SpellsList from "./list";

export const dynamic = "force-dynamic";

export default async function Dnd5SpellsPage() {
  const locale = (await getLocale()) as Locale;
  const spells = await getSpells(locale);

  return (
    <>
      <RollButton />

      <SpellsList spellsList={spells} />
    </>
  );
}

async function getSpells(locale: Locale) {
  const { SPELLS }: { SPELLS: Spell[] } = await import(
    `@/systems/dnd5/spells.${locale}`
  );

  return SPELLS;
}
