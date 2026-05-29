import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import type { Social } from "@/lib/schema";

type Props = {
  social: Social;
};

export default function Footer({ social }: Props) {
  const t = useTranslations("footer");

  return (
    <footer className="border-t-2 border-border mt-24 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left — Name / Identity */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold font-sans text-text-primary hover:text-accent transition-colors duration-150"
            >
              César Alameda
            </Link>
            <p className="mt-2 text-sm font-mono text-text-tertiary">
              Backend &amp; Enterprise Software Developer
            </p>
          </div>

          {/* Center — Social Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-text-tertiary mb-1">
              Online
            </span>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-accent transition-colors duration-150"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-accent transition-colors duration-150"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={`mailto:${social.email}`}
              className="text-sm text-text-secondary hover:text-accent transition-colors duration-150"
              aria-label="Email"
            >
              Email
            </a>
          </div>

          {/* Right — Copyright & Tech */}
          <div className="text-right">
            <p className="text-xs text-text-tertiary">
              © {new Date().getFullYear()} César Alameda Barquillo
            </p>
            <p className="mt-1 text-xs font-mono text-text-tertiary opacity-60">
              {t("built_with")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
