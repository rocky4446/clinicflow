import Link from "next/link"
import { useEffect, useState } from "react"
import { StatusBadge } from "./status-badge"
import { Eye, MoreVertical, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Patient {
  id: string
  name: string
  age: number
  diagnosis: string
  history: string[]
  doctorId: string
}

interface Appointment {
  id: string
  patientId: string
  doctorId: string
  date: string
  time: string
  status: "pending" | "completed"
  bookingType: "voice" | "manual"
}

interface AppointmentRow {
  id: string
  patientId: string
  name: string
  age: number
  phone?: string
  doctor: string
  date: string
  time: string
  symptoms?: string
  status: string
  type: string
}

interface AppointmentsTableProps {
  search: string;
  status: string;
  date: string;
}

export default function AppointmentsTable({ search, status, date }: AppointmentsTableProps) {
  const [data, setData] = useState<AppointmentRow[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchAppointments() {
      setLoading(true)
      // Get doctorId from localStorage user context if available
      let doctorId = 'doc1';
      if (typeof window !== 'undefined') {
        const userStr = localStorage.getItem('user');
        if (userStr) {
          try {
            const user = JSON.parse(userStr);
            doctorId = user.id || doctorId;
          } catch {}
        }
      }
      let url = `/api/appointments?doctorId=${doctorId}`
      // Add date filter
      if (date) url += `&date=${date}`
      const res = await fetch(url)
      if (!res.ok) {
        setData([])
        setLoading(false)
        return
      }
      let json
      try {
        json = await res.json()
      } catch {
        setData([])
        setLoading(false)
        return
      }
      const { todayAppointments, tomorrowAppointments } = json || { todayAppointments: [], tomorrowAppointments: [] }
      let all = [...todayAppointments, ...tomorrowAppointments]
      // Add status filter
      if (status) {
        all = all.filter(a =>
          status === 'scheduled' ? a.status === 'pending' : a.status === 'completed'
        )
      }
      // Fetch patients for name/age
      const patientsRes = await fetch("/api/patients?doctorId=doc1")
      const patients: Patient[] = await patientsRes.json()
      const patientMap = Object.fromEntries((patients as Patient[]).map((p) => [p.id, p]))
      // Add search filter
      const filtered = (all as Appointment[]).map((a) => ({
        id: a.id,
        patientId: a.patientId,
        name: patientMap[a.patientId]?.name || "-",
        age: typeof patientMap[a.patientId]?.age === 'number' ? patientMap[a.patientId].age : 0,
        doctor: "Dr. Smith", // TODO: dynamic doctor
        date: a.date,
        time: a.time,
        symptoms: patientMap[a.patientId]?.diagnosis || "-",
        status: a.status === 'pending' ? 'Scheduled' : 'Completed',
        type: a.bookingType === 'voice' ? 'Voice' : 'Manual',
      })).filter(row => {
        const q = search.toLowerCase();
        return (
          row.name.toLowerCase().includes(q) ||
          row.doctor.toLowerCase().includes(q) ||
          (row.symptoms && row.symptoms.toLowerCase().includes(q))
        );
      });
      setData(filtered)
      setLoading(false)
    }
    fetchAppointments()
  }, [search, status, date])

  return (
    <div className="rounded-xl border p-4 mt-6">
      <h2 className="text-xl font-semibold">Appointments ({data.length})</h2>
      <p className="text-sm text-muted-foreground mb-4">
        {loading ? "Loading..." : `${data.length} appointments found`}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left text-muted-foreground">
              <th className="p-2">Patient</th>
              <th className="p-2">Doctor</th>
              <th className="p-2">Date & Time</th>
              <th className="p-2">Symptoms</th>
              <th className="p-2">Status</th>
              <th className="p-2">Type</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, idx) => (
              <tr key={idx} className="border-b hover:bg-muted/20">
                <td className="p-2">
                  <Link href={`/patients/${d.patientId}`} className="font-medium hover:underline">
                    {d.name}
                  </Link>
                  <div className="text-xs text-muted-foreground">Age: {d.age}</div>
                  {d.phone && <div className="text-xs text-muted-foreground">📞 {d.phone}</div>}
                </td>
                <td className="p-2">{d.doctor}</td>
                <td className="p-2">
                  <div>{d.date}</div>
                  <div className="text-xs text-muted-foreground">{d.time}</div>
                </td>
                <td className="p-2">{d.symptoms}</td>
                <td className="p-2">
                  <StatusBadge status={d.status} />
                </td>
                <td className="p-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      d.type === "Voice"
                        ? "bg-purple-100 text-purple-700"
                        : "border"
                    }`}
                  >
                    {d.type === "Voice" && <Mic className="inline h-3 w-3 mr-1" />}
                    {d.type}
                  </span>
                </td>
                <td className="p-2 flex items-center gap-2">
                  <Button size="icon" variant="ghost">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="ghost">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
