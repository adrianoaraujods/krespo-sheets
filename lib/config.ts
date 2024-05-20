export const locales = ["en-US", "pt-BR"] as const;
export const defaultLocale = locales[0];
export type Locale = (typeof locales)[number];
