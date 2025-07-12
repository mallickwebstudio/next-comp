import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const timelineData = [
    {
        date: "Date",
        title: "Short heading here",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        buttonOne: "Button",
        buttonTwo: "Button"
    },
    {
        date: "Date",
        title: "Short heading here",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        buttonOne: "Button",
        buttonTwo: "Button"
    },
    {
        date: "Date",
        title: "Short heading here",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        buttonOne: "Button",
        buttonTwo: "Button"
    },
    {
        date: "Date",
        title: "Short heading here",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        buttonOne: "Button",
        buttonTwo: "Button"
    }
];

export default function TimelineSectionTwo() {
    return (
        <section
            className="relative bg-background"
            id="timeline"
            aria-label="Timeline section"
        >
            <div className="
            container mx-auto p-6 sm:py-10 md:p-12 lg:py-16 md:max-w-2xl
            relative grid grid-cols-1 auto-rows-auto auto-cols-fr gap-x-32 gap-y-12 items-start justify-items-center
                    ">
                {/* Text Content */}
                <header>
                    <Badge variant="secondary">Tagline</Badge>
                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-balance">
                        Medium length section heading goes here
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <Button className="cursor-pointer" variant="secondary">
                            Button
                        </Button>
                        <Button className="cursor-pointer" variant="outline">
                            Button
                        </Button>
                    </div>
                </header>

                {/* Timeline Observer */}
                <div className="
                absolute w-0.5 h-full bg-secondary flex flex-col items-center z-0
                justify-self-start row-start-2 row-end-3 col-start-1 col-end-2 
                ">
                    {/* Top fade overlay */}
                    <div className="absolute top-0 h-32 w-full bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

                    {/* Scroll progress (sticky) line */}
                    <div className="sticky top-0 -mt-[50dvh] h-[50dvh] w-full bg-foreground z-0" />

                    {/* Bottom fade overlay */}
                    <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />

                    {/* Optional cover for progress line (like mask or overlay) */}
                    <div className="absolute -top-[50dvh] h-[50dvh] w-full bg-background pointer-events-none z-20" />
                </div>

                {/* Timeline Data */}
                <div className="ml-12 md:ml-24 py-8 w-full space-y-12">
                    {timelineData.map((item, index) => (
                        <div
                            className="relative"
                            key={item.title + index + "TimelineSectionTwo"}
                        >
                            <div className="absolute -left-[31px] md:-left-[55.5px] top-2 p-2 size-3 bg-foreground flex items-center justify-center outline-4 outline-background rounded-full" />

                            <h3 className="text-2xl font-semibold tracking-tight">
                                {item.date}
                            </h3>
                            <h4 className="mt-2 text-xl font-semibold tracking-tight">
                                {item.title}
                            </h4>
                            <p className="mt-2 text-muted-foreground">
                                {item.description}
                            </p>
                            <div className="mt-4 flex gap-4">
                                <Button className="cursor-pointer" variant="outline">{item.buttonOne}</Button>
                                <Button className="cursor-pointer" variant="ghost">{item.buttonTwo}</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
