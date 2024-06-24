import React from "react";
import { getTranslations } from "next-intl/server";

import { Heading } from "@/components/typography/heading";

export default async function KompendiumHomePage() {
  const t = await getTranslations();

  return (
    <div className="my-8 mr-4 w-full -md:pl-4">
      <Heading type="h1">{t("pages.kompendium.title")}</Heading>
    </div>
  );
}
