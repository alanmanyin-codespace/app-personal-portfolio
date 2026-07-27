import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navigation } from "@/data/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-semibold text-slate-950">{siteConfig.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
            {siteConfig.title}
          </p>
          <p className="mt-4 text-sm text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            {navigation.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm text-slate-600 hover:text-blue-700"
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
