"use client";

import * as React from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useLocale, useTranslations } from "next-intl";

import type { Spell } from "@/systems/dnd5";
import type {
  ColumnDef,
  ColumnFiltersState,
  PaginationState,
  SortingState,
} from "@tanstack/react-table";

import { useSearchParamsState } from "@/lib/hooks";
import { useRouter } from "@/lib/navigation";

import { Heading, Paragraph, Span } from "@/components/typography/text";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

import Filters, { PaginationComponent } from "./_filters";
import { filtersSchema, initialFiltersParams, tableColumns } from "./_table";

export default function SpellsList({ spellsList }: { spellsList: Spell[] }) {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const [params, setParams] = useSearchParamsState(
    initialFiltersParams,
    filtersSchema
  );

  const columns = React.useMemo<ColumnDef<Spell>[]>(() => tableColumns, []);
  const data = React.useMemo(() => spellsList, [spellsList]);
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
    <div className="my-8 mr-4 w-full pr-4 max-md:pl-4">
      <Heading element="h1">
        {t("systems.dnd5.spells.title")}
        <span className="hidden sm:inline"> - {t("systems.dnd5.title")}</span>
      </Heading>

      <Filters table={table} params={params} setParams={setParams} />

      <div className="my-4 grid gap-4 lg:grid-cols-2">
        {table.getRowModel().rows.map((row) => {
          const { id, original: spell } = row;

          return (
            <Card key={id} className="h-fit">
              <CardHeader className="border-b border-muted pb-2">
                <CardTitle
                  id={spell.name.toLocaleLowerCase().replaceAll(" ", "-")}
                >
                  <span>{spell.name}</span>

                  {spell.originalName && (
                    <>
                      {" "}
                      <span className="text-nowrap font-normal text-muted-foreground">
                        ({spell.originalName})
                      </span>
                    </>
                  )}
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
                      ? t("systems.dnd5.spells.description.cantrip")
                      : t("systems.dnd5.spells.description.level", {
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
                    {t(`systems.dnd5.spells.schools.${spell.school}`)}
                  </span>

                  {spell.ritual && (
                    <>
                      {" | "}
                      <span
                        className="cursor-pointer text-card-foreground hover:underline"
                        onClick={() =>
                          setParams((prev) => ({ ...prev, ritual: "true" }))
                        }
                      >
                        {t("systems.dnd5.spells.ritual")}
                      </span>
                    </>
                  )}
                </CardDescription>

                <div className="grid">
                  <Span>
                    <Span variant="bold">
                      {t("systems.dnd5.spells.castingTime")}:{" "}
                    </Span>

                    {spell.castingTime}
                  </Span>

                  <Span>
                    <Span variant="bold">
                      {t("systems.dnd5.spells.range")}:{" "}
                    </Span>

                    {spell.range}
                  </Span>

                  <Span>
                    <Span variant="bold">
                      {t("systems.dnd5.spells.components")}:{" "}
                    </Span>

                    {spell.components.v && (
                      <>
                        <span
                          className="cursor-pointer hover:underline"
                          onClick={() =>
                            setParams((prev) => ({ ...prev, compV: "true" }))
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
                            setParams((prev) => ({ ...prev, compS: "true" }))
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
                            setParams((prev) => ({ ...prev, compM: "true" }))
                          }
                        >
                          M
                        </span>{" "}
                      </>
                    )}
                    {spell.components.m && <span>({spell.components.m})</span>}
                  </Span>

                  <Span>
                    <Span variant="bold">
                      {t("systems.dnd5.spells.duration")}:{" "}
                    </Span>

                    {spell.duration}
                  </Span>
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
                          <Paragraph key={`${id}_description:${i + 1}`}>
                            {paragraph}
                          </Paragraph>
                        );
                      })
                    ) : typeof spell.description === "object" ? (
                      spell.description
                    ) : (
                      <Paragraph key={`${id}`}>{spell.description}</Paragraph>
                    )}

                    {!spell.upcastDescription ? null : (
                      <Paragraph>
                        <Span variant="bold">
                          {t("systems.dnd5.spells.upcast")}:{" "}
                        </Span>

                        {spell.upcastDescription}
                      </Paragraph>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>

              <CardFooter className="grid border-t border-muted pt-2">
                <Span>
                  <Span variant="bold">
                    {t("systems.dnd5.spells.source")}:{" "}
                  </Span>

                  <span
                    className="cursor-pointer hover:underline"
                    onClick={() =>
                      setParams((prev) => ({ ...prev, source: [spell.source] }))
                    }
                  >
                    {t(`systems.dnd5.sources.${spell.source}`)}
                  </span>
                </Span>

                <Span>
                  <Span variant="bold">
                    {t("systems.dnd5.spells.casters")}:{" "}
                  </Span>

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
                </Span>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <PaginationComponent table={table} setParams={setParams} />

        {table.getRowCount() > 0 ? (
          <Span className="text-center max-md:mx-auto">
            {t("ui.pages.amount", {
              initial: Math.max(params.pg * params.amount + 1, 0),
              final: Math.min(
                params.pg * params.amount + params.amount,
                table.getRowCount()
              ),
              total: table.getRowCount(),
            })}
          </Span>
        ) : (
          <Span>{t("ui.noResultsFound")}</Span>
        )}
      </div>
    </div>
  );
}
