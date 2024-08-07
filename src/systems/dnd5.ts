import { z } from "zod";

import type { ReactNode } from "react";

export const ATTRIBUTES = ["str", "dex", "con", "int", "wis", "cha"] as const;

export const RACES_NAMES = ["dwarf", "elf"] as const;

export const SUBRACES_NAMES = [
  "dwarf-hill",
  "dwarf-mountain",
  "elf-high",
  "elf-forest",
  "elf-drow",
] as const;

export const CLASSES_NAMES = [
  "artificer",
  "barbarian",
  "bard",
  "cleric",
  "druid",
  "fighter",
  "monk",
  "paladin",
  "ranger",
  "sorcerer",
  "warlock",
  "wizard",
] as const;

export const DAMAGE_TYPES = [
  "acid",
  "bludgeoning",
  "cold",
  "fire",
  "force",
  "lightning",
  "necrotic",
  "piercing",
  "poison",
  "psychic",
  "radiant",
  "slashing",
  "thunder",
] as const;

export const SPELL_SCHOOLS = [
  "abjuration",
  "conjuration",
  "divination",
  "enchantment",
  "evocation",
  "illusion",
  "necromancy",
  "transmutation",
] as const;

export const SOURCES = [
  "explorers-guide-to-wildermount",
  "fizbans-treasury-of-dragons",
  "guildmasters-guide-to-ravnica",
  "mordenkainens-tome-of-foes",
  "players-handbook",
  "tashas-cauldron-of-everything",
  "xanathars-guide-to-everything",
  "acquisitions-inc",
  "icewind-dale-rime-of-the-frostmaiden",
  "strixhaven-a-curriculum-of-chaos",
  "astral-adventurers-guide",
  "lost-laboratory-of-kwalish",
  "deck-of-many-things",
  "planescape-adventures-in-the-multiverse",
] as const;

export const SPELL_TYPES = ["damage", "healing", "utility"] as const;

export const SPELL_ATTACK_TYPES = [
  "spell-ranged",
  "spell-melee",
  "weapon",
] as const;

export type Attribute = (typeof ATTRIBUTES)[number];
export type ClassName = (typeof CLASSES_NAMES)[number];
export type RaceName = (typeof RACES_NAMES)[number];
export type SubraceName = (typeof SUBRACES_NAMES)[number];
export type DamageType = (typeof DAMAGE_TYPES)[number];
export type SpellSchool = (typeof SPELL_SCHOOLS)[number];
export type Source = (typeof SOURCES)[number];
export type SpellType = (typeof SPELL_TYPES)[number];
export type SpellAttackType = (typeof SPELL_ATTACK_TYPES)[number];

export type Spell = {
  name: string;
  originalName?: string;

  level: number;
  school: SpellSchool;
  ritual?: true;

  castingTime: string;
  range: string;
  components: { v?: true; s?: true; m?: string };
  duration: string;

  description: ReactNode;
  upcastDescription?: string;

  source: Source;
  casters: ClassName[];

  type: SpellType[];
  damageType?: DamageType[];
  savingThrow?: Attribute;
  spellAttack?: SpellAttackType;
};

export type CharacterClass = {
  name: ClassName;
  level: number;
};

export type CharacterAttribute = Record<
  Attribute,
  {
    value: number;
    mod: number;
    bonus: Record<string, number>;
  }
>;

export const characterSheetSchema = z.object({
  race: z.enum(SUBRACES_NAMES).optional(),
  classes: z
    .array(z.object({ name: z.enum(CLASSES_NAMES), level: z.number() }))
    .optional(),
});

export type CharacterSheet = z.infer<typeof characterSheetSchema>;
