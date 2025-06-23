"use client"

import * as React from "react"

import { SidebarNav } from "@/components/layouts/sidebar/sidebar-nav"
import { SidebarLogo } from "@/components/layouts/sidebar/sidebar-logo"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { data } from "@/lib/database"

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" variant="sidebar" {...props}>
      <SidebarHeader>
        <SidebarLogo />
      </SidebarHeader>

      <SidebarContent>
          <SidebarNav data={data} />
      </SidebarContent>

      {/* <SidebarFooter>
        <SidebarBottom />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}
