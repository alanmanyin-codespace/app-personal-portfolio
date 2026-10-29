import Image from "next/image";
import type { ComponentType, SVGProps } from "react";

import {
  AzureMark,
  DatabaseMark,
  PythonMark,
  ReactMark,
  ShieldMark,
  TypeScriptMark,
} from "@/components/visual/icons";

interface Node {
  label: string;
  Mark: ComponentType<SVGProps<SVGSVGElement>>;
  /** position as % of the constellation box */
  x: number;
  y: number;
}

// Portrait sits at this anchor; lines are drawn from here to each node.
const CENTER = { x: 50, y: 30 };

const NODES: Node[] = [
  { label: "React", Mark: ReactMark, x: 26, y: 13 },
  { label: "TypeScript", Mark: TypeScriptMark, x: 74, y: 13 },
  { label: "Python", Mark: PythonMark, x: 16, y: 41 },
  { label: "Azure", Mark: AzureMark, x: 84, y: 41 },
  { label: "SQL", Mark: DatabaseMark, x: 28, y: 66 },
  { label: "Entra ID", Mark: ShieldMark, x: 72, y: 66 },
];

export function HeroConstellation() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-md sm:aspect-[2/1] sm:max-w-xl">
      {/* faint connecting lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {NODES.map((n) => (
          <line
            key={n.label}
            x1={CENTER.x}
            y1={CENTER.y}
            x2={n.x}
            y2={n.y}
            className="constellation-line"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* portrait as the brightest star */}
      <div
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${CENTER.x}%`, top: `${CENTER.y}%` }}
      >
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-5 rounded-full opacity-80 blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(90,155,255,0.6) 0%, rgba(11,16,38,0) 70%)",
            }}
          />
          <div className="relative h-28 w-28 overflow-hidden rounded-full border border-azure-300/60 shadow-[0_0_40px_-6px_rgba(90,155,255,0.8)] sm:h-36 sm:w-36">
            <Image
              src="/images/alan-man-profile.jpg"
              alt="Portrait of Alan Man"
              width={288}
              height={288}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* tech nodes */}
      {NODES.map((n) => (
        <div
          key={n.label}
          className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <span className="grid h-11 w-11 place-items-center rounded-full border border-azure-300/25 bg-night-800/70 p-2.5 backdrop-blur-sm sm:h-12 sm:w-12">
            <n.Mark className="h-full w-full" />
          </span>
          <span className="font-mono text-[0.68rem] tracking-wide text-ink-muted">
            {n.label}
          </span>
        </div>
      ))}
    </div>
  );
}
