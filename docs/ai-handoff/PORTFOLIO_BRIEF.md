# Portfolio Product Brief, Technical Boundaries and Work Queue

**Version:** 2026-10-17. **Status:** proposed improvements; no site UI changes authorized or implemented by this briefing.

## Product goal
Turn the existing Next.js `personal-space` into a **recruiter-ready portfolio** for a Calgary-based developer seeking software/full-stack/backend roles in Alberta. Readers should be able to assess experience, skills, project judgment and contact options in about **30 seconds**.

**Explicit constraints:** do not start a new site; keep costs low; use Vercel and the existing private GitHub repository; avoid weeks of animation/design work; preserve accuracy and employer confidentiality.

## Audience
- Recruiters screening a resume/portfolio link, often on mobile.
- Technical hiring managers reading case studies to understand ownership and tradeoffs.
- Potential employers comparing candidates for junior–intermediate and intermediate development roles.

## Already built
- **Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, Node.js 22, ESLint, Vitest/Testing Library, Prettier.
- **Routes:** Home, About, Projects, Experience, CV, Contact.
- **Data architecture:** config in `src/config/site.ts` and typed content in `src/data/*.ts`.
- **Assets:** public portrait and public PDF resume.
- **Features:** navigation, responsive components, metadata, sitemap, robots, test tools and Codespaces.
- **Vercel:** `personal-space` project was seen in the Vercel account; `src/config/site.ts` has URL `https://personal-space-vert.vercel.app`. The connector returned a 403 when asked for project details, so do not claim current deployment health.

## Current gaps and risks
1. **Featured projects are entirely placeholders** (`src/data/projects.ts`); homepage explicitly labels them as examples.
2. **Experience timeline is stale/ambiguous**: “May 2025–Present” predates the October 2026 employee-to-contractor change; reconcile with owner.
3. **Public CV PDF freshness unknown**: it exists but may need employment/date/contact review.
4. **Production site status unverified**: inspect independently with authorized Vercel scope or owner-provided screenshot/link.
5. **Case-study evidence/confidentiality**: nonpublic employer work needs summaries and original visuals, not proprietary assets.
6. **No need for backend/CMS/auth** to publish a recruiter-oriented static site; avoid unnecessary runtime costs.

## Design and information architecture guidance
- Retain all existing routes and light, legible UI as a starting point.
- Prioritize: prominent job role/location, concrete experience summary, 2–3 real case studies, skills by category, clean resume/contact links.
- Provide clear type and color contrast, semantic headings and keyboard focus; excellent mobile reading.
- Images/diagrams should have alt text, real relevance and permission to publish.
- Recruiters should find GitHub, LinkedIn, email and CV without searching.
- Prefer readable descriptions and meaningful screenshots over motion-heavy homepages.
- SEO: keep canonical URL, metadata, `sitemap.xml` and `robots.txt` accurate after domain/deploy confirmation.

## Ordered work queue

### P0 — verify before changing public copy
- [ ] Read and confirm the source CV PDF against `RESUME.md`.
- [ ] Confirm Eastech job labels/dates and separate contractor arrangement.
- [ ] Check Vercel production URL/build status and Git integration; **do not redeploy speculatively**.
- [ ] Agree on which employer projects can be described publicly and with what wording.

### P1 — portfolio substance
- [ ] Replace first placeholder with a reviewed anonymous enterprise workflow case study.
- [ ] Replace second placeholder with a reviewed insurance/digital application case study.
- [ ] Add outcomes/tradeoffs and new independent mock illustrations if permitted.
- [ ] Ensure public CV and experience page tell the same truthful timeline.

### P2 — quality / conversion
- [ ] Make headline, location, role targeting and contact visible above the fold.
- [ ] Audit UX on mobile and narrow desktop widths; handle PDF CV fallback.
- [ ] Validate page metadata, links, accessibility and loading performance.
- [ ] Add a third originally built demo only when useful.

## Definition of done (P1)
- Two **owner-approved factual** case studies are live without confidential assets.
- CV/work-history text is consistent.
- All existing routes work and there are no broken links.
- `npm run lint`, `npm run typecheck`, `npm test`, `npm run build` pass; failures are documented.
- A preview is reviewed by the owner before production changes.
- Work and tests are recorded in `MESSAGES.md` or the PR.

## Engineering note
Use `isPlaceholder` on `src/data/projects.ts` appropriately; do not remove this safeguard just to make the site appear complete. Preserve type safety and the existing component contracts.
