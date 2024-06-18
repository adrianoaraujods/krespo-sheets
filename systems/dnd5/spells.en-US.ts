import type { Spell } from "@/systems/dnd5";

export const SPELLS: Spell[] = [
  {
    name: "Calm Emotions",
    source: "players-handbook",
    level: 2,
    school: "enchantment",
    casters: ["bard", "cleric"],
    castingTime: "Action",
    range: "60 feet",
    components: {
      v: true,
      s: true,
    },
    duration: "Concentration, up to 1 minute",
    description: [
      "You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects.",
      "You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime.",
      "Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise.",
    ],
  },
  {
    name: "Adivinhação",
    source: "players-handbook",
    level: 4,
    school: "divination",
    ritual: true,
    casters: ["cleric", "druid", "wizard"],
    castingTime: "Action",
    range: "Self",
    components: {
      v: true,
      s: true,
      m: "incense and a sacrificial offering appropriate to your religion, together worth at least 25 gp, which the spell consumes",
    },
    duration: "Instantaneous",
    description: [
      "Your magic and an offering put you in contact with a god or a god's servants. You ask a single question concerning a specific goal, event, or activity to occur within 7 days. The DM offers a truthful reply. The reply might be a short phrase, a cryptic rhyme, or an omen.",
      "The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.",
      "If you cast this spell two or more times before finishing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret.",
    ],
  },
  {
    name: "Aid",
    source: "players-handbook",
    level: 2,
    school: "abjuration",
    casters: ["artificer", "bard", "cleric", "paladin", "ranger"],
    castingTime: "Action",
    range: "30 feet",
    components: {
      v: true,
      s: true,
      m: "a tiny strip of white cloth",
    },
    duration: "8 hours",
    description:
      "Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target's hit point maximum and current hit points increase by 5 for the duration.",
    upcastDescription:
      "When you cast this spell using a spell slot of 3rd level or higher, a target's hit points increase by an additional 5 for each slot level above 2nd.",
  },
];
