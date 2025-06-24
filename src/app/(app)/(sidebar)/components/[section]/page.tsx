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
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-balance">
        {sectionData.name} Blocks
      </h1>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {sectionData.category.map(category => {
          const block = category.block?.[0];
          return block ? (
            <Link className="block group overflow-hidden" href={sectionData.href + "/" + category.href} key={category.slug + "SectionPage"}>
              <div className="p-2 bg-card rounded-md aspect-video">
                <div className="relative p-4 pb-0 size-full bg-secondary rounded-sm border group-hover:opacity-50">
                  <div className="relative size-full z-0 bg-card/70 select-none touch-none pointer-events-none">
                    <Image
                      className="w-full object-cover"
                      width={480}
                      height={270}
                      src={block.thumbnail}
                      alt={siteConfig.name + " " + block.name + " Image"}
                    />
                  </div>
                </div>
                <div className="mt-2 group-hover:underline underline-offset-4">
                  {category.name}
                </div>
              </div>
            </Link>
          ) : null;
        })}
      </section>
    </>
  );
}
