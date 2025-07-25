import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function FeatureTwo() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="hero"
      aria-label="Hero section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <header>
            <Badge variant="secondary">Tagline</Badge>
            <h2 className="mt-4 scroll-m-20 text-3xl md:text-4xl  font-bold tracking-tight text-balance">
              Medium length hero heading goes here
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>

            <div className="mt-8 flex gap-4 flex-col md:flex-row">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Subheading one</h3>
                <p className="mt-3 text-muted-foreground">Lorem ipsum dolor sit amet sectetur adipisicing elit. Voluptate perferendis, aperiam animi debitis nobis cupiditate.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Subheading Two</h3>
                <p className="mt-3 text-muted-foreground">Lorem ipsum dolor sit amet sectetur adipisicing elit. Voluptate perferendis, aperiam animi debitis nobis cupiditate.</p>
              </div>
            </div>
          </header>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="cursor-pointer" variant="outline" size="lg">
              Get started
            </Button>
            <Button className="group" variant="ghost" size="lg">
              Learn more
              <ArrowRight className="group-hover:ml-2 transition-all" aria-hidden="true" />
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
