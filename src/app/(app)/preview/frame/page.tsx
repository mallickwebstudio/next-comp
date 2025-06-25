"use client";

import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { componentMap, ComponentPath } from "@/lib/component-map";
import { cn, getBlockBySlug } from "@/lib/utils";
import { Suspense, useEffect, useMemo } from "react";

function PreviewFrameContent() {
  const searchParams = useSearchParams();

  const blockSlugs = searchParams.getAll("block"); // ?block=navbar-one&block=hero-one

  const theme = searchParams.get("theme");

  // Handle dark mode
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const blocks = useMemo(() => {
    return blockSlugs.map((slug) => getBlockBySlug(slug)).filter(Boolean);
  }, [blockSlugs]);

  return (
    <div
      className={cn(
        "min-h-screen bg-secondary text-foreground antialiased",
        theme === "dark" && "dark"
      )}
    >

      {blocks.map((block) => {
        const path = block!.path.replace("src", "@").replace(".tsx", "") as ComponentPath;

        const PreviewComponent = dynamic(componentMap[path], {
          ssr: false,
          loading: () => <div className="text-center p-8">Loading {block!.name}...</div>,
        });

        return (
          <div key={block!.id} id="preview-wrapper">
            <PreviewComponent />
          </div>
        );
      })}

      {blocks.length === 0 && (
        <div className="p-4 size-full flex justify-center items-center text-center text-muted-foreground">
          No components found
        </div>
      )}
    </div>
  );
}


export default function page() {
  return (
    <Suspense>
      <PreviewFrameContent />
    </Suspense>
  )
}
