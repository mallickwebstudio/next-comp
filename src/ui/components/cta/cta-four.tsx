import { Button } from "@/components/ui/button";
import { Box, Diamond } from "lucide-react";

export default function CtaFour() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="cta"
      aria-label="CTA section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <div className="mx-auto text-center md:max-w-2xl">
          <header>
            <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight text-balance">
              Medium length hero heading goes here
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </header>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg">
              Get started
            </Button>
            <Button variant="outline" size="lg">
              Learn more
            </Button>
          </div>

          <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-6 place-items-center justify-between ">
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
              <Box className="size-6" strokeWidth={3} />
              <h3 className="text-lg font-semibold tracking-tight">LOGO</h3>
            </div>
            <div className="flex gap-2 items-center">
              <Diamond className="size-6" strokeWidth={3} />
              <h3 className="text-lg font-semibold tracking-tight">LOGO</h3>
            </div>
            <div className="flex gap-2 items-center">
              <Box className="size-6" strokeWidth={3} />
              <h3 className="text-lg font-semibold tracking-tight">LOGO</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
