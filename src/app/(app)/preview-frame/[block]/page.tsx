"use client";

import { notFound, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { componentMap, ComponentPath } from "@/lib/componentMap";
import { data } from "@/lib/database";
import { use, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function PreviewFramePage({
  params,
}: {
  params: Promise<{ block: string }>;
}) {
  const { block: blockSlug } = use(params);

  const searchParams = useSearchParams();
  const theme = searchParams.get("theme");

  // Set dark mode based on ?theme param
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const allBlocks = data.flatMap((section) =>
    section.category.flatMap((category) =>
      category.block.map((block) => ({
        ...block,
        sectionSlug: section.slug,
        categorySlug: category.slug,
      }))
    )
  );

  const blockData = allBlocks.find((block) => block.slug === blockSlug);

  if (!blockData) return notFound();

  const path = blockData.path as ComponentPath;

  const PreviewComponent = dynamic(componentMap[path], {
    ssr: false,
    loading: () => <div className="text-center p-8">Loading component...</div>,
  });

  return (
    <div
      className={cn(
        "min-h-screen bg-background text-foreground antialiased",
        theme === "dark" && "dark"
      )}
    >
      <PreviewComponent />
    </div>
  );
}
