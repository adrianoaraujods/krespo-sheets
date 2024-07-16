import { createI18nSearchAPI } from "fumadocs-core/search/server";

import type { Spell as SpellsDnd5 } from "@/systems/dnd5";

import { locales } from "@/lib/config";
import { reactNodeToString } from "@/lib/utils";

import { getPages } from "@/app/source";

export const { GET } = createI18nSearchAPI("advanced", {
  indexes: locales.map((locale) => {
    const pages = getPages(locale).map((page) => ({
      title: page.data.title,
      structuredData: page.data.exports.structuredData,
      id: page.url,
      url: page.url,
    }));

    try {
      const { SPELLS }: { SPELLS: SpellsDnd5[] } = require(
        `@/systems/dnd5/spells.${locale}`
      );

      SPELLS.forEach((spell) => {
        const title =
          locale === "en-US" || !spell.originalName
            ? spell.name
            : `${spell.name} (${spell.originalName})`;

        pages.push({
          title,
          structuredData: {
            headings: [],
            contents: [
              {
                heading: title,
                content: Array.isArray(spell.description)
                  ? spell.description.join(" ")
                  : reactNodeToString(spell.description),
              },
            ],
          },
          id: String(spell.name).toLowerCase().replaceAll(" ", "-"),
          url: `/kompendium/dnd5/spells?name=${String(spell.name).toLowerCase().replaceAll(" ", "+")}`,
        });
      });
    } catch (error) {
      console.error(error);
    }

    return {
      indexes: pages,
      language: locale,
    };
  }),
});
