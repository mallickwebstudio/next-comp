import { Section as SectionType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { siteConfig } from "@/lib/metadata";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function SectionCard({
  sectionData,
  categoryHref,
}: {
  sectionData: SectionType;
  categoryHref: string;
}) {
  const { theme } = useTheme();

  const block = sectionData.blocks?.[0];
  if (!block) return null;

  const darkSlug = `dark-${block.slug}`;
  const imageSrc =
    theme === "dark"
      ? block.thumbnail.replace(block.slug, darkSlug)
      : block.thumbnail;

  return (
    <Link
      className="block p-2 bg-card rounded-md group "
      href={`${categoryHref}/${sectionData.href}`}
    >
      <div className="relative px-4 bg-secondary w-full aspect-video rounded-sm border overflow-hidden group-hover:opacity-50 transition-all">
        <div
          className={cn(
            "relative top-4 size-full touch-none bg-card/70",
          )}
        >
          <Image
            className="w-full object-contain select-none pointer-events-none"
            width={320}
            height={180}
            src={imageSrc}
            alt={`${siteConfig.name} ${block.name} Image`}
          />
        </div>
      </div>
      <div className="mt-2 underline-offset-4 group-hover:underline">
        {sectionData.name}
      </div>
    </Link>
  );
}
