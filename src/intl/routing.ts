import { defineRouting } from "next-intl/routing";

import { defaultLocale, locales } from "@/lib/config";

export const routing = defineRouting({
  locales,
  defaultLocale,
  localeDetection: true,
  localePrefix: "always",
});
