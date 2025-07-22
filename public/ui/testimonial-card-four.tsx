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
    imgSrc: "/image.svg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Jane Doe",
    position: "CEO",
    company: "StellarTech"
  },
  {
    imgSrc: "/image.svg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Michael Smith",
    position: "Marketing Head",
    company: "BrightEdge"
  },
  {
    imgSrc: "/image.svg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Emily Johnson",
    position: "Product Manager",
    company: "NovaWare"
  },
  {
    imgSrc: "/image.svg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Jane Doe",
    position: "CEO",
    company: "StellarTech"
  },
  {
    imgSrc: "/image.svg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Michael Smith",
    position: "Marketing Head",
    company: "BrightEdge"
  },
  {
    imgSrc: "/image.svg",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    name: "Emily Johnson",
    position: "Product Manager",
    company: "NovaWare"
  },
];


export default function TestimonialCardFour() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="testimonial"
      aria-labelledby="testimonial-heading"
    >
      <div className="container mx-auto p-6 sm:py-10 md:p-12 lg:py-16">
        <div aria-label="Customer testimonials">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={testimonial.name + index + "TestimonialCardFour"}>
                  <figure
                    className="relative p-4 space-y-5 border rounded-md"
                    key={testimonial.name + "TestimonialTwo"}
                  >
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
                      <div className="size-10 aspect-square rounded-full overflow-hidden">
                        <Image
                          className="h-full object-cover"
                          src={testimonial.imgSrc}
                          width={40}
                          height={40}
                          alt={testimonial.name}
                        />
                      </div>

                      <figcaption className="text-sm text-muted-foreground">
                        <span className="font-semibold">{testimonial.name}</span><br />
                        <span className="text-nowrap">{testimonial.position}, {testimonial.company}</span>
                      </figcaption>
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
