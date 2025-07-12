import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function StatsSectionThree() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="stats"
      aria-label="Stats section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="flex flex-col items-center justify-center text-center">
          <Badge>Tagline</Badge>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance">
            Medium length hero heading goes here
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        <div className="mt-12 grid md:grid-cols-[0.4fr_1fr] md:items-center gap-8">
          <div className="mt-12 grid grid-cols-1 gap-6">
            <div className="pl-4 border-l border-foreground md:border-l-0">
              <div className="text-6xl font-bold">30%</div>
              <div className="mt-2">Short heading goes here</div>
            </div>
            <div className="pl-4 border-l border-foreground md:border-l-0">
              <div className="text-6xl font-bold">30%</div>
              <div className="mt-2">Short heading goes here</div>
            </div>
            <div className="pl-4 border-l border-foreground md:border-l-0">
              <div className="text-6xl font-bold">30%</div>
              <div className="mt-2">Short heading goes here</div>
            </div>
          </div>

          <Image
            className="w-full h-full aspect-video object-cover object-center rounded-md select-none"
            src="/image.svg"
            width={800}
            height={450}
            alt="Image description"
          />
        </div>
      </div>
    </section >
  );
}
