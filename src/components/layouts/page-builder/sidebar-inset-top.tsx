'use client';

import { Button } from "@/components/ui/button";
import { usePageBuilder } from "@/hooks/page-builder-provider";
import { getBlockById } from "@/lib/utils";
import { Download, Loader } from "lucide-react";
import { useState } from "react";

export default function SidebarInsetTop() {
    const { blocks } = usePageBuilder();
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownloadImage = async () => {
        try {
            setIsDownloading(true);

            const imageElements: HTMLImageElement[] = [];

            // Step 1: Load all images manually
            for (const { blockId } of blocks) {
                const block = getBlockById(blockId);
                if (!block) continue;

                const img = new Image();
                img.crossOrigin = "anonymous"; // Important for CORS
                img.src = block.thumbnail;

                await new Promise((resolve, reject) => {
                    img.onload = () => resolve(true);
                    img.onerror = () => reject(`Failed to load image: ${block.thumbnail}`);
                });

                imageElements.push(img);
            }

            // Step 2: Calculate total height and max width
            const totalHeight = imageElements.reduce((sum, img) => sum + img.height, 0);
            const maxWidth = Math.max(...imageElements.map((img) => img.width));

            // Step 3: Create canvas
            const canvas = document.createElement("canvas");
            canvas.width = maxWidth;
            canvas.height = totalHeight;
            const ctx = canvas.getContext("2d");

            if (!ctx) throw new Error("Failed to get canvas context");

            // Step 4: Draw each image one below another
            let yOffset = 0;
            for (const img of imageElements) {
                ctx.drawImage(img, 0, yOffset, img.width, img.height);
                yOffset += img.height;
            }

            // Step 5: Export to image and download
            const dataUrl = canvas.toDataURL("image/png");

            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "page-preview.png";
            link.click();
        } catch (err) {
            console.error("❌ Failed to download image:", err);
        } finally {
            setIsDownloading(false);
        }
    };




    return (
        <div className="flex w-full items-center justify-end gap-2">
            <Button
                className="cursor-pointer"
                variant="outline"
                size="sm"
                onClick={handleDownloadImage}
                disabled={isDownloading}
            >
                {isDownloading && (<Loader className="animate-spin" />)}
                <Download className="mr-1 size-4" />
                {isDownloading ? "Downloading..." : "Image"}
            </Button>
            <Button
                className="cursor-pointer"
                variant="outline"
                size="sm"
                onClick={() => alert("Code download not implemented yet")}
            >
                <Download className="mr-1 size-4" />
                Code
            </Button>
        </div>
    );
}
