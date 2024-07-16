import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import type { VariantProps } from "class-variance-authority";

import { Link } from "@/lib/navigation";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "",
      italic: "italic",
      bold: "font-bold",
      muted: "text-muted-foreground",
      destructive: "text-destructive",
      "primary-dark-secondary": "text-primary dark:text-secondary",
      "secondary-dark-primary": "text-secondary dark:text-primary",
    },
    size: {
      xs: "text-xs/relaxed",
      sm: "text-sm/relaxed",
      md: "text-base/relaxed",
      lg: "text-lg/relaxed",
      xl: "text-xl/relaxed",
      flex: "text-base/relaxed md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface SpanProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Span = React.forwardRef<HTMLSpanElement, SpanProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";

    return (
      <Comp
        className={cn(textVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Span.displayName = "Span";

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean;
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";

    return (
      <Comp
        className={cn(
          "[&:not(:first-child)]:first-letter:ml-[1.5em] [&:not(:last-child)]:mb-[.5em]",
          textVariants({ variant, size, className })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Paragraph.displayName = "Paragraph";

const Anchor = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Link>
>(({ className, target, ...props }, ref) => {
  return (
    <Link
      className={cn(
        textVariants({ size: "md" }),
        "text-primary hover:underline",
        className
      )}
      target={target || "_blank"}
      ref={ref}
      {...props}
    />
  );
});
Anchor.displayName = "Anchor";

export { Span, Paragraph, Anchor, textVariants };
