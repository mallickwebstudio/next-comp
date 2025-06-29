"use client"
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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

// Derive unique categories
const categories = ["All", ...new Set(blogData.map((item) => item.category))];

export default function BlogHeaderOne() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === activeCategory);

  return (
    <section
      className="relative bg-background overflow-hidden"
      id="blog-header"
      aria-label="Blog Header section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="text-center flex flex-col items-center justify-center">
          <Badge variant="secondary">Blog</Badge>
          <h2 className="mt-4 md:max-w-2xl text-4xl font-bold tracking-tight text-balance">
            Short heading goes here
          </h2>
          <p className="mt-4 md:max-w-2xl text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        {/* Category Filter */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-4 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "outline" : "ghost"}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Filtered Blog Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredBlogs.map((item, index) => (
            <article
            className="max-w-sm p-2"
              key={item.title + index + "Card" + "BlogHeaderOne"}
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <figure itemProp="image" itemScope itemType="https://schema.org/ImageObject">
                <Image
                  className="w-full aspect-square object-cover"
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
                  className="h-12 w-12 aspect-square object-cover rounded-full shrink-0"
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
    </section >
  );
}
