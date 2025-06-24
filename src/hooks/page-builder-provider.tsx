'use client';
import { nanoid } from "nanoid";
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface Block {
    blockId: string;       // The ID from your database (e.g. "navbar-one")
    instanceId: string;    // Unique ID for tracking this instance in the list
}

interface PageBuilderContextProps {
    blocks: Block[];
    addBlock: (blockId: string) => void;
    removeBlock: (blockId: string) => void;
    moveBlockUp: (blockId: string) => void;
    moveBlockDown: (blockId: string) => void;
    resetBlocks: () => void;
    hasBlock: (blockId: string) => boolean;
    setBlocks: (blocks: Block[]) => void;
    setBlocksDirectly: (blocks: Block[]) => void;
}


const PageBuilderContext = createContext<PageBuilderContextProps | undefined>(undefined);

export function PageBuilderProvider({ children }: { children: ReactNode }) {
    const [blocks, setBlocks] = useState<Block[]>([]);

    const addBlock = (blockId: string) => {
        setBlocks((prev) => [...prev, { blockId, instanceId: nanoid() }]);
    };

    const removeBlock = (instanceId: string) => {
        setBlocks((prev) => prev.filter((block) => block.instanceId !== instanceId));
    };


    const moveBlockUp = (blockId: string) => {
        setBlocks((prev) => {
            const index = prev.findIndex((block) => block.instanceId === blockId);
            if (index <= 0) return prev;
            const updated = [...prev];
            [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
            return updated;
        });
    };

    const moveBlockDown = (blockId: string) => {
        setBlocks((prev) => {
            const index = prev.findIndex((block) => block.instanceId === blockId);
            if (index === -1 || index === prev.length - 1) return prev;
            const updated = [...prev];
            [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
            return updated;
        });
    };

    const resetBlocks = () => setBlocks([]);

    const hasBlock = (blockId: string) => blocks.some((block) => block.instanceId === blockId);

    const setBlocksDirectly = (blocks: Block[]) => setBlocks(blocks);
    return (
        <PageBuilderContext.Provider
            value={{
                blocks,
                addBlock,
                removeBlock,
                moveBlockUp,
                moveBlockDown,
                resetBlocks,
                hasBlock,
                setBlocks,
                setBlocksDirectly
            }}
        >
            {children}
        </PageBuilderContext.Provider>
    );
}

export function usePageBuilder(): PageBuilderContextProps {
    const context = useContext(PageBuilderContext);
    if (!context) throw new Error('usePageBuilder must be used within PageBuilderProvider');
    return context;
}
