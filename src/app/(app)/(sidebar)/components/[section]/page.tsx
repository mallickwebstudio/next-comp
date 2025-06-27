"use client"
import { buttonVariants } from "@/components/ui/button";
import { data } from "@/lib/database";
import { siteConfig } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function SectionOverview({
  params
}: {
  params: Promise<{ section: string }>
}) {
  const { section: sectionSlug } = use(params);
  const { theme } = useTheme();

  const sectionData = data.find(section => section.slug === sectionSlug);
  if (!sectionData) return notFound();

  return (
    <>
      <div className="flex items-center">
        <ChevronRight className="size-4" />
        <Link
          className={cn(buttonVariants({ variant: "link", size: "sm" }))}
          href={`/components/${sectionSlug}`}
        >
          {sectionData.name}
        </Link>
      </div>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {sectionData.category.map(category => {
          const block = category.block?.[0];
          if (!block) return null;

          const darkSlug = `dark-${block.slug}`;
          const imageSrc = theme === "dark"
            ? block.thumbnail.replace(block.slug, darkSlug)
            : block.thumbnail;

          return (
            <Link
              className="block group overflow-hidden"
              href={`${sectionData.href}/${category.href}`}
              key={category.slug + "SectionPage"}
            >
              <div className="p-2 bg-card rounded-md aspect-video">
                <div className="relative p-4 pb-0 size-full bg-secondary rounded-sm border group-hover:opacity-50 overflow-hidden">
                  <div className="relative size-full z-0 bg-card/70 select-none touch-none pointer-events-none">
                    <Image
                      className="w-full object-cover"
                      width={320}
                      height={180}
                      src={imageSrc}
                      alt={`${siteConfig.name} ${block.name} Image`}
                    />
                  </div>
                </div>
                <div className="mt-2 group-hover:underline underline-offset-4">
                  {category.name}
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
