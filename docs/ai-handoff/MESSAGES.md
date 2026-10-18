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
- [ ] **Public PDF:** Does `public/cv/alan-man-cv.pdf` need replacement after timeline review?
- [ ] **Vercel:** Confirm live project URL, current production status and access to project scope.
- [x] **Public contact:** Owner approved publishing +1 825 964 5554 in the CV and website Contact page on 2026-10-18. Email, LinkedIn and portfolio GitHub URLs remain as currently configured.

---

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
