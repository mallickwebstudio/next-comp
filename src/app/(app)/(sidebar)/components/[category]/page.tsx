import SectionCard from "@/components/card/section-card";
import { data } from "@/lib/database";
import { notFound } from "next/navigation";
import { use } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link";
import { siteConfig } from "@/lib/metadata";

export async function generateStaticParams() {
  return data.map(category => ({ category: category.slug }));
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

export default function CategoryPage({
  params
}: {
  params: Promise<{ category: string }>
}) {

  const { category: categorySlug } = use(params);
  const categoryData = data.find(category => category.slug === categorySlug);
  if (!categoryData) return notFound();

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
            <BreadcrumbPage>
              {categoryData.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {categoryData.sections.map(section => {
          return (
            <SectionCard categoryHref={categoryData.href} sectionData={section} key={section.slug + "SectionPage"} />
          );
        })}
      </section>
    </>
  );
}
