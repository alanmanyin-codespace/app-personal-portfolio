import type { ReactNode } from "react";

interface PlaceholderNoticeProps {
  children: ReactNode;
}

export function PlaceholderNotice({ children }: PlaceholderNoticeProps) {
  return (
    <aside
      aria-label="Placeholder content notice"
      className="rounded-lg border border-violet-300/25 bg-violet-300/10 px-4 py-3 text-sm leading-6 text-violet-300"
    >
      <strong className="font-semibold">Placeholder:</strong> {children}
    </aside>
  );
}
