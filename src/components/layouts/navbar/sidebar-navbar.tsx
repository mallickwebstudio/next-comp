"use client"
import { ModeToggle } from "@/components/other/mode-toggle"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import Link from "next/link"
import { CommandDialog, CommandEmpty, CommandInput, CommandList } from "@/components/ui/command"
import { useEffect, useState } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import Image from "next/image"
import { siteConfig } from "@/lib/metadata"

export function CommandMenu() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }
        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            <Button variant="outline" className="hidden md:flex bg-secondary/50 text-muted-foreground text-sm font-normal" onClick={() => setOpen(true)}>
                Search name or description...
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search name or description..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    {/* {data.map(item => (
                        <CommandGroup heading={item.title} key={item.title + "Command"}>
                            {item.category.map(category => (
                                <div key={category.title + "Command"}>
                                    <Link className="focus:outline-none cursor-pointer" href={item.href+"#"+category.href} onClick={()=>setOpen(false)}>
                                        <CommandItem className="block text-muted-foreground group/item cursor-pointer">
                                            <span className="capitalize group-hover/item:underline underline-offset-2">
                                                /{item.title}/{category.title}
                                            </span>
                                        </CommandItem>
                                    </Link>

                                    {category.cards.map(({ name, description, href }, i) => (
                                        <Link className="focus:outline-none cursor-pointer" href={href} target="_blank" key={name + i}>
                                            <CommandItem className="block ml-4 group/item cursor-pointer">
                                                <span className="capitalize group-hover/item:underline underline-offset-2">{name}</span>
                                                <p className="text-xs text-muted-foreground capitalize">{description}</p>
                                            </CommandItem>
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </CommandGroup>
                    ))} */}
                </CommandList>
            </CommandDialog>
        </>
    )
}


export default function Navbar() {
    const { open, isMobile } = useSidebar()

    return (
        <>
            <header className="sticky top-0 bg-background flex px-4 h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b z-50">
                <div className="flex items-center gap-2 transition-all">
                    <SidebarTrigger className={open
                        ? isMobile
                            ? "w-8 ml-0"
                            : "w-0 -ml-2 overflow-hidden transition-all"
                        : "w-8 ml-0"} />
                    <Link className="flex items-center text-primary ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 rounded-md" href="/">
                        <Image
                            className="h-8 w-fit"
                            src="/logo.svg"
                            width={20}
                            height={10}
                            alt={siteConfig.name}
                        />
                        <span className="sr-only">{siteConfig.name}</span>
                    </Link>
                </div>

                <div className="flex gap-2">
                    {/* <CommandMenu /> */}
                    {/* <AddSite /> */}
                    <Link className={buttonVariants({ variant: "ghost" })} href="/page-builder">Page Builder</Link>
                    <ModeToggle />
                </div>
            </header>

            {/* <header className="md:hidden fixed bottom-0 left-0 right-0 px-4 flex h-16 bg-background shrink-0 items-center justify-between gap-2 border-t z-50">
                <ModeToggle />

                <Link className={buttonVariants({ variant: "ghost" })} href="/page-builder">Page Builder</Link>

                <div className="flex items-center gap-2 transition-all">
                    <SidebarTrigger className={buttonVariants({ variant: "outline", size: "icon" })} />
                </div>
            </header> */}
        </>
    )
}
