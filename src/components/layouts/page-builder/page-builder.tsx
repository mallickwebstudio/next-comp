import Sidebar from "./sidebar";
import SidebarInset from "./sidebar-inset";

export default function PageBuilder() {
    return (
        <div className="relative flex-1 h-[calc(100dvh_-_64px)] flex">
            <Sidebar className="absolute p-4 h-full md:block md:w-64 bg-sidebar border-r border-sidebar-border" />
            <SidebarInset className="flex-1" />
        </div>
    )
}
