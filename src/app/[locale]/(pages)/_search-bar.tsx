"use client";

import * as React from "react";
import { Dialog } from "@radix-ui/react-dialog";
import DefaultSearchDialog from "fumadocs-ui/components/dialog/search-default";
import { SearchIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Span } from "@/components/typography/text";
import { Button } from "@/components/ui/button";

import { usePagesContext } from "./_provider";

export default function SearchBar() {
  const { open, setOpen } = usePagesContext().searchBar;
  const t = useTranslations();

  return (
    <>
      <Button
        variant="outline"
        className={
          "flex justify-between gap-4 px-2 text-muted-foreground max-lg:hidden"
        }
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center">
          <SearchIcon className="h-4" />

          <Span size="sm">{t("pages.kompendium.search")}</Span>
        </div>

        <kbd className="pointer-events-none hidden h-5 select-none items-center rounded border bg-accent px-1 sm:flex">
          <Span size="xs">
            ⌘ <Span>K</Span>
          </Span>
        </kbd>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setOpen(true)}
      >
        <SearchIcon />
      </Button>

      <Dialog>
        <DefaultSearchDialog open={open} onOpenChange={setOpen} />
      </Dialog>
    </>
  );
}
