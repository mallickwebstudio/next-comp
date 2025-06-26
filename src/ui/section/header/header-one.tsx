
export default function HeaderOne() {
    return (
        <section
            className="relative bg-background overflow-hidden"
            id="hero"
            aria-label="Hero section"
        >
            <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
                {/* Text Content */}
                <div className="w-full md:w-1/2">
                    <header>
                        <h1 className="mt-4 text-4xl  font-bold tracking-tight text-balance">
                            Medium length hero heading goes here
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </p>
                    </header>
                </div>
            </div>
        </section>
    );
}
