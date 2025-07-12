import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function StatsSectionTwo() {
  return (
    <section
      className="relative bg-background text-neutral-50 overflow-hidden z-0"
      id="stats"
      aria-label="Stats section"
    >

      <div className="absolute inset-0 bg-neutral-900/30 -z-10" />

      {/* Background Image */}
      <div className="absolute h-full inset-0 -z-20">
        <Image
          className="w-full h-full object-cover object-center select-none"
          src="/image.svg"
          width={1280}
          height={720}
          alt="Image description"
        />
      </div>

      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Badge>Tagline</Badge>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance">
              Medium length hero heading goes here
            </h1>
          </div>
          <div>
            <p className="text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>
            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <Button className="cursor-pointer text-neutral-950 dark:text-neutral-50" variant="outline" size="lg">
                Get started
              </Button>
              <Button className="cursor-pointer text-neutral-50 dark:text-neutral-50" variant="link" size="lg">
                Learn more 
                <ChevronRight />
              </Button>
            </div>
          </div>
        </header>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="pl-4 border-l border-neutral-50">
            <div className="text-6xl font-bold">30%</div>
            <div className="mt-2">Short heading goes here</div>
          </div>
          <div className="pl-4 border-l border-neutral-50">
            <div className="text-6xl font-bold">30%</div>
            <div className="mt-2">Short heading goes here</div>
          </div>
          <div className="pl-4 border-l border-neutral-50">
            <div className="text-6xl font-bold">30%</div>
            <div className="mt-2">Short heading goes here</div>
          </div>
        </div>
      </div>
    </section >
  );
}
