'use client';

import { usePageBuilder } from "@/hooks/page-builder-provider";
import { data } from "@/lib/database";
import { GripVertical, X } from "lucide-react";
import { useState } from "react";
import { DndContext, closestCenter, useSensor, useSensors, PointerSensor, DragEndEvent, DragOverlay } from '@dnd-kit/core';
import { SortableContext, arrayMove, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

function getBlockById(id: string) {
    return data.flatMap(section =>
        section.category.flatMap(category =>
            category.block
        )
    ).find(block => block.id === id);
}

function SortableBlock({ instanceId, blockId }: { instanceId: string; blockId: string }) {
    const { removeBlock } = usePageBuilder();
    const block = getBlockById(blockId);

    const {
        attributes,
        listeners,
        setNodeRef,
        setActivatorNodeRef,
        transform,
        transition,
    } = useSortable({ id: instanceId });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} className="flex items-center">
            <div
                ref={setActivatorNodeRef}
                className="h-8 flex items-center cursor-grab group/grip"
                title="Drag to rearrange"
                {...listeners}
            >
                <GripVertical className="size-5 text-muted-foreground group-hover/grip:text-foreground" />
            </div>
            <div className="relative h-8 px-2 bg-secondary flex items-center rounded-md overflow-hidden flex-1">
                <div className="text-sm text-muted-foreground text-nowrap overflow-hidden text-ellipsis select-none pointer-events-none">
                    {block?.name}
                </div>
                <div
                    className="absolute right-0 bg-secondary h-8 px-2 flex items-center cursor-pointer group/x"
                    onClick={() => removeBlock(instanceId)}
                >
                    <div className="absolute top-0 -left-4 w-4 h-full bg-gradient-to-l from-secondary to-transparent" />
                    <X className="size-4 text-muted-foreground group-hover/x:text-red-600" />
                </div>
            </div>
        </div>
    );
}



export default function SidebarList() {
    const { blocks, setBlocks } = usePageBuilder();
    const [activeId, setActiveId] = useState<string | null>(null);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = blocks.findIndex(b => b.instanceId === active.id);
            const newIndex = blocks.findIndex(b => b.instanceId === over?.id);
            setBlocks(arrayMove(blocks, oldIndex, newIndex));
        }
        setActiveId(null);
    };


    return (
        <div className="space-y-2">
            <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
                onDragStart={(e) => setActiveId(e.active.id as string)}
                modifiers={[restrictToVerticalAxis]}
            >
                <SortableContext items={blocks.map(b => b.instanceId)} strategy={verticalListSortingStrategy}>
                    {blocks.map((block) => (
                        <SortableBlock
                            key={block.instanceId}
                            instanceId={block.instanceId}
                            blockId={block.blockId}
                        />
                    ))}
                </SortableContext>


                <DragOverlay>
                    {activeId ? (
                        <div className="flex items-center opacity-70">
                            <div className="h-8 flex items-center cursor-grabbing">
                                <GripVertical className="size-5 text-muted-foreground" />
                            </div>
                            <div className="h-8 px-2 bg-secondary flex items-center rounded-md overflow-hidden flex-1">
                                <div className="text-sm text-muted-foreground">
                                    {getBlockById(blocks.find(b => b.instanceId === activeId)?.blockId || "")?.name}
                                </div>
                            </div>
                        </div>
                    ) : null}
                </DragOverlay>

            </DndContext>
        </div>
    );
}
