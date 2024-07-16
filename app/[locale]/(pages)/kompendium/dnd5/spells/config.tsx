import {
  ATTRIBUTES,
  CLASSES_NAMES,
  DAMAGE_TYPES,
  SOURCES,
  SPELL_ATTACK_TYPES,
  SPELL_SCHOOLS,
  SPELL_TYPES,
} from "@/systems/dnd5";
import { z } from "zod";

import type { Spell } from "@/systems/dnd5";
import type { ColumnDef } from "@tanstack/react-table";

import { formatStringForSearch } from "@/lib/utils";

export const tableColumns: ColumnDef<Spell>[] = [
  {
    id: "name",
    accessorFn: ({ name }) => formatStringForSearch(name),
    filterFn: ({ original: { name, originalName } }, _, filterValue) => {
      const spellName = `${name}${originalName ? ` (${originalName})` : ""}`;

      return formatStringForSearch(spellName).includes(
        formatStringForSearch(filterValue)
      );
    },
  },
  {
    accessorKey: "level",
    filterFn: ({ original: { level } }, _, filterValue) => {
      if (Array.isArray(filterValue)) {
        const min = isNaN(Number(filterValue[0])) ? 0 : Number(filterValue[0]);
        const max = isNaN(Number(filterValue[1])) ? 9 : Number(filterValue[1]);

        return level >= min && level <= max;
      }

      return false;
    },
  },
  {
    accessorKey: "school",
    filterFn: "arrIncludesSome",
  },
  {
    accessorFn: ({ casters }) => casters.join(", "),
    id: "casters",
    filterFn: "arrIncludesSome",
  },
  {
    accessorKey: "castingTime",
    enableColumnFilter: false,
  },
  {
    accessorKey: "range",
    enableColumnFilter: false,
  },
  {
    accessorFn: ({ components: { v, s, m } }) =>
      `${v && "V"} ${s && "S"} ${m && "M"}`,
    id: "components",
    filterFn: "includesString",
  },
  {
    accessorKey: "duration",
    enableColumnFilter: false,
  },
  {
    accessorKey: "description",
    enableColumnFilter: false,
  },
  {
    accessorKey: "upcastDescription",
    enableColumnFilter: false,
  },
  {
    accessorKey: "ritual",
    filterFn: "equals",
  },
  {
    accessorKey: "type",
    filterFn: "arrIncludesSome",
  },
  {
    accessorKey: "damageType",
    filterFn: "arrIncludesSome",
  },
  {
    accessorKey: "spellAttack",
    filterFn: "arrIncludesSome",
  },
  {
    accessorKey: "savingThrow",
    filterFn: "arrIncludesSome",
  },
  {
    accessorKey: "source",
    filterFn: "arrIncludesSome",
  },
];

export const filtersSchema = z.object({
  amount: z.number(),
  order: z.enum(["asc", "desc"]),
  pg: z.number(),
  sort: z.enum(["name", "level"]),

  name: z.string().optional(),
  source: z.array(z.enum([...SOURCES])).optional(),
  levelMin: z.number().optional(),
  levelMax: z.number().optional(),
  school: z.array(z.enum([...SPELL_SCHOOLS])).optional(),
  type: z.array(z.enum([...SPELL_TYPES])).optional(),
  dmgType: z.array(z.enum([...DAMAGE_TYPES])).optional(),
  attack: z.array(z.enum([...SPELL_ATTACK_TYPES])).optional(),
  savingThrow: z.array(z.enum([...ATTRIBUTES])).optional(),
  casters: z.array(z.enum([...CLASSES_NAMES])).optional(),
  compV: z.enum(["true"]).optional(),
  compS: z.enum(["true"]).optional(),
  compM: z.enum(["true"]).optional(),
  ritual: z.enum(["true"]).optional(),
});

export type FiltersParams = z.infer<typeof filtersSchema>;

export const initialFiltersParams: FiltersParams = {
  amount: 10,
  order: "asc",
  pg: 0,
  sort: "name",
};
