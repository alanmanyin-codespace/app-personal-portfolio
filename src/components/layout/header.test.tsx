import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Header } from "@/components/layout/header";

describe("Header", () => {
  let intersectionCallback: IntersectionObserverCallback | undefined;

  beforeEach(() => {
    intersectionCallback = undefined;

    class IntersectionObserverMock {
      constructor(callback: IntersectionObserverCallback) {
        intersectionCallback = callback;
      }

      observe() {}
      disconnect() {}
      unobserve() {}
      takeRecords() {
        return [];
      }
    }

    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("marks Projects as the current page and keeps Experience hidden", () => {
    render(<Header pathnameOverride="/projects" />);

    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.queryByRole("link", { name: "Experience" })).toBeNull();
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

  it("keeps About active from My journey through the rest of the homepage", () => {
    const journeySection = document.createElement("section");
    journeySection.id = "my-journey";
    document.body.appendChild(journeySection);

    render(<Header pathnameOverride="/" />);

    expect(intersectionCallback).toBeDefined();

    act(() => {
      intersectionCallback?.(
        [{ isIntersecting: true } as IntersectionObserverEntry],
        {} as IntersectionObserver,
      );
    });

    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: "Home" })).not.toHaveAttribute(
      "aria-current",
    );

    act(() => {
      intersectionCallback?.(
        [
          {
            isIntersecting: false,
            boundingClientRect: { top: -120 },
          } as IntersectionObserverEntry,
        ],
        {} as IntersectionObserver,
      );
    });

    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "aria-current",
      "page",
    );

    journeySection.remove();
  });
});
