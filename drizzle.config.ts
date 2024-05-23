import "./env.config";

import type { Config } from "drizzle-kit";

export default {
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./lib/schema.ts",
  strict: true,
  verbose: true,
} satisfies Config;
