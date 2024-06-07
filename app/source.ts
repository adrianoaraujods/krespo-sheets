import { map } from "@/.map";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

import { locales } from "@/lib/config";

export const { getPage, getPages, pageTree } = loader({
  baseUrl: "/kompendium",
  rootDir: "kompendium",
  source: createMDXSource(map, {}),
  languages: [...locales],
  url: (slugs) => `/${["kompendium", ...slugs].join("/")}`,
});
