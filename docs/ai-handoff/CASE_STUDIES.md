# Portfolio Case-Study Evidence and Candidate Projects

**Prepared:** 2026-10-17. **Purpose:** give code agents substantive facts and constraints before turning the current three `isPlaceholder: true` cards into credible portfolio material.

## Publishing rule
All three records in `src/data/projects.ts` are **currently placeholders**. Never flip `isPlaceholder` to `false`, attach a live link, insert client screenshots, or assert quantitative results until the owner reviews public-safe claims and material.

A project need not have public source code to be discussed professionally. However, clearly label a **professional case study** versus an **independent demo**, and never falsely imply access to an employer's private codebase.

## Candidate A — Enterprise Case Management & Workflow Platform

**Source:** Eastech experience in `src/data/experience.ts` and the existing career resume. **Suggested public title:** “Enterprise Case-Management Workflow Platform” (generic/anonymized).

**Problem space**
Multi-user case handling across intake, assignment, transfer, action history and closure. Staff require usable case lists, role-aware workflows, controlled administrative features and performance under complex data relationships.

**Directly supported contributions**
- Built frontend case-handling UI and backend workflow APIs, including pickup, assignment, reassignment, takeover and bulk changes.
- Designed database-driven user roles, role assignments, feature permissions and administrative interfaces.
- Integrated Microsoft Entra ID/MSAL/JWT and Microsoft Graph for identity and organization information.
- Added support for AI classification/configuration and human review of generated recommendations and descriptions.
- Optimized SQL query shapes, count/pagination paths and backend enrichment.
- Supported Azure resources, pipelines and deployments; troubleshot issues across stack.

**Supported stack:** React, TypeScript, Python/FastAPI, SQL Server, Azure Functions, Entra ID, Graph API.

**Safe visual ideas:** independently designed mock screenshots with fictional users/cases; component interaction diagram with non-proprietary architecture; an original role/permission UX mini-demo.

**NEEDS CONFIRMATION:** measurable impact, exact architecture/queue/SSE or RAG use, limits of client disclosure, screenshots and permission to reference company/client. **Do not copy operational endpoints, secrets or original SQL from employer systems.**

## Candidate B — Digital Insurance Applications & Integration

**Source:** Arch-Partnership experience in `src/data/experience.ts` and original resume.

**Problem space**
Long multistep insurance applications with conditional eligibility, policy rules, electronic signatures, generated documents, customer-data integrations and payment processing.

**Supported contributions**
- Implemented web/mobile steps for product selection, application forms, e-signatures, PDF creation and payments.
- Developed validation checks for eligibility, data freshness and policy compatibility on frontend and backend.
- Integrated third-party APIs to retrieve/update policy or customer information and guide resubmission.
- Delivered REST APIs and UI using React/Angular/React Native and Java Spring Boot/NestJS.
- Collaborated with PM/QA on edge cases and acceptance criteria; supported CI/CD and testing.

**Safe visual ideas:** a small made-up multistep onboarding form with conditional validation; API request/response simulator with synthetic customer data; original state diagram.

**NEEDS CONFIRMATION:** scope of personal ownership, approved diagrams, public code demonstration, quantitative results.

## Candidate C — AI Knowledge Assistant / Enterprise AI Integration

**Source:** professional skills and experience in AI classification/review and cloud workflows. Some prior discussions mention a RAG/knowledge-assistant proof of concept, but **the current portfolio source files do not independently establish a public-ready implementation, commercial deployment or measurements**.

**Possible independent demo** (new work, not a claim of prior employer delivery):
- Upload synthetic or permissively licensed text/markdown docs.
- Index small documents in a local/inexpensive store.
- Ask grounded questions; display source citations and retrieval diagnostics.
- React/TypeScript interface + Python/FastAPI backend; use budget-aware provider options.
- Optional Microsoft identity/API example using test-only tenants/accounts.

**NEEDS CONFIRMATION:** whether the owner wants this built, any permitted reference implementation, hosting expenses and supported claims about prior RAG work.

## Candidate D — Microsoft Graph Folder / Email Workflow

**Source:** the owner's documented engineering interests and professional Microsoft Graph experience. Could be a smaller independent open-source demo.

**Possible demo:** Given an email and target date, resolve a mail-folder ID; create the folder if absent; move messages to the resulting destination via Microsoft Graph. Include authorization scopes, idempotency/duplicate avoidance, exception handling, and anonymized test data.

**NEEDS CONFIRMATION:** the real production scope is an earlier discussion/requirement, **not evidence of a shipped portfolio project**.

## Reusable case study template

1. **Title / classification:** professional case study or independently built demo.
2. **Problem:** who had the problem and why it mattered (anonymize organization).
3. **Role:** exactly what Alan designed, implemented or maintained.
4. **Approach:** architecture and technical decisions that can safely be disclosed.
5. **Stack:** only actual technologies used.
6. **Outcome:** verified qualitative result; numbers only when documented.
7. **Constraints/tradeoffs:** permissions, performance, complexity and maintainability.
8. **Artifact:** reviewed screenshots or original demo/source link if permitted.
9. **Confidentiality:** what has intentionally been omitted.

**Priority:** one strong A case study first, then B, then an original C or D demonstration. Better two excellent truthful studies than six speculative claims.
