"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Sample data
const sampleData = [
  {
    fullName: "John Doe",
    companyName: "Acme Corp",
    number: "14",
    team: "Team Alpha",
    date: "Jan 11, 2050",
  },
  {
    fullName: "Jane Smith",
    companyName: "Beta Inc",
    number: "27",
    team: "Team Beta",
    date: "Feb 22, 2050",
  },
  {
    fullName: "Alan Walker",
    companyName: "Gamma LLC",
    number: "35",
    team: "Team Gamma",
    date: "Mar 03, 2050",
  },
  {
    fullName: "Sarah Lee",
    companyName: "Delta Corp",
    number: "42",
    team: "Team Delta",
    date: "Apr 14, 2050",
  },
  {
    fullName: "David Kim",
    companyName: "Epsilon Ltd",
    number: "53",
    team: "Team Epsilon",
    date: "May 25, 2050",
  },
  {
    fullName: "Emily Green",
    companyName: "Zeta Group",
    number: "60",
    team: "Team Zeta",
    date: "Jun 06, 2050",
  },
  {
    fullName: "Michael Brown",
    companyName: "Eta Inc",
    number: "71",
    team: "Team Eta",
    date: "Jul 17, 2050",
  },
  {
    fullName: "Jessica White",
    companyName: "Theta Ltd",
    number: "88",
    team: "Team Theta",
    date: "Aug 28, 2050",
  },
  {
    fullName: "Chris Black",
    companyName: "Iota PLC",
    number: "97",
    team: "Team Iota",
    date: "Sep 09, 2050",
  },
  {
    fullName: "Nancy Blue",
    companyName: "Kappa Inc",
    number: "108",
    team: "Team Kappa",
    date: "Oct 20, 2050",
  },
]

// Expand sample to 70
const people = Array.from({ length: 40 }, (_, i) => {
  const base = sampleData[i % sampleData.length]
  return {
    ...base,
    number: (parseInt(base.number) + i).toString(),
    date: new Date(2050, i % 12, 10 + (i % 10)).toDateString(),
  }
})

// Group by team
const groupByTeam = (list: typeof people) => {
  const map = new Map<string, typeof people>()
  for (const item of list) {
    const team = item.team
    if (!map.has(team)) map.set(team, [])
    map.get(team)?.push(item)
  }
  return map
}

export default function TableTwo() {
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)

  const grouped = useMemo(() => groupByTeam(people), [])
  const allItems: Array<
    { type: "group"; team: string } | { type: "item"; data: (typeof people)[number] }
  > = []

  for (const [team, members] of grouped.entries()) {
    allItems.push({ type: "group", team })
    members.forEach((data) => allItems.push({ type: "item", data }))
  }


  // Extract only item rows for calculating pages
  const onlyItems = allItems.filter((row) => row.type === "item") as { type: "item"; data: typeof people[number] }[]
  const totalPages = Math.ceil(onlyItems.length / rowsPerPage)

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage
    const end = start + rowsPerPage
    const slice = onlyItems.slice(start, end)

    const result: typeof allItems = []

    for (const team of grouped.keys()) {
      const members = slice.filter((item) => item.data.team === team)
      if (members.length > 0) {
        result.push({ type: "group", team })
        result.push(...members)
      }
    }

    return result
  }, [currentPage, rowsPerPage, onlyItems, grouped])

  const goToPage = (page: number) => {
    if (page < 1) setCurrentPage(1)
    else if (page > totalPages) setCurrentPage(totalPages)
    else setCurrentPage(page)
  }

  return (
    <section className="relative bg-background overflow-hidden" id="table" aria-label="Table section">
      <div className="container mx-auto p-6 sm:py-10 md:p-12 lg:py-16">
        <div className="mx-auto max-w-4xl border rounded-md">
          <header className="p-4 flex justify-between items-center border-b">
            <div>
              <h2 className="text-lg font-bold tracking-tight">Grouped Table</h2>
              <p className="text-sm text-muted-foreground">Grouped by team with sticky group header.</p>
            </div>
            <Button size="sm">Add</Button>
          </header>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Number</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedItems.map((entry, index) =>
                entry.type === "group" ? (
                  <TableRow key={entry.team + index + "TableTwo"} className="bg-muted/50">
                    <TableCell colSpan={6} className="font-bold text-muted-foreground">
                      {entry.team}
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow key={entry.data.fullName + index + "TableTwo"}>
                    <TableCell>{entry.data.fullName}</TableCell>
                    <TableCell>{entry.data.companyName}</TableCell>
                    <TableCell>{entry.data.number}</TableCell>
                    <TableCell>{entry.data.team}</TableCell>
                    <TableCell>{entry.data.date}</TableCell>
                    <TableCell className="text-right">
                      <Button size="sm" variant="outline">View</Button>
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>

          {/* Pagination Controls */}
          <div className="p-4 flex justify-between items-center border-t">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="text-xs md:text-base">Rows per page</span>
              <Select
                value={rowsPerPage.toString()}
                onValueChange={(value) => {
                  setRowsPerPage(parseInt(value))
                  setCurrentPage(1)
                }}
              >
                <SelectTrigger className="w-fit" size="sm">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Rows</SelectLabel>
                    {[10, 20, 30, 40, 50].map((val) => (
                      <SelectItem key={val} value={val.toString()}>
                        {val}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="text-xs md:text-base">
                Page {currentPage} of {totalPages}
              </span>
              <div className="flex items-center gap-1">
                <Button onClick={() => goToPage(1)} variant="outline" size="sm" className="aspect-square" disabled={currentPage === 1}>
                  <ChevronsLeft />
                </Button>
                <Button onClick={() => goToPage(currentPage - 1)} variant="outline" size="sm" className="aspect-square" disabled={currentPage === 1}>
                  <ChevronLeft />
                </Button>
                <Button onClick={() => goToPage(currentPage + 1)} variant="outline" size="sm" className="aspect-square" disabled={currentPage === totalPages}>
                  <ChevronRight />
                </Button>
                <Button onClick={() => goToPage(totalPages)} variant="outline" size="sm" className="aspect-square" disabled={currentPage === totalPages}>
                  <ChevronsRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
