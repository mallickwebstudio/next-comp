import { data } from "@/lib/database";
import { siteConfig } from "@/lib/metadata";

export default function sitemap() {
  const urls = [
    {
      url: siteConfig.baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.baseUrl}/components`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.baseUrl}/page-builder`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  for (const category of data) {
    // Section-level URL
    urls.push({
      url: `${siteConfig.baseUrl}/components/${category.slug}`,
      changeFrequency: "monthly",
      priority: 0.9,
    });

    for (const section of category.sections) {
      // Category-level URL
      urls.push({
        url: `${siteConfig.baseUrl}/components/${category.href}/${section.href}`,
        changeFrequency: "monthly",
        priority: 0.9,
      });

      for (const block of section.blocks) {
        // Block-level URL
        urls.push({
          url: `${siteConfig.baseUrl}/components/${category.href}/${section.href}/${block.slug}`,
          changeFrequency: "monthly",
          priority: 0.8,
        });
      }
    }
  }

  return urls;
}
