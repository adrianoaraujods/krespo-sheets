import { Suspense } from "react";
import { useLocale } from "next-intl";
import ReactTimeAgo from "react-timeago";
// @ts-ignore
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
// @ts-ignore
import strings_pt_br from "react-timeago/lib/language-strings/pt-br";

import type { Locale } from "@/lib/config";
import type { ReactTimeagoProps } from "react-timeago";

export interface TimeAgoProps
  extends Omit<ReactTimeagoProps<"span">, "formatter"> {}

export function TimeAgo({ date, ...props }: TimeAgoProps) {
  const locale = useLocale() as Locale;

  return (
    <Suspense fallback={new Date(date).toLocaleDateString()}>
      <ReactTimeAgo
        date={date}
        formatter={
          locale === "en-US"
            ? undefined
            : buildFormatter({ "pt-BR": strings_pt_br }[locale])
        }
        {...props}
      />
    </Suspense>
  );
}
