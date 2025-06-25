"use client"

import { Button } from "@/components/ui/button";
import { Copy, CheckCheck } from "lucide-react";
import { useState } from "react";

export default function CopyButton({
    text
}: {
    text: string;
}) {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <Button
            className="size-8 cursor-pointer"
            onClick={handleCopy}
            variant="outline"
            size="icon"
        >
            {isCopied ? (
                <CheckCheck className="size-3 text-green-500" />
            ) : (
                <Copy className="size-3" />
            )}
        </Button>
    );
}
