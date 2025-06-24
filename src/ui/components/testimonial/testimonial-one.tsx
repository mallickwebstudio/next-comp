import Image from "next/image";

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
];


export default function TestimonialOne() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="testimonial"
      aria-labelledby="testimonial-heading"
    >
      <div className="container mx-auto p-6 sm:py-10 md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="mx-auto md:max-w-xl md:w-2/3 text-center">
          <h2 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight text-balance">
            Customer testimonials
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-3" aria-label="Customer testimonials">
          {testimonials.map((testimonial) => (
            <figure
              className="relative py-4 flex flex-col gap-5 justify-center items-center text-center"
              key={testimonial.name + "TestimonialOne"}
            >
              <div className="h-10 rounded-full overflow-hidden">
                <Image
                  className="h-full object-cover w-fit"
                  src={testimonial.imgSrc}
                  width={40}
                  height={40}
                  alt={`${testimonial.name} - ${testimonial.company} logo`}
                />
              </div>

              <blockquote className="text-lg font-medium text-balance">
                “{testimonial.quote}”
              </blockquote>

              <figcaption className="mt-2 text-sm text-muted-foreground">
                <span className="font-semibold">{testimonial.name}</span><br />
                <span>{testimonial.position}, {testimonial.company}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
