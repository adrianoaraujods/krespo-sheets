"use client";

import React, { useState } from "react";
import { LogInIcon } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import { Span } from "@/components/typography/text";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DiscordIcon from "@/components/icons/discord-icon";
import GoogleIcon from "@/components/icons/google-icon";

export default function LoginDialog({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const loadingState = useState<boolean>(false);
  const t = useTranslations();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "flex items-center gap-2 max-md:size-10 max-md:p-0",
            className
          )}
          {...props}
        >
          <LogInIcon className="size-5" />

          <Span className="max-md:hidden">{t("ui.login")}</Span>
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader className="mb-4">
          <DialogTitle>{t("pages.login.title")}</DialogTitle>

          <DialogDescription>{t("pages.login.description")}</DialogDescription>
        </DialogHeader>

        <div className="xs:grid-cols-2 grid gap-4">
          <Provider provider="google" loadingState={loadingState}>
            <GoogleIcon className="h-5" />

            <Span>Google</Span>
          </Provider>

          <Provider provider="discord" loadingState={loadingState}>
            <DiscordIcon className="h-5" />

            <Span>Discord</Span>
          </Provider>
        </div>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button className="mr-auto" variant="secondary">
              {t("ui.back")}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export interface ProviderProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  provider: Parameters<typeof signIn>[0];
  loadingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

function Provider({
  provider,
  className,
  loadingState,
  ...props
}: ProviderProps) {
  const [isLoading, setIsLoading] = loadingState;

  return (
    <Button
      className={cn("flex w-full gap-4", className)}
      variant="outline"
      disabled={isLoading}
      onClick={() => {
        setIsLoading(true);

        signIn(provider);
      }}
      {...props}
    />
  );
}
