# Alan Man — Developer Portfolio

Professional software developer portfolio for Alan Man. The site is designed
for job-search use and presents verified technical skills, anonymous
professional engagements, education, contact details, and a downloadable CV.

Project case studies remain placeholders until verified public examples are
available.

## Technology stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint and Prettier
- Vitest and Testing Library
- npm and Node.js 22

The application is statically rendered where possible and uses no database,
CMS, authentication, analytics, or contact-form backend.

## Local development

Requirements:

- Node.js 22 (see `.nvmrc`)
- npm

Install dependencies and start the development server:

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available checks:

```bash
npm test
npm run lint
npm run typecheck
npm run build
npm run format:check
```

## GitHub Codespaces

This repository includes `.devcontainer/devcontainer.json`.

1. Open the repository on GitHub.
2. Select **Code**, then **Codespaces**.
3. Create a codespace on `main`.
4. Wait for the container to run `npm install`.
5. Run `npm run dev` in the Codespaces terminal.
6. Open the forwarded port 3000 preview.

The container uses Node.js 22 and recommends VS Code extensions for ESLint,
Tailwind CSS, and Prettier.

## Routes

| Route         | Purpose                                                              |
| ------------- | -------------------------------------------------------------------- |
| `/`           | Hero, skills overview, featured projects, and contact call-to-action |
| `/about`      | Professional background, career focus, introduction, and strengths   |
| `/projects`   | Responsive project-card gallery                                      |
| `/experience` | Anonymous professional engagements and contributions                 |
| `/cv`         | Public CV viewer and PDF download                                    |
| `/contact`    | Email and professional-network contact channels                      |

## Project structure

```text
.
├── .devcontainer/           # GitHub Codespaces configuration
├── docs/
│   ├── plans/               # Implementation plans
│   └── specs/               # Product and design specifications
├── public/                  # Portrait and public CV assets
├── src/
│   ├── app/                 # App Router pages, metadata, sitemap, and robots
│   ├── components/
│   │   ├── content/         # Project, skills, and experience components
│   │   ├── layout/          # Header, navigation, container, and footer
│   │   └── ui/              # Buttons, headings, and notices
│   ├── config/              # Site-wide identity, URL, contact, and CV settings
│   ├── data/                # Typed profile, project, experience, and skill data
│   └── types/               # Shared content types
├── package.json
└── .nvmrc
```

## Updating personal information

Update verified values in these files:

- `src/config/site.ts` — site URL, email, social links, and CV path
- `src/data/profile.ts` — title, summary, background, focus, and introduction
- `src/data/skills.ts` — skill groups
- `src/data/experience.ts` — anonymous professional engagements
- `src/data/education.ts` — qualifications and institutions
- `src/data/navigation.ts` — shared navigation

Keep content factual and concise. Do not set `isPlaceholder` to `false` until
the associated information has been verified.

## Adding projects

Add a typed object to `src/data/projects.ts`:

```ts
{
  slug: "unique-project-slug",
  title: "Verified project title",
  description: "Concise problem, contribution, and outcome.",
  technologies: ["Next.js", "TypeScript"],
  githubUrl: "https://github.com/owner/repository",
  liveDemoUrl: "https://project.example.com",
  featured: true,
  isPlaceholder: false,
}
```

`slug` values must be unique. The field prepares the architecture for a future
`/projects/[slug]` route.

## Adding experience

Add a typed object to `src/data/experience.ts` with:

- engagement title
- role
- period
- concise summary
- verified contributions
- technologies
- placeholder status

The public experience model intentionally omits employer name and location.
Avoid broad or unverifiable claims and prefer contributions that can be
discussed in an interview.

## Replacing the CV

1. Review the replacement PDF for private or outdated information.
2. Replace `public/cv/alan-man-cv.pdf` while keeping the same file name.
3. Confirm `cvPath` remains `/cv/alan-man-cv.pdf` and `cvAvailable` remains
   `true` in `src/config/site.ts`.
4. Run the full verification commands before committing.

Files in `public/` are publicly accessible. The current PDF intentionally
contains the complete employment record and contact details.

## Deploying with Vercel

Next.js defaults are sufficient; no `vercel.json` is required.

1. Sign in to [Vercel](https://vercel.com/) with the GitHub account that can
   access `alanmanyin-codespace/personal-space`.
2. In the Vercel dashboard, select **Add New → Project**.
3. Import `alanmanyin-codespace/personal-space`.
4. Leave the detected framework as **Next.js** and keep the default build and
   output settings.
5. Deploy the project.
6. Copy the assigned production URL into `src/config/site.ts`.
7. Commit and push that URL update so metadata, `robots.txt`, and `sitemap.xml`
   use the production domain.

After the GitHub integration is connected, pushes to `main` should create
production deployments. Pull requests can receive isolated preview
deployments.

## Current status

The current portfolio includes:

- all six required routes
- verified profile, skills, experience, education, and contact content
- anonymous employer presentation on normal website pages
- extracted professional portrait
- public CV viewer and download
- responsive desktop and mobile navigation
- reusable project, skill, and experience components
- accessible focus states and skip navigation
- global and page-specific metadata
- robots and sitemap generation
- Codespaces configuration
- automated tests and release scripts

## Planned next steps

1. Add real project case studies and links.
2. Replace the CV whenever a reviewed version becomes available.
3. Complete a production accessibility review.
4. Add a custom domain when ready.
