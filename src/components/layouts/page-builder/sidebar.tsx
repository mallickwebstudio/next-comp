"use client"
import SidebarList from "./sidebar-list";
import SidebarTop from "./sidebar-top";
import { usePageBuilder } from "@/hooks/page-builder-provider";

export default function Sidebar({ className }: { className?: string }) {
    const { blocks } = usePageBuilder();

    return (
        <div className={className}>
            <div className="relative p-4 h-full bg-sidebar flex flex-col border-r border-sidebar-border">
                <SidebarTop />
                {blocks.length > 0 && (<hr className="my-4" />)}
                <div className="relative h-full flex-1 overflow-y-scroll">
                    <SidebarList />
                </div>
                {/* <div className="absolute bottom-4 left-0 right-0 w-full bg-gradient-to-t from-sidebar via-sidebar to-transparent h-4" /> */}
            </div>
        </div>
    )
}
