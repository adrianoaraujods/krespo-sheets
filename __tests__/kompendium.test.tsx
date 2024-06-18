import fs from "fs";
import { RACES_NAMES } from "@/systems/dnd5";
import { expect } from "@jest/globals";

import { defaultLocale, locales } from "@/lib/config";

describe("Kompendium", () => {
  const kompendiumPages = [
    "dnd5/index",
    "dnd5/races/index",
    ...RACES_NAMES.map((race) => `dnd5/races/${race}`),
  ];

  locales.map((locale) => {
    kompendiumPages.forEach((page) => {
      const filePath = `content/kompendium/${page}${locale === defaultLocale ? "" : `.${locale}`}.mdx`;

      it(`should exist the file: ${filePath}`, () => {
        let isValidKompendiumPage = true;

        try {
          if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, "utf8").trim();

            const regex =
              /^---\s*title:\s*.+\s*(?:\n\s*description:\s*.+\s*)?---(?:[\s\S]*)$/gm;

            if (!regex.test(fileContent)) {
              isValidKompendiumPage = false;
            }
          } else {
            isValidKompendiumPage = false;
          }
        } catch (error) {
          isValidKompendiumPage = false;
        }

        expect(isValidKompendiumPage).toBeTruthy();
      });
    });
  });
});
