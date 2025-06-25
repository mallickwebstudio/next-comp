"use client"
import { ModeToggle } from "@/components/other/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft, Monitor, Smartphone } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function PreviewNavBar({
    viewMode,
    setViewMode
}: {
    viewMode: "mobile" | "desktop"
    setViewMode: (mode: "mobile" | "desktop") => void
}) {
    const searchParams = useSearchParams();
    const blockParams = searchParams.getAll("block");

    return (
        <div className="h-16 flex items-center border-b">
            <div className="px-4 container mx-auto grid gap-4 grid-cols-2 md:grid-cols-3">
                <div className="flex gap-4 items-center">
                    <Link className={buttonVariants({ variant: "outline" })} href="/components">
                        <ArrowLeft className="size-4" />
                        Components
                    </Link>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className="dark:hover:bg-accent/50"
                                    aria-expanded="false"
                                    aria-label="More navigation options"
                                >
                                    {blockParams.length} - Block{blockParams.length > 0 && "s"}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[190px] max-h-40 overflow-y-auto gap-3">
                                        {blockParams.map((block, index) => (
                                            <li className="capitalize" key={block + index + "PreviewNavbar"}>
                                                {block.replace("-", " ")}
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden md:flex gap-2 justify-center items-center">
                    <Button
                        className="cursor-pointer"
                        variant={viewMode === "desktop" ? "default" : "secondary"}
                        size="icon"
                        onClick={() => setViewMode("desktop")}
                    >
                        <Monitor />
                    </Button>
                    <Button
                        className="cursor-pointer"
                        variant={viewMode === "mobile" ? "default" : "secondary"}
                        size="icon"
                        onClick={() => setViewMode("mobile")}
                    >
                        <Smartphone />
                    </Button>
                </div>

                <div className="w-fit justify-self-end">
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}
