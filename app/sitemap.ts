import { MetadataRoute } from "next";

const LOCALES = ["de", "en"] as const;
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Home pages for each locale
  LOCALES.forEach((locale) => {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          de: `${baseUrl}/de`,
          en: `${baseUrl}/en`,
        },
      },
    });
  });

  // Legal pages for each locale
  const legalPages = ["impressum", "datenschutz"];
  legalPages.forEach((page) => {
    LOCALES.forEach((locale) => {
      routes.push({
        url: `${baseUrl}/${locale}/${page}`,
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.3,
        alternates: {
          languages: {
            de: `${baseUrl}/de/${page}`,
            en: `${baseUrl}/en/${page}`,
          },
        },
      });
    });
  });

  return routes;
}
