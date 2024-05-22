"use client";

import * as React from "react";
import { CheckIcon, LanguagesIcon } from "lucide-react";
import { useLocale } from "next-intl";

import type { Locale } from "@/lib/config";

import { usePathname, useRouter } from "@/lib/navigation";
import { cn } from "@/lib/utils";

import { Span } from "@/components/typography/text";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UnitedStatesFlag from "@/components/icons/flag-en-US";
import BrazilFlag from "@/components/icons/flag-pt-BR";

export default function LocaleSelector({
  children = (
    <Button variant="ghost" size="icon">
      <LanguagesIcon />
    </Button>
  ),
}: {
  children?: React.ReactNode;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLocaleItems />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DropdownMenuLocaleItems() {
  return (
    <>
      <DropdownMenuLocaleItem locale={"en-US"}>
        <Span size="sm">English</Span>

        <UnitedStatesFlag className="ml-auto" />
      </DropdownMenuLocaleItem>

      <DropdownMenuLocaleItem locale={"pt-BR"}>
        <Span size="sm">Português</Span>

        <BrazilFlag className="ml-auto" />
      </DropdownMenuLocaleItem>
    </>
  );
}

export function DropdownMenuLocaleItem({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function changeLocale(locale: Locale) {
    router.replace(pathname, { locale });
  }

  return (
    <DropdownMenuItem
      className="flex cursor-pointer gap-2"
      onClick={() => changeLocale(locale)}
    >
      <CheckIcon
        className={cn(
          "mr-2 h-4",
          currentLocale !== locale && "text-transparent"
        )}
      />

      {children}
    </DropdownMenuItem>
  );
}
