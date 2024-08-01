import { InferSelectModel, relations } from "drizzle-orm";
import {
  integer,
  json,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import type { SheetData, System } from "@/systems";
import type { AdapterAccount } from "next-auth/adapters";

import { createId } from "@/lib/crypto";

// Schemas
export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);

export const characters = pgTable("characters", {
  id: text("id")
    .$defaultFn(() => createId())
    .primaryKey()
    .notNull(),
  userId: text("userId")
    .references(() => users.id)
    .notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  lastModifiedAt: timestamp("lastModifiedAt")
    .$onUpdate(() => new Date())
    .defaultNow()
    .notNull(),
  name: text("name").notNull(),
  system: text("system").$type<System>().notNull(),
  data: json("data").$type<SheetData>().notNull(),
  description: text("description"),
  image: text("image"),
});

// Relations
export const usersRelations = relations(users, ({ one, many }) => {
  return {
    characters: many(characters),
  };
});

export const charactersRelations = relations(characters, ({ one }) => {
  return {
    user: one(users, { fields: [characters.userId], references: [users.id] }),
  };
});

// Zod Schemas
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);
export type User = InferSelectModel<typeof users>;

export const insertCharacterSchema = createInsertSchema(characters);
export const selectCharacterSchema = createSelectSchema(characters);
export type Character = InferSelectModel<typeof characters>;
