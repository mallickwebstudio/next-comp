import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeaderThree() {
    return (
        <section
            className="relative bg-background overflow-hidden"
            id="hero"
            aria-label="Hero section"
        >
            <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <header>
                        <Badge variant="secondary">Tagline</Badge>
                        <h1 className="mt-4 text-4xl  font-bold tracking-tight text-balance">
                            Medium length hero heading goes here
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                    </header>

                    <form className="mt-4 flex flex-col sm:items-center sm:flex-row gap-2"
                        onSubmit={(e) => e.preventDefault()}>
                        <Input
                            className="h-10 w-full md:max-w-92"
                            type="email"
                            id="newsletter-email"
                            placeholder="Your email"
                            aria-label="Your email"
                            required
                        />
                        <Button type="submit" size="lg">
                            Subscribe
                        </Button>
                    </form>
                    <div className="mt-4 text-sm">
                        By clicking Sign Up you&apos;re confirming that you agree with our <a className="underline hover:underline-offset-2" href="#">Terms and Conditions</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
