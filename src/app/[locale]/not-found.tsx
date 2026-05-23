import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function NotFoundPage() {
  const t = useTranslations("not_found");

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center">
        <h1 className="text-8xl font-bold font-mono text-accent mb-4 leading-none">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-text-primary mb-2">
          {t("title")}
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          {t("description")}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 bg-accent text-bg-primary font-bold font-sans text-sm hover:bg-accent-hover transition-colors duration-150"
        >
          ← {t("go_home")}
        </Link>
      </div>
    </div>
  );
}
