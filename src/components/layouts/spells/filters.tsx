"use client";

import * as React from "react";

import { useTranslations } from "next-intl";

import { Span } from "@/components/typography/text";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DebounceInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  ATTRIBUTES,
  CLASSES_NAMES,
  DAMAGE_TYPES,
  SOURCES,
  SPELL_ATTACK_TYPES,
  SPELL_SCHOOLS,
  SPELL_TYPES,
} from "@/systems/dnd5";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  ChevronDownIcon,
} from "lucide-react";

import type { Spell } from "@/systems/dnd5";
import type { ColumnFiltersState, Table } from "@tanstack/react-table";

import { FiltersParams, initialFiltersParams } from "./table";

export default function Filters({
  table,
  params: {
    amount,
    order,
    pg,
    sort,
    attack,
    casters,
    compM,
    compS,
    compV,
    dmgType,
    levelMax,
    levelMin,
    name,
    ritual,
    savingThrow,
    school,
    source,
    type,
  },
  setParams,
}: {
  table: Table<Spell>;
  params: FiltersParams;
  setParams: React.Dispatch<React.SetStateAction<FiltersParams>>;
}) {
  const t = useTranslations("ui");
  const desc = order === "desc";

  React.useEffect(() => {
    table.setSorting([{ id: sort, desc }]);
  }, [desc, sort, table]);

  React.useEffect(() => {
    table.setPageIndex(pg);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pg, table]);

  React.useEffect(() => {
    table.setPageSize(amount);
  }, [amount, table]);

  React.useEffect(() => {
    const filters: ColumnFiltersState = [];
    if (name !== undefined) {
      filters.push({ id: "name", value: name });
    }
    if (levelMin !== undefined || levelMax !== undefined) {
      filters.push({ id: "level", value: [levelMin, levelMax] });
    }
    if (casters !== undefined && casters.length > 0) {
      filters.push({ id: "casters", value: casters });
    }
    if (school !== undefined && school.length > 0) {
      filters.push({ id: "school", value: school });
    }
    if (source !== undefined && source.length > 0) {
      filters.push({ id: "source", value: source });
    }
    if (attack !== undefined && attack.length > 0) {
      filters.push({ id: "spellAttack", value: attack });
    }
    if (dmgType !== undefined && dmgType.length > 0) {
      filters.push({ id: "damageType", value: dmgType });
    }
    if (savingThrow !== undefined && savingThrow.length > 0) {
      filters.push({ id: "savingThrow", value: savingThrow });
    }
    if (type !== undefined && type.length > 0) {
      filters.push({ id: "type", value: type });
    }
    if (compV === "true") {
      filters.push({ id: "components", value: "v" });
    }
    if (compS === "true") {
      filters.push({ id: "components", value: "s" });
    }
    if (compM === "true") {
      filters.push({ id: "components", value: "m" });
    }
    if (ritual === "true") {
      filters.push({ id: "ritual", value: true });
    }
    table.setColumnFilters(filters);
  }, [
    attack,
    casters,
    compM,
    compS,
    compV,
    dmgType,
    levelMax,
    levelMin,
    name,
    ritual,
    savingThrow,
    school,
    source,
    type,
    table,
  ]);

  return (
    <div className="grid gap-4">
      <div className="flex flex-wrap justify-between gap-4">
        <NameInput />

        <LevelInput />

        <SchoolSelector />

        <CasterSelector />

        <ComponentsSelector />

        <TypeSelector />

        <DamageTypeSelector />

        <AttackTypeSelector />

        <SavingThrowSelector />

        <SourceSelector />

        <IsRitual />
      </div>

      <div className="flex flex-row-reverse flex-wrap justify-end gap-4">
        <ResetFilters />

        <div className="xs:ml-auto">
          <SortBy />
        </div>

        <AmountInput />

        <PaginationComponent table={table} setParams={setParams} />
      </div>
    </div>
  );

  function NameInput() {
    return (
      <div className="flex w-full max-w-[360px] items-center gap-2">
        <Label htmlFor="spell-name-filter">{t("name")}:</Label>

        <DebounceInput
          id="spell-name-filter"
          type="text"
          value={name}
          onDebounce={(value) =>
            setParams((prev) => ({ ...prev, name: String(value) }))
          }
        />
      </div>
    );
  }

  function LevelInput() {
    return (
      <div className="flex items-center gap-2">
        <Label htmlFor="spell-level-min-filter">{t("level")}:</Label>

        <DebounceInput
          className="w-16 text-center"
          id="spell-level-min-filter"
          type="number"
          value={levelMin}
          onDebounce={(value) => {
            setParams((prev) => ({
              ...prev,
              levelMin: isNaN(Number(value)) ? undefined : Number(value),
            }));
          }}
        />

        <Span>-</Span>

        <DebounceInput
          className="w-16 text-center"
          id="spell-level-max-filter"
          type="number"
          value={levelMax}
          onDebounce={(value) => {
            setParams((prev) => ({
              ...prev,
              levelMax: isNaN(Number(value)) ? undefined : Number(value),
            }));
          }}
        />
      </div>
    );
  }

  function SchoolSelector() {
    const t = useTranslations("systems.dnd5.spells");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Span size="sm">{t("school")}</Span>

            <ChevronDownIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {SPELL_SCHOOLS.map((name) => (
            <DropdownMenuCheckboxItem
              key={`spell-school-filter:${name}`}
              checked={school && school.includes(name)}
              onCheckedChange={() =>
                setParams((prev) => {
                  const schools = prev.school || [];

                  return {
                    ...prev,
                    school: schools.includes(name)
                      ? schools.filter((value) => value !== name)
                      : [...schools, name],
                  };
                })
              }
            >
              <Span size="sm">{t(`schools.${name}`)}</Span>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  function CasterSelector() {
    const t = useTranslations("systems.dnd5");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Span size="sm">{t("spells.casters")}</Span>

            <ChevronDownIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {CLASSES_NAMES.map((name) => (
            <DropdownMenuCheckboxItem
              key={`spell-casters-filter:${name}`}
              checked={casters && casters.includes(name)}
              onCheckedChange={() =>
                setParams((prev) => {
                  const casters = prev.casters || [];

                  return {
                    ...prev,
                    casters: casters.includes(name)
                      ? casters.filter((value) => value !== name)
                      : [...casters, name],
                  };
                })
              }
            >
              <Span size="sm">{t(`classes.${name}`)}</Span>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  function ComponentsSelector() {
    const t = useTranslations("systems.dnd5");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Span size="sm">{t("spells.components")}</Span>

            <ChevronDownIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuCheckboxItem
            checked={compV === "true"}
            onCheckedChange={() =>
              setParams((prev) => ({
                ...prev,
                compV: prev.compV === "true" ? undefined : "true",
              }))
            }
          >
            <Span size="sm">{t(`spells.verbal`)}</Span>
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={compS === "true"}
            onCheckedChange={() =>
              setParams((prev) => ({
                ...prev,
                compS: prev.compS === "true" ? undefined : "true",
              }))
            }
          >
            <Span size="sm">{t(`spells.somatic`)}</Span>
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={compM === "true"}
            onCheckedChange={() =>
              setParams((prev) => ({
                ...prev,
                compM: prev.compM === "true" ? undefined : "true",
              }))
            }
          >
            <Span size="sm">{t(`spells.material`)}</Span>
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  function TypeSelector() {
    const t = useTranslations("systems.dnd5");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Span size="sm">{t("spells.spellType")}</Span>

            <ChevronDownIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {SPELL_TYPES.map((name) => (
            <DropdownMenuCheckboxItem
              key={`spell-type-filter:${name}`}
              checked={type && type.includes(name)}
              onCheckedChange={() =>
                setParams((prev) => {
                  const type = prev.type || [];

                  return {
                    ...prev,
                    type: type.includes(name)
                      ? type.filter((value) => value !== name)
                      : [...type, name],
                  };
                })
              }
            >
              <Span size="sm">{t(`spells.types.${name}`)}</Span>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  function DamageTypeSelector() {
    const t = useTranslations("systems.dnd5");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Span size="sm">{t("spells.damageType")}</Span>

            <ChevronDownIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {DAMAGE_TYPES.map((name) => (
            <DropdownMenuCheckboxItem
              key={`spell-damage-type-filter:${name}`}
              checked={dmgType && dmgType.includes(name)}
              onCheckedChange={() =>
                setParams((prev) => {
                  const dmgType = prev.dmgType || [];

                  return {
                    ...prev,
                    dmgType: dmgType.includes(name)
                      ? dmgType.filter((value) => value !== name)
                      : [...dmgType, name],
                  };
                })
              }
            >
              <Span size="sm">{t(`damageTypes.${name}`)}</Span>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  function AttackTypeSelector() {
    const t = useTranslations("systems.dnd5");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Span size="sm">{t("spells.spellAttack")}</Span>

            <ChevronDownIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {SPELL_ATTACK_TYPES.map((name) => (
            <DropdownMenuCheckboxItem
              key={`spell-attack-type-filter:${name}`}
              checked={attack && attack.includes(name)}
              onCheckedChange={() =>
                setParams((prev) => {
                  const attack = prev.attack || [];

                  return {
                    ...prev,
                    attack: attack.includes(name)
                      ? attack.filter((value) => value !== name)
                      : [...attack, name],
                  };
                })
              }
            >
              <Span size="sm">{t(`spells.attackTypes.${name}`)}</Span>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  function SavingThrowSelector() {
    const t = useTranslations("systems.dnd5");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Span size="sm">{t("spells.savingThrows")}</Span>

            <ChevronDownIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {ATTRIBUTES.map((name) => (
            <DropdownMenuCheckboxItem
              key={`spell-saving-throws-filter:${name}`}
              checked={savingThrow && savingThrow.includes(name)}
              onCheckedChange={() =>
                setParams((prev) => {
                  const savingThrow = prev.savingThrow || [];

                  return {
                    ...prev,
                    savingThrow: savingThrow.includes(name)
                      ? savingThrow.filter((value) => value !== name)
                      : [...savingThrow, name],
                  };
                })
              }
            >
              <Span size="sm">{t(`attributes.${name}`)}</Span>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  function SourceSelector() {
    const t = useTranslations("systems.dnd5");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Span size="sm">{t("spells.source")}</Span>

            <ChevronDownIcon className="size-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          {SOURCES.map((name) => (
            <DropdownMenuCheckboxItem
              key={`spell-source-filter:${name}`}
              checked={source && source.includes(name)}
              onCheckedChange={() =>
                setParams((prev) => {
                  const source = prev.source || [];

                  return {
                    ...prev,
                    source: source.includes(name)
                      ? source.filter((value) => value !== name)
                      : [...source, name],
                  };
                })
              }
            >
              <Span size="sm">{t(`sources.${name}`)}</Span>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  function IsRitual() {
    const t = useTranslations();

    return (
      <Button
        variant="outline"
        className="mr-auto gap-2"
        onClick={() =>
          setParams((prev) => ({
            ...prev,
            ritual: prev.ritual === "true" ? undefined : "true",
          }))
        }
      >
        <Span size="sm">{t("systems.dnd5.spells.ritual")}?</Span>

        {ritual && <CheckIcon className="size-4" />}
      </Button>
    );
  }

  function AmountInput() {
    const [inputValue, setInputValue] = React.useState(String(amount));
    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
      <Button
        asChild
        className="focus-within:ring-ring cursor-text gap-2 focus-within:ring-2 focus-within:ring-offset-2 focus-within:outline-none"
        variant="outline"
        onClick={() => inputRef.current && inputRef.current.focus()}
      >
        <div>
          <Span size="xs">{t("pages.perPage")}: </Span>

          <Span size="sm" asChild>
            <input
              className="w-8 bg-transparent text-center [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
              type="number"
              value={inputValue}
              onFocus={() => inputRef.current && inputRef.current.select()}
              onChange={({ target }) => setInputValue(target.value)}
              onBlur={({ target }) => {
                const value = Number(target.value);

                if (isNaN(value)) {
                  setInputValue(String(amount));
                }

                setParams((prev) => ({ ...prev, amount: Math.max(value, 1) }));
              }}
              ref={inputRef}
            />
          </Span>
        </div>
      </Button>
    );
  }

  function SortBy() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-1">
            <Span size="xs">{t("sortBy")}: </Span>

            <Span size="sm">{t(sort)}</Span>

            {desc ? (
              <ArrowUpIcon className="size-4" />
            ) : (
              <ArrowDownIcon className="size-4" />
            )}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() =>
              setParams((prev) => ({ ...prev, sort: "name", order: "asc" }))
            }
          >
            <Span size="sm">{t("name")}</Span>

            <ArrowDownIcon className="ml-auto size-4" />
          </DropdownMenuItem>

          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() =>
              setParams((prev) => ({
                ...prev,
                sort: "name",
                order: "desc",
              }))
            }
          >
            <Span size="sm">{t("name")}</Span>

            <ArrowUpIcon className="ml-auto size-4" />
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() =>
              setParams((prev) => ({
                ...prev,
                sort: "level",
                order: "asc",
              }))
            }
          >
            <Span size="sm">{t("level")}</Span>

            <ArrowDownIcon className="ml-auto size-4" />
          </DropdownMenuItem>

          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() =>
              setParams((prev) => ({
                ...prev,
                sort: "level",
                order: "desc",
              }))
            }
          >
            <Span size="sm">{t("level")}</Span>

            <ArrowUpIcon className="ml-auto size-4" />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  function ResetFilters() {
    return (
      <Button
        variant="secondary"
        onClick={() => setParams(initialFiltersParams)}
      >
        {t("resetFilters")}
      </Button>
    );
  }
}

export function PaginationComponent({
  table,
  setParams,
}: {
  table: Table<Spell>;
  setParams: React.Dispatch<React.SetStateAction<FiltersParams>>;
}) {
  const { pagination } = table.getState();
  const { pageIndex } = pagination;
  const currentPage = pageIndex + 1;
  const lastPage = table.getPageCount();

  return lastPage <= 1 ? null : (
    <div>
      <Pagination className="w-fit">
        <PaginationContent>
          <PaginationItem>
            <PaginationFirst
              disabled={pageIndex === 0}
              onClick={() => setParams((prev) => ({ ...prev, pg: 0 }))}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationPrevious
              disabled={pageIndex === 0}
              onClick={() =>
                setParams((prev) => ({ ...prev, pg: pageIndex - 1 }))
              }
            />
          </PaginationItem>

          {currentPage - 3 > 0 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {currentPage - 2 > 0 && (
            <PaginationItem>
              <PaginationLink
                onClick={() =>
                  setParams((prev) => ({ ...prev, pg: pageIndex - 2 }))
                }
              >
                {currentPage - 2}
              </PaginationLink>
            </PaginationItem>
          )}

          {currentPage - 1 > 0 && (
            <PaginationItem>
              <PaginationLink
                onClick={() =>
                  setParams((prev) => ({ ...prev, pg: pageIndex - 1 }))
                }
              >
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink isActive>{currentPage}</PaginationLink>
          </PaginationItem>

          {lastPage >= currentPage + 1 && (
            <PaginationItem>
              <PaginationLink
                onClick={() =>
                  setParams((prev) => ({ ...prev, pg: pageIndex + 1 }))
                }
              >
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
          )}

          {lastPage >= currentPage + 2 && (
            <PaginationItem>
              <PaginationLink
                onClick={() =>
                  setParams((prev) => ({ ...prev, pg: pageIndex + 2 }))
                }
              >
                {currentPage + 2}
              </PaginationLink>
            </PaginationItem>
          )}

          {lastPage >= currentPage + 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              disabled={lastPage <= currentPage}
              onClick={() =>
                setParams((prev) => ({ ...prev, pg: pageIndex + 1 }))
              }
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationLast
              disabled={lastPage === currentPage}
              onClick={() =>
                setParams((prev) => ({ ...prev, pg: lastPage - 1 }))
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
