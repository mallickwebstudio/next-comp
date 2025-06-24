import { data } from "@/lib/database";
import { siteConfig } from "@/lib/metadata";

export default function sitemap() {
  const urls = [
    {
      url: siteConfig.baseUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteConfig.baseUrl}/components`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteConfig.baseUrl}/page-builder`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  for (const section of data) {
    // Section-level URL
    urls.push({
      url: `${siteConfig.baseUrl}/components/${section.href}`,
      changeFrequency: 'monthly',
      priority: 0.9,
    });

    for (const category of section.category) {
      // Category-level URL
      urls.push({
        url: `${siteConfig.baseUrl}/components/${section.href}/${category.href}`,
        changeFrequency: 'monthly',
        priority: 0.9,
      });

      for (const block of category.block) {
        // Block-level URL
        urls.push({
          url: `${siteConfig.baseUrl}/components/${section.href}/${category.href}/${block.slug}`,
          changeFrequency: 'monthly',
          priority: 0.8,
        });
      }
    }
  }

  return urls;
}
