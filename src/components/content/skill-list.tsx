import type { SkillGroup } from "@/types/content";

interface SkillListProps {
  groups: SkillGroup[];
}

export function SkillList({ groups }: SkillListProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {groups.map((group) => (
        <section key={group.name} className="glass rounded-2xl p-6">
          <h3 className="font-semibold text-ink">{group.name}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-azure-300/15 bg-night-800/50 px-2.5 py-1 font-mono text-[0.72rem] text-ink-muted"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
