"use client";

import * as React from "react";
import { FileSpreadsheetIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";

import { Span } from "@/components/typography/text";
import { Button } from "@/components/ui/button";

export interface LogoProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {}

const Logo = React.forwardRef<HTMLButtonElement, LogoProps>(
  ({ className, ...props }, ref) => {
    const t = useTranslations("metadata");

    return (
      <Button
        variant="none"
        className={cn("gap-2", className)}
        ref={ref}
        {...props}
        asChild
      >
        <Link href="/">
          <FileSpreadsheetIcon size="32" />

          <Span size="xl" className="">
            {t("title")}
          </Span>
        </Link>
      </Button>
    );
  }
);
Logo.displayName = "Logo";

export { Logo };
