import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

export const eventData = [
  {
    href: "#",
    imageSrc: "/image.svg",
    category: "Music",
    date: "Fri",
    day: "09",
    monthYear: "Feb 2024",
    title: "Indie Rock Night Festival",
    soldOut: true,
    location: "Los Angeles, CA",
    excerpt:
      "Join us for an unforgettable night of live indie music and energetic vibes.",
    cta: "Save my spot"
  },
  {
    href: "#",
    imageSrc: "/image.svg",
    category: "Tech",
    date: "Sat",
    day: "10",
    monthYear: "Feb 2024",
    title: "FutureStack AI Conference",
    soldOut: false,
    location: "San Francisco, CA",
    excerpt:
      "Explore the latest trends in AI, cloud computing, and developer tools.",
    cta: "Save my spot"
  },
  {
    href: "#",
    imageSrc: "/image.svg",
    category: "Health",
    date: "Sun",
    day: "11",
    monthYear: "Feb 2024",
    title: "Holistic Wellness Retreat",
    soldOut: false,
    location: "Sedona, AZ",
    excerpt:
      "Experience a weekend of yoga, mindfulness, and wellness workshops.",
    cta: "Save my spot"
  }
];

export default function EventSectionFour() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="event-section"
      aria-label="Event section"
    >
      <div className="container p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="mx-auto md:max-w-3xl flex flex-col justify-center items-center text-center">
          <Badge variant="secondary">Tagline</Badge>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-balance">
            Webinars
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </header>

        {/* Filtered Blog Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {eventData.map((item, index) => (
            <article
              className="flex flex-col border"
              itemScope
              itemType="https://schema.org/Event"
              key={item.title + index + "Card" + "EventSectionFour"}
            >
              {/* Event Image */}
              <div className="relative w-full aspect-video">
                <Image
                  className="size-full object-cover select-none"
                  src={item.imageSrc}
                  width={160}
                  height={160}
                  alt={`Image for ${item.title}`}
                  itemProp="image"
                />
                <div className="absolute top-4 left-4 py-2 px-3 flex flex-col justify-center items-center text-center bg-background">
                  <time
                    itemProp="startDate"
                    dateTime="2024-02-09"
                    className="text-sm"
                  >
                    {item.day}
                  </time>
                  <div className="text-xl font-bold">{item.date}</div>
                  <div className="text-sm">{item.monthYear}</div>
                </div>
              </div>

              {/* Event Info */}
              <header className="p-4 flex flex-col flex-1">
                {item.soldOut && (
                  <Badge className="mb-4" itemProp="eventStatus">
                    Sold Out
                  </Badge>
                )}
                <div className="flex-1">
                  <h3
                    className="text-lg font-semibold hover:underline line-clamp-2"
                    itemProp="name"
                  >
                    <Link href={item.href}>{item.title}</Link>
                  </h3>

                  <div
                    className="-mt-1 text-sm"
                    itemProp="location"
                    itemScope
                    itemType="https://schema.org/Place"
                  >
                    <span itemProp="address">{item.location}</span>
                  </div>

                  <p className="mt-2 text-muted-foreground line-clamp-3" itemProp="description">
                    {item.excerpt}
                  </p>
                </div>
                <Link className={cn(buttonVariants({ variant: "link" }), "mt-4 !px-0 cursor-pointer w-fit")} href={item.href}>
                  View More
                  <ChevronRight />
                </Link>
              </header>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button className="cursor-pointer" variant="outline">
            View More
          </Button>
        </div>
      </div>
    </section >
  );
}
