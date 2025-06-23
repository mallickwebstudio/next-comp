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
        <div className="flex flex-col md:flex-row items-center md:gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
              Medium length hero heading goes here
            </h1>
          </div>

          <div className="w-full md:w-1/2">
            <p className="mt-4 text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="default" size="lg">
                Get started
              </Button>
              <Button variant="outline" size="lg">
                Learn more
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-8 w-full">
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
