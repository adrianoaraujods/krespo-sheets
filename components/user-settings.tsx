"use client";

import {
  CheckIcon,
  LanguagesIcon,
  LogOutIcon,
  MoonIcon,
  SunIcon,
  UserRoundIcon,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import type { Session } from "next-auth";

import { cn } from "@/lib/utils";

import { Span } from "@/components/typography/text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuLocaleItems } from "@/components/locale-selector";
import { themes } from "@/components/theme-selector";

export default function UserSettings({ session }: { session: Session }) {
  const { theme: currentTheme, setTheme } = useTheme();
  const t = useTranslations("ui");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="rounded-full" size="icon">
          <Avatar>
            <AvatarImage src={session.user?.image!} />

            <AvatarFallback>
              <UserRoundIcon />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel asChild>
          <Span size="sm">{t("myAccount")}</Span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <SunIcon className="mr-2 h-4 scale-100 dark:scale-0" />
              <MoonIcon className="absolute mr-2 h-4 scale-0 dark:scale-100" />

              <Span size="sm">{t("theme")}</Span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                {themes.map((theme) => (
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => setTheme(theme)}
                    key={theme}
                  >
                    <CheckIcon
                      className={cn(
                        "mr-2 h-4",
                        currentTheme !== theme && "text-transparent"
                      )}
                    />

                    <Span size="sm">{t(`themes.${theme}`)}</Span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <LanguagesIcon className="mr-2 h-4" />

              <Span size="sm">{t("language")}</Span>
            </DropdownMenuSubTrigger>

            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuLocaleItems />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
          <LogOutIcon className="mr-2 h-4" />

          <Span size="sm">{t("logout")}</Span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
