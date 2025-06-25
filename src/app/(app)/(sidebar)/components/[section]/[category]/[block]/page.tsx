import { data } from "@/lib/database";
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
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-balance">
                {blockData.name}
            </h1>

            <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {/* {categoryData.block.map(block => (
                    <PreviewTab data={block} key={block.id + "CagtegoryPage"} />
                ))} */}
            </div>
        </>
    );
}
