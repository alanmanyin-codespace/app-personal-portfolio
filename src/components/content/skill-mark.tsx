import type { SVGProps } from "react";

import {
  AzureMark,
  DatabaseMark,
  PythonMark,
  ReactMark,
  ShieldMark,
  TypeScriptMark,
} from "@/components/visual/icons";

interface SkillMarkProps extends SVGProps<SVGSVGElement> {
  skill: string;
}

interface Monogram {
  text: string;
  background: string;
  foreground?: string;
}

const monograms: Record<string, Monogram> = {
  JavaScript: { text: "JS", background: "#f7df1e", foreground: "#111827" },
  Angular: { text: "A", background: "#dd0031" },
  "Material UI": { text: "M", background: "#007fff" },
  HTML: { text: "<>" , background: "#e34f26" },
  CSS: { text: "#", background: "#1572b6" },
  Java: { text: "J", background: "#e76f00" },
  FastAPI: { text: "F", background: "#009688" },
  "Spring Boot": { text: "S", background: "#6db33f" },
  NestJS: { text: "N", background: "#e0234e" },
  "REST APIs": { text: "{}", background: "#0f766e" },
  "Microsoft Graph API": { text: "G", background: "#5c2d91" },
  Jenkins: { text: "J", background: "#d33833" },
  "Azure Pipelines": { text: "P", background: "#2563eb" },
  "Claude Code": { text: "C", background: "#d97757" },
  ChatGPT: { text: "AI", background: "#10a37f" },
  Gemini: { text: "G", background: "#4f73ff" },
  "GitHub Copilot": { text: "Co", background: "#6e40c9" },
};

const databaseSkills = new Set([
  "Cosmos DB",
  "Azure SQL",
  "DB2",
  "MongoDB",
  "MariaDB",
]);

const azureSkills = new Set(["Azure App Service", "Azure Functions"]);
const identitySkills = new Set([
  "Microsoft Entra ID",
  "Managed Identity",
  "Key Vault",
]);

function MonogramMark({
  monogram,
  ...props
}: SVGProps<SVGSVGElement> & { monogram: Monogram }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect width="24" height="24" rx="6" fill={monogram.background} />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontFamily="var(--font-mono, monospace)"
        fontSize={monogram.text.length > 1 ? "8" : "11"}
        fontWeight="700"
        fill={monogram.foreground ?? "#ffffff"}
      >
        {monogram.text}
      </text>
    </svg>
  );
}

export function SkillMark({ skill, ...props }: SkillMarkProps) {
  if (skill === "React" || skill === "React Native") {
    return <ReactMark {...props} />;
  }
  if (skill === "TypeScript") return <TypeScriptMark {...props} />;
  if (skill === "Python") return <PythonMark {...props} />;
  if (databaseSkills.has(skill)) return <DatabaseMark {...props} />;
  if (azureSkills.has(skill)) return <AzureMark {...props} />;
  if (identitySkills.has(skill)) return <ShieldMark {...props} />;

  const monogram = monograms[skill] ?? {
    text: skill.slice(0, 2),
    background: "#315fa8",
  };

  return <MonogramMark monogram={monogram} {...props} />;
}
