// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],

  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<BUILTIN_MODULES>",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/types/(.*)$",
    "<TYPES>",
    "",
    "^@/lib/(.*)$",
    "^@/config/(.*)$",
    "",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "",
    "^@/styles/(.*)$",
    "^@/app/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
};
