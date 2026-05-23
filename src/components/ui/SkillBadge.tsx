import type { Skill } from "@/lib/schema";
type SkillLabelProps = {
  skill: Skill;
  locale: "es" | "en";
};

const levelSymbols: Record<string, { symbol: string; className: string }> = {
  expert: { symbol: "★", className: "text-accent" },
  advanced: { symbol: "▸", className: "text-text-secondary" },
  intermediate: { symbol: "●", className: "text-text-tertiary" },
  familiar: { symbol: "○", className: "text-text-tertiary opacity-60" },
};

const levelLabels: Record<string, { es: string; en: string }> = {
  expert: { es: "Experto", en: "Expert" },
  advanced: { es: "Avanzado", en: "Advanced" },
  intermediate: { es: "Intermedio", en: "Intermediate" },
  familiar: { es: "Familiar", en: "Familiar" },
};
export default function SkillLabel({ skill, locale }: SkillLabelProps) {
  const level = skill.level || "familiar";
  const { symbol, className } = levelSymbols[level];
  const label = levelLabels[level][locale];
  return (
    <span
      className="font-mono text-sm text-text-primary"
      title={`${skill.name} — ${label}`}
    >
      <span className={`${className} mr-1`}>{symbol}</span>
      {skill.name}
    </span>
  );
}

