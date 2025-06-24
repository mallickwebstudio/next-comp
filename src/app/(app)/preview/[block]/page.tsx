"use client";
import { use, useState } from "react";
import { notFound } from "next/navigation";
import { cn, getBlockBySlug } from "@/lib/utils";
import TopBar from "./top-bar";

export default function PreviewBlock({
    params,
}: {
    params: Promise<{ block: string }>;
}) {
    const { block: blockSlug } = use(params);

    const [viewMode, setViewMode] = useState<"mobile" | "desktop">("desktop");

    const blockData = getBlockBySlug(blockSlug);

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
            <div className="flex justify-center flex-1 bg-background">
                <div
                    data-view-mode={viewMode}
                    className={cn(
                        "relative w-full transition-all",
                        viewMode === "mobile" && "max-w-[375px] border-x",
                        viewMode === "desktop" && "max-w-full"
                    )}
                >
                    <iframe
                        src={`/preview/frame/${blockSlug}`}
                        className={cn(
                            "w-full min-h-screen border-none transition-all",
                            viewMode === "mobile" && "max-w-[375px]",
                            viewMode === "desktop" && "max-w-full"
                        )}
                    />

                </div>
            </div>
        </main>
    );
}
