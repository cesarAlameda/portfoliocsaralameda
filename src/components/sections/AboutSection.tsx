"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import SurfaceCard from "@/components/ui/SurfaceCard";

export default function AboutSection() {
  const t = useTranslations("about");

  const focusAreas = [
    {
      title: "Backend",
      description: t("focus_backend"),
      tech: ["Java", "Spring Boot", "PostgreSQL"],
    },
    {
      title: "Enterprise",
      description: t("focus_enterprise"),
      tech: ["a3ERP", ".NET", "C#"],
    },
    {
      title: "AI & Automation",
      description: t("focus_ai"),
      tech: ["AI Integrations", "Automation", "Innovation"],
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          sectionNumber="01"
        />

        <div className="grid md:grid-cols-3 gap-4 relative z-10">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SurfaceCard padding="lg" hover={false}>
                <h3 className="text-base font-semibold text-accent font-mono mb-3 uppercase tracking-wider">
                  {area.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-x-1 gap-y-1">
                  {area.tech.map((tech, i) => (
                    <span key={tech} className="tech-label">
                      {i > 0 && <span className="text-text-tertiary mx-1">·</span>}
                      {tech}
                    </span>
                  ))}
                </div>
              </SurfaceCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

