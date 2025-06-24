'use client';

import { usePageBuilder } from "@/hooks/page-builder-provider";
import { getBlockById, cn } from "@/lib/utils";
import Image from "next/image";
import SidebarInsetTop from "./sidebar-inset-top";

export default function SidebarInset({ className }: { className?: string }) {
    const { blocks } = usePageBuilder();

    return (
        <div className={cn("p-4 h-[calc(100dvh_-_112px)] space-y-4", className)}>
            {blocks.length > 0 && (<SidebarInsetTop />)}

            <div className="border size-full bg-card/70 overflow-y-scroll rounded-md">
                {blocks.length > 0
                    ? blocks.map(({ blockId, instanceId }) => {
                        const block = getBlockById(blockId);
                        if (!block) return null;
                        return (
                            <div key={instanceId} className="w-full">
                                <Image
                                    className="w-full h-auto object-cover"
                                    width={1600}
                                    height={900}
                                    src={block.thumbnail}
                                    alt={block.name}
                                    loading="lazy"
                                />
                            </div>
                        );
                    })
                    : (
                        <div className="flex items-center justify-center">
                            Please Add Block To Preview
                        </div>
                    )
                }
            </div>
        </div>
    );
}
