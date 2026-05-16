"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import SkillBadge from "@/components/ui/SkillBadge";
import { SKILL_CATEGORY_LABELS } from "@/lib/schema";
import type { Skill } from "@/lib/schema";

type Props = {
  skills: Skill[];
};

export default function SkillsSection({ skills }: Props) {
  const t = useTranslations("skills");
  const locale = useLocale() as "es" | "en";

  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categoryOrder = [
    "Backend",
    "Databases",
    "Enterprise Software",
    "Frontend",
    "Dev Tools",
    "Game Development",
  ] as const;

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="space-y-8">
          {categoryOrder.map((category, catIndex) => {
            const categorySkills = grouped[category];
            if (!categorySkills) return null;

            const labels = SKILL_CATEGORY_LABELS[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              >
                <h3 className="text-sm font-mono text-accent mb-3 uppercase tracking-wider">
                  {labels[locale]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} locale={locale} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
