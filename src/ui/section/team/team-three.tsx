import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dribbble, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamData = [
    {
        name: "Full Name",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imageSrc: "/image.svg",
        links: [
            {
                icon: <Linkedin className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Twitter className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Dribbble className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
        ]
    },
    {
        name: "Full Name",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imageSrc: "/image.svg",
        links: [
            {
                icon: <Linkedin className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Twitter className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Dribbble className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
        ]
    },
    {
        name: "Full Name",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imageSrc: "/image.svg",
        links: [
            {
                icon: <Linkedin className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Twitter className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Dribbble className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
        ]
    },
    {
        name: "Full Name",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imageSrc: "/image.svg",
        links: [
            {
                icon: <Linkedin className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Twitter className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Dribbble className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
        ]
    },
    {
        name: "Full Name",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imageSrc: "/image.svg",
        links: [
            {
                icon: <Linkedin className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Twitter className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Dribbble className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
        ]
    },
    {
        name: "Full Name",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imageSrc: "/image.svg",
        links: [
            {
                icon: <Linkedin className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Twitter className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Dribbble className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
        ]
    },
    {
        name: "Full Name",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imageSrc: "/image.svg",
        links: [
            {
                icon: <Linkedin className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Twitter className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Dribbble className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
        ]
    },
    {
        name: "Full Name",
        jobTitle: "Job Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        imageSrc: "/image.svg",
        links: [
            {
                icon: <Linkedin className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Twitter className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
            {
                icon: <Dribbble className="size-5" />,
                label: "Linkedin",
                href: "#"
            },
        ]
    },
]

export default function TeamOne() {
    return (
        <section
            className="relative bg-background overflow-hidden"
            id="team"
            aria-label="Team section"
        >
            <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
                {/* Text Content */}
                <header className="md:max-w-2xl">
                    <Badge variant="secondary">Tagline</Badge>
                    <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance">
                        Our team
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </header>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {teamData.map((item, index) => (
                        <article
                            className="p-4 max-w-sm"
                            itemScope
                            itemType="https://schema.org/Person"
                            key={item.name + index + "TeamOne"}
                        >
                            <figure>
                                <Image
                                    className="w-1/3 aspect-square object-cover rounded-full"
                                    src={item.imageSrc}
                                    width={160}
                                    height={160}
                                    alt={`Photo of ${item.name}, ${item.jobTitle}`}
                                    itemProp="image"
                                />
                            </figure>

                            <header className="mt-3">
                                <h3 className="text-lg font-semibold" itemProp="name">{item.name}</h3>
                                <p className="text-muted-foreground" itemProp="jobTitle">{item.jobTitle}</p>
                            </header>

                            <p className="mt-3 text-sm text-muted-foreground" itemProp="description">
                                {item.description}
                            </p>

                            <div className="mx-auto mt-3 flex gap-3" aria-label={`Social links for ${item.name}`}>
                                {item.links.map((link, index) => (
                                    <Link
                                        className="block"
                                        href={link.href}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        aria-label={link.label}
                                        key={link.label + index + "TeamOne"}
                                    >
                                        {link.icon}
                                        <span className="sr-only">{link.label}</span>
                                    </Link>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12">
                    <h3 className="text-3xl font-semibold">We&apos;re hiring!</h3>
                    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button className="mt-6 cursor-pointer" variant="outline">Open positions</Button>
                </div>
            </div>
        </section>
    );
}
