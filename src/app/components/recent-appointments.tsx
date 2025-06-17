import { Mic, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const appointments = [
	{
		name: "Alice Johnson",
		time: "09:00 AM",
		doctor: "Dr. Smith",
		type: "Voice",
		status: "confirmed",
		statusColor: "bg-green-100 text-green-700",
		typeColor: "bg-purple-100 text-purple-700",
	},
	{
		name: "Bob Wilson",
		time: "10:30 AM",
		doctor: "Dr. Brown",
		type: "",
		status: "pending",
		statusColor: "bg-orange-100 text-orange-700",
		typeColor: "",
	},
	{
		name: "Carol Davis",
		time: "02:00 PM",
		doctor: "Dr. Johnson",
		type: "Voice",
		status: "confirmed",
		statusColor: "bg-green-100 text-green-700",
		typeColor: "bg-purple-100 text-purple-700",
	},
	{
		name: "David Miller",
		time: "03:30 PM",
		doctor: "Dr. Smith",
		type: "Voice",
		status: "completed",
		statusColor: "bg-gray-100 text-gray-700",
		typeColor: "bg-purple-100 text-purple-700",
	},
];

export function RecentAppointments() {
	return (
		<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6 w-full max-w-2xl mx-auto">
			<div className="flex items-center justify-between mb-4 md:mb-6">
				<div>
					<h2 className="text-xl md:text-2xl font-bold">
						Recent Appointments
					</h2>
					<p className="text-gray-400 text-xs md:text-sm mt-1">
						Latest bookings and their status
					</p>
				</div>
				<Link
					href="/appointments"
					className="font-semibold text-sm md:text-base flex items-center gap-1 hover:underline"
				>
					View all <span aria-hidden>→</span>
				</Link>
			</div>
			<div className="space-y-3 md:space-y-4">
				{appointments.map((appt, i) => (
					<div
						key={i}
						className="flex items-center justify-between bg-blue-50/30 rounded-xl px-3 md:px-5 py-3 md:py-4 border border-gray-100 hover:shadow transition group min-w-0"
					>
						<div className="flex items-center gap-3 md:gap-4 min-w-0">
							<span className="bg-blue-100 rounded-full p-2">
								<User className="w-6 h-6 text-blue-400" />
							</span>
							<div className="min-w-0">
								<div className="font-semibold text-base md:text-lg text-gray-900 truncate">
									{appt.name}
								</div>
								<div className="text-gray-400 text-xs md:text-sm mt-0.5 truncate">
									{appt.time} <span className="mx-1">•</span> {appt.doctor}
								</div>
							</div>
						</div>
						<div className="flex items-center gap-2 flex-shrink-0">
							{appt.type && (
								<Badge className="px-2 md:px-3 py-1 text-xs font-medium rounded-full border-0 bg-purple-100 text-purple-700 flex items-center gap-1">
									<Mic className="w-3 h-3 mr-1 text-purple-400" /> Voice
								</Badge>
							)}
							<Badge
								className={`px-2 md:px-3 py-1 text-xs font-medium rounded-full border-0 ${appt.statusColor}`}
							>
								{appt.status}
							</Badge>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
