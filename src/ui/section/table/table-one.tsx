"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

// Generate 70 data entries
const people = Array.from({ length: 70 }, (_, i) => {
  const base = sampleData[i % sampleData.length]
  return {
    ...base,
    number: (parseInt(base.number) + i).toString(),
    date: new Date(2050, i % 12, 10 + (i % 10)).toDateString(), // change date for variety
  }
})

export default function TableOne() {
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const totalPages = Math.ceil(people.length / rowsPerPage)
  const startIndex = (currentPage - 1) * rowsPerPage
  const currentRows = people.slice(startIndex, startIndex + rowsPerPage)

  const goToPage = (page: number) => {
    if (page < 1) return setCurrentPage(1)
    if (page > totalPages) return setCurrentPage(totalPages)
    setCurrentPage(page)
  }

  return (
    <section className="relative bg-background overflow-hidden" id="pricing" aria-label="Pricing section">
      <div className="container mx-auto p-6 sm:py-10 md:p-12 lg:py-16">
        <div className="mx-auto max-w-3xl border">
          <header className="p-4 flex justify-between items-center border-b">
            <div>
              <h2 className="text-lg font-bold tracking-tight">People Table</h2>
              <p className="text-sm text-muted-foreground">Generated list of users with pagination controls.</p>
            </div>
            <Button className="cursor-pointer" size="sm">Add</Button>
          </header>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Full Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Number</TableHead>
                <TableHead>Team</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentRows.map((person, index) => (
                <TableRow key={person.fullName + index + "TableOne"}>
                  <TableCell>{person.fullName}</TableCell>
                  <TableCell>{person.companyName}</TableCell>
                  <TableCell>{person.number}</TableCell>
                  <TableCell>{person.team}</TableCell>
                  <TableCell>{person.date}</TableCell>
                  <TableCell className="text-right">
                    <Button className="cursor-pointer" size="sm" variant="outline">View</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination Controls */}
          <div className="p-4 flex justify-between items-center border-t">
            {/* Rows per page */}
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="text-xs md:text-base">Rows per page</span>
              <Select value={rowsPerPage.toString()} onValueChange={(value) => {
                setRowsPerPage(parseInt(value))
                setCurrentPage(1) // reset to first page
              }}>
                <SelectTrigger className="w-fit cursor-pointer" size="sm">
                  <SelectValue placeholder="10" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Rows</SelectLabel>
                    {[10, 20, 30, 40, 50].map(val => (
                      <SelectItem key={val} value={val.toString()}>{val}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Page controls */}
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <span className="text-xs md:text-base">
                Page {currentPage} of {totalPages}
              </span>
              <div className="flex items-center gap-1">
                <Button
                  onClick={() => goToPage(1)}
                  variant="outline"
                  size="sm"
                  className="aspect-square cursor-pointer"
                  disabled={currentPage === 1}
                >
                  <ChevronsLeft />
                  <span className="sr-only">First</span>
                </Button>
                <Button
                  onClick={() => goToPage(currentPage - 1)}
                  variant="outline"
                  size="sm"
                  className="aspect-square cursor-pointer"
                  disabled={currentPage === 1}
                >
                  <ChevronLeft />
                  <span className="sr-only">Previous</span>
                </Button>
                <Button
                  onClick={() => goToPage(currentPage + 1)}
                  variant="outline"
                  size="sm"
                  className="aspect-square cursor-pointer"
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight />
                  <span className="sr-only">Next</span>
                </Button>
                <Button
                  onClick={() => goToPage(totalPages)}
                  variant="outline"
                  size="sm"
                  className="aspect-square cursor-pointer"
                  disabled={currentPage === totalPages}
                >
                  <ChevronsRight />
                  <span className="sr-only">Last</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
