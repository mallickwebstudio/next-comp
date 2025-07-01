"use client"
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

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


// Derive unique categories
const categories = ["All", ...new Set(eventData.map((item) => item.category))];

export default function EventSectionTwo() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents =
    activeCategory === "All"
      ? eventData
      : eventData.filter((event) => event.category === activeCategory);


  return (
    <section
      className="relative bg-background overflow-hidden"
      id="event-section"
      aria-label="Event section"
    >
      <div className="container mx-auto md:max-w-3xl p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header className="flex flex-col justify-center items-center text-center">
          <Badge variant="secondary">Tagline</Badge>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-balance">
            Events
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
        </header>

        {/* Category Filter */}
        <div className="mt-12 mx-auto w-fit">
          <div className="flex gap-4 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeCategory ? "outline" : "ghost"}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Filtered Blog Cards */}
        <div className="mt-8 divide-y border-y">
          {filteredEvents.map((item, index) => (
            <div
              className="py-6 gap-4 grid grid-cols-1 md:grid-cols-[0.4fr_1fr_auto] md:items-center"
              key={item.title + index + "Card" + "EventSectionTwo"}
              itemScope
              itemType="https://schema.org/Event"
            >
              {/* Event Image */}
              <div className="relative w-full">
                <Image
                  className="w-full aspect-square object-cover select-none"
                  src={item.imageSrc}
                  width={160}
                  height={160}
                  alt={`Image for ${item.title}`}
                  itemProp="image"
                />
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

                <div className="flex gap-2 items-center text-sm">
                  <div
                    className="-mt-1"
                    itemProp="location"
                    itemScope
                    itemType="https://schema.org/Place"
                  >
                    <span itemProp="address">{item.location}</span>
                  </div>

                  <span>•</span>

                  <div className="flex gap-1">
                    <span>{item.date}</span>
                    <time itemProp="startDate" dateTime="2024-02-09">{item.day}</time>
                    <span>{item.monthYear}</span>
                  </div>
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
