import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function HeroTwo() {
    return (
        <section
            className="relative bg-background overflow-hidden"
            id="hero"
            aria-label="Hero section"
        >
            <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16 flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="w-full md:w-1/2 text-left md:order-1">
                    <header>
                        <h1 className="text-4xl font-extrabold tracking-tight text-balance">
                            Medium length hero heading goes here
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                    </header>

                    <form className="mt-4 flex flex-col sm:items-center sm:flex-row gap-2"
                        onSubmit={(e) => e.preventDefault()}>
                        <Input
                            className="flex-1 h-10"
                            type="email"
                            id="newsletter-email"
                            placeholder="Your email"
                            aria-label="Your email"
                            required
                        />
                        <Button className="cursor-pointer" type="submit" size="lg">
                            Subscribe
                        </Button>
                    </form>
                    <div className="mt-4 text-sm">
                        By clicking Sign Up you&apos;re confirming that you agree with our <a className="underline hover:underline-offset-2" href="#">Terms and Conditions</a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <Image
                        className="max-w-full h-auto"
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
