"use client";

import * as React from "react";
import DefaultSearchDialog from "fumadocs-ui/components/dialog/search-default";
import { SearchIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { Span } from "./typography/text";

const SearchBar = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = useTranslations();

  return (
    <>
      <Button
        ref={ref}
        variant="outline"
        className={cn(
          "flex justify-between gap-4 px-2 text-muted-foreground",
          className
        )}
        onMouseDown={() => setIsOpen(true)}
        {...props}
      >
        <div className="flex items-center">
          <SearchIcon className="h-4" />

          <Span className="lg:hidden" size="sm">
            {t("ui.search")}...
          </Span>

          <Span className="-lg:hidden" size="sm">
            {t("pages.kompendium.search")}
          </Span>
        </div>

        <kbd className="pointer-events-none hidden h-5 select-none items-center rounded border bg-accent px-1 sm:flex">
          <Span size="xs">
            ⌘ <Span>K</Span>
          </Span>
        </kbd>
      </Button>

      <DefaultSearchDialog open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
});
SearchBar.displayName = "SearchBar";

export { SearchBar };