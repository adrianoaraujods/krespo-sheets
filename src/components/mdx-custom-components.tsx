import type { MDXComponents } from "mdx/types";

import { Anchor } from "@/components/typography/text";

export default {
  a: ({ children, target, href = "" }) => (
    <Anchor
      href={href.startsWith("_") ? href.substring(1) : href}
      target={target || href.startsWith("_") ? "_blank" : "_self"}
    >
      {children}
    </Anchor>
  ),
} satisfies MDXComponents;
