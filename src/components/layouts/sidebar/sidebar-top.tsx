"use client";

import * as React from "react";
import { SidebarMenu, SidebarMenuItem, SidebarTrigger } from "@/components/ui/sidebar";
import { useState } from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { data } from "@/lib/database";
import Link from "next/link";

export function SidebarTop() {
  const [open, setOpen] = useState(false);
  const sections = data.flatMap((category) =>
    category.sections.map((section) => ({
      name: section.name,
      slug: section.slug,
      categorySlug: category.slug,
    }))
  );

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="m-2 rounded-md">
          <div className="relative flex items-center justify-between gap-2">
            <SidebarTrigger />

            {/* Input and suggestions wrapper */}
            <div className="relative w-full z-50">
              {/* <Command className="border [&_[data-slot=command-input-wrapper]]:border-b-0"> */}
              <Command className="border [&_[data-slot=command-input-wrapper]]:border-b-0">
                <CommandInput
                  className="border-b-0"
                  placeholder="Search a section..."
                  onFocus={() => setOpen(true)}
                  onBlur={() => setTimeout(() => setOpen(false), 150)}
                />

                {open && (
                  <div className="absolute top-full w-full bg-popover text-popover-foreground border rounded-md shadow-md max-h-60 overflow-y-auto">
                    <CommandEmpty className="p-2 text-sm text-muted-foreground">
                      No section found.
                    </CommandEmpty>

                    <CommandGroup heading={data[0].name}>
                      {sections.map((section) => (
                        <Link
                          key={section.slug + "SidebarTop"}
                          href={"/components/"+section.categorySlug + "/" + section.slug}
                        >
                          <CommandItem
                            value={section.name}
                            onSelect={() => {
                              setOpen(false);
                            }}
                          >
                            {section.name}
                          </CommandItem>
                        </Link>
                      ))}
                    </CommandGroup>
                  </div>
                )}
              </Command>
            </div>
          </div>
        </div>
      </SidebarMenuItem >
    </SidebarMenu >
  );
}
