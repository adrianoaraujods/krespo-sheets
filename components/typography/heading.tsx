import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import type { VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva(
  "mb-[.5em] block scroll-my-24 leading-none text-foreground last:mb-0",
  {
    variants: {
      variant: {
        title: "font-semibold tracking-tight",
        subtitle: "font-extralight text-muted-foreground",
        italic: "font-extralight italic",
        text: "font-normal",
      },
      type: {
        // Must be an HTML Tag
        h1: "text-4xl",
        h2: "text-3xl",
        h3: "text-2xl",
        h4: "text-xl",
        span: "text-xl",
      },
    },
    defaultVariants: {
      variant: "title",
      type: "span",
    },
  }
);

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLSpanElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<
  HTMLHeadingElement | HTMLSpanElement,
  HeadingProps
>(({ className, variant, type = "span", asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : String(type);

  return (
    <Comp
      className={cn(headingVariants({ variant, type, className }))}
      ref={ref}
      {...props}
    />
  );
});
Heading.displayName = "Heading";

export { Heading, headingVariants };
