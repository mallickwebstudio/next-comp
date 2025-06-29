import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function BlogSectionOne() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="blog-post-header-section"
      aria-label="Blog post header section"
    >
      <div className="container mx-auto p-6 sm:py-10 md:p-12 lg:py-16">
        {/* Featured Blog Article */}
        <article
          className="mx-auto max-w-2xl"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <header>
            <div className="flex gap-2">
              <Badge variant="secondary" itemProp="articleSection">Category</Badge>
              <span>•</span>
              <span itemProp="timeRequired">5 min read</span>
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance" itemProp="headline">
              Blog title heading will go here
            </h1>
          </header>

          <div className="mt-8">
            {/* Blog Main Image */}
            <div itemProp="image" itemScope itemType="https://schema.org/ImageObject">
              <Image
                className="w-full aspect-video object-cover select-none rounded-md overflow-hidden"
                src="/image.svg"
                width={1280}
                height={720}
                alt="Main blog image description"
              />
              <meta itemProp="url" content="/image.svg" />
              <meta itemProp="width" content="1280" />
              <meta itemProp="height" content="720" />
            </div>

            <div
              className="mt-4 mx-auto flex gap-3 items-center"
              itemProp="author"
              itemScope
              itemType="https://schema.org/Person"
            >
              <Image
                className="h-12 w-12 aspect-square object-cover rounded-full shrink-0 select-none"
                src="/image.svg"
                width={48}
                height={48}
                alt="Photo of Author Name"
                itemProp="image"
              />
              <div className="flex flex-col justify-between text-xs">
                <span className="font-medium" itemProp="name">Author Name</span>
                <time
                  dateTime={new Date("2022-01-11").toISOString()}
                  itemProp="datePublished"
                >
                  11 Jan 2022
                </time>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
