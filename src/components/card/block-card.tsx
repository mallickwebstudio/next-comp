"use client"
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ArrowRight, ArrowUpRight, Eye } from "lucide-react";
import { Block } from "@/types";
import { siteConfig } from "@/lib/metadata";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function BlockCard({
    categorySlug,
    sectionSlug,
    blockData,
}: {
    categorySlug: string;
    sectionSlug: string;
    blockData: Block;
}) {
    const { slug, name, thumbnail } = blockData;
    const { theme } = useTheme();

    // Insert "dark-" before the slug in the image path
    const darkSlug = `dark-${slug}`;
    const imageSrc = theme === "dark"
        ? thumbnail.replace(slug, darkSlug)
        : thumbnail;

    return (
        <div className="p-2 bg-card rounded-md">
            <div className="relative px-4 w-full aspect-video bg-secondary rounded-sm border overflow-hidden">
                <div className="relative top-4 size-full bg-card/70">
                    <Image
                        className="w-full object-contain select-none pointer-events-none"
                        width={320}
                        height={180}
                        src={imageSrc}
                        alt={`${siteConfig.name} ${name} Image`}
                    />
                </div>
            </div>

            <div className="mt-2 flex justify-between items-end">
                <div>{name}</div>

                <div className="flex items-center gap-2">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link className={cn(buttonVariants({ variant: "outline", size: "icon" }), "size-6")} href={"/preview?block=" + slug} target="_blank">
                                <Eye />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent >
                            <p>
                                Live Preview
                                <ArrowUpRight className="inline left-2 size-3" />
                            </p>
                        </TooltipContent>
                    </Tooltip>
                    <Link
                        className={cn(buttonVariants({ variant: "outline", size: "icon" }), "size-6")}
                        href={`/components/${categorySlug}/${sectionSlug}/${slug}`}
                    >
                        <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    )
}
