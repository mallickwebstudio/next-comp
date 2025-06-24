import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar/sidebar-navbar";
import { AppSidebar } from "@/components/layouts/sidebar/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="pb-16 md:pb-0 flex flex-col">
                <Navbar />
                <main className="p-4 flex-1">
                    {children}
                </main>
                <Footer />
            </SidebarInset>
        </SidebarProvider>
    );
}
