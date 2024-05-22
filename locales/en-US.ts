/* eslint-disable no-unused-vars */

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
    theme: "Theme",
    themes: {
      light: "Light",
      dark: "Dark",
      system: "System",
    },
  },
  test: "test",
} satisfies Messages;
