import {
  BookIcon,
  ClipboardPenIcon,
  LibraryBigIcon,
  ScrollTextIcon,
} from "lucide-react";
import {
  getTranslations,
  unstable_setRequestLocale as setRequestLocale,
} from "next-intl/server";

import { Link } from "@/lib/navigation";

import { Heading, Text } from "@/components/typography/text";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import GithubIcon from "@/components/icons/github-icon";

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <>
      <main>
        <Section className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Heading element="h1">{t("pages.home.hero.title")}</Heading>
            <Heading element="span" roleType="subtitle">
              {t("pages.home.hero.description")}
            </Heading>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <ClipboardPenIcon className="mx-auto size-10" />

                <Heading className="text-center">
                  {t("pages.home.hero.cards.characters.title")}
                </Heading>
              </CardHeader>

              <CardContent>
                {t("pages.home.hero.cards.characters.description")}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <LibraryBigIcon className="mx-auto size-10" />

                <Heading className="text-center">
                  {t("pages.home.hero.cards.kompendium.title")}
                </Heading>
              </CardHeader>

              <CardContent>
                {t("pages.home.hero.cards.kompendium.description")}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <ScrollTextIcon className="mx-auto size-10" />

                <Heading className="text-center">
                  {t("pages.home.hero.cards.spells.title")}
                </Heading>
              </CardHeader>

              <CardContent>
                {t("pages.home.hero.cards.spells.description")}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookIcon className="mx-auto size-10" />

                <Heading className="text-center">
                  {t("pages.home.hero.cards.systems.title")}
                </Heading>
              </CardHeader>

              <CardContent>
                {t("pages.home.hero.cards.systems.description")}
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section className="grid gap-8 bg-muted lg:grid-cols-[2fr,3fr]">
          <div className="mx-auto aspect-[4/3] w-full max-w-[600px] rounded-lg bg-secondary" />

          <div className="flex flex-col items-start justify-center">
            <Heading element="h2">{t("pages.home.characters.title")}</Heading>

            <Text>{t("pages.home.characters.description")}</Text>

            <Button className="mt-4" asChild>
              <Link href="/characters">
                {t("pages.home.characters.button")}
              </Link>
            </Button>
          </div>
        </Section>

        <Section className="grid gap-8 lg:grid-cols-[3fr,2fr]">
          <div className="flex flex-col items-start justify-center">
            <Heading element="h2">{t("pages.home.kompendium.title")}</Heading>

            <Text>{t("pages.home.kompendium.description")}</Text>

            <Button className="mt-4" asChild>
              <Link href="/kompendium/dnd5">{t("systems.dnd5.title")}</Link>
            </Button>
          </div>

          <div className="mx-auto aspect-[4/3] w-full max-w-[600px] rounded-lg bg-secondary max-lg:row-start-1" />
        </Section>

        <Section className="grid gap-8 bg-muted lg:grid-cols-[2fr,3fr]">
          <div className="mx-auto aspect-[4/3] w-full max-w-[600px] rounded-lg bg-secondary" />

          <div className="flex flex-col items-start justify-center">
            <Heading element="h2">{t("pages.home.spells.title")}</Heading>

            <Text>{t("pages.home.spells.description")}</Text>

            <Button className="mt-4" asChild>
              <Link href="/kompendium/dnd5/spells">
                {t("systems.dnd5.title")}
              </Link>
            </Button>
          </div>
        </Section>

        <Section className="grid gap-8 lg:grid-cols-[3fr,2fr]">
          <div className="flex flex-col items-start justify-center">
            <Heading element="h2">{t("pages.home.systems.title")}</Heading>

            <Text>{t("pages.home.systems.description")}</Text>
          </div>

          <div className="mx-auto aspect-[4/3] w-full max-w-[600px] rounded-lg bg-secondary max-lg:row-start-1" />
        </Section>
      </main>

      <Section
        className="flex justify-between gap-4 bg-accent py-2 text-accent-foreground"
        asChild
      >
        <footer>
          <Text>{t("ui.copyright", { year: new Date().getFullYear() })}</Text>

          <div className="flex gap-4">
            <Link
              href="https://github.com/adrianoaraujods/krespo-sheets"
              target="_blank"
            >
              <GithubIcon />
            </Link>

            <Text>
              {t("ui.credits.text")}{" "}
              <Link
                className="hover:underline"
                href="https://github.com/adrianoaraujods"
                target="_blank"
              >
                {t("ui.credits.author")}
              </Link>
            </Text>
          </div>
        </footer>
      </Section>
    </>
  );
}
