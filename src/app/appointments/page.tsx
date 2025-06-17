"use client"
import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Mic } from "lucide-react"
import FilterBar from "../components/filter-bar"
import AppointmentsTable from "../components/appointments-table"

export default function AppointmentsPage() {
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [date, setDate] = useState("")

  const handleClear = () => {
    setSearch("")
    setStatus("")
    setDate("")
  }

  return (
    <div className="p-4 pl-20">
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Appointments</h1>
          <p className="text-muted-foreground">Manage and view all patient appointments</p>
        </div>
        {/* <Button className="bg-blue-600 text-white hover:bg-blue-700">
          <Mic className="h-4 w-4 mr-2" />
          New Voice Booking
        </Button> */}
      </div>

      <FilterBar
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        date={date}
        setDate={setDate}
        onClear={handleClear}
      />
      <AppointmentsTable
        search={search}
        status={status}
        date={date}
      />
    </div>
  )
}
