import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Block } from "@/types";
import PanelPreview from "./panel-preview";
import PanelCode from "./panel-code";
import { ArrowUpRight, Eye } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// const tabsContentClass = "relative aspect-video size-full bg-accent dark:bg-card rounded-sm border overflow-hidden";
const tabsContentClass = "relative aspect-video w-full max-w-full bg-accent dark:bg-card rounded-sm border overflow-hidden";


export default function PreviewTab({
    data,
}: {
    data: Block;
}) {
    const { slug, name, thumbnail } = data;

    return (
        <div className="p-2 bg-card rounded-md">
            <Tabs defaultValue="preview" className="w-full min-w-4 scroll-m-4">
                <TabsContent className={tabsContentClass} value="preview">
                    <PanelPreview slug={slug} thumbnail={thumbnail} name={name} />
                </TabsContent>

                <TabsContent className={tabsContentClass} value="tsx">
                    <PanelCode fileSlug={slug} />
                </TabsContent>

                <div className="flex items-end">
                    <div className="w-full flex-1">{name}</div>
                    <div className="flex gap-1 items-center">
                        <Link className={cn(buttonVariants({ variant: "outline", size: "icon" }), "size-8")} href={"/preview?block=" + slug} target="_blank">
                            <ArrowUpRight />
                        </Link>
                        <TabsList> {/* Triggers */}
                            <TabsTrigger className="cursor-pointer" value="preview">
                                <Eye />
                            </TabsTrigger>
                            <TabsTrigger className="cursor-poi  nter" value="tsx">.tsx</TabsTrigger>
                        </TabsList>
                    </div>
                </div>
            </Tabs>
        </div>
    )
}
