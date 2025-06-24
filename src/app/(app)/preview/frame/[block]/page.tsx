"use client";

import { notFound, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { componentMap, ComponentPath } from "@/lib/componentMap";
import { use, useEffect } from "react";
import { cn, getBlockBySlug } from "@/lib/utils";

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

  const blockData = getBlockBySlug(blockSlug);

  if (!blockData) return notFound();

  const path = blockData.path as ComponentPath;

  const PreviewComponent = dynamic(componentMap[path], {
    ssr: false,
    loading: () => <div className="text-center p-8">Loading component...</div>,
  });

  return (
    <div
      className={cn(
        "min-h-screen bg-secondary text-foreground antialiased",
        theme === "dark" && "dark"
      )}
    >
      <div id="preview-wrapper">
        <PreviewComponent />
      </div>
    </div>
  );
}
