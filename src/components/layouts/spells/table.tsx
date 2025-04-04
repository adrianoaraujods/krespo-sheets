import { z } from "zod";

import { formatStringForSearch } from "@/lib/utils";
import {
  ATTRIBUTES,
  CLASSES_NAMES,
  CONDITIONS,
  DAMAGE_TYPES,
  RANGE_TYPES,
  SPELL_ATTACK_TYPES,
  SPELL_SCHOOLS,
  SPELL_TYPES,
} from "@/systems/dnd5";

import type { Spell } from "@/app/actions/spells";
import type { ColumnDef } from "@tanstack/react-table";

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

export const filtersParamsSchema = z.object({
  amount: z.number(),
  order: z.enum(["asc", "desc"]),
  pg: z.number(),
  sort: z.enum(["name", "level"]),
  grid: z.literal(true).optional(),

  name: z.string().optional(),
  levelMin: z.number().optional(),
  levelMax: z.number().optional(),
  compV: z.literal(true).optional(),
  compS: z.literal(true).optional(),
  compM: z.literal(true).optional(),
  ritual: z.literal(true).optional(),
  upcast: z.literal(true).optional(),
  concentration: z.literal(true).optional(),
  source: z.array(z.string()).optional(),
  range: z.array(z.string()).optional(),
  duration: z.array(z.string()).optional(),
  castingTime: z.array(z.string()).optional(),
  school: z.array(z.enum([...SPELL_SCHOOLS])).optional(),
  casters: z.array(z.enum([...CLASSES_NAMES])).optional(),
  type: z.array(z.enum([...SPELL_TYPES])).optional(),
  conditions: z.array(z.enum([...CONDITIONS])).optional(),
  damageTypes: z.array(z.enum([...DAMAGE_TYPES])).optional(),
  savingThrow: z.array(z.enum([...ATTRIBUTES])).optional(),
  spellAttack: z.array(z.enum([...SPELL_ATTACK_TYPES])).optional(),
  rangeType: z.array(z.enum([...RANGE_TYPES])).optional(),
});

export type FiltersParams = z.infer<typeof filtersParamsSchema>;

export const initialFiltersParams: FiltersParams = {
  amount: 10,
  order: "asc",
  pg: 0,
  sort: "name",
};
