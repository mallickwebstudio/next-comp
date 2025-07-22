import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export default function EventCardOne() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="event-section"
      aria-label="Event section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        <div className="divide-y border-y">
          {eventData.map((item, index) => (
            <div
              className="py-6 flex gap-4 flex-col md:flex-row md:items-center"
              key={item.title + index + "Card" + "EventCardOne"}
              itemScope
              itemType="https://schema.org/Event"
            >
              {/* Date Box */}
              <div className="py-2 px-3 flex flex-col justify-center items-center text-center bg-background border">
                <time
                  itemProp="startDate"
                  dateTime={`2024-02-${item.day}`}
                  className="text-sm"
                >
                  {item.day}
                </time>
                <div className="text-xl font-bold">{item.date}</div>
                <div className="text-sm">{item.monthYear}</div>
              </div>

              {/* Content */}
              <header className="md:flex-1">
                <div className="flex gap-2 items-center">
                  <Badge variant="secondary" itemProp="eventType">{item.category}</Badge>
                  {item.soldOut && (
                    <Badge className="h-fit" itemProp="eventStatus">
                      Sold Out
                    </Badge>
                  )}
                </div>
                <h3
                  className="mt-2 text-lg font-semibold hover:underline line-clamp-2"
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
                <p
                  className="mt-2 text-muted-foreground line-clamp-3"
                  itemProp="description"
                >
                  {item.excerpt}
                </p>
              </header>

              <Button className="cursor-pointer" variant="outline">
                {item.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
