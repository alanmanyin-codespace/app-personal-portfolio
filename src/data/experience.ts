import type { Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    engagement: "Enterprise case-management and AI workflow platform",
    role: "System Developer",
    period: "May 2025–Present",
    summary:
      "Developing and supporting an enterprise case-management platform across frontend, backend, database, identity, cloud, and deployment layers.",
    achievements: [
      "Built production workflows for case pickup, assignment, reassignment, takeover, bulk operations, closure, and status-history tracking.",
      "Designed a database-driven access-control module for multi-role user assignment and consolidated feature permissions.",
      "Integrated Microsoft Entra ID authentication with MSAL and JWT, and Microsoft Graph for organizational user information.",
      "Built administration tools for users, roles, permissions, AI classification categories, tags, keywords, and prompt configurations.",
      "Improved case-list performance through SQL query, pagination, record-count, and backend enrichment optimizations.",
      "Configured Azure resources and CI/CD pipelines and resolved application, database, API, and production deployment issues.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Azure Functions",
      "Microsoft SQL Server",
      "Microsoft Entra ID",
      "Microsoft Graph",
    ],
    isPlaceholder: false,
  },
  {
    engagement: "Digital insurance application platform",
    role: "Analyst Programmer",
    period: "March 2021–January 2025",
    summary:
      "Delivered web and mobile insurance application capabilities across digital forms, policy workflows, integrations, payments, and automated delivery pipelines.",
    achievements: [
      "Developed end-to-end policy application journeys spanning product selection, electronic forms, e-signatures, PDF generation, and online payments.",
      "Implemented frontend and backend validation for customer eligibility, data freshness, and policy compatibility requirements.",
      "Integrated third-party APIs for customer and policy data and application update or resubmission decisions.",
      "Designed REST APIs and delivered features across React, Angular, React Native, Java Spring Boot, and NestJS applications.",
      "Refined requirements with project and QA colleagues, identified edge cases, defined acceptance criteria, and resolved delivery defects.",
      "Supported CI/CD deployment, performance testing, and application optimization with Jenkins and Azure Pipelines.",
    ],
    technologies: [
      "React",
      "Angular",
      "React Native",
      "Java",
      "Spring Boot",
      "NestJS",
      "REST APIs",
      "DB2",
      "MongoDB",
      "Jenkins",
      "Azure Pipelines",
    ],
    isPlaceholder: false,
  },
];
