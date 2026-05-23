"use client";

import { usePathname, useRouter } from "@/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "es" ? "en" : "es";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="font-mono text-xs uppercase tracking-widest cursor-pointer transition-colors duration-150 disabled:opacity-50"
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <span
        className={
          locale === "es" ? "text-accent" : "text-text-tertiary hover:text-accent"
        }
      >
        ES
      </span>
      <span className="text-text-tertiary px-1">/</span>
      <span
        className={
          locale === "en" ? "text-accent" : "text-text-tertiary hover:text-accent"
        }
      >
        EN
      </span>
    </button>
  );
}
