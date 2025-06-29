import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const featureBlog = [
  {
    blogHref: "#",
    blogImageSrc: "/image.svg",
    category: "Lifestyle",
    title: "Minimalist Living: Do More with Less",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    authorImageSrc: "/image.svg",
    author: "Sophia Taylor",
    date: "11 Jan 2022",
    readTime: "5 min read"
  },
  {
    blogHref: "#",
    blogImageSrc: "/image.svg",
    category: "Travel",
    title: "Top 10 Hidden Gems Around the World",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    authorImageSrc: "/image.svg",
    author: "Emily Davis",
    date: "11 Jan 2022",
    readTime: "5 min read"
  },
  {
    blogHref: "#",
    blogImageSrc: "/image.svg",
    category: "Education",
    title: "How Online Learning is Changing Classrooms",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    authorImageSrc: "/image.svg",
    author: "Robert Wilson",
    date: "11 Jan 2022",
    readTime: "5 min read"
  },
  {
    blogHref: "#",
    blogImageSrc: "/image.svg",
    category: "Lifestyle",
    title: "Minimalist Living: Do More with Less",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    authorImageSrc: "/image.svg",
    author: "Sophia Taylor",
    date: "11 Jan 2022",
    readTime: "5 min read"
  }
]
const blogData = [
  {
    blogHref: "#",
    blogImageSrc: "/image.svg",
    category: "Technology",
    title: "AI Revolution: What It Means for Developers",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    authorImageSrc: "/image.svg",
    author: "John Doe",
    date: "11 Jan 2022",
    readTime: "5 min read"
  },
  {
    blogHref: "#",
    blogImageSrc: "/image.svg",
    category: "Health",
    title: "The Rise of Holistic Wellness in Modern Times",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    authorImageSrc: "/image.svg",
    author: "Jane Smith",
    date: "11 Jan 2022",
    readTime: "5 min read"
  },
  {
    blogHref: "#",
    blogImageSrc: "/image.svg",
    category: "Finance",
    title: "Investing 101: Building Wealth for the Future",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    authorImageSrc: "/image.svg",
    author: "Michael Brown",
    date: "11 Jan 2022",
    readTime: "5 min read"
  },
  {
    blogHref: "#",
    blogImageSrc: "/image.svg",
    category: "Travel",
    title: "Top 10 Hidden Gems Around the World",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    authorImageSrc: "/image.svg",
    author: "Emily Davis",
    date: "11 Jan 2022",
    readTime: "5 min read"
  },
  {
    blogHref: "#",
    blogImageSrc: "/image.svg",
    category: "Education",
    title: "How Online Learning is Changing Classrooms",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    authorImageSrc: "/image.svg",
    author: "Robert Wilson",
    date: "11 Jan 2022",
    readTime: "5 min read"
  },
  {
    blogHref: "#",
    blogImageSrc: "/image.svg",
    category: "Lifestyle",
    title: "Minimalist Living: Do More with Less",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    authorImageSrc: "/image.svg",
    author: "Sophia Taylor",
    date: "11 Jan 2022",
    readTime: "5 min read"
  }
];

export default function BlogHeaderThree() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="blog-header"
      aria-label="Blog Header section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header>
          <Badge variant="secondary">Blog</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance">
            Short heading goes here
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        {/* Feature Blog */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight text-balance">Featured blog posts</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-row-4">
            {featureBlog.map((item, index) => (
              <article
                className={cn(
                  "overflow-hidden flex flex-col gap-3",
                  index === 0
                    ? "md:row-span-3 "
                    : "md:col-span-1 md:flex-row"
                )}
                key={item.title + index + "Card" + "BlogHeaderThree"}
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <figure
                  className={cn(
                    "aspect-square",
                    index === 0
                      ? "w-full aspect-video"
                      : "md:h-full"
                  )}
                  itemProp="image"
                  itemScope itemType="https://schema.org/ImageObject"
                >
                  <Image
                    className={cn(
                      "w-full object-cover select-none",
                      index === 0
                        ? "aspect-video"
                        : "aspect-square"
                    )}
                    src={item.blogImageSrc}
                    width={160}
                    height={160}
                    alt={item.title}
                  />
                  <meta itemProp="url" content={item.blogImageSrc} />
                </figure>

                <div>
                  <header>
                    <Badge itemProp="articleSection">{item.category}</Badge>
                    <h3 className="mt-2 text-lg font-semibold hover:underline line-clamp-1" itemProp="headline">
                      <Link href={item.blogHref}>{item.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2" itemProp="description">
                      {item.excerpt}
                    </p>
                  </header>

                  <div className="mx-auto mt-3 flex gap-3 items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <Image
                      className="h-12 w-12 aspect-square object-cover rounded-full shrink-0 select-none"
                      src={item.authorImageSrc}
                      width={48}
                      height={48}
                      alt={item.author}
                      itemProp="image"
                    />
                    <div className="text-xs">
                      <div className="font-medium" itemProp="name">{item.author}</div>
                      <div className="flex gap-2">
                        <time dateTime={new Date(item.date).toISOString()} itemProp="datePublished">
                          {item.date}
                        </time>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Latest Blog */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-balance">Latest blog posts</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {blogData.map((item, index) => (
              <article
                className="max-w-sm p-2"
                key={item.title + index + "Card" + "BlogHeaderThree"}
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <figure itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                  <Image
                    className="w-full aspect-square object-cover select-none"
                    src={item.blogImageSrc}
                    width={160}
                    height={160}
                    alt={item.title}
                  />
                  <meta itemProp="url" content={item.blogImageSrc} />
                </figure>

                <header className="mt-3">
                  <Badge itemProp="articleSection">{item.category}</Badge>
                  <h3 className="mt-2 text-lg font-semibold hover:underline line-clamp-2" itemProp="headline">
                    <Link href={item.blogHref}>{item.title}</Link>
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3" itemProp="description">
                    {item.excerpt}
                  </p>
                </header>

                <div className="mx-auto mt-3 flex gap-3 items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <Image
                    className="h-12 w-12 aspect-square object-cover rounded-full shrink-0 select-none"
                    src={item.authorImageSrc}
                    width={48}
                    height={48}
                    alt={item.author}
                    itemProp="image"
                  />
                  <div className="text-xs">
                    <div className="font-medium" itemProp="name">{item.author}</div>
                    <div className="flex gap-2">
                      <time dateTime={new Date(item.date).toISOString()} itemProp="datePublished">
                        {item.date}
                      </time>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
}
