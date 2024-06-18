import { createI18nSearchAPI } from "fumadocs-core/search/server";

import type { Spell as SpellsDnd5 } from "@/systems/dnd5";

import { locales } from "@/lib/config";

import { getPages } from "@/app/source";

export const { GET } = createI18nSearchAPI("advanced", {
  indexes: locales.map((locale) => {
    const pages = getPages(locale).map((page) => ({
      title: page.data.title,
      structuredData: page.data.exports.structuredData,
      id: page.url,
      url: page.url,
    }));

    pages.some((page) => {
      try {
        switch (true) {
          case String(page.id).includes("dnd5/spells"):
            const { SPELLS }: { SPELLS: SpellsDnd5[] } = require(
              `@/systems/dnd5/spells.${locale}`
            );

            SPELLS.forEach((spell) => {
              const id = String(spell.name).toLowerCase().replaceAll(" ", "-");

              page.structuredData.headings.push({ id, content: spell.name });

              page.structuredData.contents.push({
                heading: id,
                content: Array.isArray(spell.description)
                  ? spell.description.join(" ")
                  : spell.description,
              });
            });

            return true;
          default:
            return false;
        }
      } catch (error) {
        console.error(error);

        return false;
      }
    });

    return {
      indexes: pages,
      language: locale,
    };
  }),
});
