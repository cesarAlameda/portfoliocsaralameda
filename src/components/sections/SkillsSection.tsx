"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import type { Skill } from "@/lib/schema";

type Props = {
  skills: Skill[];
};

export default function SkillsSection({ skills }: Props) {
  const t = useTranslations("skills");
  const locale = useLocale() as "es" | "en";
  const gridRef = useRef<HTMLDivElement>(null);

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
    "Emerging",
  ];

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>(".reveal-cat");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const getLevel = (level?: string) => {
    if (level === "expert") return "●";
    if (level === "advanced") return "◉";
    if (level === "intermediate") return "○";
    return "·";
  };

  // Flatten into two columns roughly balanced
  const leftSkills: Skill[] = [];
  const rightSkills: Skill[] = [];
  let leftCount = 0;

  for (const category of categoryOrder) {
    const catSkills = grouped[category];
    if (!catSkills) continue;

    for (const skill of catSkills) {
      if (leftCount < Math.ceil(skills.length / 2)) {
        leftSkills.push(skill);
      } else {
        rightSkills.push(skill);
      }
      leftCount++;
    }
  }

  const allSkillsLeft = [...leftSkills, ...rightSkills];
  // Actually, let's do a nicer layout: grouped but as a two-column list with alternating offset

  return (
    <section id="skills" className="py-24 md:py-32 px-5 sm:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          label={t("label")}
        />

        <div ref={gridRef} className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {categoryOrder.map((category, catIndex) => {
            const catSkills = grouped[category];
            if (!catSkills) return null;

            const labelMap: Record<string, string> = {
              Backend: "Backend",
              Databases: locale === "es" ? "Bases de Datos" : "Databases",
              "Enterprise Software":
                locale === "es"
                  ? "Software Empresarial"
                  : "Enterprise Software",
              Frontend: "Frontend",
              "Dev Tools":
                locale === "es"
                  ? "Herramientas"
                  : "Dev Tools",
              Emerging:
                locale === "es" ? "Explorando" : "Emerging",
            };

            return (
              <div
                key={category}
                className={`reveal-cat opacity-0 translate-y-4 transition-all duration-500 ease-out ${
                  catIndex % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                } ${
                  catIndex >= 2 ? "md:mt-8" : ""
                }`}
                style={{
                  transitionDuration: "0.5s",
                  transitionDelay: `${catIndex * 0.08}s`,
                }}
              >
                <h3 className="font-display text-sm text-accent uppercase tracking-[0.12em] mb-3 font-semibold">
                  {labelMap[category] || category}
                </h3>
                <div className="space-y-1.5 mb-6">
                  {catSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 text-sm text-text-secondary"
                    >
                      <span className="text-[0.5rem] text-accent/60 w-2 shrink-0">
                        {getLevel(skill.level)}
                      </span>
                      <span className="font-sans">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
