'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';
import { usePageBuilder } from '@/hooks/page-builder-provider';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { siteConfig } from '@/lib/metadata';
import { getAllBlocks } from '@/lib/utils';

export default function SidebarTop() {
    const allBlocks = getAllBlocks();

    const { addBlock } = usePageBuilder();
    const [open, setOpen] = useState(false);
    const [hoveredBlock, setHoveredBlock] = useState<null | { thumbnail: string; slug: string }>(null);

    const { theme } = useTheme();

    // Dynamically resolve thumbnail path based on theme
    const getImageSrc = (thumbnail: string, slug: string) => {
        if (theme === 'dark') {
            const darkSlug = `dark-${slug}`;
            return thumbnail.replace(slug, darkSlug);
        }
        return thumbnail;
    };

    return (
        <div className="relative flex flex-col gap-2">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full cursor-pointer group" variant="outline">
                        <CirclePlus className="size-5 text-muted-foreground group-hover:text-foreground transition-all" />
                        <span>Add Block</span>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="relative left-4 w-full p-0 flex overflow-hidden">
                    <Command className="relative left-0 w-64 max-h-56">
                        <CommandInput placeholder="Search block..." />
                        <CommandEmpty>No block found.</CommandEmpty>
                        <CommandGroup className="overflow-y-scroll">
                            {allBlocks.map((block) => (
                                <CommandItem
                                    key={block.id}
                                    onSelect={() => {
                                        addBlock(block.id);
                                        setOpen(false);
                                    }}
                                    onMouseEnter={() => setHoveredBlock({ thumbnail: block.thumbnail, slug: block.slug })}
                                    onMouseLeave={() => setHoveredBlock(null)}
                                >
                                    {block.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>

                    {/* Thumbnail Preview */}
                    {hoveredBlock && (
                        <div className="hidden sm:block p-2 pb-0 bg-secondary h-56 border-l">
                            <Image
                                className="h-full w-full aspect-video bg-card/70 object-contain object-top overflow-hidden"
                                src={getImageSrc(hoveredBlock.thumbnail, hoveredBlock.slug)}
                                width={320}
                                height={180}
                                alt={siteConfig.name + " " + hoveredBlock.slug + " Image"}
                            />
                        </div>
                    )}
                </PopoverContent>
            </Popover>
        </div>
    );
}
