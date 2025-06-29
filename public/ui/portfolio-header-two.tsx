import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function PortfolioHeaderTwo() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="portfolio-header"
      aria-label="Portfolio header section"
    >
      {/* Image */}
      <div>
        <Image
          className="w-full h-80  object-cover select-none"
          src="/image.svg"
          width={200}
          height={200}
          alt="Image Description"
        />
      </div>

      {/* Text Content */}
      <header className="container mx-auto max-w-2xl p-6 sm:py-10  md:p-12 lg:py-16 flex flex-col items-center justify-center text-center">
        <h1 className="scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight text-balance">
          Project name here
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
        <div className="mt-4 flex items-center gap-2">
          <Badge variant="secondary">Tag One</Badge>
          <Badge variant="secondary">Tag Two</Badge>
          <Badge variant="secondary">Tag Three</Badge>
        </div>
      </header>
    </section>
  );
}
