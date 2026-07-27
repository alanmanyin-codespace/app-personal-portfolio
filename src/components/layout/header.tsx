"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Container } from "@/components/layout/container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { navigation } from "@/data/navigation";

interface HeaderProps {
  pathnameOverride?: string;
}

export function Header({ pathnameOverride }: HeaderProps) {
  const currentPathname = usePathname();
  const pathname = pathnameOverride ?? currentPathname;

  return (
    <header className="relative z-20 border-b border-slate-200 bg-white/95">
      <Container className="flex min-h-18 items-center justify-between gap-8">
        <Link
          href="/"
          className="rounded-md text-base font-bold tracking-tight text-slate-950 hover:text-blue-700"
        >
          Alan Man
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <MobileNavigation pathname={pathname} />
      </Container>
    </header>
  );
}
