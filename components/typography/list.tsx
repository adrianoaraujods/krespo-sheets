import * as React from "react";

import { cn } from "@/lib/utils";

const UList = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => {
    return (
      <ul
        className={cn("my-4 ml-6 list-disc [&>li]:mt-2", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
UList.displayName = "UList";

const OList = React.forwardRef<HTMLOListElement, React.ComponentProps<"ol">>(
  ({ className, ...props }, ref) => {
    return (
      <ol
        className={cn("my-4 ml-6 list-decimal [&>li]:mt-2", className)}
        ref={ref}
        {...props}
      />
    );
  }
);
OList.displayName = "OList";

const ListItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => {
    return <li className={cn("", className)} ref={ref} {...props} />;
  }
);
ListItem.displayName = "ListItem";

export { UList, OList, ListItem };
