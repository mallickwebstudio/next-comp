"use client"
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
    "Join us for an unforgettable night of live indie music and energetic vibes.",
  cta: "Save my spot"
}

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

export default function EventHeaderOne() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents =
    activeCategory === "All"
      ? eventData
      : eventData.filter((event) => event.category === activeCategory);


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
            className="p-2 grid gap-4 md:grid-cols-2 md:items-center"
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
              <div className="absolute top-4 left-4 py-2 px-3 flex flex-col justify-center items-center text-center bg-background">
                <time
                  itemProp="startDate"
                  dateTime="2024-02-09"
                  className="text-sm"
                >
                  {featureEvent.day}
                </time>
                <div className="text-xl font-bold">{featureEvent.date}</div>
                <div className="text-sm">{featureEvent.monthYear}</div>
              </div>
            </div>

            {/* Event Info */}
            <header>
              <div className="flex gap-2 items-center">
                <Badge variant="secondary" itemProp="eventType">{featureEvent.category}</Badge>
                {featureEvent.soldOut && (
                  <Badge itemProp="eventStatus">
                    Sold Out
                  </Badge>
                )}
              </div>

              <h3
                className="mt-2 text-lg font-semibold hover:underline line-clamp-2"
                itemProp="name"
              >
                <Link href={featureEvent.href}>{featureEvent.title}</Link>
              </h3>

              <div
                className="-mt-1 text-sm"
                itemProp="location"
                itemScope
                itemType="https://schema.org/Place"
              >
                <span itemProp="address">{featureEvent.location}</span>
              </div>

              <p
                className="mt-2 text-muted-foreground line-clamp-3"
                itemProp="description"
              >
                {featureEvent.excerpt}
              </p>


              <Button className="mt-4 cursor-pointer" variant="outline">
                {featureEvent.cta}
              </Button>
            </header>
          </article>
        </div>

        {/* Category Filter */}
        <div className="mt-12">
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
        <div className="mt-8 divide-y">
          <div className="mt-8 divide-y">
            {filteredEvents.map((item, index) => (
              <div
                className="py-6 flex gap-4 flex-col md:flex-row md:items-center"
                key={item.title + index + "Card" + "EventHeaderOne"}
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
      </div>
    </section >
  );
}
