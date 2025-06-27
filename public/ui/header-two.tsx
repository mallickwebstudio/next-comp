import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeaderTwo() {
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
