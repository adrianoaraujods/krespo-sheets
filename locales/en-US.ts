/* eslint-disable no-unused-vars */

import { AbstractIntlMessages } from "next-intl";

import type {
  Attribute,
  ClassName,
  DamageType,
  Source,
  SpellAttackType,
  SpellSchool,
  SpellType,
} from "@/systems/dnd5";

import { Theme } from "@/lib/config";

export interface Messages extends AbstractIntlMessages {
  ui: {
    [key: string]: string | AbstractIntlMessages;
    themes: {
      [Key in Theme]: string;
    };
  };
  systems: {
    [key: string]: string | AbstractIntlMessages;
    dnd5: {
      [key: string]: string | AbstractIntlMessages;
      spells: {
        [key: string]: string | AbstractIntlMessages;
        schools: {
          [key in SpellSchool]: string;
        };
        types: {
          [key in SpellType]: string;
        };
        attackTypes: {
          [key in SpellAttackType]: string;
        };
      };
      attributes: {
        [key in Attribute]: string;
      };
      classes: {
        [key in ClassName]: string;
      };
      damageTypes: {
        [key in DamageType]: string;
      };
      sources: {
        [key in Source]: string;
      };
    };
  };
}

export default {
  metadata: {
    title: "krespo sheets",
    description: "Create and manage characters sheets for tabletop RPGs.",
  },
  ui: {
    yes: "Yes",
    no: "No",
    next: "Next",
    confirm: "Confirm",
    cancel: "Cancel",
    previous: "Previous",
    back: "Back",
    delete: "Delete",
    new: "New",
    open: "Open",
    search: "Search",
    myAccount: "My Account",
    login: "Login",
    logout: "Log Out",
    continueWith: "Continue with",
    resetFilters: "Reset filters",
    sortBy: "Sort by",
    name: "Name",
    level: "Level",
    noResultsFound: "No results was found",
    language: "Language",
    theme: "Theme",
    themes: {
      light: "Light",
      dark: "Dark",
      system: "System",
    },
    pages: {
      next: "Go to next page",
      previous: "Go to previous page",
      first: "Go to first page",
      last: "Go to last page",
      more: "More pages",
      perPage: "Per page",
      amount: "{initial} - {final} of {total}",
    },
  },
  pages: {
    login: {
      title: "Entre no Krespo Sheets",
      description: "Boas-vindas de volta! Entre abaixo com seu provedor",
    },
    kompendium: {
      title: "Kompendium",
      search: "Search in Kompendium",
    },
  },
  systems: {
    dnd5: {
      title: "Dungeons & Dragons 5e",
      spells: {
        title: "Spells",
        ritual: "Ritual",
        castingTime: "Casting Time",
        range: "Range",
        components: "Components",
        verbal: "Verbal",
        somatic: "Somatic",
        material: "Material",
        duration: "Duration",
        school: "Spell school",
        casters: "Spell Lists",
        spellType: "Type",
        types: {
          damage: "Damage",
          healing: "Healing",
          utility: "Utility",
        },
        attackTypes: {
          "spell-melee": "Spell melee attack",
          "spell-ranged": "Spell ranged attack",
          weapon: "Weapon attack",
        },
        damageType: "Damage type",
        spellAttack: "Attack",
        savingThrows: "Saving throws",
        description: {
          cantrip: "Cantrip",
          level: "{level}th-level",
        },
        upcast: "At Higher Levels",
        source: "Source",
        schools: {
          abjuration: "Abjuration",
          conjuration: "Conjuration",
          divination: "Divination",
          enchantment: "Enchantment",
          evocation: "Evocation",
          illusion: "Illusion",
          necromancy: "Necromancy",
          transmutation: "Transmutation",
        },
      },
      attributes: {
        str: "Strength",
        dex: "Dexterity",
        con: "Constitution",
        int: "Intelligence",
        wis: "Wisdom",
        cha: "Charisma",
      },
      classes: {
        artificer: "Artificer",
        barbarian: "Barbarian",
        bard: "Bard",
        cleric: "Cleric",
        druid: "Druid",
        fighter: "Fighter",
        monk: "Monk",
        paladin: "Paladin",
        ranger: "Ranger",
        sorcerer: "Sorcerer",
        warlock: "Warlock",
        wizard: "Wizard",
      },
      damageTypes: {
        acid: "Acid",
        bludgeoning: "Bludgeoning",
        cold: "Cold",
        fire: "Fire",
        force: "Force",
        lightning: "Lightning",
        necrotic: "Necrotic",
        piercing: "Piercing",
        poison: "Poison",
        psychic: "Psychic",
        radiant: "Radiant",
        slashing: "Slashing",
        thunder: "Thunder",
      },
      sources: {
        "explorers-guide-to-wildermount": "Explorer's Guide to Wildermount",
        "fizbans-treasury-of-dragons": "Fizban's Treasury of Dragons",
        "guildmasters-guide-to-ravnica": "Guildmaster's Guide to Ravnica",
        "mordenkainens-tome-of-foes": "Mordenkainen's Tome of Foes",
        "players-handbook": "Player's Handbook",
        "tashas-cauldron-of-everything": "Tasha's Cauldron of Everything",
        "xanathars-guide-to-everything": "Xanathar's Guide to Everything",
      },
    },
  },
} satisfies Messages;
