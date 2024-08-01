"use client";

import * as React from "react";

import { Character } from "@/lib/schema";

export const CharacterSheetContext = React.createContext<{
  char: Character;
  setChar: React.Dispatch<React.SetStateAction<Character>>;
  isSaving: boolean;
  setIsSaving: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export function useCharacterSheet() {
  const sheet = React.useContext(CharacterSheetContext);

  if (!sheet) throw "useSheet must be used within a SheetProvider";

  return sheet;
}

export default function CharacterSheet({
  character,
  children,
}: {
  character: Character;
  children: React.ReactNode;
}) {
  const [char, setChar] = React.useState(character);
  const [isSaving, setIsSaving] = React.useState(false);

  return (
    <CharacterSheetContext.Provider
      value={{ char, isSaving, setChar, setIsSaving }}
    >
      {children}
    </CharacterSheetContext.Provider>
  );
}
