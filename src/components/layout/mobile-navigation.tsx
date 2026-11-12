"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { navigation } from "@/data/navigation";
import { handleNavClick } from "@/lib/same-page-hash";

interface MobileNavigationProps {
  activeHref: string;
}

export function MobileNavigation({ activeHref }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-azure-300/25 bg-night-800/60 text-ink transition-colors hover:border-azure-300/60 hover:text-azure-200"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true" className="text-xl leading-none">
          {isOpen ? "×" : "☰"}
        </span>
      </button>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-azure-300/15 bg-night-900/95 px-5 py-4 shadow-[0_24px_60px_-20px_rgba(5,10,30,0.9)] backdrop-blur-xl"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1">
            {navigation.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-azure-500/15 text-azure-200"
                        : "text-ink-muted hover:bg-night-800/70 hover:text-ink"
                    }`}
                    onClick={(event) => {
                      handleNavClick(event, item.href, router);
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
