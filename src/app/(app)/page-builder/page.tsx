"use client"
import PageBuilderNavbar from "@/components/layouts/navbar/page-builder-navbar";
import Sidebar from "@/components/layouts/page-builder/sidebar";
import SidebarInset from "@/components/layouts/page-builder/sidebar-inset";
import { PageBuilderProvider } from "@/hooks/page-builder-provider";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Page() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <PageBuilderProvider>
                <div className="relative h-dvh md:flex">
                    <div
                        className={cn(
                            "absolute top-0 left-0 bottom-0 flex md:block transition-all overflow-hidden z-20",
                            sidebarOpen ? "w-full" : "w-0 md:w-64",
                            "md:relative md:top-auto md:left-auto md:bottom-auto md:w-64",
                        )}
                    >
                        <Sidebar className="w-64 h-full" />
                        <div
                            className="md:hidden bg-secondary/40 w-full h-full flex-1"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        />
                    </div>

                    <div className="flex flex-col h-dvh flex-1">
                        <PageBuilderNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                        <SidebarInset className="relative flex-1 z-0" />
                    </div>
                </div>
            </PageBuilderProvider>
        </>
    );
}
