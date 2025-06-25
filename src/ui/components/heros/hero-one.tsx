import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroOne() {
    return (
        <section
            className="relative bg-background overflow-hidden"
            id="hero"
            aria-label="Hero section"
        >
            <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16 flex flex-col md:flex-row items-center gap-12">
                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <header>
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
                            Medium length hero heading goes here
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                    </header>
                    
                    <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                        <Button variant="default" size="lg">
                            Get started
                        </Button>
                        <Button variant="outline" size="lg">
                            Learn more
                        </Button>
                    </div>
                </div>

                {/* Hero Image */}
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
