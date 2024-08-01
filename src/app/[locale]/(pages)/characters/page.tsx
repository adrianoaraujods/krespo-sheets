import { Suspense } from "react";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

import { Section } from "@/components/ui/section";
import { Skeleton } from "@/components/ui/skeleton";

import { CharactersList } from "@/app/[locale]/(pages)/characters/characters-list";
import { NotAutorized } from "@/app/[locale]/(pages)/errors";

export default async function CharactersListPage() {
  const session = await auth();

  if (!session || !session.user?.id) {
    return <NotAutorized />;
  }

  const userId = session.user.id;

  function Loading() {
    return (
      <div className="flex justify-between">
        <Skeleton className="h-8 w-full max-w-48" />

        <Skeleton className="h-8 w-full max-w-24" />
      </div>
    );
  }

  async function Content() {
    const userCharacters = await db.query.characters.findMany({
      where: (character, { eq }) => eq(character.userId, userId),
      columns: {
        createdAt: false,
        data: false,
        userId: false,
      },
      orderBy: ({ lastModifiedAt }, { desc }) => desc(lastModifiedAt),
    });

    return <CharactersList characters={userCharacters} />;
  }

  return (
    <Section>
      <Suspense fallback={<Loading />}>
        <Content />
      </Suspense>
    </Section>
  );
}
