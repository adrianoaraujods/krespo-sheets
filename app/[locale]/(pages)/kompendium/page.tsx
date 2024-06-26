import React from "react";
import {
  getTranslations,
  unstable_setRequestLocale as setRequestLocale,
} from "next-intl/server";

import type { Locale } from "@/lib/config";

import { Heading } from "@/components/typography/heading";

export default async function KompendiumHomePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <div className="my-8 mr-4 w-full -md:pl-4">
      <Heading type="h1">{t("pages.kompendium.title")}</Heading>
    </div>
  );
}
