import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/routing";
import { Inter, JetBrains_Mono } from "next/font/google";
import esMessages from "../../../messages/es.json";
import enMessages from "../../../messages/en.json";

const messagesMap = {
  es: esMessages,
  en: enMessages,
} as const;

const metadataTitles: Record<string, { title: string; description: string }> =
  {
    es: {
      title:
        "César Alameda | Desarrollador Backend & Software Empresarial",
      description:
        "Desarrollador backend especializado en Java, Spring Boot, PostgreSQL e integraciones ERP. Descubre mi portfolio, proyectos y experiencia profesional.",
    },
    en: {
      title:
        "César Alameda | Backend & Enterprise Software Developer",
      description:
        "Backend developer specialized in Java, Spring Boot, PostgreSQL, and ERP integrations. Discover my portfolio, projects, and professional experience.",
    },
  };

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const dynamic = "force-static";

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as "es" | "en";
  const t = metadataTitles[l];
  const siteUrl = "https://cesaralameda.github.io/portfoliocsaralameda";

  return {
    title: t.title,
    description: t.description,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title: t.title,
      description: t.description,
      siteName: "César Alameda | Backend Developer",
      locale: l === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
    },
    alternates: {
      canonical: `/${l}`,
      languages: {
        es: "/es",
        en: "/en",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "es" | "en")) {
    notFound();
  }

  const l = locale as "es" | "en";
  const messages = messagesMap[l];

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg-primary text-text-primary antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
