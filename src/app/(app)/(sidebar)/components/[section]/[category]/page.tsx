import PreviewTab from "@/components/layouts/sidebar-inset/preview-tab";
import { buttonVariants } from "@/components/ui/button";
import { data } from "@/lib/database";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
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
      <div className="flex items-center">
        <Link
          className={cn(buttonVariants({ variant: "link", size: "sm" }), "hidden md:flex")}
          href={`/components/${sectionSlug}`}
        >
          {sectionData?.name}
        </Link>

        <ChevronRight className="size-4" />

        <Link
          className={cn(buttonVariants({ variant: "link", size: "sm" }))}
          href={`/components/${sectionSlug}/${categorySlug}`}
        >
          {categoryData.name}
        </Link>
      </div>

      <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {categoryData.block.map(block => (
          <PreviewTab data={block} key={block.id + "CagtegoryPage"} />
        ))}
      </div>
    </>
  );
}
