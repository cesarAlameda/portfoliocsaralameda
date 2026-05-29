"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/navigation";
import type { Profile } from "@/lib/schema";

type Props = {
  profile: Profile;
};

export default function HeroSection({ profile }: Props) {
  const t = useTranslations("hero");
  const locale = useLocale() as "es" | "en";
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center px-5 sm:px-8 lg:px-10 relative overflow-hidden">
      {/* Quiet background texture — very subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] rounded-full border border-border-subtle opacity-[0.03]" />
        <div className="absolute bottom-[15%] right-[-5%] w-[25vw] h-[25vw] rounded-full border border-border-subtle opacity-[0.03]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ease-out ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Eyebrow — no monospace greeting */}
          <p className="text-sm text-text-muted font-sans mb-4 tracking-wide">
            {t("greeting")}
          </p>

          {/* Name — display serif, large */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary leading-[0.95] tracking-tight font-semibold max-w-4xl">
            {profile.name}
          </h1>

          {/* Roles — as a sentence, not badge pills */}
          <p className="mt-5 text-xl md:text-2xl text-text-secondary font-sans leading-snug max-w-2xl">
            {profile.roles.join(" · ")}
          </p>

          {/* Location + research interest */}
          <p className="mt-3 text-sm text-text-muted">
            {profile.location}
          </p>

          {/* Summary — editorial block */}
          <div className="mt-8 block-decor max-w-xl">
            <p className="text-base md:text-lg text-text-primary leading-relaxed font-sans">
              {profile.summary[locale]}
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <a
              href={profile.cv[locale]}
              download
              className="group inline-flex items-center gap-2 px-0 text-sm text-text-primary font-sans tracking-wide transition-colors duration-200 hover-link"
            >
              {t("download_cv")}
              <span className="inline-block transition-transform duration-200 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
            <span className="text-text-muted text-xs">/</span>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-0 text-sm text-text-secondary font-sans hover-link"
            >
              LinkedIn
            </a>
            <span className="text-text-muted text-xs">/</span>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-0 text-sm text-text-secondary font-sans hover-link"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
