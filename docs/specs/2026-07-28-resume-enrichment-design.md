# Resume-Based Portfolio Enrichment

## Goal

Replace placeholder portfolio content with verified professional information from Alan Man's current résumé while presenting work through capabilities and delivered systems rather than public employer names.

## Content and Privacy

- Use the résumé as the factual source for professional summary, skills, experience, and education.
- Present employment as two anonymous professional engagements:
  - Enterprise case-management and AI-assisted workflow platform
  - Digital insurance application platform
- Describe responsibilities, systems, and technologies without displaying employer names.
- Display education credentials and institution names.
- Display Alan's professional email and LinkedIn profile on the contact page.
- Keep the phone number and Canadian work-permit details off normal website pages.
- Publish the complete current résumé PDF as a public download. The user has explicitly accepted that the PDF contains employer names, phone number, email address, and work-permit details.
- Do not add claims, metrics, links, or achievements that are absent from the résumé.

## Information Architecture

### Home

- Add the portrait extracted from the résumé to the hero.
- Replace the provisional introduction with résumé-based full-stack positioning.
- Emphasize enterprise web applications, APIs, cloud services, identity integration, and database-backed systems.
- Keep projects distinct from professional experience and retain project placeholders until verified project details are available.

### About

- Replace all placeholder notices and provisional copy.
- Add a concise professional narrative covering more than five years of full-stack development.
- Describe the ability to work across frontend, backend, database, cloud, CI/CD, and production support.
- Present verified technical strengths from the résumé.

### Experience

- Replace the employer-centric timeline with anonymous engagement cards.
- Each card includes:
  - Engagement title
  - Role
  - Period
  - Professional summary
  - Selected contributions
  - Technologies
- Do not render employer names or employer locations.

### Education

- Add a dedicated education section to the About page.
- Include:
  - BEng in Computer Engineering, Hong Kong University of Science and Technology, 2015–2021
  - Associate of Engineering, Hong Kong Community College, 2013–2015

### CV

- Store the public PDF at `public/cv/alan-man-cv.pdf`.
- Enable the site-wide CV path in central configuration.
- Provide separate View CV and Download CV actions.
- State that the PDF contains the complete employment record.
- Remove the placeholder CV notice.

### Contact

- Publish the résumé email address.
- Publish the verified LinkedIn profile.
- Keep GitHub as a placeholder unless a verified profile URL already exists in the project.
- Do not publish the phone number.

## Portrait

- Extract the portrait embedded in the résumé header.
- Crop it to exclude résumé layout elements.
- Export an optimized web image under `public/images/`.
- Provide meaningful alternative text.
- Use responsive sizing and preserve the existing bright, professional visual direction.

## Data and Component Changes

- Keep personal and professional facts in typed data/configuration files.
- Adapt the experience type and component so company and location are not required or displayed.
- Add typed education data rather than embedding education copy directly in a page component.
- Reuse existing layout, typography, button, and card patterns.
- Avoid new runtime dependencies unless image processing requires a one-time local tool; no image-processing package should ship with the application.

## Validation

- Add or update tests for data completeness, anonymous experience rendering, enabled CV actions, and updated routes.
- Confirm the portrait and PDF are present in the expected public paths.
- Run the full test suite, lint, type checking, and production build.
- Review the final diff for accidental employer-name, phone-number, or work-permit exposure outside the public PDF.

## Delivery

- Commit the implementation with professional, project-specific messages.
- Push the completed changes to the existing GitHub repository.
- Allow the existing Vercel integration or CLI deployment workflow to publish the updated site.
