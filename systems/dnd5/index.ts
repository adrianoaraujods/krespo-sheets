export const RACES_NAMES = ["dwarf"] as const;

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

export const SOURCES = ["players-handbook"] as const;

export type ClassName = (typeof CLASSES_NAMES)[number];
export type RaceName = (typeof RACES_NAMES)[number];
export type SpellSchool = (typeof SPELL_SCHOOLS)[number];
export type Source = (typeof SOURCES)[number];

export type Spell = {
  name: string;
  source: Source;
  level: number;
  school: SpellSchool;
  casters: ClassName[];
  castingTime: string;
  range: string;
  components: {
    v?: true;
    s?: true;
    m?: string;
  };
  duration: string;
  description: string | string[];
  upcastDescription?: string;
  ritual?: true;
};
