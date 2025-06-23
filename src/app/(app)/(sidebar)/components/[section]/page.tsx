import { data } from "@/lib/database";
import { siteConfig } from "@/lib/metadata";
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

  const sectionData = data.find(section => section.slug === sectionSlug);

  if (!sectionData) return notFound();

  return (
    <>
      <h1 className="p-4 md:p-6 bg-secondary/50 rounded-md text-center">
        <span className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance">
          {sectionData.name} Blocks
        </span>
      </h1>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sectionData.category.map(category => {
          const block = category.block?.[0];
          return block ? (
            <Link className="group" href={sectionData.href + "/" + category.href} key={category.slug + "SectionPage"}>
              <div className="p-3 bg-card rounded-md">
                <div className="aspect-video w-full bg-secondary/30 rounded-md">
                  <Image
                    className="w-full object-cover"
                    width={320}
                    height={180}
                    src={block.thumbnail}
                    alt={siteConfig.name + " " + block.name + " Image"}
                  />
                </div>
                <div className="mt-2 group-hover:underline underline-offset-4">
                  {category.name}
                </div>
              </div>
            </Link>
          ) : null;
        })}
      </div>
    </>
  );
}
