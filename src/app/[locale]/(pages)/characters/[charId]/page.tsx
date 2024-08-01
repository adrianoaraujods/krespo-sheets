import { Suspense } from "react";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

import { Section } from "@/components/ui/section";
import { Skeleton } from "@/components/ui/skeleton";

import { ErrorPage, NotAutorized } from "../../errors";
import CharacterSheet from "./_char-sheet";

export default function CharacterSheetPage({
  params: { charId },
}: {
  params: { charId: string };
}) {
  return (
    <Suspense fallback={<Loading />}>
      <Content />
    </Suspense>
  );

  function Loading() {
    return (
      <main>
        <Section className="h-[calc(100dvh-57px)]">
          <Skeleton className="size-full" />
        </Section>
      </main>
    );
  }

  async function Content() {
    const session = await auth();

    if (!session || !session.user?.id) {
      return <NotAutorized />;
    }

    const character = await db.query.characters.findFirst({
      where: (character, { eq }) => eq(character.id, charId),
    });

    if (!character) {
      return <ErrorPage title="pages.characters.responses.404" />;
    }

    if (character.userId !== session.user.id) {
      return 403;
    }

    try {
      const System = (await import(`./_${character.system}`)).default;

      return (
        <CharacterSheet character={character}>
          <System />
        </CharacterSheet>
      );
    } catch (error) {
      console.error(error);

      return <ErrorPage title="pages.characters.responses.406" />;
    }
  }
}
