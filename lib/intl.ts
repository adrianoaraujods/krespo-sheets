import createMiddleware from "next-intl/middleware";
import { getRequestConfig } from "next-intl/server";

import type { Locale } from "@/lib/config";
import type { Translations } from "fumadocs-ui/i18n";

import { defaultLocale, locales } from "@/lib/config";

export const middlewareConfig: Parameters<typeof createMiddleware>[0] = {
  locales,
  defaultLocale,
  localeDetection: true,
  localePrefix: "never",
};

export default getRequestConfig(async ({ locale }) => ({
  messages: {
    ...(await import(`@/locales/${locale}.ts`)).default,
  },
}));

export const mdxTranslations: {
  // eslint-disable-next-line no-unused-vars
  [locale in Locale]: Translations & { name: string };
} = {
  "en-US": {
    name: "English",
    chooseLanguage: "Choose Language",
    lastUpdate: "Last updated on",
    nextPage: "Next",
    previousPage: "Previus",
    search: "Search",
    searchNoResult: "No results found",
    toc: "On this page",
  },
  "pt-BR": {
    name: "Português",
    chooseLanguage: "Escolha o idioma",
    lastUpdate: "Última atualização em",
    nextPage: "Próxima",
    previousPage: "Voltar",
    search: "Pesquisar",
    searchNoResult: "Nenhum resultado encontrado",
    toc: "Nessa página",
  },
};
