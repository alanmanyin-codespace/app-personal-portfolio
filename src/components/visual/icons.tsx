import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* ---- UI icons: one consistent 1.6 stroke, round caps ---- */

function Stroke({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Stroke>
);

export const Mail = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </Stroke>
);

export const Download = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 20h16" />
  </Stroke>
);

export const CodeBracket = (p: IconProps) => (
  <Stroke {...p}>
    <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13 5l-2 14" />
  </Stroke>
);

export const Github = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M9 19c-4 1.4-4-2.2-6-2.6m12 4.6v-3.8a3.3 3.3 0 0 0-.9-2.5c3-.3 6.1-1.5 6.1-6.6a5.1 5.1 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.6 12.6 0 0 0-6.6 0C6.3 1 5.2 1.3 5.2 1.3a4.8 4.8 0 0 0-.1 3.6A5.1 5.1 0 0 0 3.7 8.5c0 5.1 3.1 6.3 6 6.6a3.3 3.3 0 0 0-.9 2.5V21" />
  </Stroke>
);

export const Linkedin = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 17v-7" />
  </Stroke>
);

export const Briefcase = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="7" width="18" height="13" rx="2.5" />
    <path d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7M3 12h18" />
  </Stroke>
);

export const BrowserWindow = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2.5" />
    <path d="M3 8h18M7 6h.01M10 6h.01" />
  </Stroke>
);

export const ServerStack = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="4" width="18" height="6" rx="2" />
    <rect x="3" y="14" width="18" height="6" rx="2" />
    <path d="M7 7h.01M7 17h.01M11 7h7M11 17h7" />
  </Stroke>
);

export const Cloud = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M7 18h10a4 4 0 0 0 .7-7.9A6 6 0 0 0 6.4 8.6 4.8 4.8 0 0 0 7 18Z" />
    <path d="M9 14h6M12 11v6" />
  </Stroke>
);

export const Sparkles = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3ZM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
  </Stroke>
);

export const Phone = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z" />
  </Stroke>
);

/* ---- Brand marks for the tech constellation (simplified, authored) ---- */

export const ReactMark = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <circle cx="12" cy="12" r="2" fill="#61dafb" />
    <g fill="none" stroke="#61dafb" strokeWidth="1.1">
      <ellipse cx="12" cy="12" rx="10" ry="4.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
    </g>
  </svg>
);

export const TypeScriptMark = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178c6" />
    <text
      x="12"
      y="16.5"
      textAnchor="middle"
      fontFamily="var(--font-mono, monospace)"
      fontWeight="700"
      fontSize="9.5"
      fill="#ffffff"
    >
      TS
    </text>
  </svg>
);

export const PythonMark = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      d="M12 2.5c-2.6 0-4.6.5-4.6 3v2.3h4.7v.7H5.9C3.6 8.5 2.5 10 2.5 12.4s1 3.9 3.4 3.9h1.3v-2.4c0-2 1.6-3.6 3.7-3.6h3.9c1.7 0 3-1.3 3-3V5.5c0-1.8-1.6-3-3.7-3Zm-2.6 2a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Z"
      fill="#3b74ab"
    />
    <path
      d="M12 21.5c2.6 0 4.6-.5 4.6-3v-2.3h-4.7v-.7h6.2c2.3 0 3.4-1.5 3.4-3.9s-1-3.9-3.4-3.9h-1.3v2.4c0 2-1.6 3.6-3.7 3.6H8.6c-1.7 0-3 1.3-3 3V18.5c0 1.8 1.6 3 3.7 3Zm2.6-2a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z"
      fill="#ffd548"
    />
  </svg>
);

export const AzureMark = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <defs>
      <linearGradient id="az" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#39b0ff" />
        <stop offset="1" stopColor="#1b72d8" />
      </linearGradient>
    </defs>
    <path
      d="M9.7 3.5 4 18.1h3.7l1.4-4 4 4.4H6l-.5 1.4H20L13.6 3.5Z"
      fill="url(#az)"
    />
  </svg>
);

export const DatabaseMark = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <g fill="none" stroke="#8fb6ff" strokeWidth="1.4">
      <ellipse cx="12" cy="5.5" rx="7" ry="2.8" />
      <path d="M5 5.5v13c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8v-13" />
      <path d="M5 12c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8" />
    </g>
  </svg>
);

export const ShieldMark = (p: IconProps) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
    <path
      d="M12 2.5 4.5 5.5v6c0 4.6 3.1 8.1 7.5 10 4.4-1.9 7.5-5.4 7.5-10v-6Z"
      fill="none"
      stroke="#c4b5fd"
      strokeWidth="1.4"
    />
    <path
      d="m8.6 12 2.4 2.4 4.4-4.6"
      fill="none"
      stroke="#c4b5fd"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
