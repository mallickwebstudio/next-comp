"use client"
import { ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
// import { cn } from "@/lib/utils"
import { ComponentData } from "@/types"

export function SidebarNav({
  data
}: {
  data: ComponentData
}) {
  const path = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>

        {/* <SidebarMenuItem>
          <SidebarMenuButton tooltip="Bookmarks" asChild>
            <Link className={cn("flex items-center", path.includes("/bookmarks") && "text-primary bg-secondary/50")} href="/bookmarks">
              <Bookmark className="mr-1 size-4" />
              Bookmarks
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem> */}

        {data.map((item) => {
          const isActive = path === `/components/${item.href}` || path.startsWith(`/components/${item.href}/`);

          return (
            <Collapsible key={item.name} defaultOpen={isActive || data[0].name === item.name} asChild>
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuAction className="data-[state=open]:rotate-90 disabled:text-muted-foreground">
                    <ChevronRight />
                    <span className="sr-only">Toggle</span>
                  </SidebarMenuAction>
                </CollapsibleTrigger>

                <SidebarMenuButton asChild tooltip={item.name}>
                  <Link
                    className={isActive ? "text-primary bg-secondary/40" : ""}
                    href={`/components/${item.href}`}
                  >
                    <span>
                      {item.name}
                      <span className="text-xs text-muted-foreground">({item.sections.length})</span>
                    </span>
                  </Link>
                </SidebarMenuButton>

                {item.sections?.length ? (
                  <CollapsibleContent>
                    <SidebarMenuSub className="pr-0 mr-1" >
                      {item.sections.map((subItem) => {
                        const subPath = `/components/${item.href}/${subItem.href}`;
                        const isSubActive = path === subPath;

                        return (
                          <SidebarMenuSubItem key={subItem.name}>
                            <SidebarMenuSubButton className={isSubActive ? "bg-secondary/40" : ""} asChild>
                              <Link
                                className="flex items-center justify-between gap-2"
                                href={subPath}
                              >
                                <span className="text-balance line-clamp-1">{subItem.name}</span>
                                <span className="text-muted-foreground text-xs shrink-0">{subItem.blocks.length}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                ) : null}
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
