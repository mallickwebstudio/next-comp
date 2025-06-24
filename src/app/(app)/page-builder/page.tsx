"use client"
import PageBuilderNavbar from "@/components/layouts/navbar/page-builder-navbar";
import Sidebar from "@/components/layouts/page-builder/sidebar";
import SidebarInset from "@/components/layouts/page-builder/sidebar-inset";
import { PageBuilderProvider } from "@/hooks/page-builder-provider";
import { useState } from "react";
import { cn } from "@/lib/utils"; // assuming you're using a classnames utility

export default function Page() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    (
        <Sidebar className="absolute top-0 left-0 p-4 w-64 h-full md:relative md:block bg-sidebar border-r border-sidebar-border z-10 transition-all" />
    )

    return (
        <div>
            <PageBuilderNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <PageBuilderProvider>
                <div className="relative flex-1 h-[calc(100dvh_-_64px)] md:flex">
                    <div
                        className={cn(
                            "absolute top-0 left-0 bottom-0 flex md:block transition-all overflow-hidden z-10",
                            sidebarOpen ? "w-full" : "w-0 md:w-64",
                            "md:relative md:top-auto md:left-auto md:bottom-auto md:w-64",
                        )}
                    >
                        <Sidebar className="w-64 h-full" />
                        <div className="md:hidden bg-secondary/50 w-full h-full flex-1" onClick={() => setSidebarOpen(!sidebarOpen)}  />
                    </div>

                    <SidebarInset className="relative flex-1 z-0" />
                </div>
            </PageBuilderProvider>
        </div>
    );
}
