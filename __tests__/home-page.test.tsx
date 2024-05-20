import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("HomePage", () => {
  it("must have <main> tag", () => {
    render(<HomePage />);

    const el = screen.getByRole("main");

    expect(el);
  });
});
