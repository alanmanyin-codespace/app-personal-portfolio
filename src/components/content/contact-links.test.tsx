import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ContactLinks } from "@/components/content/contact-links";

describe("ContactLinks", () => {
  afterEach(() => vi.restoreAllMocks());

  it("copies the email address and confirms it, keeping the mailto link", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText },
      configurable: true,
    });

    render(
      <ContactLinks
        links={[
          {
            label: "Email",
            href: "mailto:me@example.com",
            icon: "mail",
            color: "text-yellow-400",
            copyText: "me@example.com",
          },
        ]}
      />,
    );

    const link = screen.getByRole("link", { name: "Email" });
    expect(link).toHaveAttribute("href", "mailto:me@example.com");

    await act(async () => {
      fireEvent.click(link);
    });

    expect(writeText).toHaveBeenCalledWith("me@example.com");
    expect(screen.getByRole("status")).toHaveTextContent("Copied!");
  });
});
