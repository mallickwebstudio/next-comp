import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function HeaderFour() {
    return (
        <section
            className="relative bg-background overflow-hidden"
            id="hero"
            aria-label="Hero section"
        >
            <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16 md:flex md:items-center md:gap-12">
                {/* Text Content */}
                <header className="w-full md:w-1/2">
                    <Badge variant="secondary">Tagline</Badge>
                    <h1 className="mt-4 text-4xl  font-bold tracking-tight text-balance">
                        Medium length hero heading goes here
                    </h1>
                </header>

                <div className="mt-8 w-full md:w-1/2 flex flex-wrap justify-center md:justify-start gap-4">
                    <p className="text-lg text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <Button className="cursor-pointer" variant="default" size="lg">
                        Get started
                    </Button>
                    <Button className="cursor-pointer" variant="outline" size="lg">
                        Learn more
                    </Button>
                </div>
            </div>
        </section>
    );
}
