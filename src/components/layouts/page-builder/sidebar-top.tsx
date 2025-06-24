'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { data } from '@/lib/database';
import { CirclePlus } from 'lucide-react';
import { usePageBuilder } from '@/hooks/page-builder-provider';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Image from 'next/image';

export default function SidebarTop() {
    const allBlocks = data.flatMap((section) =>
        section.category.flatMap((category) =>
            category.block.map((block) => ({ ...block }))
        )
    );

    const { addBlock } = usePageBuilder();
    const [open, setOpen] = useState(false);
    const [hoveredThumbnail, setHoveredThumbnail] = useState<string | null>(null);

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
                        <CommandGroup className='overflow-y-scroll'>
                            {allBlocks.map((block) => (
                                <CommandItem
                                    key={block.id}
                                    onSelect={() => {
                                        addBlock(block.id);
                                        setOpen(false);
                                    }}
                                    onMouseEnter={() => setHoveredThumbnail(block.thumbnail)}
                                    onMouseLeave={() => setHoveredThumbnail(null)}
                                >
                                    {block.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>

                    {/* Thumbnail Preview */}
                    {hoveredThumbnail && (
                        <div className="hidden sm:block p-2 pb-0 bg-secondary h-56 border-l">
                            <Image
                                className="h-full w-full aspect-video bg-card/70 object-contain object-top overflow-hidden"
                                src={hoveredThumbnail}
                                width={640}
                                height={360}
                                alt="Preview"
                            />
                        </div>
                    )}
                </PopoverContent>
            </Popover>
        </div>
    );
}
