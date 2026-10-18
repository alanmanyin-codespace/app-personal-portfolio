# Shared AI Handoff — ChatGPT · Claude Code · Codex

**Purpose:** a durable, version-controlled briefing and message space for all assistants working on `alanmanyin-codespace/personal-space`.

**Established:** 2026-10-17. **Scope:** public professional portfolio and recruitment, not a personal/immigration dossier. **Repository:** private GitHub organization repo, although the website and `public/` files can be publicly available through Vercel.

## Start here

| File | What it contains | Who should read it |
| --- | --- | --- |
| `AGENTS.md` (repository root) | Coding/verification/privacy rules | Codex, ChatGPT and other agents |
| `CLAUDE.md` (repository root) | Claude Code entrypoint, links to common instructions | Claude Code |
| `BACKGROUND.md` | Career summary, aspirations, source hierarchy, important caveats | Every agent |
| `RESUME.md` | Detailed **internal working resume**, roles, dates, accomplishments, skills, education | Agents writing experience/about/CV content |
| `CASE_STUDIES.md` | Project candidates, safe claims, what still needs evidence | Agents implementing projects and case studies |
| `PORTFOLIO_BRIEF.md` | Product goals, design/architecture, priorities, success criteria | Agents editing the website |
| `MESSAGES.md` | **Shared inbox/outbox** for decisions, progress and questions | Every agent at start/end of session |

## Existing application (do not rebuild from zero)
- Next.js 16 / React 19 / TypeScript / Tailwind CSS 4 / Node.js 22.
- Existing routes: `/`, `/about`, `/projects`, `/experience`, `/cv`, `/contact`.
- Content modules: `src/data/profile.ts`, `src/data/experience.ts`, `src/data/skills.ts`, `src/data/projects.ts`; shared URL/contact/CV config: `src/config/site.ts`.
- Static assets: `public/images/` and `public/cv/alan-man-cv.pdf`.
- Deployment target: existing Vercel **personal-space** project. Code currently records `https://personal-space-vert.vercel.app` as its canonical site URL, but live deployment/access should be independently confirmed.

## How to collaborate (deliberately simple)

1. Read `AGENTS.md`, the shared context, and the latest messages before starting work.
2. Pick one narrowly defined task. Announce the task/branch in the message board or PR.
3. Make minimal code or docs changes; do not silently rewrite another agent's in-flight files.
4. Capture uncertainties using `NEEDS CONFIRMATION` rather than inventing facts.
5. Run the documented checks (or state what you could not run).
6. Add a completion note to `MESSAGES.md` or the PR body: changes, paths, tests, decisions needed, and next step.
7. Have the owner approve substantive public text/CV/employment changes and deployment.

**Important:** This is a Git-file communication channel, **not a real-time chat or automatic agent-to-agent sync**. Agents only see newly committed or pulled changes. When using separate branches, exchange information through reviewed PRs and keep a single active editor for `MESSAGES.md`.

## Source-of-truth hierarchy

- Actual repository code/configuration is authoritative for implementation details.
- The user's current approved CV and explicit corrections are authoritative for biographical facts.
- `RESUME.md` is a **working interpretation**, with any date conflict documented instead of hidden.
- Existing public site copy is not evidence that a claim is current.
- Professional case studies must be fact-checked with the owner before changing `isPlaceholder: true`.

## What must never be copied into the published site
Private contracts, client work product, financial/medical/immigration records, passwords, access tokens, personal identification numbers, and unsupported results/metrics. Public profile contact details must remain intentional and reviewed.
