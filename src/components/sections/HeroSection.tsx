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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          className="text-accent font-mono text-sm mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {t("greeting")}
        </motion.p>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {profile.name}
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {profile.roles.map((role) => (
            <span
              key={role}
              className="px-3 py-1 text-sm font-mono glass rounded-full text-text-secondary"
            >
              {role}
            </span>
          ))}
        </motion.div>

        <motion.p
          className="text-lg text-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {profile.summary[locale]}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <CTAButton href={profile.cv[locale]} download variant="primary">
            {t("download_cv")} ↓
          </CTAButton>
          <CTAButton href={profile.social.linkedin} variant="outline" target="_blank" rel="noopener noreferrer">
            {t("contact_me")}
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
