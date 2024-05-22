import * as React from "react";

import { cn } from "@/lib/utils";

export default function BrazilFlag({
  className,
}: React.SVGProps<HTMLOrSVGElement>) {
  return (
    <svg
      className={cn("aspect-[4/3] h-5 rounded", className)}
      viewBox="0 0 640 480"
    >
      <g>
        <path d="M0 0h640v480H0z" fill="#229e45" />

        <path d="m321.4 436 301.5-195.7L319.6 44 17.1 240.7z" fill="#f8e509" />

        <path
          d="M452.8 240c0 70.3-57.1 127.3-127.6 127.3A127.4 127.4 0 1 1 452.8 240"
          fill="#2b49a3"
        />

        <path
          d="M444.4 285.8a124.6 124.6 0 0 0 5.8-19.8c-67.8-59.5-143.3-90-238.7-83.7a124.5 124.5 0 0 0-8.5 20.9c113-10.8 196 39.2 241.4 82.6"
          fill="#fff"
        />
      </g>
    </svg>
  );
}
