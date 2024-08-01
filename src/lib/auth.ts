import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from "next-auth/providers/google";

import { db } from "@/lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!,
    }),
    DiscordProvider({
      clientId: process.env.AUTH_DISCORD_CLIENT_ID!,
      clientSecret: process.env.AUTH_DISCORD_CLIENT_SECRET!,
    }),
  ],
});
