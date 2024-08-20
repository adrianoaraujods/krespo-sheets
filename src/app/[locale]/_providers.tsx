import { I18nProvider } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  unstable_setRequestLocale as setRequestLocale,
} from "next-intl/server";
import { ThemeProvider } from "next-themes";

import type { Locale } from "@/lib/config";
import type { Translations } from "fumadocs-ui/i18n";

import { Toaster } from "@/components/ui/toaster";

export default async function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <I18nProvider locale={locale} translations={mdxTranslations}>
          <RootProvider theme={{ enabled: false }} search={{ enabled: false }}>
            {children}

            <Toaster />
          </RootProvider>
        </I18nProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}

export const mdxTranslations: {
  // eslint-disable-next-line no-unused-vars
  [locale in Locale]: Partial<Translations> & { name: string };
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
