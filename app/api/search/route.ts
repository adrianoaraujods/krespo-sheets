import { createI18nSearchAPI } from "fumadocs-core/search/server";

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

    return [locale, pages];
  }),
});
