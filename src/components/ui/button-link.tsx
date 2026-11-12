import Link from "next/link";
import type { ReactNode } from "react";

const baseStyles =
  "group inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300";

const sizes = {
  default: "min-h-11 gap-2 px-5 py-2.5 text-sm",
  compact: "min-h-9 gap-1.5 px-3.5 py-1.5 text-xs",
};

const variants = {
  primary:
    "bg-gradient-to-r from-azure-500 to-cyan-300 text-night-950 shadow-[0_10px_30px_-10px_rgba(46,107,255,0.8)] hover:shadow-[0_14px_38px_-10px_rgba(103,232,249,0.8)] hover:-translate-y-0.5",
  secondary:
    "border border-azure-300/25 bg-night-800/50 text-ink backdrop-blur-sm hover:border-azure-300/60 hover:bg-night-800/80",
  // Solid navy, matching the Tech Stack chips.
  solid:
    "border border-azure-300/30 bg-night-700 text-ink hover:border-azure-300/60 hover:-translate-y-0.5",
  // Solid brand buttons. WhatsApp uses a deeper green than its bright brand
  // colour so it sits calmly on the dark theme.
  whatsapp: "bg-[#1d9e4f] text-white hover:bg-[#188a44] hover:-translate-y-0.5",
  linkedin: "bg-[#0a66c2] text-white hover:bg-[#004182] hover:-translate-y-0.5",
};

export function buttonClasses(
  variant: keyof typeof variants = "primary",
  size: keyof typeof sizes = "default",
) {
  return `${baseStyles} ${sizes[size]} ${variants[variant]}`;
}

interface ButtonLinkProps {
  children: ReactNode;
  download?: boolean | string;
  href: string;
  target?: "_blank";
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  unavailable?: boolean;
}

export function ButtonLink({
  children,
  download,
  href,
  target,
  variant = "primary",
  size = "default",
  unavailable = false,
}: ButtonLinkProps) {
  if (unavailable) {
    return (
      <span
        aria-disabled="true"
        className={`${baseStyles} ${sizes[size]} cursor-not-allowed border border-azure-300/15 bg-night-800/40 text-ink-faint`}
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={buttonClasses(variant, size)}
      download={download}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
