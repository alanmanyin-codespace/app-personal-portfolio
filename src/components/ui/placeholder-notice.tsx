import type { ReactNode } from "react";

interface PlaceholderNoticeProps {
  children: ReactNode;
}

export function PlaceholderNotice({ children }: PlaceholderNoticeProps) {
  return (
    <aside
      aria-label="Placeholder content notice"
      className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-sm leading-6 text-blue-950"
    >
      <strong>Placeholder:</strong> {children}
    </aside>
  );
}
