# Resume-Based Portfolio Enrichment Implementation Plan

**Goal:** Replace portfolio placeholders with verified résumé content, anonymous professional engagements, an extracted portrait, and a public CV download.

**Architecture:** Keep all professional facts in typed data and central configuration. Pages consume reusable content models, while static portrait and CV assets live under `public/` and are served by Next.js without additional services.

**Tech stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Vitest, Testing Library, npm.

## Global constraints

- Do not display employer names, phone number, or work-permit details on normal website pages.
- The complete current résumé PDF is intentionally public.
- Do not invent achievements, metrics, project links, or professional facts.
- Preserve the existing bright, accessible, responsive design system.
- Do not add runtime dependencies.

## Task 1: Model verified professional content

**Files:**

- Modify: `src/types/content.ts`
- Modify: `src/data/profile.ts`
- Modify: `src/data/experience.ts`
- Modify: `src/data/skills.ts`
- Create: `src/data/education.ts`
- Modify: `src/data/content.test.ts`

**Deliverable:** Typed résumé-backed profile, anonymous engagement, skill, and education data.

- [ ] Add failing tests that require two non-placeholder anonymous engagements, verified education, and résumé-backed content.
- [ ] Run `npm test -- src/data/content.test.ts` and confirm the new assertions fail because placeholder data remains.
- [ ] Update content types and data with facts from `Resume.pdf`.
- [ ] Run `npm test -- src/data/content.test.ts` and confirm it passes.
- [ ] Review source files for employer names, phone number, and work-permit wording.

## Task 2: Render anonymous experience and education

**Files:**

- Modify: `src/components/content/experience-item.tsx`
- Modify: `src/components/content/experience-item.test.tsx`
- Modify: `src/app/experience/page.tsx`
- Modify: `src/app/about/page.tsx`
- Modify: `src/app/routes.test.tsx`

**Deliverable:** Public experience and About pages that communicate verified work and education without employer identity.

- [ ] Add failing component and route tests for anonymous engagements, résumé-backed narrative, and education.
- [ ] Run the focused tests and confirm they fail for missing content.
- [ ] Update the experience component and both pages.
- [ ] Run the focused tests and confirm they pass.
- [ ] Confirm placeholder notices are removed from enriched pages.

## Task 3: Add portrait-led home presentation

**Files:**

- Create: `public/images/alan-man-profile.png`
- Modify: `src/app/page.tsx`
- Modify: `src/app/routes.test.tsx`

**Deliverable:** Responsive hero with Alan's extracted résumé portrait and verified positioning.

- [ ] Add a failing home-route test for the portrait, alt text, and updated call-to-action copy.
- [ ] Run the focused route test and confirm it fails because the portrait is absent.
- [ ] Render the résumé at sufficient resolution, crop the portrait, and optimize it as PNG.
- [ ] Update the home hero using `next/image`.
- [ ] Run the focused route test and confirm it passes.

## Task 4: Publish the CV and verified contact channels

**Files:**

- Create: `public/cv/alan-man-cv.pdf`
- Modify: `src/config/site.ts`
- Modify: `src/app/cv/page.tsx`
- Modify: `src/app/contact/page.tsx`
- Modify: `src/app/routes.test.tsx`
- Modify: `src/data/content.test.ts`

**Deliverable:** Public PDF with functional view/download actions and verified email/LinkedIn contact links.

- [ ] Add failing tests for enabled CV configuration, View CV and Download CV actions, verified contact links, and absence of the phone number.
- [ ] Run focused tests and confirm they fail because CV/contact placeholders remain.
- [ ] Copy the current source PDF into the public CV path.
- [ ] Enable CV and contact values in central configuration.
- [ ] Update the CV and Contact pages and remove obsolete placeholder notices.
- [ ] Run focused tests and confirm they pass.

## Task 5: Validate and publish

**Files:**

- Modify as required by formatting or verification failures.

**Deliverable:** Verified production-ready change committed and pushed to `main`.

- [ ] Run `npm test`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run typecheck`.
- [ ] Run `npm run format:check`.
- [ ] Run `npm run build`.
- [ ] Search public page sources for employer names, phone number, and work-permit wording.
- [ ] Inspect `git diff --check` and the final change summary.
- [ ] Commit with a professional project-specific message.
- [ ] Push `main` to GitHub.
