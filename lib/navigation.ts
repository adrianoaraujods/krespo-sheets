import { createSharedPathnamesNavigation } from "next-intl/navigation";

import { locales } from "@/lib/config";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export type NavLink = {
  href: string;
  title: MessageKeys;
};

export interface NavLinkWithItems extends NavLink {
  items?: (NavLinkWithItems & { description?: MessageKeys })[];
}
