import type { Profile, Project } from "./schema";

export function generatePersonSchema(profile: Profile): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.roles,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Madrid",
      addressCountry: "ES",
    },
    sameAs: [profile.social.linkedin, profile.social.github],
    knowsAbout: [],
  };
  return JSON.stringify(schema, null, 2);
}

export function generateProjectSchema(project: Project): string {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title.en,
    description: project.description.en,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Cross-platform",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
  return JSON.stringify(schema, null, 2);
}

export function generateMetadata({
  title,
  description,
  locale,
  path,
  image = "/og/default.png",
}: {
  title: string;
  description: string;
  locale: string;
  path: string;
  image?: string;
}) {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://cesaralameda.dev";
  const url = `${siteUrl}/${locale}${path}`;
  const ogLocale = locale === "es" ? "es_ES" : "en_US";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "César Alameda | Backend Developer",
      images: [{ url: `${siteUrl}${image}`, width: 1200, height: 630 }],
      locale: ogLocale,
      type: "website" as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [`${siteUrl}${image}`],
    },
    alternates: {
      canonical: url,
      languages: {
        es: `${siteUrl}/es${path}`,
        en: `${siteUrl}/en${path}`,
      },
    },
  };
}
