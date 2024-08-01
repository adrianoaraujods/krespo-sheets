"use client";

import * as React from "react";
import { CheckIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { Theme, themes } from "@/lib/config";
import { cn } from "@/lib/utils";

import { Text } from "@/components/typography/text";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <ThemeSelectorItems />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeSelectorItems() {
  return themes.map((theme) => (
    <ThemeSelectorItem key={`ThemeSelector:${theme}`} theme={theme} />
  ));
}

export function ThemeSelectorItem({ theme }: { theme: Theme }) {
  const { theme: currentTheme, setTheme } = useTheme();
  const t = useTranslations("ui.themes");

  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onClick={() => setTheme(theme)}
    >
      <CheckIcon
        className={cn("mr-2 h-4", currentTheme !== theme && "text-transparent")}
      />

      <Text size="sm">{t(theme)}</Text>
    </DropdownMenuItem>
  );
}
