import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ButtonLink } from "@/components/ui/button-link";

describe("ButtonLink", () => {
  it("does not create a broken link when an action is unavailable", () => {
    render(
      <ButtonLink href="/missing.pdf" unavailable>
        Download CV
      </ButtonLink>,
    );

    expect(screen.queryByRole("link", { name: "Download CV" })).toBeNull();
    expect(screen.getByText("Download CV")).toHaveAttribute(
      "aria-disabled",
      "true",
    );
  });
});
