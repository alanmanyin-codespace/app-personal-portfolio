"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
}

type RevealState = "shown" | "waiting" | "revealing";

/**
 * Fades its content up when it scrolls into view.
 *
 * Content is server-rendered visible, so it's never lost without JavaScript.
 * After hydration, content that's still off-screen is hidden until it enters
 * the viewport, then plays the shared `.rise` animation. Content already on
 * screen at load is left alone, so it never flickers.
 */
export function RevealOnScroll({
  children,
  className = "",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RevealState>("shown");

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;

    // Already (even partly) on screen at load: leave it visible.
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    setState("waiting");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("revealing");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const stateClass =
    state === "waiting"
      ? "reveal-waiting"
      : state === "revealing"
        ? "rise"
        : "";

  return (
    <div ref={ref} className={`${className} ${stateClass}`.trim()}>
      {children}
    </div>
  );
}
