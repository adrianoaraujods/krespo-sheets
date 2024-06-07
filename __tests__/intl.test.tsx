import { describe, expect, it } from "@jest/globals";

import { defaultLocale, locales } from "@/lib/config";

type Obj = { [key: string]: any };

function hasAllKeysOf(source: Obj, target: Obj): boolean {
  for (const key in target) {
    if (!(key in source)) {
      return false;
    }

    if (typeof target[key] === "object" && target[key] !== null) {
      if (!hasAllKeysOf(source[key], target[key])) {
        return false;
      }
    }
  }

  return true;
}

describe("Internationalization", () => {
  locales.forEach(async (locale) => {
    it(`should exist the file: locales/${locale}.ts and have the correct format`, async () => {
      const localeMessages = (await import(`@/locales/${locale}.ts`)).default;

      const defaultMessages: IntlMessages = (
        await import(`@/locales/${defaultLocale}.ts`)
      ).default;

      expect(hasAllKeysOf(localeMessages, defaultMessages)).toBe(true);
    });
  });
});
