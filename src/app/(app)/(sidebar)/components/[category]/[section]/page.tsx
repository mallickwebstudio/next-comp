import BlockCard from "@/components/card/block-card";
import { data } from "@/lib/database";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { siteConfig } from "@/lib/metadata";

export async function generateStaticParams() {
  const params = [];
  for (const category of data) {
    for (const section of category.sections) {
      params.push({
        category: category.slug,
        section: section.slug,
      });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const categoryData = data.find((c) => c.slug === category);
  if (!categoryData) return { title: "Not Found" };

  const title = `${categoryData.name} Blocks | ${siteConfig.title}`;
  const description = `Explore all ${categoryData.name} sections and components.`;
  const url = `${siteConfig.baseUrl}/components/${category}`;
  const ogImage = siteConfig.ogImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function SectionPage({ params
}: {
  params: Promise<{ category: string; section: string; }>
}) {

  const { category: categorySlug, section: sectionSlug } = use(params);
  const categoryData = data.find(category => category.slug === categorySlug);
  const sectionData = categoryData?.sections.find(section => section.slug === sectionSlug);
  if (!sectionData) return notFound();

  return (
    <>
      {/* breadcrumb navigation */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/components">
                Components
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={`/components/${categorySlug}`}>
                {categoryData?.name}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              {sectionData.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {sectionData.blocks.map(block => (
          <BlockCard
            categorySlug={categoryData!.slug}
            sectionSlug={sectionData.slug}
            blockData={block}
            key={block.id + "CagtegoryPage"}
          />
        ))}
      </div>
    </>
  );
}
