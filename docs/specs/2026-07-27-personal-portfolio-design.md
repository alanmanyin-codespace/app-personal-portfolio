# Personal Developer Portfolio Design

## Purpose

Build the initial framework for Alan Man's professional software developer
portfolio. The site will support Canadian and international job applications
while keeping all personal details easy to replace later. This version will use
clearly labelled placeholder content and will not invent employment
achievements, contact details, project links, or CV information.

The project will live in the existing private GitHub repository
`alanmanyin-codespace/personal-space`. This supersedes the original request to
create a new public repository named `personal-portfolio`.

## Professional Positioning

- Name: Alan Man
- Title: Software Developer specializing in Web Applications
- Summary: Software developer experienced in building modern web applications,
  internal business systems, APIs, and cloud-based solutions.

## Technical Architecture

The application will use the latest stable Next.js release with the App Router,
TypeScript, Tailwind CSS, ESLint, and npm. Pages will be statically rendered
where possible. Most components will remain React Server Components; only the
interactive mobile navigation will require a client component.

The site will use no database, CMS, authentication, analytics, contact-form
backend, or other external application service. Standard Next.js behavior will
make the repository directly importable into Vercel without a custom Vercel
configuration.

Node.js 22 will be declared in `.nvmrc` and the package engine requirements.

## Content Architecture

Replaceable information will be stored in typed modules rather than embedded
throughout page components:

- `src/config/site.ts`: site name, description, placeholder production URL,
  email, and social links
- `src/data/profile.ts`: professional positioning, biography placeholders,
  career focus, and technical strengths
- `src/data/projects.ts`: typed project records
- `src/data/experience.ts`: typed employment records
- `src/data/skills.ts`: grouped technical skills
- `src/data/navigation.ts`: primary and footer navigation
- `src/types/content.ts`: shared content interfaces

Placeholder links will use safe, explicit placeholder values and will not be
presented as verified personal profiles. Components will disable or label
unavailable actions where appropriate.

## Routes

### Home (`/`)

The home page will contain a hero with the approved title and summary, links to
Projects and CV, a short skills overview, featured project placeholders, and a
contact call-to-action.

### About (`/about`)

The About page will contain labelled placeholders for professional background,
career focus, a short personal introduction, and technical strengths.

### Projects (`/projects`)

The Projects page will render a responsive grid containing at least three
placeholder projects. Each typed record supports a slug, title, short
description, technologies, GitHub URL, live demo URL, and featured flag. The
slug field and data access pattern prepare the project for a future
`/projects/[slug]` route, but project detail pages are outside this version.

### Experience (`/experience`)

The Experience page will use a reusable timeline-style experience item.
Structured records support company, role, period, location, summary,
achievements, and technologies. All displayed employment entries will be
visibly marked as placeholders.

### CV (`/cv`)

The CV page will explain the future résumé download and reference
`/public/cv/alan-man-cv.pdf`. Because no PDF will be fabricated, the initial
download control will be presented as unavailable with a clear placeholder
notice. Replacing the file and updating the availability flag will enable it.

### Contact (`/contact`)

The Contact page will provide a clear invitation to connect and labelled
placeholder email, GitHub, and LinkedIn values. It will not contain a contact
form or backend.

## Components and Layout

Focused components will include:

- `Container`: consistent maximum width and horizontal padding
- `Header`: desktop navigation and mobile navigation trigger
- `MobileNavigation`: accessible client-side menu
- `Footer`: current year, navigation, and contact links
- `PageHeader`: route introductions
- `SectionHeading`: consistent section hierarchy
- `ButtonLink`: primary, secondary, and unavailable action styles
- `ProjectCard`: structured project presentation
- `SkillList`: reusable skill grouping
- `ExperienceItem`: reusable employment timeline item
- `PlaceholderNotice`: consistent placeholder disclosure

The root layout will include a keyboard-accessible skip link and a single
`main` landmark with the `main-content` target. Navigation will expose the
current route through an active visual state and `aria-current`.

## Visual Design

The visual system will use white and light-grey surfaces, dark-grey text, and a
restrained blue primary accent. Layouts will be spacious, typography will have
a clear hierarchy, and cards will use borders and subtle shadows rather than
gradients or glass effects. Motion will be limited to functional transitions
and will respect reduced-motion preferences.

Mobile, tablet, and desktop layouts will be responsive. Semantic heading order,
descriptive link text, sufficient color contrast, visible keyboard focus
states, and touch-friendly controls are required.

## Metadata and Discovery

The root layout will define global metadata with sensible defaults and
placeholder Open Graph information. Each page will export a specific title and
description. `src/app/robots.ts` and `src/app/sitemap.ts` will use the central
site URL.

The placeholder production URL will be an obviously replaceable non-production
value in `src/config/site.ts`. The README will identify the exact field to
change before deployment.

## Developer Experience

The project will provide:

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`
- `npm test` for lightweight behavior and content validation

Prettier will be included only with a complete configuration and a formatting
script. Dependencies will remain minimal.

`.devcontainer/devcontainer.json` will use a Node.js 22 development container,
run `npm install` after creation, forward port 3000, and recommend VS Code
extensions for TypeScript/JavaScript, Tailwind CSS, ESLint, and Prettier.

## Testing and Verification

Implementation will follow test-first cycles for authored behavior. Tests will
cover structured-data invariants and key rendered behavior such as navigation,
placeholder disclosures, and project cards. Generated scaffolding and static
configuration are exempt from unit-level TDD but remain covered by lint,
TypeScript, and production compilation.

Before the final commit and push, the following fresh commands must succeed:

```bash
npm install
npm test
npm run lint
npm run typecheck
npm run build
```

The repository state, commit, push target, and GitHub default branch will also
be verified.

## Documentation and Deployment

`README.md` will document the project purpose, stack, local setup, Codespaces
workflow, directory structure, content-editing locations, adding projects and
experience, replacing the CV PDF, current status, and next steps.

Vercel instructions will cover importing the GitHub repository, selecting the
Next.js defaults, deploying, updating the central production URL, and
redeploying. The documentation will explain that pushes to `main` become
production deployments after the GitHub integration is connected, while pull
requests receive preview deployments.

## Error and Placeholder Handling

No broken or fabricated external links will be shipped as real actions.
Unavailable project links and the missing CV will use semantic disabled or
informational presentation instead of failing navigation. Content data will be
validated by TypeScript and tests so duplicate slugs, missing required labels,
or unmarked placeholder records are caught during development.

## Out of Scope

- Real employment history or achievements
- Real project case studies or URLs
- A real CV PDF
- A project-detail route
- Blog or writing platform
- Contact-form submission
- Database, CMS, authentication, or analytics
- Custom Vercel infrastructure
- Elaborate animation or decorative effects
- Repository visibility changes
