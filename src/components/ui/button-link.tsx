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
  "inline-flex min-h-11 items-center justify-center rounded-lg px-5 py-2.5 text-sm font-bold transition-colors";

const variants = {
  primary: "bg-blue-700 text-white hover:bg-blue-800",
  secondary:
    "border border-slate-300 bg-white text-slate-800 hover:border-blue-400 hover:text-blue-700",
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
        className={`${baseStyles} cursor-not-allowed border border-slate-200 bg-slate-100 text-slate-500`}
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
