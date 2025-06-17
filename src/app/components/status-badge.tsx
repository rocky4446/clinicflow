import { Badge } from "@/components/ui/badge"

export function StatusBadge({ status }: { status: string }) {
  switch (status.toLowerCase()) {
    case "scheduled":
      return <Badge className="bg-blue-100 text-blue-700">Scheduled</Badge>
    case "completed":
      return <Badge className="bg-green-100 text-green-700">Completed</Badge>
    default:
      return <Badge>{status}</Badge>
  }
}
