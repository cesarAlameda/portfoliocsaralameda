import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import type { Social } from "@/lib/schema";

type Props = {
  social: Social;
};

export default function Footer({ social }: Props) {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border-glass py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold font-mono text-accent hover:text-accent-hover transition-colors"
          >
            &lt;CA /&gt;
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors text-sm"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors text-sm"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={`mailto:${social.email}`}
              className="text-text-secondary hover:text-accent transition-colors text-sm"
              aria-label="Email"
            >
              Email
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-text-secondary text-center">
            <p>© {new Date().getFullYear()} César Alameda. {t("copyright")}</p>
            <p className="mt-1 font-mono opacity-60">{t("built_with")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
