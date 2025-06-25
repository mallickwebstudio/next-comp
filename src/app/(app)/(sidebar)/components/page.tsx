import { data } from "@/lib/database";
// import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <h1 className='scroll-m-20 text-4xl font-bold tracking-tight text-balance'>
        Components
      </h1>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data.map(section => (
          <Link className="block group overflow-hidden" href={"/components/" + section.href} key={section.slug + "ComponentsPage"}>
            <div className="p-2 bg-card rounded-md aspect-video">
              <div className="relative p-4 pb-0 size-full bg-secondary rounded-sm border group-hover:opacity-50">
                <div className="relative size-full z-0 bg-card/70 select-none touch-none pointer-events-none">
                  {/* <Image
                      className="w-full object-cover"
                      width={320}
                      height={180}
                      src={block.thumbnail}
                      alt={siteConfig.name + " " + block.name + " Image"}
                    /> */}
                </div>
              </div>
              <div className="mt-2 group-hover:underline underline-offset-4 text-center">
                Browse {section.name}
              </div>
            </div>
          </Link>
        ))}

      </section>
    </>
  )
}
