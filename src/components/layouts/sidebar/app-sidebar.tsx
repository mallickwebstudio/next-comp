"use client"

import * as React from "react"

import { SidebarNav } from "@/components/layouts/sidebar/sidebar-nav"
import { SidebarTop } from "@/components/layouts/sidebar/sidebar-top"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { data } from "@/lib/database"
import { SidebarBottom } from "./sidebar-bottom"

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" variant="sidebar" {...props}>
      <SidebarHeader className="pb-2 border-b">
        <SidebarTop />
      </SidebarHeader>

      <SidebarContent>
          <SidebarNav data={data} />
      </SidebarContent>

      <SidebarFooter className="pt-2 border-t">
        <SidebarBottom />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
