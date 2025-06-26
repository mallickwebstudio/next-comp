import PanelCode from "@/components/layouts/sidebar-inset/panel-code";
import PreviewTab from "@/components/layouts/sidebar-inset/preview-tab";
import { buttonVariants } from "@/components/ui/button";
import { data } from "@/lib/database";
import { siteConfig } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function BlockPage({ params
}: {
    params: Promise<{ section: string; category: string; block: string; }>
}) {
    const { section: sectionSlug, category: categorySlug, block: blockSlug } = use(params);

    const sectionData = data.find(section => section.slug === sectionSlug);
    const categoryData = sectionData?.category.find(category => category.slug === categorySlug);
    const blockData = categoryData?.block.find(block => block.slug === blockSlug);

    if (!blockData) return notFound();

    return (
        <>
            <div className="flex items-center">
                <Link
                    className={cn(buttonVariants({ variant: "link", size: "sm" }), "hidden md:flex")}
                    href={`/components/${sectionSlug}`}
                >
                    {sectionData?.name}
                </Link>

                <ChevronRight className="hidden md:flex size-4" />

                <Link
                    className={cn(buttonVariants({ variant: "link", size: "sm" }), "hidden md:flex")}
                    href={`/components/${sectionSlug}/${categorySlug}`}
                >
                    {categoryData?.name}
                </Link>

                <ChevronRight className="size-4" />

                <Link
                    className={cn(buttonVariants({ variant: "link", size: "sm" }))}
                    href={`/components/${sectionSlug}/${categorySlug}/${blockSlug}`}
                >
                    {blockData.name}
                </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* <PreviewTab data={blockData} /> */}
                <div className="relative p-4 pb-0  bg-secondary w-full aspect-video border rounded-md">
                    <div className="relative size-full z-0 bg-card/70 select-none touch-none pointer-events-none">
                        <Image
                            className="w-full object-cover"
                            width={800}
                            height={450}
                            src={blockData.thumbnail}
                            alt={`${siteConfig.name} ${blockData.name} Image`}
                        />
                    </div>
                </div>
                <div className="w-full aspect-video border rounded-md">
                    <PanelCode filePath={blockData.path} extention="tsx" fileName={blockData.slug} />
                </div>
            </div>

            <h2 className="mt-8 text-3xl font-semibold tracking-tight">
                Other {categoryData?.name} blocks
            </h2>
            <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {categoryData!.block.map(block => (
                    <PreviewTab data={block} key={block.id + "CagtegoryPage"} />
                ))}
            </div>
        </>
    );
}
