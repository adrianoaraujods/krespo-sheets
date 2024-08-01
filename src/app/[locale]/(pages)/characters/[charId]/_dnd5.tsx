"use client";

import * as React from "react";

import { Section } from "@/components/ui/section";

import { useCharacterSheet } from "./_char-sheet";

export default function CharacterSheetDnd5() {
  const {} = useCharacterSheet();

  return (
    <main>
      <Section></Section>
    </main>
  );
}
