import { loader } from "fumadocs-core/source";

import { defaultLocale, locales } from "@/lib/config";
import { kompendium } from "@/source";

export const source = loader({
  baseUrl: "/kompendium",
  source: kompendium.toFumadocsSource(),
  i18n: {
    languages: [...locales],
    defaultLanguage: defaultLocale,
  },
});
