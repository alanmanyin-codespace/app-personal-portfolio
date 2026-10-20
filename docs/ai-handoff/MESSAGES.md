# Shared Agent Messages & Decision Log

**Use this file as the central message space** for ChatGPT, Claude Code and Codex working on `personal-space`.

- **Read first:** newest entry at top, then linked briefing files in `README.md`.
- **Write:** add a new dated entry at the top with Agent, Topic, Status, Branch/PR, Changes, Checks, Decision needed and Next owner.
- **When branches differ:** communicate in the PR instead of force-overwriting another agent's log. Merge back to `main` before another session relies on it.
- This is **manual Git-based asynchronous communication**, not shared live memory. An agent will not see edits until it pulls/fetches the latest branch.
- Do not include secrets, private documents, confidential source excerpts or client data in messages.

## Pending decisions
- [ ] **CV chronology:** What is the owner-approved public wording for Eastech employee employment through 2026-10-02 and distinct consulting engagement from 2026-10-04?
- [ ] **Projects:** Which real projects are approved for anonymous case studies? What original screenshots/diagrams may be created?
- [x] **Resume source:** Owner approved the external Google Drive CV URL on 2026-10-19. The legacy `public/cv/alan-man-cv.pdf` remains unlinked.
- [ ] **Vercel:** Confirm live project URL, current production status and access to project scope.
- [x] **Public contact:** Owner approved publishing +1 825 964 5554 in the CV and website Contact page on 2026-10-18. Email, LinkedIn and portfolio GitHub URLs remain as currently configured.

---

## 2026-10-19 — Codex — Role-first homepage layout
**Topic:** Apply the owner-approved reference direction to the homepage, with the full verified stack beside the portrait and more detailed experience rows.
**Status:** Implemented on `codex/role-first-homepage`; **not deployed.**  
**Changes:** Rebuilt `src/app/page.tsx` as a split hero with the complete frontend, backend/integration, cloud/data/identity/delivery, and owner-confirmed AI-tool groups; retained the existing portrait and primary actions. Added `home-skill-groups.tsx`, per-item `skill-mark.tsx` icons, `home-experience-list.tsx`, and a CV-backed `skill-depth-panel.tsx`. Work experience now uses one article per role, with the date directly below the role title and all verified contributions and technologies visible; the adjacent skills panel uses qualitative depth labels rather than fabricated percentages. The homepage and CV page now use the owner-approved Google Drive resume URL instead of the internal PDF. Updated route tests for the new homepage and CV contracts.
**Preserved:** Public work-history dates and labels are unchanged pending the chronology decision. Featured project cards remain explicitly labeled placeholders. Existing global Starlight Stack styling and unrelated working-tree changes were not rewritten.
**Checks:** `npm run lint`, `npm run typecheck`, `npm test` (26/26), and `npm run build` pass. Google Drive returned HTTP 200. Playwright desktop (1440px) and mobile (390px) visual review completed. Scoped Impeccable scan found no new component-source failures; URL warnings are attributable to existing global button/contact/project-card styling.
**Next owner:** Review the committed homepage changes. Deployment remains owner-directed; chronology and real-project decisions remain outstanding.

## 2026-10-18 — Claude Code — "Starlight Stack" UI redesign
**Topic:** Bold full visual redesign of the whole site via the Impeccable skill.
**Status:** Implemented in the working tree on `main`; **not committed, not deployed.** Owner review requested before committing/branching.
**Direction:** Owner-chosen. Pinned reference (teddyyee-portfolio.vercel.app — dark navy/blue glassmorphism, Inter + mono) fused with an owner-requested **starlight / night-sky background**. Persuade mode, mixed recruiter/engineer audience. Comp-first; approved hero composition = "comp 3" (centered name, tech constellation around the real portrait, three glass panels of real experience, CTAs).
**Changes:** New dark **"Starlight Stack"** world across every route. New files: `src/components/visual/{starfield,icons}.tsx`, `src/components/content/hero-constellation.tsx`, `public/images/nebula-bg.webp` (generated backdrop, provenance embedded), `PRODUCT.md`, `DESIGN.md`, `.impeccable/*`. Reskinned: `globals.css` (dark tokens, `.glass`/`.glass-lit`, Inter+Geist Mono via next/font), `layout.tsx`, header/footer/mobile-nav, buttons, section/page headings, project-card, skill-list, experience-item, case-study, placeholder-notice, and the home/about/projects/experience/contact/cv/404 pages. Updated 2 tests to new button copy.
**Preserved:** all factual resume copy; **"May 2025–Present" wording untouched** (still pending owner confirmation — see Pending decisions). Projects remain labeled placeholders; no fabricated project visuals/claims. Stack unchanged (Next.js 16 + Tailwind v4, Vercel).
**Checks:** `next build` passes; **22/22 vitest pass**; `tsc`/eslint clean; Impeccable slop-detector returns 0; finish-review scored all visual findings RESOLVED; text contrast measured (subtitle 6.9:1, pill/panel firmed up). Verified with headless-Chrome CDP screenshots at 1440 + 390 (in `.impeccable/review/`).
**Open (disclosed):** the comp-led build-phase hero pixel-gate was intentionally **not run** (hero was reflowed from the comp to put the primary CTA above the fold per the direction contract) — recorded as skipped-with-cause in `.impeccable` build state.
**Next owner:** review the design in a local `npm run dev` or a Vercel preview; if approved, I can commit to a feature branch + open a PR. Still blocked on employment-chronology wording and which real projects may replace placeholders.

## 2026-10-18 — ChatGPT — Original profile portrait
**Status:** Feature branch `feat/original-portrait-20261018`; PR pending.  
**Scope:** Owner-supplied, original profile image uploaded privately to Google Drive `Personal Space Portfolio`, and optimized JPEG used on the portfolio homepage at `public/images/alan-man-profile.jpg`.  
**Changes:** New web portrait, homepage `next/image` source, and home-route image test. Retained the previous PNG as a safe fallback.  
**Checks:** Confirmed 1254x1254 original and optimized 150 KB JPEG; application tests/build not run in the GitHub connector.  
**Next:** Owner review of image crop/render in preview before merge.

## 2026-10-18 — ChatGPT — Issue #2 public contact correction
**Status:** Branch `fix/contact-info-20261018` prepared for review; contact changes only, employment chronology review remains open.  
**Owner approval:** Show the Canadian phone number +1 825 964 5554 in the downloadable public CV and the website Contact page.  
**Files:** `src/config/site.ts`, `src/types/content.ts`, `src/app/contact/page.tsx`, `public/cv/alan-man-cv.pdf`.  
**Checks:** PDF rendered/extracted separately; GitHub CI checks to be confirmed.  
**Next owner:** Review phone and PDF content on the PR, then merge if accepted. Other Issue #2 audit checkpoints remain unresolved. 

---

## 2026-10-17 — ChatGPT — Agent handoff bootstrap
**Status:** Documentation prepared on branch `docs/agent-handoff-20261017` for owner review.  
**Goal:** Provide a durable space and enough career/site context for Claude Code and Codex to continue work without repeatedly asking for resume/background.  
**Scope:** Documentation only; no changes to `src/`, `public/` or Vercel deployment.  
**Files introduced:** root `AGENTS.md`, root `CLAUDE.md`, `docs/ai-handoff/{README,BACKGROUND,RESUME,CASE_STUDIES,PORTFOLIO_BRIEF,MESSAGES}.md`.  
**Sources examined:** existing repository README, package, profile, experience, education, skills and project records; prior resume working copy from Google Drive; current user-supplied employment timeline.  
**Checks:** content and repo-path verification only; **application lint/tests/build not run** because this branch changes Markdown docs only.  
**Handoff to Claude Code/Codex:** First read `AGENTS.md` and the shared context, then perform **P0 audit before modifying public resume or project cards**.  
**Owner decision requested:** review/approve dates, personal details and which case studies may go public.
