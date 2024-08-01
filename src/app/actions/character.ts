"use server";

import { createCharacterDescription, systems } from "@/systems";
import { eq } from "drizzle-orm";

import type { ActionResponse } from "@/app/actions";
import type { SheetData, System } from "@/systems";

import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { Character, characters, insertCharacterSchema } from "@/lib/schema";

export interface CreateCharacterReturn
  extends Omit<Character, "data" | "userId"> {}

export async function createCharacter(
  formData: unknown
): Promise<ActionResponse<201 | 400 | 401 | 406 | 500, CreateCharacterReturn>> {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return { ok: false, status: 401 };
    }

    const parse = insertCharacterSchema.safeParse(formData);

    if (!parse.success) {
      return { ok: false, status: 400 };
    }

    const userId = session.user.id;
    const name = parse.data.name.trim();
    const system = parse.data.system as System;
    const data: SheetData = {};

    if (!systems.includes(system)) {
      return { ok: false, status: 406 };
    }

    const description = await createCharacterDescription(system, data);

    const newCharacter = (
      await db
        .insert(characters)
        .values({ data, name, system, userId, description })
        .returning({
          id: characters.id,
          name: characters.name,
          image: characters.image,
          createdAt: characters.createdAt,
          lastModifiedAt: characters.lastModifiedAt,
          system: characters.system,
          description: characters.description,
        })
    )[0];

    return {
      ok: true,
      status: 201,
      data: newCharacter,
    };
  } catch (error) {
    console.error(error);

    return {
      ok: false,
      status: 500,
    };
  }
}

export interface EditableCharacterProps
  extends Partial<
    Omit<Character, "id" | "userId" | "createdAt" | "lastModifiedAt" | "system">
  > {}

export async function updateCharacter(
  id: string,
  update: EditableCharacterProps
): Promise<ActionResponse<200 | 400 | 401 | 403 | 404 | 500, Character>> {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return {
        ok: false,
        status: 401,
      };
    }

    const char = await db.query.characters.findFirst({
      where: (char, { eq }) => eq(char.id, id),
    });

    if (!char) {
      return {
        ok: false,
        status: 404,
      };
    }

    if (session.user.id !== char.userId) {
      return {
        ok: false,
        status: 403,
      };
    }

    if (update.name) update.name = update.name.trim();

    const { updatedChar } = (
      await db
        .update(characters)
        .set({ ...update, lastModifiedAt: new Date() })
        .where(eq(characters.id, id))
        .returning({ updatedChar: characters })
    )[0];

    return {
      ok: true,
      status: 200,
      data: updatedChar,
    };
  } catch (error) {
    console.error(error);

    return {
      ok: false,
      status: 500,
    };
  }
}

export async function deleteCharacter(
  id: string
): Promise<ActionResponse<200 | 401 | 403 | 404 | 500>> {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return {
        ok: false,
        status: 401,
      };
    }

    const char = await db.query.characters.findFirst({
      where: (char, { eq }) => eq(char.id, id),
    });

    if (!char) {
      return {
        ok: false,
        status: 404,
      };
    }

    if (session.user.id !== char.userId) {
      return {
        ok: false,
        status: 403,
      };
    }

    await db.delete(characters).where(eq(characters.id, id));

    return {
      ok: true,
      status: 200,
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
    };
  }
}
