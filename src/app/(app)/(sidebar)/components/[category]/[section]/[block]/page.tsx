import PanelCode from "@/components/layouts/sidebar-inset/panel-code";
import PreviewTab from "@/components/layouts/sidebar-inset/preview-tab";
import { data } from "@/lib/database";
import { siteConfig } from "@/lib/metadata";
import Image from "next/image";
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

// export async function generateStaticParams() {
//     const params = [];

//     for (const category of data) {
//         for (const section of category.sections) {
//             for (const block of section.blocks) {
//                 params.push({
//                     category: category.slug,
//                     section: section.slug,
//                     block: block.slug,
//                 });
//             }
//         }
//     }

//     return params;
// }

export default function BlockPage({ params
}: {
    params: Promise<{ section: string; category: string; block: string; }>
}) {

    const { category: categorySlug, section: sectionSlug, block: blockSlug } = use(params);
    const categoryData = data.find(category => category.slug === categorySlug);
    const sectionData = categoryData?.sections.find(section => section.slug === sectionSlug);
    const blockData = sectionData?.blocks.find(block => block.slug === blockSlug);
    if (!blockData) return notFound();

    return (
        <>
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
                        <BreadcrumbLink asChild>
                            <Link href={`/components/${categorySlug}/${sectionSlug}`}>
                                {sectionData?.name}
                            </Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            {blockData.name}
                        </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative px-4 w-full bg-secondary aspect-square border rounded-md overflow-hidden">
                    <div className="relative top-4 size-full bg-card/70 select-none touch-none pointer-events-none">
                        <Image
                            className="w-full object-contain"
                            width={800}
                            height={450}
                            src={blockData.thumbnail}
                            alt={`${siteConfig.name} ${blockData.name} Image`}
                        />
                    </div>
                </div>
                <div className="w-full aspect-square border rounded-md">
                    <PanelCode fileSlug={blockData.slug} />
                </div>
            </div>

            <h2 className="mt-8 text-3xl font-semibold tracking-tight">
                Other {sectionData?.name} blocks
            </h2>
            <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {sectionData!.blocks.map(block => (
                    <PreviewTab data={block} key={block.id + "CagtegoryPage"} />
                ))}
            </div>
        </>
    );
}
