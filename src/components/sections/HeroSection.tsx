"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";
import type { Profile } from "@/lib/schema";

type Props = {
  profile: Profile;
};

export default function HeroSection({ profile }: Props) {
  const t = useTranslations("hero");
  const locale = useLocale() as "es" | "en";

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative pt-24">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left — Name & Greeting */}
          <div className="md:w-3/5">
        <motion.p
              className="font-mono text-xs uppercase tracking-widest text-accent mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {t("greeting")}
        </motion.p>

        <motion.h1
              className="text-[clamp(3rem,8vw,8rem)] font-bold text-text-primary leading-none -tracking-0.03em"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {profile.name}
        </motion.h1>

            <motion.p
              className="mt-6 text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
        >
          {profile.summary[locale]}
        </motion.p>

        <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
              <div className="flex flex-wrap gap-3">
          <CTAButton href={profile.cv[locale]} download variant="primary">
                {t("download_cv")}
          </CTAButton>
          <CTAButton href={profile.social.linkedin} variant="outline" target="_blank" rel="noopener noreferrer">
            {t("contact_me")}
          </CTAButton>
      </div>
        </motion.div>
      </div>

          {/* Right — Roles */}
          <motion.div
            className="md:w-1/3 md:text-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex flex-row md:flex-col flex-wrap gap-2 md:gap-3">
              {profile.roles.map((role) => (
                <span
                  key={role}
                  className="font-mono text-sm text-text-secondary"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Secondary CTA */}
            <div className="mt-6">
              <CTAButton href="/#contact" variant="outline">
                {t("contact_me")}
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

