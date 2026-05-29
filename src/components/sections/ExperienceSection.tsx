"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
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
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          sectionNumber="02"
        />

        {/* Experience entries — no timeline line, just left-border blocks */}
        <div className="space-y-6">
            {softwareRoles.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period.start}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
              <div className="surface-card p-6 border-l-[3px] border-l-accent">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-accent font-medium mt-0.5">
                    {exp.company}
                  </p>
                  </div>
                  <span className="font-mono text-xs text-text-tertiary whitespace-nowrap shrink-0">
                    {exp.period.start} — {exp.period.end || t("present")}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-3 max-w-prose">
                  {exp.description[locale]}
                </p>
                {exp.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-x-1 gap-y-1">
                    {exp.technologies.map((tech, i) => (
                      <span key={tech} className="tech-label">
                        {i > 0 && <span className="text-text-tertiary mx-1">·</span>}
                        {tech}
                      </span>
                    ))}
      </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Experience — collapsible */}
        {otherRoles.length > 0 && (
          <details className="mt-10 group">
            <summary className="cursor-pointer font-mono text-xs uppercase tracking-widest text-text-tertiary hover:text-accent transition-colors duration-150">
              {t("other_title")} ({otherRoles.length})
            </summary>
            <div className="mt-4 space-y-3">
              {otherRoles.map((exp) => (
                <div
                  key={`${exp.company}-${exp.period.start}`}
                  className="surface-card p-4 border-l-[3px] border-l-border"
                >
                  <p className="text-sm font-medium text-text-primary">
                    {exp.role}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {exp.company} · {exp.period.start} — {exp.period.end || t("present")}
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

