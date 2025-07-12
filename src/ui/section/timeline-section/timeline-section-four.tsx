import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

export default function TimelineSectionFour() {
  return (
    <section
      className="relative bg-background"
      id="timeline"
      aria-label="Timeline section"
    >
      <div className="relative container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="mx-auto md:max-w-2xl flex flex-col justify-center items-center text-center">
          <Badge variant="secondary">Tagline</Badge>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-balance">
            Medium length section heading goes here
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Button className="cursor-pointer" variant="secondary">
              Button
            </Button>
            <Button className="cursor-pointer" variant="outline">
              Button
            </Button>
          </div>
        </header>

        <div className="mt-12 ml-6 w-[90%] md:w-full md:ml-0 py-8  space-y-12 relative grid grid-cols-1 auto-rows-auto auto-cols-fr items-start justify-items-center ">
          {/* Timeline Observer */}
          <div className="absolute -left-6 md:left-auto w-0.5 h-full bg-secondary flex flex-col items-center z-0 
                justify-self-start md:justify-self-auto  
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
          {timelineData.map((item, index) => (
            <div
              className="grid grid-cols-1 md:grid-cols-2 md:gap-24"
              key={item.title + index + "TimelineSectionFour"}
            >
              <div
                className={cn(
                  "relative border p-4 rounded-md",
                  index % 2 ? "md:text-right" : "md:order-1"
                )}>
                {/* Timeline dot */}
                <div className={cn(
                  "absolute -left-[31px] md:left-auto top-6 p-2 size-3 bg-foreground flex items-center justify-center outline-4 outline-background rounded-full",
                  index % 2 ? "md:-right-14" : "md:-left-[55.5px]"
                )}
                />

                <h3 className="text-2xl font-semibold tracking-tight">
                  {item.date}
                </h3>
                <h4 className="mt-2 text-xl font-semibold tracking-tight">
                  {item.title}
                </h4>
                <p className="mt-2 text-muted-foreground">
                  {item.description}
                </p>
                <div className={cn("mt-4 flex gap-4", index % 2 && "md:flex-row-reverse")}>
                  <Button className="cursor-pointer" variant="outline">{item.buttonOne}</Button>
                  <Button className="cursor-pointer" variant="ghost">{item.buttonTwo}</Button>
                </div>
              </div>
              <div />
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
