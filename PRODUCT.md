# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters, hiring managers, and engineering leads evaluating Alan Man
for full-stack roles. They arrive from a job application, LinkedIn, or GitHub,
usually scanning quickly to decide whether to shortlist or contact. Audience is
mixed and general — both non-technical recruiters who need fast legibility and
senior engineers who judge depth of craft. Success is the visitor understanding
Alan's fit within seconds and taking an action (email, LinkedIn, download CV, or
shortlist).

## Product Purpose

A personal job-search portfolio for Alan Man, a full-stack developer with 5+
years delivering enterprise web applications. It exists to make his fit obvious
to a mixed hiring audience and convert a scan into contact. Deployed on the
existing Vercel project `personal-space`.

## Positioning

End-to-end enterprise full-stack delivery: one developer who ships across React/
TypeScript frontends, Python/Java/NestJS services, SQL and NoSQL data layers,
Microsoft Entra ID / Graph identity integration, and Azure cloud + CI/CD — and
supports it in production. The differentiator is cross-stack range on
real enterprise systems (case management, digital insurance journeys, RBAC),
not a single specialty.

## Operating Context

Visited on both desktop and mobile. Reached mid-job-search, often one tab among
several candidate sites. Routes today: home, about, experience, projects,
contact, cv (PDF at `/cv/alan-man-cv.pdf`, `cvAvailable: true`). Page structure
is open to improvement with the owner's approval.

## Capabilities and Constraints

- Stack is fixed: Next.js 16 (App Router) + React 19 + Tailwind CSS v4,
  TypeScript, deployed on Vercel. No new framework or data/config systems.
- Content and config live in `src/data/*` and `src/config/site.ts`; reuse them
  rather than introducing parallel systems.
- All factual copy (resume content, titles, summaries, project descriptions)
  must be preserved verbatim; no invented claims.
- The "May 2025–Present" employment wording is flagged as possibly outdated.
  Do not publish changes around it without explicit owner confirmation; leave
  as-is for now.
- Must work well for both non-technical recruiters (fast legibility) and
  engineers (depth), on desktop and mobile.

## Brand Commitments

- Name: Alan Man. Title: "Full-Stack Developer building enterprise web
  applications."
- Real contact: email alanmanyin919@outlook.com, phone +1 825 964 5554,
  GitHub alanmanyin-codespace, LinkedIn alanmanyin919.
- An original owner portrait asset exists and is rendered on the home page
  (added via PR #15); treat it as a real, owned asset.
- Voice: plain, precise, enterprise-credible; avoids hype.

## Evidence on Hand

- Real resume content in `src/data/profile.ts`, `experience.ts`, `skills.ts`,
  `education.ts`; handoff docs in `docs/ai-handoff/` (RESUME.md, BACKGROUND.md,
  CASE_STUDIES.md, PORTFOLIO_BRIEF.md).
- Two real roles with detailed, verified achievements: an enterprise case-
  management & AI workflow platform (System Developer, 2025–present) and a
  digital insurance application platform (Analyst Programmer, 2021–2025).
- Owner portrait image asset (real).
- Projects in `src/data/projects.ts` are currently PLACEHOLDER case studies
  (slugs end in `-placeholder`). Do not present them as real shipped products or
  fabricate metrics/clients; keep labeled as representative until the owner
  supplies real case studies.

## Product Principles

1. Legible in seconds for a recruiter, deep enough to earn an engineer's trust —
   serve both without diluting either.
2. Evidence over adjectives: show the range of real enterprise work, never
   inflate placeholder projects into claims.
3. Preserve factual truth; design changes the frame, never the facts.
4. Convert the scan into contact — a clear, ever-present path to reach Alan.
5. Fast and accessible on desktop and mobile; craft lives in precise detail.

## Accessibility & Inclusion

Must meet standard web accessibility expectations (keyboard, contrast, semantic
structure, reduced-motion support) given a professional mixed audience and
unknown assistive-tech use.
