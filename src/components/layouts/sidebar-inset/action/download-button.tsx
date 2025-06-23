"use client";
import { cn } from "@/lib/utils";
import { CheckCheck, Download } from "lucide-react";
import { useState } from "react";

interface DownloadButtonProps {
    text: string;
    fileName: string;
    extention: string;
}

export default function DownloadButton({ text, fileName, extention }: DownloadButtonProps) {
    const [isDownloaded, setIsDownloaded] = useState(false);

    const handleDownload = () => {
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${fileName}.${extention}`;
        link.click();
        setIsDownloaded(true);
        setTimeout(() => setIsDownloaded(false), 2000);
    };

    return (
        <div
            className={cn(
                "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 p-2 border border-input shadow-sm dark:bg-input/30 dark:hover:bg-input/50 cursor-pointer group"
            )}
            tabIndex={0}
            onClick={handleDownload}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    handleDownload();
                }
            }}
        >
            {isDownloaded ? (
                <CheckCheck className="size-3 text-green-500" />
            ) : (
                <Download className="size-3 text-white/70 group-hover:text-white dark:text-foreground/70 dark:group-hover:text-foreground" />
            )}
        </div>
    );
}
