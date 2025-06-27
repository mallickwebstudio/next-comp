import { Button } from "@/components/ui/button";

export default function HeroThree() {
    return (
        <section
            className="relative bg-[url('/image.svg')] bg-no-repeat bg-cover bg-center md:bg-right overflow-hidden"
            id="hero"
            aria-label="Hero section"
        >
            <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <header>
                        <h1 className="text-background dark:text-foreground text-4xl font-extrabold tracking-tight text-balance">
                            Medium length hero heading goes here
                        </h1>
                        <p className="mt-4 text-lg text-muted/70 dark:text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                    </header>
                    
                    <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                        <Button className="cursor-pointer" variant="default" size="lg">
                            Get started
                        </Button>
                        <Button className="cursor-pointer" variant="outline" size="lg">
                            Learn more
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
