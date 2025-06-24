import PreviewTab from "@/components/layouts/sidebar-inset/preview-tab";
import { data } from "@/lib/database";
import { notFound } from "next/navigation";
import { use } from "react";

export default function CategoryPage({ params
}: {
  params: Promise<{ section: string; category: string }>
}) {
  const { section: sectionSlug, category: categorySlug } = use(params);

  const sectionData = data.find(section => section.slug === sectionSlug);
  const categoryData = sectionData?.category.find(category => category.slug === categorySlug);

  if (!categoryData) return notFound();

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-balance">
          {categoryData.name}
      </h1>
      
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {categoryData.block.map(block => (
            <PreviewTab data={block} key={block.id + "CagtegoryPage"}/>
        ))}
      </div>
    </>
  );
}
