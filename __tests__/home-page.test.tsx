import { render, screen } from "@/__tests__/utils";
import { describe, expect, it } from "@jest/globals";

import HomePage from "@/app/[locale]/(pages)/(home)/page";

import "@/__tests__/utils/match-media";

describe("HomePage", () => {
  it("must have <main> tag", async () => {
    render(<HomePage />);

    const el = screen.getByRole("main");

    expect(el);
  });
});
