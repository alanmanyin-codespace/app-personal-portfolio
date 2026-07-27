import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderNotice } from "@/components/ui/placeholder-notice";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background, career focus, and technical strengths for Alan Man.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A thoughtful developer focused on useful software"
        description="This page is structured for a concise professional narrative. The current copy is provisional and ready to be replaced with verified details."
      />
      <Container className="grid gap-12 py-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.8fr)] lg:py-20">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Professional background
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-slate-600">
              {profile.background.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-950">Career focus</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {profile.careerFocus}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Personal introduction
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {profile.introduction}
            </p>
          </section>
        </div>

        <aside>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-slate-950">
              Technical strengths
            </h2>
            <ul className="mt-5 space-y-3 text-slate-700">
              {profile.technicalStrengths.map((strength) => (
                <li key={strength} className="flex gap-3">
                  <span aria-hidden="true" className="text-blue-600">
                    •
                  </span>
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-5">
            <PlaceholderNotice>
              Replace this page with an accurate career narrative before
              publishing it for job applications.
            </PlaceholderNotice>
          </div>
        </aside>
      </Container>
    </>
  );
}
