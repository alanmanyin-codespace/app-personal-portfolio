# Personal Developer Portfolio Implementation Plan

> **For implementers:** Execute each task in order, preserving the red-green
> test cycle and reviewing the diff before every commit.

**Goal:** Build and publish the first content-ready framework for Alan Man's
professional developer portfolio.

**Architecture:** A statically rendered Next.js App Router application will
read all replaceable content from typed modules. Server components will render
the pages and shared UI; a single client component will manage the mobile
navigation. Vitest and Testing Library will cover authored behavior, while
ESLint, TypeScript, and the Next.js production build cover integration.

**Tech Stack:** Next.js 16.2.12, React 19.2.8, TypeScript, Tailwind CSS 4,
Vitest, Testing Library, ESLint, Prettier, npm, Node.js 22

## Global Constraints

- Use the App Router, TypeScript, Tailwind CSS, ESLint, and npm.
- Keep dependencies minimal and include no database, CMS, authentication,
  analytics, or form backend.
- Keep all replaceable personal content in typed configuration and data files.
- Label every invented example as placeholder content.
- Do not fabricate project links, employment achievements, contact details, or
  a CV PDF.
- Use accessible semantic HTML, visible focus states, responsive layouts, and
  restrained motion.
- Keep committed documentation and commit messages project-focused and free of
  internal process branding.

---

### Task 1: Project foundation and content model

**Files:**

- Create: `package.json`
- Create: `package-lock.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `eslint.config.mjs`
- Create: `postcss.config.mjs`
- Create: `vitest.config.ts`
- Create: `vitest.setup.ts`
- Create: `.prettierrc.json`
- Create: `.prettierignore`
- Create: `.gitignore`
- Create: `.nvmrc`
- Create: `src/types/content.ts`
- Create: `src/config/site.ts`
- Create: `src/data/profile.ts`
- Create: `src/data/projects.ts`
- Create: `src/data/experience.ts`
- Create: `src/data/skills.ts`
- Create: `src/data/navigation.ts`
- Test: `src/data/content.test.ts`

**Interfaces:**

- Produces: `Project`, `Experience`, `SkillGroup`, `NavigationItem`,
  `SocialLink`, and `Profile` types.
- Produces: `siteConfig`, `profile`, `projects`, `experience`, `skills`, and
  `navigation` typed values for every later task.

- [ ] Write `src/data/content.test.ts` first. Assert that the project list has
      at least three records, slugs are unique, placeholder records are labelled,
      experience records include every required field, and the site URL is an
      obvious placeholder.
- [ ] Run `npm test -- src/data/content.test.ts` and confirm failure because the
      data modules do not exist.
- [ ] Add the generated Next.js configuration, test tooling, shared types, and
      the smallest placeholder datasets that satisfy the test.
- [ ] Run `npm test -- src/data/content.test.ts` and confirm it passes.
- [ ] Commit with `feat: establish portfolio content model`.

### Task 2: Shared layout and navigation

**Files:**

- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`
- Create: `src/components/layout/container.tsx`
- Create: `src/components/layout/header.tsx`
- Create: `src/components/layout/mobile-navigation.tsx`
- Create: `src/components/layout/footer.tsx`
- Create: `src/components/ui/button-link.tsx`
- Create: `src/components/ui/page-header.tsx`
- Create: `src/components/ui/section-heading.tsx`
- Create: `src/components/ui/placeholder-notice.tsx`
- Test: `src/components/layout/header.test.tsx`
- Test: `src/components/ui/button-link.test.tsx`

**Interfaces:**

- Consumes: `siteConfig` and `navigation`.
- Produces: the root document shell, skip link, active navigation state,
  responsive mobile menu, footer, container, headings, notices, and link-button
  variants.

- [ ] Write tests asserting that `Header` marks the supplied pathname with
      `aria-current`, exposes the mobile menu control, and that `ButtonLink` renders
      unavailable actions without navigable links.
- [ ] Run the focused tests and confirm failure because the components do not
      exist.
- [ ] Implement the focused components, root layout metadata, global design
      tokens, keyboard focus styling, and responsive navigation.
- [ ] Run the focused tests and confirm they pass.
- [ ] Commit with `feat: add accessible portfolio layout`.

### Task 3: Project, skill, and experience presentation

**Files:**

- Create: `src/components/content/project-card.tsx`
- Create: `src/components/content/skill-list.tsx`
- Create: `src/components/content/experience-item.tsx`
- Test: `src/components/content/project-card.test.tsx`
- Test: `src/components/content/experience-item.test.tsx`

**Interfaces:**

- Consumes: `Project`, `SkillGroup`, and `Experience`.
- Produces: reusable card, skill-list, and timeline-item renderers.

- [ ] Write tests proving unavailable project links are labelled rather than
      navigable, technology labels render, and placeholder experience records carry
      a visible placeholder notice.
- [ ] Run the focused tests and confirm failure because the components do not
      exist.
- [ ] Implement the reusable content components with semantic lists, headings,
      and accessible external-link labels.
- [ ] Run the focused tests and confirm they pass.
- [ ] Commit with `feat: add reusable portfolio content cards`.

### Task 4: Portfolio routes and metadata

**Files:**

- Create: `src/app/page.tsx`
- Create: `src/app/about/page.tsx`
- Create: `src/app/projects/page.tsx`
- Create: `src/app/experience/page.tsx`
- Create: `src/app/cv/page.tsx`
- Create: `src/app/contact/page.tsx`
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`
- Create: `src/app/not-found.tsx`
- Test: `src/app/routes.test.tsx`

**Interfaces:**

- Consumes: all shared layout, UI, content components, configuration, and data.
- Produces: six static routes with page-specific metadata plus robots and
  sitemap outputs.

- [ ] Write route tests asserting the home page includes Projects and CV calls
      to action, Projects renders at least three cards, CV discloses the absent PDF,
      and Contact exposes labelled placeholder channels without a form.
- [ ] Run the route tests and confirm failure because the pages do not exist.
- [ ] Implement the six pages, page metadata, robots, sitemap, and not-found
      route using the approved bright professional design.
- [ ] Run the route tests and confirm they pass.
- [ ] Commit with `feat: build initial portfolio pages`.

### Task 5: Codespaces, documentation, and release verification

**Files:**

- Create: `.devcontainer/devcontainer.json`
- Create: `README.md`
- Modify: `package.json`

**Interfaces:**

- Consumes: final project structure and scripts.
- Produces: Codespaces setup, maintenance documentation, and Vercel deployment
  instructions.

- [ ] Add the Node.js 22 dev container, `npm install` post-create command, port
      3000 forwarding, and TypeScript, Tailwind, ESLint, and Prettier extensions.
- [ ] Write the README sections required by the specification, including exact
      content-editing paths and separate Vercel setup steps.
- [ ] Run `npm install`, `npm test`, `npm run lint`, `npm run typecheck`, and
      `npm run build`; fix every reported issue and rerun the complete suite.
- [ ] Check `git diff --check`, verify no secrets or CV PDF were added, inspect
      the complete directory tree, and confirm repository metadata and the `main`
      branch.
- [ ] Commit with `docs: add development and deployment guidance`.
- [ ] Push `main`, compare local and remote commit SHAs, and verify the
      repository URL.
