import { Mic, Calendar, User, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
	{ icon: <Mic className="w-5 h-5 mr-2" />, label: "New Voice Booking" },
	{ icon: <Calendar className="w-5 h-5 mr-2" />, label: "View Schedule" },
	{ icon: <User className="w-5 h-5 mr-2" />, label: "Patient Records" },
	{ icon: <Stethoscope className="w-5 h-5 mr-2" />, label: "Prescriptions" },
];

export function QuickActions() {
	return (
		<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6 mb-4 md:mb-6 w-full">
			<h2 className="text-xl md:text-2xl font-bold mb-1">Quick Actions</h2>
			<p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
				Common tasks and shortcuts
			</p>
			<div className="flex flex-col gap-2">
				{actions.map((action, i) => (
					<Button
						key={i}
						variant="outline"
						className="justify-start font-medium text-sm md:text-base h-10 md:h-12 rounded-xl border-gray-200 bg-white hover:bg-gray-50"
					>
						{action.icon}
						{action.label}
					</Button>
				))}
			</div>
		</div>
	);
}
