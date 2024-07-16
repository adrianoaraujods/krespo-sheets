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
  SubraceName,
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
      subraces: {
        [key in SubraceName]: string;
      };
    };
  };
  errors: {
    [key: number]: {
      title: string;
      description: string;
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
    create: "Create",
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
    characters: {
      title: "Characters",
      unnamed: "Unnamed Character",
      create: {
        title: "Create a new Character Sheet!",
        name: "Character's Name",
        system: "Sheet System",
        button: "Create",
      },
      delete: {
        title: "Are you absolutely sure?",
        description:
          "This action cannot be undone. This will permanently delete this character by the name of:",
      },
      image: {
        title: "Change Character Image",
        description: "Select an image by URL",
      },
      responses: {
        "200": "Successful Request",
        "201": "Character Created Successfully",
        "400": "Bad request, missing fields",
        "401": "You should be logged into an account",
        "403": "Character from another user",
        "404": "Character Not Found",
        "406": "Sheet System is not implemented",
        "500": "Internal Server error, try again",
      },
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
        "acquisitions-inc": "Acquisitions Incorporated",
        "icewind-dale-rime-of-the-frostmaiden":
          "Icewind dale: Rime of the Frostmaiden",
        "strixhaven-a-curriculum-of-chaos": "Strixhaven: A Curriculum of Chaos",
        "astral-adventurers-guide": "Astral Adventurer's Guide",
        "lost-laboratory-of-kwalish": "Lost Laboratory of Kwalish",
        "deck-of-many-things": "Deck of Many Things",
        "planescape-adventures-in-the-multiverse":
          "Planescape Adventures in the Multiverse",
      },
      subraces: {
        "dwarf-hill": "Hill Dwarf",
        "dwarf-mountain": "Mountain Dwarf",
        "elf-drow": "Drow",
        "elf-forest": "Forest Elf",
        "elf-high": "High Elf",
      },
    },
  },
  errors: {
    "401": {
      title: "This page require auth!",
      description: "You should be logged into an account",
    },
  },
} satisfies Messages;
