import { Star } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    authorImgSrc: "/image.svg",
    logoImgSrc: "/logo.svg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Jane Doe",
    position: "CEO",
    company: "StellarTech"
  },
  {
    authorImgSrc: "/image.svg",
    logoImgSrc: "/logo.svg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Michael Smith",
    position: "Marketing Head",
    company: "BrightEdge"
  }
];


export default function TestimonialThree() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="testimonial"
      aria-labelledby="testimonial-heading"
    >
      <div className="container mx-auto p-6 sm:py-10 md:p-12 lg:py-16">
        {/* Text Content */}
        <header>
          <h2 className="scroll-m-20 text-3xl md:text-4xl  font-bold tracking-tight text-balance">
            Customer testimonials
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        {/* Testimonials */}
        <div className="mt-12" aria-label="Customer testimonials">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name + "TestimonialThree"}>
                  <figure className="relative flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <div className="w-full md:w-1/2">
                      <Image
                        className="w-full aspect-square overflow-hidden object-cover"
                        src={testimonial.authorImgSrc}
                        width={40}
                        height={40}
                        alt={testimonial.name}
                      />
                    </div>
                    <div className="w-full md:w-1/2 space-y-5">
                      <div className="flex gap-0.5 items-center" aria-hidden="true">
                        <span className="sr-only">Rated 5 out of 5 stars</span>
                        <Star className="size-5 fill-primary" />
                        <Star className="size-5 fill-primary" />
                        <Star className="size-5 fill-primary" />
                        <Star className="size-5 fill-primary" />
                        <Star className="size-5 fill-primary" />
                      </div>

                      <blockquote className="text-lg font-medium text-balance">
                        “{testimonial.quote}”
                      </blockquote>

                      <div className="flex flex-col md:flex-row gap-4 md:items-center">
                        <figcaption className="text-sm text-muted-foreground">
                          <span className="font-semibold">{testimonial.name}</span><br />
                          <span className="text-nowrap">{testimonial.position}, {testimonial.company}</span>
                        </figcaption>

                        <div className="hidden md:block w-px self-stretch bg-muted-foreground" aria-hidden="true" />

                        <div className="h-8 overflow-hidden">
                          <Image
                            className="h-full object-cover w-fit"
                            src={testimonial.logoImgSrc}
                            width={40}
                            height={40}
                            alt={`${testimonial.company} logo`}
                          />
                        </div>
                      </div>
                    </div>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" aria-label="previous slide" />
            <CarouselNext className="-right-4" aria-label="Next slide" />
          </Carousel>
        </div>
      </div>
    </section >
  );
}
