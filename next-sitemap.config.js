/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://cesaralameda.dev",
  generateRobotsTxt: true,
  outDir: "out",
  exclude: ["/404"],
  alternateRefs: [
    {
      href: "https://cesaralameda.dev/es",
      hreflang: "es",
    },
    {
      href: "https://cesaralameda.dev/en",
      hreflang: "en",
    },
  ],
  transform: async (config, path) => {
    let changefreq = "monthly";
    let priority = 0.7;

    if (path === "/" || path === "/es" || path === "/en") {
      priority = 1.0;
      changefreq = "monthly";
    } else if (path.includes("/projects/")) {
      priority = 0.8;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
