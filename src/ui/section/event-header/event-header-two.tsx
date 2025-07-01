import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const featureEvent = {
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
    "Join us for an unforgettable night of live indie music and energetic vibes. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  cta: "Save my spot"
}

const featureEvents = [
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
  },
  {
    href: "#",
    imageSrc: "/image.svg",
    category: "Business",
    date: "Mon",
    day: "12",
    monthYear: "Feb 2024",
    title: "Startup Founders Meetup",
    soldOut: false,
    location: "New York, NY",
    excerpt:
      "Network with founders and investors shaping the future of tech startups.",
    cta: "Save my spot"
  },
  {
    href: "#",
    imageSrc: "/image.svg",
    category: "Art",
    date: "Tue",
    day: "13",
    monthYear: "Feb 2024",
    title: "Digital Art Expo 2024",
    soldOut: false,
    location: "Austin, TX",
    excerpt:
      "Discover groundbreaking work from digital artists and creators worldwide.",
    cta: "Save my spot"
  }
];

export default function EventHeaderTwo() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="event-header"
      aria-label="Event Header section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="max-w-2xl">
          <Badge variant="secondary">Tagline</Badge>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-balance">
            Events
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </header>

        {/* Feature Event */}
        <div className="mt-12">
          <article
            className="grid md:grid-cols-2 md:items-center border"
            itemScope
            itemType="https://schema.org/Event"
          >
            {/* Event Image */}
            <div className="relative w-full">
              <Image
                className="w-full aspect-video object-cover select-none"
                src={featureEvent.imageSrc}
                width={160}
                height={160}
                alt={`Image for ${featureEvent.title}`}
                itemProp="image"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" itemProp="eventType">{featureEvent.category}</Badge>
              </div>
            </div>

            {/* Event Info */}
            <header className="p-4">
              {featureEvent.soldOut && (
                <Badge className="mb-4" itemProp="eventStatus">
                  Sold Out
                </Badge>
              )}

              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Calendar className="size-5" />
                  <div className="flex gap-1 text-sm">
                    <span>{featureEvent.date}</span>
                    <time itemProp="startDate" dateTime="2024-02-09">{featureEvent.day}</time>
                    <span>{featureEvent.monthYear}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin className="size-5" />
                  <div className="flex gap-1 text-sm">
                    <div
                      className="-mt-1 text-sm"
                      itemProp="location"
                      itemScope
                      itemType="https://schema.org/Place"
                    >
                      <span itemProp="address">{featureEvent.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3
                className="mt-4 text-lg font-semibold hover:underline line-clamp-2"
                itemProp="name"
              >
                <Link href={featureEvent.href}>{featureEvent.title}</Link>
              </h3>

              <p className="mt-2 text-muted-foreground line-clamp-3" itemProp="description">
                {featureEvent.excerpt}
              </p>

              <Button className="mt-4 cursor-pointer" variant="outline">
                {featureEvent.cta}
              </Button>
            </header>
          </article>
        </div>

        {/* Filtered Blog Cards */}
        <h2 className="mt-12 font-bold text-2xl">Featured Events</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {featureEvents.map((item, index) => (
            <article
              className="grid border"
              itemScope
              itemType="https://schema.org/Event"
              key={item.title + index + "Card" + "EventHeaderTwo"}
            >
              {/* Event Image */}
              <div className="relative w-full">
                <Image
                  className="w-full aspect-video object-cover select-none"
                  src={item.imageSrc}
                  width={160}
                  height={160}
                  alt={`Image for ${item.title}`}
                  itemProp="image"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" itemProp="eventType">{item.category}</Badge>
                </div>
              </div>

              {/* Event Info */}
              <header className="p-4">
                {item.soldOut && (
                  <Badge className="mb-4" itemProp="eventStatus">
                    Sold Out
                  </Badge>
                )}

                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <Calendar className="size-5" />
                    <div className="flex gap-1 text-sm">
                      <span>{item.date}</span>
                      <time itemProp="startDate" dateTime="2024-02-09">{item.day}</time>
                      <span>{item.monthYear}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="size-5" />
                    <div className="flex gap-1 text-sm">
                      <div
                        className="-mt-1 text-sm"
                        itemProp="location"
                        itemScope
                        itemType="https://schema.org/Place"
                      >
                        <span itemProp="address">{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3
                  className="mt-4 text-lg font-semibold hover:underline line-clamp-2"
                  itemProp="name"
                >
                  <Link href={item.href}>{item.title}</Link>
                </h3>

                <p className="mt-2 text-muted-foreground line-clamp-3" itemProp="description">
                  {item.excerpt}
                </p>

                <Link className={cn(buttonVariants({ variant: "link" }), "mt-4 !px-0 cursor-pointer")} href={item.href}>
                  View More
                  <ChevronRight />
                </Link>
              </header>
            </article>
          ))}
        </div>
      </div>
    </section >
  );
}
