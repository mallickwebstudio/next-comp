import { cn } from "@/lib/utils";
import { RotateCcw } from "lucide-react";

interface ReanimateButtonProps {
    onClick: () => void;
}

export default function ReanimateButton({ onClick }: ReanimateButtonProps) {

    return (
        <div
            className={cn(
                "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 p-2 border border-input shadow-sm dark:bg-input/30 dark:hover:bg-input/50 cursor-pointer group"
            )}
            tabIndex={0}
            onClick={onClick} // Trigger reanimation when clicked
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    onClick();
                }
            }}
        >
            <RotateCcw className="size-3 text-foreground/70 group-hover:text-foreground" />
        </div>
    );
}
