import { createNavigation } from "next-intl/navigation";

import { routing } from "@/intl/routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
