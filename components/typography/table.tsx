import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.ComponentProps<"table">>(
  ({ className, ...props }, ref) => {
    return (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn("w-full", className)} ref={ref} {...props} />
      </div>
    );
  }
);
Table.displayName = "Table";

const TableHead = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentProps<"thead">
>(({ className, ...props }, ref) => {
  return (
    <thead
      className={cn("bg-secondary/70 text-secondary-foreground", className)}
      ref={ref}
      {...props}
    />
  );
});
TableHead.displayName = "TableHead";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentProps<"tbody">
>(({ className, ...props }, ref) => {
  return <tbody className={cn("", className)} ref={ref} {...props} />;
});
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.ComponentProps<"tfoot">
>(({ className, ...props }, ref) => {
  return <tfoot className={cn("", className)} ref={ref} {...props} />;
});
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.ComponentProps<"tr">
>(({ className, ...props }, ref) => {
  return (
    <tr
      className={cn("m-0 border-t p-0 even:bg-muted/25", className)}
      ref={ref}
      {...props}
    />
  );
});
TableRow.displayName = "TableRow";

const TableHeader = React.forwardRef<
  HTMLTableCellElement,
  React.ComponentProps<"th">
>(({ className, ...props }, ref) => {
  return (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold  [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TableHeader.displayName = "TableHeader";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.ComponentProps<"td">
>(({ className, ...props }, ref) => {
  return (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
TableCell.displayName = "TableCell";

export {
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableHeader,
  TableCell,
};
