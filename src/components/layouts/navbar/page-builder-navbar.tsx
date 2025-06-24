"use client"

import { ModeToggle } from "@/components/other/mode-toggle"
import KeepslinkLogo from "@/components/other/svg"
import Link from "next/link"
import { SidebarClose, SidebarOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

type NavbarProps = {
    sidebarOpen: boolean;
    setSidebarOpen: (value: boolean) => void;
};

export default function PageBuilderNavbar({ sidebarOpen, setSidebarOpen }: NavbarProps) {
    return (
        <header className="h-16 shrink-0 border-b">
            <div className="mx-auto container px-4 h-full flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    {/* Sidebar Toggle Button */}
                    <Button
                        className="md:hidden"
                        variant="outline"
                        size="icon"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <SidebarClose /> : <SidebarOpen />}
                    </Button>

                    <Link className="h-12 flex items-center text-primary" href="/">
                        <KeepslinkLogo className="h-full w-fit" />
                        <span className="ml-2 h-fit block text-base font-semibold leading-4">Keeps Link</span>
                    </Link>
                </div>

                <div className="flex gap-2">
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
