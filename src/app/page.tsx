import type { Metadata } from "next";
import Image from "next/image";

import {
  ContactLinks,
  type ContactLink,
} from "@/components/content/contact-links";
import { HomeSkillGroups } from "@/components/content/home-skill-groups";
import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button-link";
import { CvWindowButton } from "@/components/ui/cv-window-button";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { TypingText } from "@/components/ui/typing-text";
import { DocumentText, Linkedin, WhatsApp } from "@/components/visual/icons";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
  title: { absolute: "Alan Man's Portfolio" },
  description:
    "Portfolio home for Alan Man, a full-stack developer building enterprise web applications across frontend, backend, cloud, and data.",
};

const linkedin = siteConfig.socials.find(
  (social) => social.label === "LinkedIn",
);

const contactLinks: ContactLink[] = [
  ...(linkedin?.href
    ? [
        {
          label: "LinkedIn",
          href: linkedin.href,
          icon: "linkedin" as const,
          color: "text-[#5a9bff]",
          external: true,
        },
      ]
    : []),
  ...(siteConfig.whatsapp.href
    ? [
        {
          label: "WhatsApp",
          href: siteConfig.whatsapp.href,
          icon: "whatsapp" as const,
          color: "text-[#25d366]",
          external: true,
        },
      ]
    : []),
  ...(siteConfig.email.href
    ? [
        {
          label: "Email",
          href: siteConfig.email.href,
          icon: "mail" as const,
          color: "text-[#facc15]",
          copyText: siteConfig.email.displayValue,
        },
      ]
    : []),
];

const homeSkillGroups = [
  ...skills.map((group) =>
    group.name === "Cloud, data, and delivery"
      ? { ...group, name: "Cloud, data, identity, and delivery" }
      : group,
  ),
  {
    name: "AI-assisted development tools",
    skills: ["Claude Code", "ChatGPT", "Gemini", "GitHub Copilot"],
  },
];

export default function HomePage() {
  return (
    <>
      <section className="pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,0.7fr)] lg:items-start lg:gap-14">
            <div>
              <h1 className="max-w-4xl text-5xl font-bold tracking-[-0.04em] text-ink text-balance sm:text-6xl lg:text-7xl">
                <TypingText
                  speed={20}
                  segments={[
                    "I build ",
                    { text: "enterprise systems", className: "text-azure-400" },
                    " end to end.",
                  ]}
                />
              </h1>
              <p
                className="rise mt-5 max-w-3xl text-lg leading-8 text-ink-muted"
                // Rises in with the journey text, as the title starts typing.
                style={{ animationDelay: "0.15s" }}
              >
                {profile.title}. Based in Calgary, Alberta.
              </p>

              <div
                id="my-journey"
                role="region"
                aria-label="My journey"
                className="rise mt-8 scroll-mt-24"
                // Rises in alongside the title as it starts typing.
                style={{ animationDelay: "0.15s" }}
              >
                <div className="max-w-3xl space-y-5 text-lg leading-8 text-ink-muted">
                  <p>
                    My journey into software development started with a
                    curiosity about how technology could turn complicated ideas
                    into useful, everyday experiences. I began by building
                    mobile applications, then gradually expanded into frontend,
                    backend, databases, cloud services, and everything involved
                    in bringing software to production.
                  </p>
                  <p>
                    Along the way, I&apos;ve worked on digital insurance
                    journeys, enterprise case-management platforms, identity
                    integrations, and data-driven systems. Each project has
                    taught me something new—not only about technology, but also
                    about listening, solving the right problem, and building
                    software people can depend on.
                  </p>
                  <p>
                    I&apos;m still learning, still exploring, and always looking
                    forward to the next challenge.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <CvWindowButton
                    href={siteConfig.cvPath}
                    variant="solid"
                    size="compact"
                  >
                    <DocumentText className="h-3.5 w-3.5" />
                    View CV
                  </CvWindowButton>
                  <ButtonLink
                    href={siteConfig.whatsapp.href ?? "/contact"}
                    target="_blank"
                    variant="whatsapp"
                    size="compact"
                  >
                    <WhatsApp className="h-3.5 w-3.5" />
                    WhatsApp
                  </ButtonLink>
                  {linkedin?.href ? (
                    <ButtonLink
                      href={linkedin.href}
                      target="_blank"
                      variant="linkedin"
                      size="compact"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn
                    </ButtonLink>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md lg:sticky lg:top-28">
              <div className="portrait-card overflow-hidden rounded-2xl border border-azure-300/35 bg-night-900/75 p-2 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.85)]">
                <Image
                  src="/images/alan-man-profile.jpg"
                  alt={`Portrait of ${siteConfig.name}`}
                  width={720}
                  height={900}
                  priority
                  className="aspect-[4/5] h-auto w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="stack"
        aria-labelledby="stack-heading"
        className="scroll-mt-20 pt-4 pb-16 sm:pt-6 sm:pb-20"
      >
        <Container>
          <RevealOnScroll>
            <h2
              id="stack-heading"
              className="text-3xl font-bold tracking-tight text-ink sm:text-4xl"
            >
              Tech Stack
            </h2>
            <div className="mt-8">
              <HomeSkillGroups groups={homeSkillGroups} />
            </div>
          </RevealOnScroll>
        </Container>
      </section>

      {/* Contact */}
      <section aria-labelledby="contact-heading" className="py-16 sm:py-24">
        <Container>
          <RevealOnScroll className="text-center">
            <h2
              id="contact-heading"
              className="text-4xl font-bold tracking-tight text-ink sm:text-5xl"
            >
              Contact <span className="text-azure-400">Me</span>
            </h2>
            <p className="mt-5 text-lg text-ink-muted sm:text-xl">
              Open to new opportunities. Feel free to reach out.
            </p>
            <ContactLinks links={contactLinks} />
          </RevealOnScroll>
        </Container>
      </section>
    </>
  );
}
