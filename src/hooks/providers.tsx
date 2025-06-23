import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export default function Providers({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* <LocalStorageProvider>
                <SiteProvider> */}
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
                <Toaster />
            </ThemeProvider>
            {/* </SiteProvider>
                <ProducthuntVisit />
        </LocalStorageProvider> */}
        </>
    )
}
