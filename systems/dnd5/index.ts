export const racesNames = ["dwarf", "elf"] as const;

export type RacesNames = (typeof racesNames)[number];
