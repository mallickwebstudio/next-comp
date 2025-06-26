import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroFour() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="hero"
      aria-label="Hero section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-start md:gap-8">
          {/* Text Content */}
          <header className="w-full md:w-1/2 md:order-1">
            <h1 className="text-4xl font-extrabold tracking-tight text-balance md:text-right">
              Medium length hero heading goes here
            </h1>
          </header>

          <div className="w-full md:w-1/2">
            <p className="text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="cursor-pointer" variant="default" size="lg">
                Get started
              </Button>
              <Button className="cursor-pointer" variant="outline" size="lg">
                Learn more
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 w-full">
          <Image
            className="w-full aspect-video object-cover rounded-md"
            src="/image.svg"
            width={600}
            height={400}
            alt="Illustration of product"
          />
        </div>
      </div>
    </section>
  );
}
