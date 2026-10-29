interface SkillDepth {
  label: string;
  level: "Core strength" | "Strong experience" | "Applied experience";
  filledSegments: number;
  skills: string;
}

const skillDepths: SkillDepth[] = [
  {
    label: "Full-stack web development",
    level: "Core strength",
    filledSegments: 4,
    skills:
      "React, TypeScript, Angular, Python, FastAPI, Java, Spring Boot, NestJS",
  },
  {
    label: "Enterprise integration and identity",
    level: "Core strength",
    filledSegments: 4,
    skills: "REST APIs, Microsoft Graph, Entra ID, MSAL, JWT, RBAC",
  },
  {
    label: "Data and performance",
    level: "Strong experience",
    filledSegments: 3,
    skills:
      "SQL Server, Azure SQL, DB2, MongoDB, Cosmos DB, MariaDB, query tuning",
  },
  {
    label: "Cloud and delivery",
    level: "Strong experience",
    filledSegments: 3,
    skills:
      "Azure App Service, Azure Functions, Key Vault, Jenkins, Azure Pipelines, CI/CD",
  },
  {
    label: "Mobile application delivery",
    level: "Strong experience",
    filledSegments: 3,
    skills: "React Native, mobile insurance workflows, API integration",
  },
  {
    label: "AI-enabled workflows",
    level: "Applied experience",
    filledSegments: 2,
    skills: "Classification, summaries, prompt configuration, review workflows",
  },
];

export function SkillDepthPanel() {
  return (
    <aside className="rounded-2xl border border-azure-300/25 bg-night-800/75 p-6 sm:p-7 lg:sticky lg:top-28">
      <h2 className="text-3xl font-bold tracking-[-0.02em] text-ink">Skills</h2>
      <p className="mt-3 text-sm leading-6 text-ink-muted">
        Evidence-based depth from production roles and documented project work.
      </p>

      <div className="mt-8 space-y-7">
        {skillDepths.map((skillDepth) => (
          <section key={skillDepth.label}>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-semibold leading-6 text-azure-200">
                {skillDepth.label}
              </h3>
              <span className="shrink-0 text-xs font-semibold text-ink-muted">
                {skillDepth.level}
              </span>
            </div>

            <div
              aria-label={`${skillDepth.label}: ${skillDepth.level}`}
              className="mt-3 grid grid-cols-4 gap-1.5"
            >
              {Array.from({ length: 4 }, (_, index) => (
                <span
                  key={index}
                  aria-hidden="true"
                  className={`h-2 rounded-full ${
                    index < skillDepth.filledSegments
                      ? "bg-azure-400"
                      : "bg-azure-950"
                  }`}
                />
              ))}
            </div>

            <p className="mt-3 text-sm leading-6 text-ink-muted">
              {skillDepth.skills}
            </p>
          </section>
        ))}
      </div>
    </aside>
  );
}
