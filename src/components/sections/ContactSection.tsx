"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import SectionTitle from "@/components/ui/SectionTitle";
import type { Profile } from "@/lib/schema";

type Props = {
  profile: Profile;
};

export default function ContactSection({ profile }: Props) {
  const t = useTranslations("contact");
  const locale = useLocale() as "es" | "en";
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
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
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const contactItems = [
    { label: t("linkedin_label"), href: profile.social.linkedin },
    { label: t("github_label"), href: profile.social.github },
    { label: t("email_label"), href: `mailto:${profile.social.email}` },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-5 sm:px-8 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          label={t("label")}
        />

        <div ref={ref}>
          <p className="text-base text-text-secondary leading-relaxed max-w-lg mb-8">
            {t("description")}
          </p>

          <div className="space-y-3">
            {contactItems.map((item, i) => (
              <div
                key={item.label}
                className="reveal-item opacity-0 translate-y-4 transition-all duration-500 ease-out"
                style={{
                  transitionDuration: "0.5s",
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    item.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center gap-3 py-2 border-b border-border-subtle hover:border-accent-line transition-colors duration-200"
                >
                  <span className="text-xs text-text-muted font-mono w-6 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-text-primary group-hover:text-accent transition-colors duration-200">
                    {item.label}
                  </span>
                  <span className="ml-auto text-sm text-text-muted group-hover:text-accent transition-colors duration-200">
                    →
                  </span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={profile.cv[locale]}
              download
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover-link"
            >
              {t("download_cv")}
              <span className="text-xs">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
