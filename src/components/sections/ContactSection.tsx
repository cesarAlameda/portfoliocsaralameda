"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import type { Profile } from "@/lib/schema";

type Props = {
  profile: Profile;
};

export default function ContactSection({ profile }: Props) {
  const t = useTranslations("contact");
  const locale = useLocale() as "es" | "en";

  const contactItems = [
    {
      label: "LinkedIn",
      href: profile.social.linkedin,
      external: true,
    },
    {
      label: "GitHub",
      href: profile.social.github,
      external: true,
    },
    {
      label: "Email",
      href: `mailto:${profile.social.email}`,
      external: false,
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <SectionTitle
          title={t("title")}
          subtitle={t("subtitle")}
          sectionNumber="05"
        />

        <motion.p
          className="text-text-secondary mb-10 max-w-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {t("description")}
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {contactItems.map((item) => (
            <CTAButton
              key={item.label}
              href={item.href}
              variant="outline"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              ariaLabel={item.label}
            >
              <span className="font-mono text-xs text-accent mr-2">◆</span>
              {item.label}
            </CTAButton>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <CTAButton
            href={profile.cv[locale]}
            download
            variant="primary"
            ariaLabel={t("download_cv")}
          >
            {t("download_cv")}
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
