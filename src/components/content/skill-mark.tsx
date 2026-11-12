import Image from "next/image";
import type { ComponentType, SVGProps } from "react";

import {
  AngularMark,
  AzureDevOpsMark,
  CSS3Mark,
  ChatGPTMark,
  ClaudeMark,
  CopilotMark,
  Db2Mark,
  FastAPIMark,
  GeminiMark,
  HTML5Mark,
  JavaMark,
  JavaScriptMark,
  MariaDBMark,
  MaterialUIMark,
  MongoDBMark,
  NestJSMark,
  PythonMark,
  ReactMark,
  SpringBootMark,
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
  "REST APIs": { text: "{}", background: "#0f766e" },
};

const brandMarks: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  React: ReactMark,
  "React Native": ReactMark,
  TypeScript: TypeScriptMark,
  JavaScript: JavaScriptMark,
  Python: PythonMark,
  "Material UI": MaterialUIMark,
  "Azure DevOps": AzureDevOpsMark,
  FastAPI: FastAPIMark,
  Angular: AngularMark,
  "Claude Code": ClaudeMark,
  ChatGPT: ChatGPTMark,
  Gemini: GeminiMark,
  "GitHub Copilot": CopilotMark,
  Java: JavaMark,
  "Spring Boot": SpringBootMark,
  NestJS: NestJSMark,
  HTML: HTML5Mark,
  CSS: CSS3Mark,
  MongoDB: MongoDBMark,
  MariaDB: MariaDBMark,
  DB2: Db2Mark,
};

// Multi-colour icons (Microsoft's Azure service icons, Jenkins), served as
// files so their gradients and ids never clash on one page.
const imageMarks: Record<string, string> = {
  "Key Vault": "/images/skills/key-vault.svg",
  "Managed Identity": "/images/skills/managed-identity.svg",
  "Azure SQL": "/images/skills/azure-sql.svg",
  "Azure Functions": "/images/skills/azure-functions.svg",
  "Azure App Service": "/images/skills/azure-app-service.svg",
  "Microsoft Graph API": "/images/skills/microsoft-graph.svg",
  "Microsoft Entra ID": "/images/skills/microsoft-entra-id.svg",
  "Cosmos DB": "/images/skills/azure-cosmos-db.svg",
  Jenkins: "/images/skills/jenkins.svg",
};

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
  const BrandMark = brandMarks[skill];
  if (BrandMark) return <BrandMark {...props} />;
  const imageMark = imageMarks[skill];
  if (imageMark) {
    return (
      <Image
        src={imageMark}
        alt=""
        aria-hidden="true"
        width={16}
        height={16}
        unoptimized
        className={props.className}
      />
    );
  }

  const monogram = monograms[skill] ?? {
    text: skill.slice(0, 2),
    background: "#315fa8",
  };

  return <MonogramMark monogram={monogram} {...props} />;
}
