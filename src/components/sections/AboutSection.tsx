"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutSection() {
  const t = useTranslations("about");
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>(".reveal-card");
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

  const focusAreas = [
    {
      label: "01",
      title: t("focus_backend_title"),
      description: t("focus_backend"),
      tech: ["Java", "Spring Boot", "PostgreSQL", "REST APIs"],
    },
    {
      label: "02",
      title: t("focus_enterprise_title"),
      description: t("focus_enterprise"),
      tech: ["a3ERP", ".NET", "C#", "SQL"],
    },
    {
      label: "03",
      title: t("focus_ai_title"),
      description: t("focus_ai"),
      tech: ["AI Integrations", "Automation", "Intelligent Systems"],
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-5 sm:px-8 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} label={t("label")} />

        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-0"
        >
          {focusAreas.map((area, i) => (
            <div
              key={area.title}
              className={`reveal-card ${
                i === 1 ? "md:mt-8" : i === 2 ? "md:mt-16" : ""
              } opacity-0 translate-y-6 transition-all duration-600 ease-out`}
              style={{
                transitionDuration: "0.6s",
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <span className="font-display text-4xl text-accent/20 leading-none block mb-4">
                {area.label}
              </span>
              <h3 className="font-display text-xl text-text-primary mb-3 leading-snug">
                {area.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {area.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {area.tech.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
