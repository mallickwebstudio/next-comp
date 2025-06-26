'use client';

import { data } from '@/lib/database'; // adjust path as needed

const selectedCategorySlugs = [
  "navbar",
  "hero",
  "feature",
  "faq",
  "testimonial",
  "cta",
  "footer",
  "header",
  "pricing",
]; // set this to your desired category slugs

export default function RegenerateData() {
  const formatThumbnail = (categorySlug: string, blockSlug: string) => {
    return `/images/ui/${categorySlug}/${blockSlug}.png`;
  };

  return (
    <div className="mt-12 p-4 bg-secondary rounded-md font-mono text-sm whitespace-pre-wrap">
      [
      {data.map((section) => (
        <div key={section.slug}>
          {'{'} <br />
          slug: &quot;{section.slug}&quot;, <br />
          href: &quot;{section.href}&quot;, <br />
          name: &quot;{section.name}&quot;, <br />
          category: [
          {section.category.map((category) => (
            <div key={category.slug}>
              {'{'} <br />
              slug: &quot;{category.slug}&quot;, <br />
              href: &quot;{category.href}&quot;, <br />
              name: &quot;{category.name}&quot;, <br />
              block: [
              {category.block.map((block) => {
                const isSelected = selectedCategorySlugs.includes(category.slug);
                const updatedThumbnail = isSelected
                  ? formatThumbnail(category.slug, block.slug)
                  : block.thumbnail;

                return (
                  <div key={block.slug}>
                    {'{'} <br />
                    slug: &quot;{block.slug}&quot;, <br />
                    id: &quot;{block.id}&quot;, <br />
                    name: &quot;{block.name}&quot;, <br />
                    thumbnail: &quot;{updatedThumbnail}&quot;, <br />
                    path: &quot;{block.path}&quot; <br />
                    {'},'}
                  </div>
                );
              })}
              ] <br />
              {'},'}
            </div>
          ))}
          ] <br />
          {'},'}
        </div>
      ))}
      ]
    </div>
  );
}
