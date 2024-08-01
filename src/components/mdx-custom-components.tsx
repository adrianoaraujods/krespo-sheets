import type { MDXComponents } from "mdx/types";

import { ListItem, OList, UList } from "@/components/typography/list";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/typography/table";
import { Anchor, Heading, Paragraph, Span } from "@/components/typography/text";

export default {
  a: ({ children, href = "" }) => <Anchor href={href}>{children}</Anchor>,
  // h1: ({ children }) => <Heading element="h1">{children}</Heading>,
  // h2: ({ children }) => <Heading element="h2">{children}</Heading>,
  // h3: ({ children }) => <Heading element="h3">{children}</Heading>,
  // h4: ({ children }) => <Heading element="h4">{children}</Heading>,
  // table: ({ children }) => <Table>{children}</Table>,
  // thead: ({ children }) => <TableHead>{children}</TableHead>,
  // tbody: ({ children }) => <TableBody>{children}</TableBody>,
  // tfoot: ({ children }) => <TableFooter>{children}</TableFooter>,
  // tr: ({ children }) => <TableRow>{children}</TableRow>,
  // th: ({ children }) => <TableHeader>{children}</TableHeader>,
  // td: ({ children }) => <TableCell>{children}</TableCell>,
  // li: ({ children }) => <ListItem>{children}</ListItem>,
  // ol: ({ children }) => <OList>{children}</OList>,
  // ul: ({ children }) => <UList>{children}</UList>,
  // p: ({ children }) => <Paragraph>{children}</Paragraph>,
  // strong: ({ children }) => (
  //   <Span variant="bold" asChild>
  //     <strong>{children}</strong>
  //   </Span>
  // ),
  // hr: () => <hr className="my-8 border-current" />,
} satisfies MDXComponents;
