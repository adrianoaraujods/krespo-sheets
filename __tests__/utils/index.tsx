import * as React from "react";
import messages from "@/locales/en-US";
import { render } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

import type { RenderOptions } from "@testing-library/react";

import { defaultLocale } from "@/lib/config";

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) =>
  render(ui, {
    wrapper: ({ children }) => (
      <NextIntlClientProvider locale={defaultLocale} messages={messages}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </NextIntlClientProvider>
    ),
    ...options,
  });

export * from "@testing-library/react";
export { customRender as render };
