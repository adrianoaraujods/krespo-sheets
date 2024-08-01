import { getTranslations } from "next-intl/server";

import type { CharacterSheet as SheetDataDnd5 } from "@/systems/dnd5";

export const systems = ["dnd5"] as const;
export type System = (typeof systems)[number];

export type SheetData = SheetDataDnd5;

export async function createCharacterDescription(
  system: System,
  data: SheetData
): Promise<string> {
  const t = await getTranslations();

  switch (system) {
    case "dnd5":
      const { race, classes } = data as SheetDataDnd5;

      let charLevel = 0;

      classes?.forEach(({ level }) => (charLevel = +level));

      const props: string[] = [];

      if (charLevel > 0) props.push(`${t("ui.level")}: ${charLevel}`);

      if (race !== undefined) props.push(t(`systems.dnd5.subraces.${race}`));

      if (classes && classes?.length > 0) {
        props.push(t(`systems.dnd5.classes.${classes[0].name}`));
      }

      return props.join(" | ");
  }
}
