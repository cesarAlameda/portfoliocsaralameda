import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import type { Social } from "@/lib/schema";

type Props = {
  social: Social;
};

export default function Footer({ social }: Props) {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border-subtle py-12 md:py-16 mt-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          {/* Left */}
          <div>
            <Link
              href="/"
              className="font-display text-xl text-text-primary hover:text-accent transition-colors duration-200"
            >
              César Alameda
            </Link>
            <p className="text-sm text-text-muted mt-2">
              {t("built_with")}
            </p>
          </div>

          {/* Right: links */}
          <div className="flex items-center gap-6">
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover-link"
            >
              LinkedIn
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover-link"
            >
              GitHub
            </a>
            <a
              href={`mailto:${social.email}`}
              className="text-sm text-text-secondary hover-link"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 editorial-rule" />

        <p className="mt-6 text-xs text-text-muted">
          © {new Date().getFullYear()} César Alameda. {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
