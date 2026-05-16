"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import GlassCard from "@/components/ui/GlassCard";

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
      title: "Plugins",
      description: t("focus_plugins"),
      tech: ["Bukkit", "Spigot", "JSON"],
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <div className="grid md:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlassCard padding="lg">
                <h3 className="text-lg font-semibold text-accent font-mono mb-3">
                  {area.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono glass rounded-full text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 text-text-secondary text-center max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <span className="text-accent font-mono">{t("focus_title")}:</span>{" "}
          {t("focus_backend")} {t("focus_enterprise")} {t("focus_plugins")}
        </motion.p>
      </div>
    </section>
  );
}
