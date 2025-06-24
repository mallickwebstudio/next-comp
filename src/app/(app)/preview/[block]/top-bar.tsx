"use client"
import { ModeToggle } from "@/components/other/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowLeft, Monitor, Smartphone } from "lucide-react";
import Link from "next/link";

export default function TopBar({
    name,
    viewMode,
    setViewMode
}: {
    name: string
    viewMode: "mobile" | "desktop"
    setViewMode: (mode: "mobile" | "desktop") => void
}) {
    return (
        <div className="block border-b">
            <div className="p-4 container mx-auto grid gap-4 grid-cols-2 md:grid-cols-3">
                <div className="flex gap-4 items-center">
                    <Link className={buttonVariants({ variant: "outline" })} href="/">
                        <ArrowLeft className="size-4" />
                        Back Home
                    </Link>
                    <h1 className="text w-xs text-nowrap md:text-2xl font-bold">{name}</h1>
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
