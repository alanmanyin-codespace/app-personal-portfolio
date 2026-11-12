"use client";

import { useEffect, useRef, useState } from "react";

import { Linkedin, Mail, WhatsApp } from "@/components/visual/icons";

const icons = { linkedin: Linkedin, whatsapp: WhatsApp, mail: Mail };

export interface ContactLink {
  label: string;
  href: string;
  icon: keyof typeof icons;
  /** Tailwind text-colour class for the icon. */
  color: string;
  external?: boolean;
  /**
   * Copied to the clipboard on click. Used for email: a mailto: link does
   * nothing on devices without a mail app, so the visitor still gets the
   * address.
   */
  copyText?: string;
}

export function ContactLinks({ links }: { links: ContactLink[] }) {
  const [copied, setCopied] = useState<string | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy(link: ContactLink) {
    if (!link.copyText) return;
    try {
      await navigator.clipboard.writeText(link.copyText);
      setCopied(link.label);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(null), 2500);
    } catch {
      // Clipboard blocked: the mailto: link still runs as normal.
    }
  }

  return (
    <ul className="mt-12 flex flex-wrap items-start justify-center gap-x-14 gap-y-8">
      {links.map((link) => {
        const Icon = icons[link.icon];
        const isCopied = copied === link.label;

        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              onClick={() => void copy(link)}
              title={
                link.copyText ? `${link.copyText} (click to copy)` : undefined
              }
              className="group flex flex-col items-center gap-3 rounded-lg text-ink-muted transition-colors hover:text-ink"
            >
              <Icon
                className={`h-12 w-12 transition-transform duration-300 group-hover:-translate-y-1 ${link.color}`}
              />
              <span className="text-base">{link.label}</span>
            </a>
            {link.copyText ? (
              <span
                role="status"
                className={`mt-1 block text-center text-sm text-azure-200 transition-opacity duration-300 ${
                  isCopied ? "opacity-100" : "opacity-0"
                }`}
              >
                {isCopied ? "Copied!" : ""}
              </span>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
