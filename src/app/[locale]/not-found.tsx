import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function NotFoundPage() {
  const t = useTranslations("not_found");

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-mono text-accent mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          {t("title")}
        </h2>
        <p className="text-text-secondary mb-6">{t("description")}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg-primary font-medium hover:bg-accent-hover transition-colors"
        >
          ← {t("go_home")}
        </Link>
      </div>
    </div>
  );
}
