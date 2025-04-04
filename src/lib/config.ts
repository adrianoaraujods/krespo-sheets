import type { NavLinkWithItems } from "@/lib/navigation";

export const locales = ["en-US", "pt-BR"] as const;
export const defaultLocale = locales[0];
export type Locale = (typeof locales)[number];

export const themes = ["light", "dark", "system"] as const;
export type Theme = (typeof themes)[number];

export const systems = ["dnd5"] as const;
export type System = (typeof systems)[number];

export const navItems: NavLinkWithItems[] = [
  {
    title: "pages.kompendium.title",
    href: "/kompendium/dnd5",
  },
  {
    title: "systems.dnd5.spells.title",
    href: "/kompendium/dnd5/spells",
  },
];
