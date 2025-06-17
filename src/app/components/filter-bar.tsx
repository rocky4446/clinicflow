"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Filter } from "lucide-react"

interface FilterBarProps {
  search: string;
  setSearch: (v: string) => void;
  status: string;
  setStatus: (v: string) => void;
  date: string;
  setDate: (v: string) => void;
  onClear: () => void;
}

export default function FilterBar({ search, setSearch, status, setStatus, date, setDate, onClear }: FilterBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-xl border p-4 ">
      <Input
        className="max-w-xs "
        placeholder="Search patients, doctors, symptoms"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <Select value={status} onValueChange={setStatus}>
        <SelectTrigger className="w-[150px] ">
          <SelectValue placeholder="All Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="scheduled">Scheduled</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
      <Select value={date} onValueChange={setDate}>
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="All Dates" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="tomorrow">Tomorrow</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" className="ml-auto" onClick={onClear}>
        <Filter className="h-4 w-4 mr-2" />
        Clear Filters
      </Button>
    </div>
  )
}
