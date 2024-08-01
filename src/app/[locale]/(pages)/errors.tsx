import { getTranslations } from "next-intl/server";

import { Heading } from "@/components/typography/text";
import { Section } from "@/components/ui/section";

export async function ErrorPage({
  title,
  description,
}: {
  title?: MessageKeys;
  description?: MessageKeys;
}) {
  const t = await getTranslations();

  return (
    <main>
      <Section>
        {title && <Heading element="h1">{t(title)}</Heading>}

        {description && (
          <Heading element="h2" roleType="subtitle">
            {t(description)}
          </Heading>
        )}
      </Section>
    </main>
  );
}

export function NotAutorized() {
  return (
    <ErrorPage title="errors.401.title" description="errors.401.description" />
  );
}
