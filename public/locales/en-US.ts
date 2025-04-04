import type { AbstractIntlMessages } from "next-intl";

export type DefaultMessages = {
  [key: string]: string | AbstractIntlMessages;

  // ui: {
  //   [key: string]: string | AbstractIntlMessages;
  //   themes: {
  //     [Key in Theme]: string;
  //   };
  // } & Translations;

  // systems: {
  //   [key: string]: string | AbstractIntlMessages;
  // };

  // errors: {
  //   [key: number]: {
  //     title: string;
  //     description: string;
  //   };
  // };
};

export default {
  metadata: {
    title: "krespo sheets",
    description: "Create and manage characters sheets for tabletop RPGs.",
  },
  ui: {
    searchNoResult: "No results found",
    toc: "On this page",
    nextPage: "Next",
    previousPage: "Previous",
    // chooseTheme: "",
    // editOnGithub: "",
    // tocNoHeadings: "",
    // lastUpdate: "",
    // chooseLanguage: "",

    yes: "Yes",
    no: "No",
    confirm: "Confirm",
    create: "Create",
    cancel: "Cancel",
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
    spells: {
      title: "Spells",
      meta: "{level, selectordinal, =0 {{school} cantrip} =1 {#st-level {school}} =2 {#nd-level {school}} =3 {#rd-level {school}} other {#th-level {school}}}",
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

    dnd5: {
      title: "Dungeons & Dragons 5e",
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
} satisfies DefaultMessages;
