import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Play } from "lucide-react";

export const eventData = [
  {
    href: "#",
    imageSrc: "/images/ai-trends.jpg",
    category: "Technology",
    duration: "45 minutes",
    status: "Live now",
    title: "Top AI Trends to Watch in 2025",
    excerpt:
      "Discover emerging AI technologies and how they’ll shape industries from healthcare to finance.",
    cta: "Join now"
  },
  {
    href: "#",
    imageSrc: "/images/marketing-growth.jpg",
    category: "Marketing",
    duration: "45 minutes",
    status: "Coming soon",
    title: "Growth Marketing Strategies for Startups",
    excerpt:
      "Learn data-driven strategies to scale your startup’s growth without burning your budget.",
    cta: "Register now"
  },
  {
    href: "#",
    imageSrc: "/images/remote-teams.jpg",
    category: "Business",
    duration: "45 minutes",
    status: "Replay available",
    title: "Building High-Performing Remote Teams",
    excerpt:
      "Explore leadership tactics and tools to help your remote teams thrive in a distributed world.",
    cta: "Watch replay"
  },
  {
    href: "#",
    imageSrc: "/images/design-trends.jpg",
    category: "Design",
    duration: "45 minutes",
    status: "Coming soon",
    title: "UI/UX Design Trends for 2025",
    excerpt:
      "Stay ahead of the curve with the latest design principles and patterns in modern interfaces.",
    cta: "Register now"
  },
  {
    href: "#",
    imageSrc: "/images/mental-health.jpg",
    category: "Wellness",
    duration: "45 minutes",
    status: "Live now",
    title: "Mental Wellness in a Fast-Paced World",
    excerpt:
      "Discover practical tools and habits to maintain mental health and balance in busy professional lives.",
    cta: "Join now"
  }
];

export default function EventCardThree() {
  return (
    <section
      className="relative bg-background overflow-hidden"
      id="event-section"
      aria-label="Event section"
    >
      <div className="container mx-auto md:max-w-3xl p-6 sm:py-10  md:p-12 lg:py-16">        <div className="mt-8 space-y-6">
          {eventData.map((item, index) => (
            <div
              className="p-4 gap-4 grid grid-cols-1 md:grid-cols-[1fr_auto] md:items-center border rounded-md"
              key={item.title + index + "Card" + "EventCardThree"}
              itemScope
              itemType="https://schema.org/Event"
            >
              {/* Content */}
              <header className="md:flex-1">
                <div className="flex gap-4 items-center">
                  <Badge variant="secondary" itemProp="eventType">{item.category}</Badge>
                  <div className="flex gap-1 items-center text-sm">
                    <Clock className="size-4" />
                    <time itemProp="startDate" dateTime="2024-02-09">{item.duration}</time>
                  </div>
                </div>

                <h3
                  className="mt-2 text-lg font-semibold hover:underline line-clamp-2"
                  itemProp="name"
                >
                  <Link href={item.href}>{item.title}</Link>
                </h3>

                <p
                  className="mt-2 text-muted-foreground line-clamp-3"
                  itemProp="description"
                >
                  {item.excerpt}
                </p>

              </header>
              <Button className="cursor-pointer" variant="outline" size="icon">
                <Play />
                <span className="sr-only">{item.cta}</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}
