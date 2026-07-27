import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Header } from "@/components/layout/header";

describe("Header", () => {
  it("identifies the active route for assistive technology", () => {
    render(<Header pathnameOverride="/projects" />);

    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "About" })).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("provides an accessible mobile navigation control", () => {
    render(<Header pathnameOverride="/" />);

    expect(
      screen.getByRole("button", { name: "Open navigation menu" }),
    ).toHaveAttribute("aria-expanded", "false");
  });
});
