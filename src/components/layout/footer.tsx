import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-azure-300/10 bg-night-950/60 backdrop-blur-sm">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-azure-400/40 to-transparent"
      />
      <Container className="grid gap-8 py-12 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-semibold text-ink">{siteConfig.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-ink-muted">
            {siteConfig.title}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {siteConfig.socials
              .filter((social) => social.href)
              .map((social) => (
                <Link
                  key={social.label}
                  href={social.href as string}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-sm text-ink-muted transition-colors hover:text-azure-200"
                >
                  {social.label}
                </Link>
              ))}
          </div>
          <p className="mt-6 text-sm text-ink-faint">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            {navigation.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm text-ink-muted transition-colors hover:text-azure-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
