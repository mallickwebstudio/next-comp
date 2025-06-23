import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Blocks, Box, Diamond } from "lucide-react";
import Image from "next/image";

export default function FeatureThree() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="hero"
      aria-label="Hero section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <Badge variant="secondary">Tagline</Badge>

          <h2 className="mt-4 scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
            Medium length hero heading goes here
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap justify-between">
            <div className="flex gap-2 items-center">
              <Diamond className="size-6" strokeWidth={3} />
              <h3 className="text-lg font-semibold tracking-tight">LOGO</h3>
            </div>
            <div className="flex gap-2 items-center">
              <Box className="size-6" strokeWidth={3} />
              <h3 className="text-lg font-semibold tracking-tight">LOGO</h3>
            </div>
            <div className="flex gap-2 items-center">
              <Diamond className="size-6" strokeWidth={3} />
              <h3 className="text-lg font-semibold tracking-tight">LOGO</h3>
            </div>
            <div className="flex gap-2 items-center">
              <Blocks className="size-6" strokeWidth={3} />
              <h3 className="text-lg font-semibold tracking-tight">LOGO</h3>
            </div>
            <div className="flex gap-2 items-center">
              <Blocks className="size-6" strokeWidth={3} />
              <h3 className="text-lg font-semibold tracking-tight">LOGO</h3>
            </div>
            <div className="flex gap-2 items-center">
              <Blocks className="size-6" strokeWidth={3} />
              <h3 className="text-lg font-semibold tracking-tight">LOGO</h3>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button variant="outline" size="lg">
              Get started
            </Button>
            <Button className="group" variant="ghost" size="lg">
              Learn more
              <ArrowRight className="group-hover:ml-2 transition-all" />
            </Button>
          </div>
        </div>

        {/* Feature Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            className="max-w-full h-auto rounded-md"
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
