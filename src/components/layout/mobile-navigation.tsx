"use client";

import Link from "next/link";
import { useState } from "react";

import { navigation } from "@/data/navigation";

interface MobileNavigationProps {
  pathname: string;
}

export function MobileNavigation({ pathname }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-800 transition-colors hover:border-blue-400 hover:text-blue-700"
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
          className="absolute inset-x-0 top-full border-b border-slate-200 bg-white px-5 py-4 shadow-lg"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                    }`}
                    onClick={() => setIsOpen(false)}
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
