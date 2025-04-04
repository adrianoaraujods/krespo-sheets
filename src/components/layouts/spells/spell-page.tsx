import * as React from "react";

import { getTranslations } from "next-intl/server";

import { Heading } from "@/components/typography/heading";
import { Text } from "@/components/typography/text";

import type { Spell } from "@/systems/dnd5";

export default async function SpellPage({
  children,
  spell,
}: {
  children: React.ReactNode;
  spell: Omit<Spell, "name">;
}) {
  const t = await getTranslations("systems.spells");

  return (
    <>
      {spell.originalName && (
        <Heading roleType="subtitle" variant="italic">
          {spell.originalName}
        </Heading>
      )}

      <div className="">
        <p>
          <Text variant="bold">{t("castingTime")}:</Text> {spell.castingTime}
        </p>

        <p>
          <Text variant="bold">{t("range")}:</Text> {spell.range}
        </p>

        <p>
          <Text variant="bold">{t("components")}:</Text>{" "}
          {[
            spell.components.v && "V",
            spell.components.s && "S",
            spell.components.m && `M (${spell.components.m})`,
          ]
            .filter((component) => typeof component === "string")
            .join(", ")}
        </p>

        <p>
          <Text variant="bold">{t("duration")}:</Text> {spell.duration}
        </p>
      </div>

      {children}

      <div>
        <p>
          <Text variant="bold">{t("source")}:</Text> {spell.source}
        </p>
      </div>
    </>
  );
}
