import { defineDocs, frontmatterSchema } from "fumadocs-mdx/config";

import { spellSchema } from "@/systems/dnd5";

export const kompendium = defineDocs({
  dir: "./public/kompendium",
  docs: {
    schema: frontmatterSchema.extend({
      spell: spellSchema.omit({ name: true }).optional(),
    }),
  },
});
