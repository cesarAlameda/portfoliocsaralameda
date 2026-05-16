"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import TechBadge from "@/components/ui/TechBadge";
import type { Experience } from "@/lib/schema";

type Props = {
  allExperience: Experience[];
};

export default function ExperienceSection({ allExperience }: Props) {
  const t = useTranslations("experience");
  const locale = useLocale() as "es" | "en";

  const softwareRoles = allExperience.filter((exp) => exp.type === "software");
  const otherRoles = allExperience.filter((exp) => exp.type === "other");

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border-glass" />

          <div className="space-y-8">
            {softwareRoles.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period.start}`}
                className="relative pl-12 md:pl-16"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-4 top-1.5 w-3 h-3 bg-accent rounded-full ring-4 ring-bg-primary" />

                {/* Card */}
                <div className="glass-card p-5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-mono text-text-secondary whitespace-nowrap">
                      {exp.period.start} — {exp.period.end || t("present")}
                    </span>
                  </div>
                  <p className="text-sm text-accent font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                    {exp.description[locale]}
                  </p>
                  {exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Experience */}
        {otherRoles.length > 0 && (
          <details className="mt-8 group">
            <summary className="cursor-pointer text-sm text-text-secondary hover:text-accent transition-colors font-mono">
              ▸ {t("other_title")} ({otherRoles.length})
            </summary>
            <div className="mt-4 space-y-4">
              {otherRoles.map((exp) => (
                <div
                  key={`${exp.company}-${exp.period.start}`}
                  className="glass p-4 opacity-60"
                >
                  <p className="text-sm font-medium text-text-primary">
                    {exp.role} — {exp.company}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {exp.period.start} — {exp.period.end || t("present")}
                  </p>
                </div>
              ))}
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
