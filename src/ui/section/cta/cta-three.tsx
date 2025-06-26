import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CtaThree() {
  return (
    <section
      className="relative bg-[url('/image.svg')] bg-no-repeat bg-cover bg-center overflow-hidden"
      id="cta"
      aria-label="CTA section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <header>
            <h1 className="scroll-m-20 text-background dark:text-foreground text-3xl md:text-4xl font-extrabold tracking-tight text-balance">
              Medium length hero heading goes here
            </h1>
            <p className="mt-4 text-lg text-muted/70 dark:text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </header>

        </div>

        {/* User Input */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <form className="flex flex-col sm:flex-row gap-2"
            onSubmit={(e) => e.preventDefault()}>
            <Input
              className="flex-1 h-10 !bg-background"
              type="email"
              id="newsletter-email"
              placeholder="Your email"
              aria-label="Your email"
              required
            />
            <Button type="submit"size="lg">
              Subscribe
            </Button>
          </form>
          <div className="mt-4 text-sm text-muted/70 dark:text-muted-foreground">
            By clicking Sign Up you&apos;re confirming that you agree with our <a className="underline hover:underline-offset-2" href="#">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </section>
  );
}
