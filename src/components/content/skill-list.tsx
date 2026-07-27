import type { SkillGroup } from "@/types/content";

interface SkillListProps {
  groups: SkillGroup[];
}

export function SkillList({ groups }: SkillListProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {groups.map((group) => (
        <section
          key={group.name}
          className="rounded-2xl border border-slate-200 bg-white p-6"
        >
          <h3 className="font-bold text-slate-950">{group.name}</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {group.skills.map((skill) => (
              <li key={skill} className="flex gap-3">
                <span aria-hidden="true" className="text-blue-600">
                  •
                </span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
