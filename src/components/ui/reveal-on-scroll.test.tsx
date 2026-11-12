import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

let trigger: (isIntersecting: boolean) => void = () => {};

class FakeIntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {
    trigger = (isIntersecting) =>
      callback(
        [{ isIntersecting } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      );
  }
  observe() {}
  disconnect() {}
}

function placeAt(top: number) {
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
    top,
  } as DOMRect);
}

describe("RevealOnScroll", () => {
  beforeEach(() => {
    vi.stubGlobal("IntersectionObserver", FakeIntersectionObserver);
  });
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("hides off-screen content until it scrolls into view, then rises it in", () => {
    placeAt(window.innerHeight + 500);
    render(<RevealOnScroll>Tech Stack</RevealOnScroll>);
    const wrapper = screen.getByText("Tech Stack");

    expect(wrapper).toHaveClass("reveal-waiting");

    act(() => trigger(true));
    expect(wrapper).toHaveClass("rise");
    expect(wrapper).not.toHaveClass("reveal-waiting");
  });

  it("leaves content that is already on screen visible, with no animation", () => {
    placeAt(100);
    render(<RevealOnScroll>Tech Stack</RevealOnScroll>);
    const wrapper = screen.getByText("Tech Stack");

    expect(wrapper).not.toHaveClass("reveal-waiting");
    expect(wrapper).not.toHaveClass("rise");
  });
});
