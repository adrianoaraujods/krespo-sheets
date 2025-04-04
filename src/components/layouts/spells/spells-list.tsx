"use client";

import * as React from "react";
import Link from "next/link";

import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useLocale, useTranslations } from "next-intl";

import { useSearchParamsState } from "@/hooks/use-search-params-state";
import { Text } from "@/components/typography/text";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRouter } from "@/intl/navigation";

import type { Spell } from "@/app/actions/spells";
import type {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from "@tanstack/react-table";

import Filters, { PaginationComponent } from "./filters";
import {
  filtersParamsSchema,
  initialFiltersParams,
  tableColumns,
} from "./table";

export default function SpellsList({ spells }: { spells: Spell[] }) {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const [params, setParams] = useSearchParamsState(
    initialFiltersParams,
    filtersParamsSchema
  );

  const columns = React.useMemo<ColumnDef<Spell>[]>(() => tableColumns, []);
  const data = React.useMemo(() => spells, [spells]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: params.pg,
    pageSize: params.amount,
  });

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),

    state: { columnFilters, pagination, sorting },
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,

    getRowId: (row, i) =>
      `${i}:${row.name.toLocaleLowerCase().replaceAll(" ", "-")}`,
    autoResetPageIndex: false,
  });

  React.useEffect(() => router.refresh(), [locale, router]);

  return (
    <>
      <Filters table={table} params={params} setParams={setParams} />

      <div className="my-4 grid gap-4 lg:grid-cols-2">
        {table.getRowModel().rows.map((row) => {
          const { id, original: spell } = row;

          return (
            <Card key={id} className="h-fit">
              <CardHeader className="border-muted border-b pb-2">
                <CardTitle
                  id={spell.name.toLocaleLowerCase().replaceAll(" ", "-")}
                >
                  <Link href={spell.url}>
                    <span>{spell.name}</span>

                    {spell.originalName && (
                      <>
                        {" "}
                        <span className="text-muted-foreground font-normal text-nowrap">
                          ({spell.originalName})
                        </span>
                      </>
                    )}
                  </Link>
                </CardTitle>

                <CardDescription>
                  <span
                    className="cursor-pointer hover:underline"
                    onClick={() =>
                      setParams((prev) => ({
                        ...prev,
                        levelMin: spell.level,
                        levelMax: spell.level,
                      }))
                    }
                  >
                    {spell.level === 0
                      ? t("systems.spells.description.cantrip")
                      : t("systems.spells.description.level", {
                          level: spell.level,
                        })}
                  </span>

                  {", "}

                  <span
                    className="cursor-pointer hover:underline"
                    onClick={() =>
                      setParams((prev) => ({ ...prev, school: [spell.school] }))
                    }
                  >
                    {t(`systems.spells.schools.${spell.school}`)}
                  </span>

                  {spell.ritual && (
                    <>
                      {" | "}
                      <span
                        className="text-card-foreground cursor-pointer hover:underline"
                        onClick={() =>
                          setParams((prev) => ({ ...prev, ritual: true }))
                        }
                      >
                        {t("systems.spells.ritual")}
                      </span>
                    </>
                  )}
                </CardDescription>

                <div className="grid">
                  <Text>
                    <Text variant="bold">
                      {t("systems.spells.castingTime")}:{" "}
                    </Text>

                    {spell.castingTime}
                  </Text>

                  <Text>
                    <Text variant="bold">{t("systems.spells.range")}: </Text>

                    {spell.range}
                  </Text>

                  <Text>
                    <Text variant="bold">
                      {t("systems.spells.components")}:{" "}
                    </Text>

                    {spell.components.v && (
                      <>
                        <span
                          className="cursor-pointer hover:underline"
                          onClick={() =>
                            setParams((prev) => ({ ...prev, compV: true }))
                          }
                        >
                          V
                        </span>{" "}
                      </>
                    )}
                    {spell.components.s && (
                      <>
                        <span
                          className="cursor-pointer hover:underline"
                          onClick={() =>
                            setParams((prev) => ({ ...prev, compS: true }))
                          }
                        >
                          S
                        </span>{" "}
                      </>
                    )}
                    {spell.components.m && (
                      <>
                        <span
                          className="cursor-pointer hover:underline"
                          onClick={() =>
                            setParams((prev) => ({ ...prev, compM: true }))
                          }
                        >
                          M
                        </span>{" "}
                      </>
                    )}
                    {spell.components.m && <span>({spell.components.m})</span>}
                  </Text>

                  <Text>
                    <Text variant="bold">{t("systems.spells.duration")}: </Text>

                    {spell.duration}
                  </Text>
                </div>
              </CardHeader>

              <CardContent className="py-2">
                <ScrollArea>
                  <div className="max-h-[400px]">
                    {Array.isArray(spell.description) ? (
                      spell.description.map((paragraph, i) => {
                        return typeof paragraph === "object" ? (
                          paragraph
                        ) : (
                          <Text key={`${id}_description:${i + 1}`}>
                            {paragraph}
                          </Text>
                        );
                      })
                    ) : typeof spell.description === "object" ? (
                      spell.description
                    ) : (
                      <Text key={`${id}`}>{spell.description}</Text>
                    )}

                    {!spell.upcastDescription ? null : (
                      <Text>
                        <Text variant="bold">
                          {t("systems.spells.upcast")}:{" "}
                        </Text>

                        {spell.upcastDescription}
                      </Text>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>

              <CardFooter className="border-muted grid border-t pt-2">
                <Text>
                  <Text variant="bold">{t("systems.spells.source")}: </Text>

                  <span
                    className="cursor-pointer hover:underline"
                    onClick={() =>
                      setParams((prev) => ({ ...prev, source: [spell.source] }))
                    }
                  >
                    {spell.source}
                  </span>
                </Text>

                <Text>
                  <Text variant="bold">{t("systems.spells.casters")}: </Text>

                  {spell.casters.map((caster, i) => (
                    <span key={`${id}:${caster}`}>
                      {i === 0 ? "" : ", "}

                      <span
                        className="cursor-pointer hover:underline"
                        onClick={() =>
                          setParams((prev) => ({ ...prev, casters: [caster] }))
                        }
                      >
                        {t(`systems.dnd5.classes.${caster}`)}
                      </span>
                    </span>
                  ))}
                </Text>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <PaginationComponent table={table} setParams={setParams} />

        {table.getRowCount() > 0 ? (
          <Text className="text-center max-md:mx-auto">
            {t("ui.pages.amount", {
              initial: Math.max(params.pg * params.amount + 1, 0),
              final: Math.min(
                params.pg * params.amount + params.amount,
                table.getRowCount()
              ),
              total: table.getRowCount(),
            })}
          </Text>
        ) : (
          <Text>{t("ui.searchNoResult")}</Text>
        )}
      </div>
    </>
  );
}
