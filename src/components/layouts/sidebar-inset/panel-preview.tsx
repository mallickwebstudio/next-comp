"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/metadata";
import { useTheme } from "next-themes";

export default function PanelPreview({
    slug,
    thumbnail,
    name,
}: {
    slug: string,
    thumbnail: string;
    name: string;
}) {
    const { theme } = useTheme();

    // Insert "dark-" before the slug in the image path
    const darkSlug = `dark-${slug}`;
    const imageSrc = theme === "dark"
        ? thumbnail.replace(slug, darkSlug)
        : thumbnail;

    return (
        <div className="relative p-4 pb-0 size-full bg-secondary">
            <div className="relative size-full z-0 bg-card/70 border border-b-0 select-none touch-none pointer-events-none">
                <Image
                    className="w-full object-cover"
                    width={320}
                    height={180}
                    src={imageSrc}
                    alt={`${siteConfig.name} ${name} Image`}
                />
            </div>
        </div>
    );
}
