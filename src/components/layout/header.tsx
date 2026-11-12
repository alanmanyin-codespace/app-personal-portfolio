"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { CodeBracket } from "@/components/visual/icons";
import { navigation } from "@/data/navigation";
import { handleNavClick } from "@/lib/same-page-hash";

interface HeaderProps {
  pathnameOverride?: string;
}

export function Header({ pathnameOverride }: HeaderProps) {
  const currentPathname = usePathname();
  const router = useRouter();
  const pathname = pathnameOverride ?? currentPathname;
  const [isStackVisible, setIsStackVisible] = useState(false);
  const activeHref = pathname === "/" && isStackVisible ? "/#stack" : pathname;

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const stackSection = document.getElementById("stack");

    if (!stackSection) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStackVisible(
          entry.isIntersecting || entry.boundingClientRect.top <= 64,
        );
      },
      {
        rootMargin: "-64px 0px -50% 0px",
        threshold: 0,
      },
    );

    observer.observe(stackSection);

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="sticky top-0 z-30 border-b border-azure-300/10 bg-night-900/70 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-8">
        <Link
          href="/"
          onClick={(event) => handleNavClick(event, "/", router)}
          className="flex items-center gap-2.5 rounded-md text-base font-semibold tracking-tight text-ink hover:text-azure-200"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-azure-300/30 bg-night-800/70 text-azure-300">
            <CodeBracket className="h-4 w-4" />
          </span>
          Alan Man
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = activeHref === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(event) =>
                      handleNavClick(event, item.href, router)
                    }
                    aria-current={isActive ? "page" : undefined}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-azure-200"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-azure-400 to-cyan-300"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <MobileNavigation activeHref={activeHref} />
      </Container>
    </header>
  );
}
