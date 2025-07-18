import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const galleryData = [
    {
        imageSrc: "/image.svg",
        imageAlt: "Image Description",
    },
    {
        imageSrc: "/image.svg",
        imageAlt: "Image Description",
    },
    {
        imageSrc: "/image.svg",
        imageAlt: "Image Description",
    },
    {
        imageSrc: "/image.svg",
        imageAlt: "Image Description",
    },
    {
        imageSrc: "/image.svg",
        imageAlt: "Image Description",
    },
    {
        imageSrc: "/image.svg",
        imageAlt: "Image Description",
    },
    {
        imageSrc: "/image.svg",
        imageAlt: "Image Description",
    },
    {
        imageSrc: "/image.svg",
        imageAlt: "Image Description",
    },
];

export default function GalleryTwo() {
    return (
        <section
            className="relative bg-background overflow-hidden"
            id="gallery"
            aria-label="Gallery section"
        >
            <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
                {/* Text Content */}
                <header className="text-center flex flex-col items-center justify-center">
                    <Badge variant="secondary">Tagline</Badge>
                    <h2 className="mt-4 md:max-w-2xl text-4xl font-bold tracking-tight text-balance">
                        Image Gallery
                    </h2>
                    <p className="mt-4 md:max-w-2xl text-lg text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </header>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryData.map((item, index) => (
                        <Image
                            className="w-full aspect-square object-cover select-none"
                            src={item.imageSrc}
                            width={200}
                            height={200}
                            key={item.imageAlt + index + "GalleryTwo"}
                            alt={item.imageAlt}
                        />
                    ))}
                </div>
            </div>
        </section >
    );
}
