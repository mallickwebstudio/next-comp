"use client";
import { cn } from "@/lib/utils";
import Image from "next/image"
import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  text: string;
  depth: number;
};

// 📄 This LongFormContentOne component is styled using Tailwind Typography (`@tailwindcss/typography`).
// It provides elegant, readable styles for long-form content such as blog posts, documentation, and articles.
// For installation, customization and advanced styling options, refer to the official Tailwind Typography plugin documentation:
// 👉 https://tailwindcss.com/docs/typography-plugin

export default function LongFormContentOne() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Generating TOC
  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll("article h2, article h3, article h4, article h5, article h6")
    );

    const tocItems = headings.map((heading) => {
      const rawText = heading.textContent || "";
      const id = heading.id || rawText.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
      heading.id = id; // Assign id if not present

      return {
        id,
        text: rawText,
        depth: parseInt(heading.tagName.replace("H", ""), 10),
      };
    });

    setToc(tocItems);
  }, []);

  // Map heading depth to Tailwind margin class
  const getIndentClass = (depth: number) => {
    switch (depth) {
      case 2:
        return "ml-0";
      case 3:
        return "ml-4";
      case 4:
        return "ml-8";
      case 5:
        return "ml-12";
      case 6:
        return "ml-16";
      default:
        return "";
    }
  };

  // Observe active TOC
  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      const visibleHeadings = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(handleObserver, {
      rootMargin: "0px 0px -60% 0px", // triggers when heading is top 40% in viewport
      threshold: [0, 1.0],
    });

    const headings = document.querySelectorAll("h2, h3, h4, h5, h6");
    headings.forEach(h => observer.observe(h));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative bg-background"
      id="long-form-content"
      aria-label="Long form content section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12">
        {/* Table of Contents */}
        <aside className="md:sticky top-8 p-4 h-fit md:w-xs md:order-1 border rounded-md">
          <div className="text-xl font-semibold">Table of Contents</div>
          <ul className="py-2 space-y-2">
            {toc.map((item) => (
              <li className={getIndentClass(item.depth)} key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={cn(
                    "block text-muted-foreground line-clamp-1 hover:text-foreground",
                    activeId === item.id && "text-foreground"
                  )}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Text Content */}
        <article className="
        prose dark:prose-invert max-w-none prose-neutral
        prose-img:w-full prose-img:aspect-video prose-img:object-cover prose-img:select-none prose-img:pointer-events-none prose-img:rounded-md
        prose-h1:text-4xl
        prose-h2:text-3xl
        prose-h3:text-2xl
        prose-h4:text-xl
        prose-h5:text-lg
        ">
          <h1>H1 Heading goes here</h1>
          <p>
            H1 titles are ignored in the table of contents. The table of contents links always start with H2.
          </p>

          <h2 id="heading-2">Heading 2</h2>
          <p>
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
          </p>
          <p>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
          </p>

          <h3 id="heading-3">Heading 3</h3>
          <p>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.
          </p>
          <p>
            Tristique odio senectus nam posuere ornare leo metus, ultricies. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.
          </p>

          <h4 id="heading-4">Heading 4</h4>
          <p>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
          </p>
          <figure>
            <Image
              src="/image.svg"
              width={800}
              height={450}
              alt="Image Description"
            />
            <figcaption>Image caption goes here</figcaption>
          </figure>

          <h5 id="heading-5">Heading 5</h5>
          <p>
            Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
          </p>
          <blockquote>
            <p>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.
            </p>
          </blockquote>

          <h6 id="heading-6">Heading 6</h6>
          <p>
            Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.
          </p>
        </article>
      </div>
    </section>
  );
}
