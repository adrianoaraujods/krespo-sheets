import createMiddleware from "next-intl/middleware";
import { getRequestConfig } from "next-intl/server";

import { defaultLocale, locales } from "@/lib/config";

export const middlewareConfig: Parameters<typeof createMiddleware>[0] = {
  locales,
  defaultLocale,
  localeDetection: true,
  localePrefix: "never",
};

export default getRequestConfig(async ({ locale }) => ({
  messages: {
    ...(await import(`@/public/locales/${locale}.ts`)).default,
  },
}));
