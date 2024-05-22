"use client";

import * as React from "react";
import { CheckIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";

import { Span } from "@/components/typography/text";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const themes = ["light", "dark", "system"] as const;
export type Themes = (typeof themes)[number];

export default function ThemeSelector({
  children = (
    <Button variant="ghost" size="icon">
      <SunIcon className="scale-100 dark:scale-0" />
      <MoonIcon className="absolute scale-0 dark:scale-100" />
    </Button>
  ),
}: {
  children?: React.ReactNode;
}) {
  const { theme: currentTheme, setTheme } = useTheme();
  const t = useTranslations("ui.themes");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setTheme(theme)}
            key={`ThemeSelector:${theme}`}
          >
            <CheckIcon
              className={cn(
                "mr-2 h-4",
                currentTheme !== theme && "text-transparent"
              )}
            />

            <Span size="sm">{t(theme)}</Span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
