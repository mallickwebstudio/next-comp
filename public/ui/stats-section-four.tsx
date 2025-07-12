import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function StatsSectionFour() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="stats"
      aria-label="Stats section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="grid grid-cols-1 md:grid-cols-2 md:items-center gap-12">
          <div>
            <Badge>Tagline</Badge>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance">
              Medium length hero heading goes here
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
            </p>

            <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <Button className="cursor-pointer" variant="outline" size="lg">
                Get started
              </Button>
              <Button className="cursor-pointer" variant="ghost" size="lg">
                Learn more
              </Button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="pl-4 border-l border-foreground">
              <div className="text-6xl font-bold">30%</div>
              <div className="mt-2">Short heading goes here</div>
            </div>
            <div className="pl-4 border-l border-foreground">
              <div className="text-6xl font-bold">30%</div>
              <div className="mt-2">Short heading goes here</div>
            </div>
            <div className="pl-4 border-l border-foreground">
              <div className="text-6xl font-bold">30%</div>
              <div className="mt-2">Short heading goes here</div>
            </div>
            <div className="pl-4 border-l border-foreground">
              <div className="text-6xl font-bold">30%</div>
              <div className="mt-2">Short heading goes here</div>
            </div>
          </div>
        </header>
      </div>
    </section >
  );
}
