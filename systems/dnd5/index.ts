export const racesNames = ["dwarf"] as const;

export type RacesNames = (typeof racesNames)[number];
