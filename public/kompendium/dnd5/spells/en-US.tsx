import type { Spell } from "@/systems/dnd5";

export const SPELLS: Spell[] = [
  {
    name: "Acid Splash",
    level: 0,
    school: "conjuration",
    castingTime: "Action",
    range: "60 feet",
    components: {
      v: true,
      s: true,
    },
    duration: "Instantaneous",
    description: [
      "You hurl a bubble of acid. Choose one creature you can see within range, or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.",
    ],
    upcastDescription:
      "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
    source: "players-handbook",
    casters: ["artificer", "sorcerer", "wizard"],
    type: ["damage"],
    damageType: ["acid"],
    savingThrow: "dex",
  },
  {
    name: "Blade Ward",
    level: 0,
    school: "abjuration",
    castingTime: "Action",
    range: "Self",
    components: {
      v: true,
      s: true,
    },
    duration: "1 round",
    description: [
      "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks.",
    ],
    source: "players-handbook",
    casters: ["bard", "sorcerer", "warlock", "wizard"],
    type: ["utility"],
  },
  {
    name: "Booming Blade",
    level: 0,
    school: "evocation",
    castingTime: "Action",
    range: "Self, 5-foot radius",
    components: {
      s: true,
      m: "a melee weapon worth at least 1 sp",
    },
    duration: "1 round",
    description:
      "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.",
    upcastDescription:
      "At 5th level, the melee attack deals an extra 1d8 thunder damage to the target on a hit, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level (2d8 and 3d8) and again at 17th level (3d8 and 4d8).",
    source: "tashas-cauldron-of-everything",
    casters: ["artificer", "sorcerer", "warlock", "wizard"],
    type: ["damage"],
    damageType: ["thunder"],
    spellAttack: "weapon",
  },

  // {
  //   name: "",
  //   level: ,
  //   school: "",
  //   ritual: ,
  //   castingTime: "",
  //   range: "",
  //   components: {
  //     v: true,
  //     s: true,
  //     m: "",
  //   },
  //   duration: "",
  //   description: [""],
  //   upcastDescription: "",
  //   source: "",
  //   casters: [""],
  //   type: [""],
  //   damageType: [""],
  //   savingThrow: "",
  //   spellAttack: "",
  // },
];
