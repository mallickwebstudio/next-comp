import { Button, buttonVariants } from "@/components/ui/button";
import { usePageBuilder } from "@/hooks/page-builder-provider";
import { getBlockById } from "@/lib/utils";
import { getFileBySlug } from "@/lib/get-file-by-slug";
import JSZip from "jszip";
import { Download, Eye, Loader } from "lucide-react";
import { useState } from "react";
import { saveAs } from "file-saver";
import Link from "next/link";
import { useTheme } from "next-themes";

const toPascalCase = (str: string) => (
    str.replace(/[^a-zA-Z0-9]+/g, " ")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
)

export default function SidebarInsetButtons() {
    const { blocks } = usePageBuilder();
    const [isDownloadingImage, setIsDownloadingImage] = useState(false);
    const [isDownloadingCode, setIsDownloadingCode] = useState(false);
    const { theme } = useTheme();

    const handleDownloadImage = async () => {
        try {
            setIsDownloadingImage(true);

            const imageElements: HTMLImageElement[] = [];

            // Step 1: Load all images manually
            for (const { blockId } of blocks) {
                const block = getBlockById(blockId);
                if (!block) continue;

                const { slug, thumbnail } = block;
                const darkSlug = `dark-${slug}`;
                const imageSrc = theme === "dark"
                    ? thumbnail.replace(slug, darkSlug)
                    : thumbnail;

                const img = new Image();
                img.crossOrigin = "anonymous"; // Important for CORS
                img.src = imageSrc;

                await new Promise((resolve, reject) => {
                    img.onload = () => resolve(true);
                    img.onerror = () => reject(`Failed to load image: ${imageSrc}`);
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
            setIsDownloadingImage(false);
        }
    };


    const handleDownloadCode = async () => {
        setIsDownloadingCode(true);
        try {
            const zip = new JSZip();

            const usedBlocks = blocks.map(({ blockId }) => getBlockById(blockId)).filter(Boolean);

            // 1. Get code for each block
            for (const block of usedBlocks) {
                if (!block) continue;
                const code = await getFileBySlug(block.slug);

                if (code) {
                    zip.file(`${block.slug}.tsx`, code);
                } else {
                    console.warn(`⚠️ No code found for block: ${block.name}`);
                }
            }


            // 2. Generate `page.tsx`
            const imports = usedBlocks.map(block => block && `import ${toPascalCase(block.name)} from "./${block.slug}";`).join("\n");
            const components = usedBlocks.map(block => block && `      <${toPascalCase(block.name)} />`).join("\n");

            const pageTsx = `${imports}

export default function Page() {
    return (
    <>
${components}
    </>
    );
}
            `;

            zip.file("page.tsx", pageTsx);

            // 3. Create and download zip
            const blob = await zip.generateAsync({ type: "blob" });
            saveAs(blob, "page.zip");
        } catch (err) {
            console.error("❌ Failed to download code:", err);
        } finally {
            setIsDownloadingCode(false);
        }
    };

    // Build the preview URL dynamically
    const previewUrl = `/preview?` + blocks.map(block => `block=${block.blockId}`).join("&");

    return (
        <div className="flex w-full items-center justify-end gap-2 flex-wrap">
            <Link
                className={buttonVariants({ variant: "outline", size: "sm" })}
                rel="noopener noreferrer"
                target="_blank"
                href={previewUrl}
            >
                <Eye className="mr-1 size-4" />
                Live Preview
            </Link>
            <Button
                className="cursor-pointer"
                variant="outline"
                size="sm"
                onClick={handleDownloadImage}
                disabled={isDownloadingImage}
            >
                {isDownloadingImage && (<Loader className="animate-spin" />)}
                {!isDownloadingImage && (<Download className="mr-1 size-4" />)}
                {isDownloadingImage ? "Downloading..." : "Image"}
            </Button>
            <Button
                className="cursor-pointer"
                variant="outline"
                size="sm"
                disabled={isDownloadingCode}
                onClick={handleDownloadCode}
            >
                {isDownloadingCode && (<Loader className="animate-spin" />)}
                {!isDownloadingCode && (<Download className="mr-1 size-4" />)}
                {isDownloadingCode ? "Preparing..." : "Code"}
            </Button>
        </div>
    );
}
