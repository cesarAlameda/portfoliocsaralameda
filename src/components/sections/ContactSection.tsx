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
      label: t("linkedin_label"),
      href: profile.social.linkedin,
      icon: "in",
      external: true,
    },
    {
      label: t("github_label"),
      href: profile.social.github,
      icon: "GH",
      external: true,
    },
    {
      label: t("email_label"),
      href: `mailto:${profile.social.email}`,
      icon: "@",
      external: false,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />

        <motion.p
          className="text-text-secondary text-center mb-8 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {t("description")}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {contactItems.map((item) => (
            <CTAButton
              key={item.label}
              href={item.href}
              variant="secondary"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              ariaLabel={item.label}
            >
              <span className="font-mono text-xs">{item.icon}</span>
              {item.label}
            </CTAButton>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
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
            {t("download_cv")} ↓
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
