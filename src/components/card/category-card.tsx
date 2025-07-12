import { siteConfig } from "@/lib/metadata";
import { Category } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function CategoryCard({
  categoryData,
}: {
  categoryData: Category;
}) {
  const sections = categoryData.sections;

  return (
    <Link
      className="relative p-2 bg-card block overflow-hidden rounded-md group"
      href={"/components/" + categoryData.href}
    >
      <div className="aspect-video overflow-hidden rounded-sm border group-hover:opacity-50 transition-all">
        <div className="relative columns-3 gap-1 space-y-1">
          {sections.slice(0, 10).map((section) => {
            const firstBlock = section.blocks?.[0];
            const imageSrc = firstBlock?.thumbnail;
            return (
              <div
                className="break-inside-avoid"
                key={section.slug + "-SectionCard"}
              >
                {imageSrc ? (
                  <Image
                    className="w-full object-contain select-none pointer-events-none"
                    width={320}
                    height={180}
                    src={imageSrc}
                    alt={`${siteConfig.name} ${firstBlock?.name} Image`}
                  />
                ) : (
                  <div className="flex aspect-video w-full items-center justify-center rounded-xs bg-muted p-1 text-center text-xs text-muted-foreground">
                    No Image Available
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-2 underline-offset-4 group-hover:underline">
        {categoryData.name}
      </div>
    </Link>
  );
}
