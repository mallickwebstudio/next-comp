'use client';

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import PreviewNavBar from "@/components/layouts/navbar/preview-navbar";

function PreviewPageContent() {
    const searchParams = useSearchParams();
    const blockParams = searchParams.getAll("block"); // like ['navbar-one', 'hero-one']
    const [viewMode, setViewMode] = useState<"mobile" | "desktop">("desktop");
    const theme = searchParams.get("theme"); // Optional theme

    // Set dark mode based on ?theme param
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    if (!blockParams.length) {
        return (
            <div className="p-8 text-center text-muted-foreground">
                No valid layout parameters found.
            </div>
        );
    }

    // Create the query string
    const iframeQuery = new URLSearchParams();
    blockParams.forEach((block) => iframeQuery.append("block", block));
    if (theme) iframeQuery.append("theme", theme);

    return (
        <main className="min-h-screen flex flex-col">
            {/* Header */}
            <PreviewNavBar
                viewMode={viewMode}
                setViewMode={setViewMode}
            />

            {/* Preview container */}
            <div className="bg-card flex min-h-[calc(100dvh_-_64px)] justify-center flex-1">
                <div
                    data-view-mode={viewMode}
                    className={cn(
                        "relative w-full transition-all ease-linear duration-500",
                        viewMode === "mobile" && "max-w-[375px] border-x",
                        viewMode === "desktop" && "max-w-full"
                    )}
                >
                    <iframe
                        src={`/preview/frame?${iframeQuery.toString()}`}
                        className={cn(
                            "mx-auto w-full h-full border-none transition-all ease-linear duration-500",
                            viewMode === "mobile" && "max-w-[375px]",
                            viewMode === "desktop" && "max-w-full"
                        )}
                    />
                </div>
            </div>
        </main>
    );
}

export default function page() {
    return (
        <Suspense>
            <PreviewPageContent />
        </Suspense>
    )
}
