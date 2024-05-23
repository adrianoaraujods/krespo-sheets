import { describe, expect, it } from "@jest/globals";

import { render, screen } from "@/tests/test-utilts";

import HomePage from "@/app/[locale]/(pages)/(home)/page";

import "@/tests/match-media";

describe("HomePage", () => {
  it("must have <main> tag", async () => {
    render(<HomePage />);

    const el = screen.getByRole("main");

    expect(el);
  });
});
