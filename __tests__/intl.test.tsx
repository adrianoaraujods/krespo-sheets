import { describe, expect, it } from "@jest/globals";

import { defaultLocale, locales } from "@/lib/config";

describe("Internationalization", () => {
  it("must have all locales files with correct format", async () => {
    const defaultMessages: IntlMessages = (
      await import(`@/locales/${defaultLocale}.ts`)
    ).default;

    locales.forEach(async (locale) => {
      const localeMessages = (await import(`@/locales/${locale}.ts`)).default;

      expect(hasAllKeysOf(localeMessages, defaultMessages)).toBe(true);
    });
  });
});

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
