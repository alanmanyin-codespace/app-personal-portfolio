# Instructions for Codex and other coding agents

This repository is **Alan Man's developer portfolio**. Its purpose is to earn credible interviews for software-development roles in Alberta, Canada.

## Mandatory context
Read these files **before** planning or making substantive changes:

1. [Shared agent handoff](docs/ai-handoff/README.md)
2. [Portfolio brief and acceptance criteria](docs/ai-handoff/PORTFOLIO_BRIEF.md)
3. [Verified career background](docs/ai-handoff/BACKGROUND.md)
4. [Resume working source](docs/ai-handoff/RESUME.md)
5. [Case-study evidence and gaps](docs/ai-handoff/CASE_STUDIES.md)
6. [Agent message board](docs/ai-handoff/MESSAGES.md)

`CLAUDE.md` directs Claude Code to the **same** shared material. Keep these instructions aligned.

## Repository and delivery rules
- **Do not** regenerate/reinitialize the existing Next.js project. Preserve the current routes, CV viewer, styles, typed data model, and Vercel setup unless a task requires changes.
- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Node.js 22; see `package.json`.
- Work on a feature branch; prefer reviewable pull requests and no unsolicited production deployment.
- Before completing code changes run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build` when available; report honestly when commands cannot be run.
- Protect employer/client confidentiality; never publish company proprietary code, non-public diagrams, client names, production data, credentials, or private documents.
- **No fabricated achievements or placeholder projects represented as real.** The current project cards are explicitly placeholders in `src/data/projects.ts`.
- Any files under `public/` are public on deployment. `docs/ai-handoff/` is an internal working brief, **not** a source of text that may be automatically displayed online.
- Avoid copying private immigration, medical, financial, full address, or identification details into this repo or the website.
- Obtain the owner's decision before adding a new public project description, changing work-history dates/labels, or replacing the public PDF CV. See discrepancy notes in the handoff.

## Coordination
At the beginning of each coding session, read `docs/ai-handoff/MESSAGES.md`. Write a concise dated note there (or in your PR description when concurrent commits would conflict) stating task, files changed, tests, and outstanding decisions. Do not silently overwrite another agent's work.
