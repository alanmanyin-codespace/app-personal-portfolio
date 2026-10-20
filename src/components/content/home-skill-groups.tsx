import type { SkillGroup } from "@/types/content";
import { SkillMark } from "@/components/content/skill-mark";
import {
  BrowserWindow,
  Cloud,
  ServerStack,
  Sparkles,
} from "@/components/visual/icons";

interface HomeSkillGroupsProps {
  groups: SkillGroup[];
}

function getGroupIcon(groupName: string) {
  if (groupName === "Frontend") return BrowserWindow;
  if (groupName === "Backend and integration") return ServerStack;
  if (groupName === "AI-assisted development tools") return Sparkles;

  return Cloud;
}

export function HomeSkillGroups({ groups }: HomeSkillGroupsProps) {
  return (
    <div className="space-y-6">
      {groups.map((group) => {
        const GroupIcon = getGroupIcon(group.name);

        return (
          <section key={group.name}>
            <h2 className="flex items-center gap-2 text-sm font-medium text-ink-muted italic">
              <GroupIcon className="h-4 w-4 shrink-0 text-azure-300" />
              <span>{group.name}</span>
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 rounded-full border border-azure-300/25 bg-night-800/80 px-3.5 py-2 text-xs font-semibold text-azure-200"
                >
                  <SkillMark skill={skill} className="h-4 w-4 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
