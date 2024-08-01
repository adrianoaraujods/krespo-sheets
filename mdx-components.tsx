import defaultComponents from "fumadocs-ui/mdx";

import type { MDXComponents } from "mdx/types";

import customComponents from "@/components/mdx-custom-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    ...customComponents,
  };
}
