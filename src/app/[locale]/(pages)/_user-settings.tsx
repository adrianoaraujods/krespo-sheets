"use client";

import {
  LanguagesIcon,
  LogOutIcon,
  MoonIcon,
  SunIcon,
  UserRoundIcon,
} from "lucide-react";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

import type { Session } from "next-auth";

import { Text } from "@/components/typography/text";
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

import { DropdownMenuLocaleItems } from "./_locale-selector";
import { ThemeSelectorItems } from "./_theme-selector";

export default function UserSettings({ session }: { session: Session }) {
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
          <Text size="sm">{t("myAccount")}</Text>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <SunIcon className="mr-2 h-4 scale-100 dark:scale-0" />
              <MoonIcon className="absolute mr-2 h-4 scale-0 dark:scale-100" />

              <Text size="sm">{t("theme")}</Text>
            </DropdownMenuSubTrigger>

            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <ThemeSelectorItems />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <LanguagesIcon className="mr-2 h-4" />

              <Text size="sm">{t("language")}</Text>
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

          <Text size="sm">{t("logout")}</Text>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
