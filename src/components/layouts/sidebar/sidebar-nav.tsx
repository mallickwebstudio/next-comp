"use client"
import { Bookmark, ChevronRight } from "lucide-react"
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
import { cn } from "@/lib/utils"
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

        <SidebarMenuItem>
          <SidebarMenuButton tooltip="Bookmarks" asChild>
            <Link className={cn("flex items-center", path.includes("/bookmarks") && "text-primary bg-secondary/50")} href="/bookmarks">
              <Bookmark className="mr-1 size-4" />
              Bookmarks
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>

        {data.map((item) => {
          const isActive = path === `/components/${item.href}` || path.startsWith(`/components/${item.href}/`);

          return (
            <Collapsible key={item.name} defaultOpen={isActive} asChild>
              <SidebarMenuItem>
                {item.category?.length ? (
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                ) : null}

                <SidebarMenuButton asChild tooltip={item.name}>
                  <Link
                    href={`/components/${item.href}`}
                    className={isActive ? "text-primary font-semibold bg-secondary/40" : ""}
                  >
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>

                {item.category?.length ? (
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.category.map((subItem) => {
                        const subPath = `/components/${item.href}/${subItem.href}`;
                        const isSubActive = path === subPath;

                        return (
                          <SidebarMenuSubItem key={subItem.name}>
                            <SidebarMenuSubButton asChild>
                              <Link
                                href={subPath}
                                className={isSubActive ? "text-primary font-medium" : ""}
                              >
                                <span>{subItem.name}</span>
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
