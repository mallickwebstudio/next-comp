import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EventItemHeaderFour() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="event-item-header"
      aria-label="Event item header section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 md:items-center gap-12">
        {/* Text Content */}
        <header>
          <h1 className="text-4xl font-extrabold tracking-tight text-balance">
            Event title heading
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>

          <form className="mt-6 max-w-lg flex flex-col sm:items-center sm:flex-row gap-2"
            onSubmit={(e) => e.preventDefault()}>
            <Input
              className="flex-1 h-10"
              type="email"
              id="newsletter-email"
              placeholder="Enter your email"
              aria-label="Enter your email"
              required
            />
            <Button className="cursor-pointer" type="submit" size="lg">
              Save my Spots
            </Button>
          </form>

          <div className="mt-4 text-sm">
            By clicking Save my spot you&apos;re confirming that you agree with our <a className="underline hover:underline-offset-2" href="#">Terms and Conditions</a>
          </div>
        </header>

        {/* Right Side */}
        <div className="flex flex-col justify-center items-center">
          <div className="text-2xl font-medium">Sat 10 Feb</div>

          <div className="mt-4 p-4 w-full md:w-fit flex justify-between md:justify-around divide-x border">
            <div className="px-4 text-center">
              <div className="text-3xl font-bold">45</div>
              <div className="">Days</div>
            </div>
            <div className="px-4 text-center">
              <div className="text-3xl font-bold">10</div>
              <div className="">Hours</div>
            </div>
            <div className="px-4 text-center">
              <div className="text-3xl font-bold">35</div>
              <div className="">Mins</div>
            </div>
            <div className="px-4 text-center">
              <div className="text-3xl font-bold">59</div>
              <div className="">Secs</div>
            </div>
          </div>

          <Badge className="mt-4">10 Spots left!</Badge>
        </div>
      </div>
    </section>
  );
}
