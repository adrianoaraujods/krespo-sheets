import { NavLinkWithItems } from "./navigation";

export const locales = ["en-US", "pt-BR"] as const;
export const defaultLocale = locales[0];
export type Locale = (typeof locales)[number];

export const themes = ["light", "dark", "system"] as const;
export type Theme = (typeof themes)[number];

type NavItems = { [key: string]: NavLinkWithItems[] };

export const navItems = {
  authOnly: [],
  public: [],
} satisfies NavItems;
