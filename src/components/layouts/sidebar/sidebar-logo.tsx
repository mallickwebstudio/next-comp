"use client"

import * as React from "react"
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
// import { Button } from "@/components/ui/button"
// import { useSiteState } from "@/hooks/site-provider"

export function SidebarLogo() {
  // const { free, toggleFree } = useSiteState();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="m-2 rounded-md">
          <div className="flex items-center justify-between gap-2">
            <SidebarTrigger />
            {/* <Button className={free && "text-green-500"} variant={free ? "secondary" : "outline"} size="xs" onClick={() => toggleFree()}>
              Free Only
            </Button> */}
          </div>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
