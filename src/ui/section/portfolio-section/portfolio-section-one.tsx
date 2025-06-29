import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioData = [
  {
    imageSrc: "/image.svg",
    imageAlt: "Image Description",
    title: "Modern Web Studio",
    description: "A clean and responsive portfolio website for showcasing creative work, built with Next.js and Tailwind CSS.",
    linkHref: "#",
  },
  {
    imageSrc: "/image.svg",
    imageAlt: "Image Description",
    title: "E-Commerce UI Kit",
    description: "A sleek UI design system tailored for e-commerce websites, featuring reusable components and dark mode.",
    linkHref: "#",
  },
  {
    imageSrc: "/image.svg",
    imageAlt: "Image Description",
    title: "Dashboard Analytics",
    description: "An interactive admin dashboard with real-time data visualizations, user management, and light/dark themes.",
    linkHref: "#",
  },
];

export default function PortfolioSectionOne() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="portfolio-section"
      aria-label="Portfolio section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="text-center flex flex-col items-center justify-center">
          <Badge variant="secondary">Portfolio</Badge>
          <h2 className="mt-4 md:max-w-2xl text-4xl font-bold tracking-tight text-balance">
            Short heading goes here
          </h2>
          <p className="mt-4 md:max-w-2xl text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        <div className="mt-12 space-y-8">
          {portfolioData.map((item, index) => (
            <div key={item.title + index + "PortfolioSectionOne"}>
              <Image
                className="w-full aspect-video object-cover rounded-md select-none"
                src={item.imageSrc}
                width={200}
                height={200}
                alt={item.imageAlt}
              />
              <div className="p-2 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <Link className={cn(buttonVariants({ variant: "link" }), "!px-0 w-fit")} href={item.linkHref}>
                  View Project
                  <ChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link className={cn(buttonVariants({ variant: "outline" }))} href="#">
            View All
          </Link>
        </div>
      </div>
    </section >
  );
}
