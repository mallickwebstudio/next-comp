"use client";
import { use, useState } from "react";
import { data } from "@/lib/database";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";
import TopBar from "./top-bar";

export default function PreviewBlock({
    params,
}: {
    params: Promise<{ block: string }>;
}) {
    const { block: blockSlug } = use(params);

    const [viewMode, setViewMode] = useState<"mobile" | "desktop">("desktop");

    const allBlocks = data.flatMap(section => section.category.flatMap(category =>
        category.block.map(block => ({ ...block }))
    ));

    const blockData = allBlocks.find((block) => block.slug === blockSlug);

    if (!blockData) return notFound();

    return (
        <main className="min-h-screen flex flex-col">
            {/* Header */}
            <TopBar
                name={blockData.name}
                viewMode={viewMode}
                setViewMode={(mode) => setViewMode(mode)}
            />

            {/* Preview container */}
            <div className="flex-1 flex justify-center">
                <div
                    data-view-mode={viewMode}
                    className={cn(
                        "relative shadow bg-background w-full min-h-dvh h-full transition-all",
                        viewMode === "mobile" && "max-w-[375px] border-x",
                        viewMode === "desktop" && "max-w-full"
                    )}
                >
                    <iframe
                        src={`/preview-frame/${blockSlug}`}
                        className={cn(
                            "w-full h-dvh border-none transition-all",
                            viewMode === "mobile" && "max-w-[375px]",
                            viewMode === "desktop" && "max-w-full"
                        )}
                    />

                </div>
            </div>
        </main>
    );
}
