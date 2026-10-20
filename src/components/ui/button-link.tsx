import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  children: ReactNode;
  download?: boolean | string;
  href: string;
  target?: "_blank";
  variant?: "primary" | "secondary";
  unavailable?: boolean;
}

const baseStyles =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300";

const variants = {
  primary:
    "bg-gradient-to-r from-azure-500 to-cyan-300 text-night-950 shadow-[0_10px_30px_-10px_rgba(46,107,255,0.8)] hover:shadow-[0_14px_38px_-10px_rgba(103,232,249,0.8)] hover:-translate-y-0.5",
  secondary:
    "border border-azure-300/25 bg-night-800/50 text-ink backdrop-blur-sm hover:border-azure-300/60 hover:bg-night-800/80",
};

export function ButtonLink({
  children,
  download,
  href,
  target,
  variant = "primary",
  unavailable = false,
}: ButtonLinkProps) {
  if (unavailable) {
    return (
      <span
        aria-disabled="true"
        className={`${baseStyles} cursor-not-allowed border border-azure-300/15 bg-night-800/40 text-ink-faint`}
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]}`}
      download={download}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
