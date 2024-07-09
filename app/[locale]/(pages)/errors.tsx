import { getTranslations } from "next-intl/server";

import { Heading } from "@/components/typography/heading";
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
        {title && <Heading type="h1">{t(title)}</Heading>}

        {description && (
          <Heading type="h2" variant="subtitle">
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
