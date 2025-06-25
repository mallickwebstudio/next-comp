import { usePageBuilder } from "@/hooks/page-builder-provider";
import { getBlockById, cn } from "@/lib/utils";
import Image from "next/image";
import SidebarInsetButtons from "./sidebar-inset-buttons";
import { BadgeInfo } from "lucide-react";
import { useTheme } from "next-themes";

export default function SidebarInset({ className }: { className?: string }) {
    const { blocks } = usePageBuilder();
    const { theme } = useTheme();

    return (
        <div className={cn("p-4 h-full space-y-4", className)}>

            {blocks.length > 0 && <SidebarInsetButtons />}

            <div className="h-[calc(100dvh_-_144px)] bg-card/70 overflow-y-scroll rounded-md border">
                {blocks.length > 0 ? (
                    blocks.map(({ blockId, instanceId }) => {
                        const block = getBlockById(blockId);
                        if (!block) return null;

                        // Apply dark slug logic
                        const slug = block.slug;
                        const thumbnail = block.thumbnail;
                        const darkSlug = `dark-${slug}`;
                        const imageSrc =
                            theme === "dark"
                                ? thumbnail.replace(slug, darkSlug)
                                : thumbnail;

                        return (
                            <div key={instanceId} className="w-full">
                                <Image
                                    className="w-full h-auto object-cover"
                                    width={800}
                                    height={450}
                                    src={imageSrc}
                                    alt={block.name}
                                    loading="lazy"
                                />
                            </div>
                        );
                    })
                ) : (
                    <div className="p-2 size-full flex items-center justify-center">
                        <div className="p-4 text-center flex flex-col justify-center items-center gap-2 text-muted-foreground border-2 border-dotted rounded-md">
                            <BadgeInfo className="size-6" />
                            Please Add Block To Preview
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
