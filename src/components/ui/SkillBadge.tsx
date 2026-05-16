import type { Skill } from "@/lib/schema";
import { SKILL_CATEGORY_LABELS } from "@/lib/schema";

type SkillBadgeProps = {
  skill: Skill;
  locale: "es" | "en";
};

const levelColors: Record<string, string> = {
  expert: "border-accent/30 text-accent",
  advanced: "border-accent/20 text-accent/80",
  intermediate: "border-text-secondary/20 text-text-secondary",
  familiar: "border-text-secondary/10 text-text-secondary/60",
};

export default function SkillBadge({ skill, locale }: SkillBadgeProps) {
  const levelColor = skill.level ? levelColors[skill.level] : "";

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1.5 text-sm font-mono glass rounded-lg border ${levelColor}`}
      title={`${skill.name} - ${skill.level}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          skill.level === "expert"
            ? "bg-accent"
            : skill.level === "advanced"
            ? "bg-accent/60"
            : "bg-text-secondary/40"
        }`}
      />
      {skill.name}
    </span>
  );
}
