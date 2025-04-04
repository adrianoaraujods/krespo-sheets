import { z } from "zod";

export const ATTRIBUTES = ["str", "dex", "con", "int", "wis", "cha"] as const;

export const CONDITIONS = [
  "blinded",
  "charmed",
  "deafened",
  "exhaustion",
  "frightened",
  "grappled",
  "incapacitated",
  "invisible",
  "paralyzed",
  "petrified",
  "poisoned",
  "prone",
  "restrained",
  "stunned",
  "unconscious",
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

export const SPELL_TYPES = ["damage", "healing", "utility"] as const;

export const SPELL_ATTACK_TYPES = [
  "spell-ranged",
  "spell-melee",
  "weapon",
] as const;

export const RANGE_TYPES = [
  "line",
  "cone",
  "cube",
  "spere",
  "cylinder",
] as const;

export const spellSchema = z.object({
  name: z.string(),
  originalName: z.string().optional(),
  level: z.number().min(0).max(9),
  school: z.enum([...SPELL_SCHOOLS]),
  components: z.object({
    v: z.boolean().optional(),
    s: z.boolean().optional(),
    m: z.string().optional(),
  }),
  source: z.string(),
  casters: z.array(z.enum([...CLASSES_NAMES])),
  type: z.array(z.enum([...SPELL_TYPES])),
  range: z.string(),
  duration: z.string(),
  castingTime: z.string(),
  concentration: z.boolean().optional(),
  ritual: z.boolean().optional(),
  conditions: z.array(z.enum([...CONDITIONS])).optional(),
  damageTypes: z.array(z.enum([...DAMAGE_TYPES])).optional(),
  upcast: z.boolean().optional(),
  upcastDescription: z.string().optional(),
  savingThrow: z.array(z.enum([...ATTRIBUTES])).optional(),
  spellAttack: z.enum([...SPELL_ATTACK_TYPES]).optional(),
  rangeType: z.enum([...RANGE_TYPES]).optional(),
  description: z.custom<React.ReactNode>(),
});

export type Attribute = (typeof ATTRIBUTES)[number];
export type Condition = (typeof CONDITIONS)[number];
export type Class = (typeof CLASSES_NAMES)[number];
export type DamageType = (typeof DAMAGE_TYPES)[number];
export type SpellSchool = (typeof SPELL_SCHOOLS)[number];
export type SpellType = (typeof SPELL_TYPES)[number];
export type SpellAttackType = (typeof SPELL_ATTACK_TYPES)[number];
export type RangeType = (typeof RANGE_TYPES)[number];
export type Spell = z.infer<typeof spellSchema>;
