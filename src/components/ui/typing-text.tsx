import type { CSSProperties } from "react";

/** A run of text, optionally styled (e.g. the highlighted words in a title). */
export type TypingSegment = string | { text: string; className?: string };

const DEFAULT_SPEED = 38;
const DEFAULT_DELAY = 150;

/** How long `text` takes to finish typing with the default timing, in ms. */
export function typingDuration(text: string) {
  return DEFAULT_DELAY + Array.from(text).length * DEFAULT_SPEED;
}

interface TypingTextProps {
  segments: TypingSegment[];
  /** Milliseconds between letters. */
  speed?: number;
  /** Milliseconds before the first letter appears. */
  delay?: number;
}

/**
 * Types a title out letter by letter, with a cursor that follows the text and
 * blinks a few times at the end.
 *
 * Pure CSS: the full text is server-rendered, so search engines and no-JS
 * visitors get it immediately. Screen readers read a hidden plain copy; the
 * animated letters are hidden from them. Reduced-motion users see the text at
 * once (see `.type-char` in globals.css).
 */
export function TypingText({
  segments,
  speed = DEFAULT_SPEED,
  delay = DEFAULT_DELAY,
}: TypingTextProps) {
  const runs = segments.map((segment) =>
    typeof segment === "string" ? { text: segment } : segment,
  );
  const fullText = runs.map((run) => run.text).join("");
  const starts = runs.map((_, i) =>
    runs.slice(0, i).reduce((sum, run) => sum + Array.from(run.text).length, 0),
  );
  const step = { "--type-step": `${speed}ms` } as CSSProperties;

  const output = runs.map((run, runIndex) => (
    <span key={runIndex} className={run.className}>
      {Array.from(run.text).map((char, charIndex) => {
        // Spaces stay plain text so the browser wraps lines exactly as before.
        if (char === " ") return " ";
        const at = delay + (starts[runIndex] + charIndex) * speed;
        return (
          <span
            key={charIndex}
            className="type-char"
            style={{ ...step, animationDelay: `${at}ms` }}
          >
            {char}
          </span>
        );
      })}
    </span>
  ));

  return (
    <>
      <span className="sr-only">{fullText}</span>
      <span aria-hidden="true">
        {output}
        <span
          className="type-caret"
          style={{
            animationDelay: `${delay + Array.from(fullText).length * speed}ms`,
          }}
        />
      </span>
    </>
  );
}
