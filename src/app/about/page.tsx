import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { PageHeader } from "@/components/ui/page-header";
import { education } from "@/data/education";
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
        title="Full-stack perspective, practical delivery"
        description="I build enterprise applications across the interface, service, data, cloud, and deployment layers."
      />
      <Container className="grid gap-12 py-16 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.8fr)] lg:py-20">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-ink">
              Professional background
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-ink-muted">
              {profile.background.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ink">Education</h2>
            <div className="mt-5 grid gap-4">
              {education.map((item) => (
                <article
                  key={item.qualification}
                  className="glass rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-ink">
                    {item.qualification}
                  </h3>
                  <p className="mt-2 leading-7 text-ink-muted">
                    {item.institution}
                  </p>
                  <p className="mt-1 font-mono text-xs text-azure-200">
                    {item.period}
                  </p>
                </article>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ink">Career focus</h2>
            <p className="mt-5 text-lg leading-8 text-ink-muted">
              {profile.careerFocus}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-ink">
              Personal introduction
            </h2>
            <p className="mt-5 text-lg leading-8 text-ink-muted">
              {profile.introduction}
            </p>
          </section>
        </div>

        <aside>
          <div className="glass sticky top-24 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-ink">Technical strengths</h2>
            <ul className="mt-5 space-y-3 text-ink-muted">
              {profile.technicalStrengths.map((strength) => (
                <li key={strength} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-azure-400"
                  />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Container>
    </>
  );
}
