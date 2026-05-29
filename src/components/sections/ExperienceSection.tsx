"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import type { Experience } from "@/lib/schema";

type Props = {
  allExperience: Experience[];
};

export default function ExperienceSection({ allExperience }: Props) {
  const t = useTranslations("experience");
  const locale = useLocale() as "es" | "en";
  const timelineRef = useRef<HTMLDivElement>(null);

  const softwareRoles = allExperience.filter((exp) => exp.type === "software");

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>(".reveal-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 md:py-32 px-5 sm:px-8 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          label={t("label")}
        />

        <div ref={timelineRef} className="space-y-16">
          {softwareRoles.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.period.start}`}
              className="reveal-item opacity-0 translate-y-6 transition-all duration-600 ease-out"
              style={{
                transitionDuration: "0.6s",
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="flex flex-col md:flex-row md:gap-10">
                {/* Left: meta */}
                <div className="md:w-40 shrink-0 mb-2 md:mb-0 md:text-right">
                  <span className="text-xs font-sans text-text-muted tracking-wide uppercase">
                    {exp.period.start} — {exp.period.end || t("present")}
                  </span>
                </div>

                {/* Right: content */}
                <div className="flex-1 min-w-0">
                  <div className="block-decor">
                    <h3 className="font-display text-xl text-text-primary leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-accent font-sans mt-0.5 mb-3">
                      {exp.company}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {exp.description[locale]}
                    </p>
                    {exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial rule after timeline */}
        <div className="mt-16 editorial-rule" />
      </div>
    </section>
  );
}
