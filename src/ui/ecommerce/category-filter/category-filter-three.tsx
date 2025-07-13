"use client";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ListFilter, X, ChevronDown, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input";

const sortOptions = [
  { label: "Most Popular", value: "popular" },
  { label: "Most Recent", value: "recent" },
  { label: "Name: A to Z", value: "name-asc" },
  { label: "Name: Z to A", value: "name-desc" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

export const filters = [
  {
    id: "category",
    type: "checkbox",
    title: "Category",
    options: ["Tech", "Fashion", "Books", "Health"],
  },
  {
    id: "price",
    type: "checkbox",
    title: "Price Range",
    options: ["0-100", "100-500", "500-1000", "1000+"],
  },
  {
    id: "rating",
    type: "radio",
    title: "Rating",
    options: ["1+", "2+", "3+", "4+", "5"],
  },
  {
    id: "availability",
    type: "toggle",
    title: "In Stock Only",
    options: ["true"],
  },
  {
    id: "brand",
    type: "select",
    title: "Brand",
    options: ["Nike", "Apple", "Samsung", "Sony"],
  },
  {
    id: "color",
    type: "color",
    title: "Color",
    options: ["red", "green", "blue", "black"],
  },
  {
    id: "size",
    type: "checkbox",
    title: "Size",
    options: ["S", "M", "L", "XL"],
  },
  {
    id: "sort",
    type: "select",
    title: "Sort By",
    options: ["Newest", "Lowest Price", "Highest Price", "Top Rated"],
  },
];

export default function CategoryFilterThree() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [sheetOpen, setSheetOpen] = useState(false);

  /**
   * ------------------------------------------------------------
   * SORT HANDLING
   * ------------------------------------------------------------
   */

  // Get current sort option from URL
  const currentSort = searchParams.get("sort") || "popular";

  // Returns label to display in dropdown button
  const currentSortLabel = useMemo(() => {
    return sortOptions.find((opt) => opt.value === currentSort)?.label || "Sort";
  }, [currentSort]);

  // Update URL with selected sort option
  const handleSortSelect = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (value) {
      newParams.set("sort", value);
    } else {
      newParams.delete("sort");
    }

    router.push(`${pathname}?${newParams.toString()}`);
  };

  /**
   * ------------------------------------------------------------
   * FILTER HANDLING
   * ------------------------------------------------------------
   */

  // Add/update/remove a specific filter value
  const updateFilter = (key: string, value: string | null) => {
    const newParams = new URLSearchParams(searchParams.toString());

    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }

    router.push(`${pathname}?${newParams.toString()}`);
  };

  // Get a list of filters currently applied (used for badges or tags)
  const appliedFilters = useMemo(() => {
    return filters
      .map((filter) => {
        const value = searchParams.get(filter.id);
        if (!value) return null;
        return {
          id: filter.id,
          label: filter.title,
          value,
        };
      })
      .filter(Boolean);
  }, [searchParams]);

  /**
   * ------------------------------------------------------------
   * ACCORDION OPEN STATE HANDLING
   * ------------------------------------------------------------
   */

  // Step 1: Determine which filter sections should be open by default
  const defaultOpenItems = useMemo(() => {
    const activeFilterIds = filters
      .filter((filter) => searchParams.getAll(filter.id).length > 0)
      .map((filter) => filter.id);

    // Open the first item by default if no filters are active
    return activeFilterIds.length > 0 ? activeFilterIds : [filters[0]?.id];
  }, [searchParams]);

  // Step 2: Store currently open accordion items in state
  const [openItems, setOpenItems] = useState<string[]>(defaultOpenItems);

  // Step 3: Sync openItems with changes in the URL (e.g. after page reload)
  useEffect(() => {
    setOpenItems(defaultOpenItems);
  }, [defaultOpenItems]);

  return (
    <section
      className="relative bg-background"
      id="category-filter"
      aria-label="Category filter section"
    >
      <div className="container mx-auto p-6 sm:py-10  md:p-12 lg:py-16">
        {/* Text Content */}
        <header>
          <h2 className="text-4xl font-bold tracking-tight text-balance">
            Collection
          </h2>
          <p className="mt-4 text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        <div className="relative mt-8 md:mt-12">
          {/* [ Filter products / Sidebar / Sheet ]  */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>

                <div className="text-sm text-muted-foreground text-left">
                  Showing 0 of 100
                </div>

                {appliedFilters.length > 0 && (
                  <div
                    className="cursor-pointer w-fit text-sm font-normal text-muted-foreground hover:text-destructive hover:underline"
                    onClick={() => {
                      const cleared = new URLSearchParams(Array.from(searchParams.entries()));
                      appliedFilters.forEach((filter) => cleared.delete(filter!.id));
                      router.push(`?${cleared.toString()}`);
                    }}
                  >
                    Clear All
                  </div>
                )}
              </SheetHeader>

              {/* Sheet Body */}
              <div className="p-4 w-full overflow-y-scroll">
                <FilterAccordion
                  openItems={openItems}
                  setOpenItems={setOpenItems}
                  updateFilter={updateFilter}
                />
              </div>

              <SheetFooter>
                <SheetClose asChild>
                  <Button className="cursor-pointer" variant="outline">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          {/* [ Filtrate products section / Sidebar-inset ]  */}
          <div className="w-full">
            {/* Filter-badges, sorting, Mobile-filter button / Top-bar */}
            <div className="md:sticky md:top-0 py-4 md:-mt-4 bg-background flex flex-col gap-4">
              <div className="flex justify-between items-end gap-2">
                {/* Applied Filter Badges */}
                <div className="flex gap-2 flex-wrap">
                  {filters.flatMap((filter, index) => {
                    const values = searchParams.getAll(filter.id);
                    return values.map((val) => (
                      <Badge
                        key={filter.id + val + index + "CategoryFilterThree"}
                        className="hover:bg-red-500 hover:text-white cursor-pointer transition-all"
                        variant="secondary"
                        onClick={() => {
                          const current = new URLSearchParams(Array.from(searchParams.entries()));
                          const updatedValues = current.getAll(filter.id).filter((v) => v !== val);

                          current.delete(filter.id);
                          updatedValues.forEach((v) => current.append(filter.id, v));

                          router.push(`?${current.toString()}`);
                        }}
                      >
                        {filter.title} – {val}
                        <X className="ml-1 h-3 w-3" strokeWidth={3} />
                      </Badge>
                    ));
                  })}
                </div>

                {/* Available Product */}
                <div className="text-xs text-muted-foreground text-nowrap text-right">
                  Showing 0 of 100
                </div>
              </div>

              {/* Filter-button, Sort-button */}
              <div className="flex flex-col md:flex-row gap-2 md:justify-between md:items-center">
                {/* Mobile Filter Drawer Button */}
                <Button className="flex items-center gap-2 cursor-pointer order-1" variant="outline" size="sm" onClick={() => setSheetOpen(true)}>
                  <ListFilter />
                  Filter
                </Button>

                {/* Shorting Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="flex items-center gap-2 cursor-pointer md:order-3 order-2" variant="outline" size="sm">
                      {currentSortLabel}
                      <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {sortOptions.map((option) => (
                      <DropdownMenuItem
                        key={option.value}
                        onClick={() => handleSortSelect(option.value)}
                        className="flex items-center justify-between"
                      >
                        {option.label}
                        {currentSort === option.value && (
                          <Check className="w-4 h-4 text-primary" />
                        )}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* // className="h-8 md:order-2 order-3" */}
                {/* Filter Search */}
                <Input
                  className="h-8 md:order-2 order-3 
                   pl-8 bg-[length:1rem_1rem] bg-no-repeat bg-[center_left_0.5rem]
                   bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlYXJjaC1pY29uIGx1Y2lkZS1zZWFyY2giPjxwYXRoIGQ9Im0yMSAyMS00LjM0LTQuMzQiLz48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PC9zdmc+')]
                   dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZWFyY2gtaWNvbiBsdWNpZGUtc2VhcmNoIj48cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0Ii8+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjwvc3ZnPg==')]
                  "
                  type="text"
                  placeholder="Search Product"
                />
              </div>
            </div>

            {/* Filtered Product Container */}
            <main className="mb-4 h-[120dvh] border-2 border-dashed">
            </main>
            {/* Empty Product Container */}
            <div className="px-6 py-12 border text-center">
              <div className="text-lg font-medium">
                No results found.
              </div>
              <div className="text-muted-foreground">
                There are no results with this criteria. Try changing your search.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

export function FilterAccordion({
  openItems,
  setOpenItems,
  updateFilter,
}: {
  openItems: string[]; // Accordion item IDs that are currently open
  setOpenItems: Dispatch<SetStateAction<string[]>>; // Function to update openItems
  updateFilter: (key: string, value: string | null) => void; // Filter update function
}) {
  const router = useRouter();
  // const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <Accordion className="w-full" type="multiple" value={openItems} onValueChange={setOpenItems}>
      {filters.map((filter, index) => (
        <AccordionItem key={filter.id + index + "CategoryFilterThree"} value={filter.id}>
          <AccordionTrigger className="cursor-pointer">{filter.title}</AccordionTrigger>

          <AccordionContent>
            {filter.type === "checkbox" && (
              <div className="flex flex-col gap-2">
                {filter.options.map((option, index) => (
                  <div key={filter.id + option + index + "CategoryFilterThree"} className="flex items-center gap-2">
                    <Checkbox
                      className="cursor-pointer"
                      id={`${filter.id}-${option}`}
                      checked={searchParams.getAll(filter.id).includes(option)}
                      onCheckedChange={(checked) => {
                        const current = new URLSearchParams(Array.from(searchParams.entries()));
                        const values = current.getAll(filter.id);
                        if (checked) {
                          values.push(option);
                        } else {
                          const index = values.indexOf(option);
                          if (index > -1) values.splice(index, 1);
                        }
                        current.delete(filter.id);
                        values.forEach((v) => current.append(filter.id, v));
                        router.push(`?${current.toString()}`);
                      }}
                    />
                    <label className="cursor-pointer" htmlFor={`${filter.id}-${option}`}>{option}</label>
                  </div>
                ))}
              </div>
            )}

            {filter.type === "radio" && (
              <RadioGroup
                defaultValue={searchParams.get(filter.id) || ""}
                onValueChange={(val) => updateFilter(filter.id, val)}
              >
                {filter.options.map((option, index) => (
                  <div key={filter.id + option + index + "CategoryFilterThree"} className="flex items-center space-x-2">
                    <RadioGroupItem className="cursor-pointer" value={option} id={`${filter.id}-${option}`} />
                    <label className="cursor-pointer" htmlFor={`${filter.id}-${option}`}>{option}</label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {filter.type === "select" && (
              <Select
                onValueChange={(val) => updateFilter(filter.id, val)}
                value={searchParams.get(filter.id) || ""}
              >
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder={`Select ${filter.title}`} />
                </SelectTrigger>
                <SelectContent>
                  {filter.options.map((option, index) => (
                    <SelectItem className="cursor-pointer" key={filter.id + option + index + "CategoryFilterThree"} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {filter.type === "toggle" && (
              <div className="flex items-center gap-2">
                <Switch
                  className="cursor-pointer"
                  id={filter.id}
                  checked={searchParams.get(filter.id) === "true"}
                  onCheckedChange={(checked) =>
                    updateFilter(filter.id, checked ? "true" : null)
                  }
                />
                <label className="cursor-pointer" htmlFor={filter.id}>Enable</label>
              </div>
            )}

            {filter.type === "color" && (
              <div className="flex gap-2 mt-2 flex-wrap">
                {filter.options.map((color, index) => (
                  <button
                    key={filter.id + color + index + "CategoryFilterThree"}
                    className={`w-6 h-6 rounded-full border-2 cursor-pointer ${searchParams.get(filter.id) === color ? "ring-2 ring-offset-2" : ""
                      }`}
                    style={{ backgroundColor: color }}
                    onClick={() => updateFilter(filter.id, color)}
                  />
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}