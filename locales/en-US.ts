/* eslint-disable no-unused-vars */

import { Translations } from "fumadocs-ui/i18n";
import { AbstractIntlMessages } from "next-intl";

import { Theme } from "@/lib/config";

export interface Messages extends AbstractIntlMessages {
  ui: {
    [key: string]: string | AbstractIntlMessages;
    themes: {
      [Key in Theme]: string;
    };
  };
}

export default {
  metadata: {
    title: "krespo sheets",
    description: "Create and manage characters sheets for tabletop RPGs.",
  },
  ui: {
    next: "Next",
    confirm: "Confirm",
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
    language: "Language",
    theme: "Theme",
    themes: {
      light: "Light",
      dark: "Dark",
      system: "System",
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
    },
  },
} satisfies Messages;
