"use client"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
import { useLocalStorage } from "@/hooks/use-localstorage";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Triangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export default function ProducthuntVisit() {
    const { producthuntVisitDialog, setProducthuntVisitDialog, setProducthuntVisit } = useLocalStorage();

    return (
        <Dialog open={producthuntVisitDialog} onOpenChange={setProducthuntVisitDialog} >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Enjoying KeepsLink?</DialogTitle>
                    <DialogDescription>
                        Help us grow by sharing KeepsLink with others and supporting us on Product Hunt!
                    </DialogDescription>
                </DialogHeader>

                <DialogFooter className="justify-center sm:justify-center">
                    <Link className={cn(buttonVariants(), "relative group/link")} href="https://www.producthunt.com/posts/keepslink" target="_blank" onClick={() => setProducthuntVisit(true)}>
                        <Avatar className="p-1 size-8 rounded-md">
                            <AvatarImage src="/images/common/product-hunt-logo-orange-960.png" alt="ko-fi symbol" />
                            <AvatarFallback className="rounded-xl"> PH </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <span className="truncate font-semibold"> Product Hunt </span>
                            <span className="truncate text-xs"> Support this project </span>
                        </div>
                        <Triangle className="relative -bottom-2 size-6 animate-bounce group-hover/link:fill-white transition-all" />
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
