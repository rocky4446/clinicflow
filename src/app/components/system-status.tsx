import { CheckCircle } from "lucide-react";

const statusData = [
  { label: "Voice Recognition", value: 98 },
  { label: "Server Uptime", value: 99.9 },
  { label: "Database Sync", value: 100 },
];

export function SystemStatus() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6 w-full">
      <h2 className="text-xl md:text-2xl font-bold mb-1">System Status</h2>
      <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
        Current system performance
      </p>
      <div className="space-y-3 md:space-y-4 mb-3 md:mb-4">
        {statusData.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-sm md:text-base font-medium text-gray-800">
              {item.label}
            </span>
            <span className="text-sm md:text-base font-semibold text-gray-900">
              {item.value}%
            </span>
          </div>
        ))}
        {statusData.map((item, i) => (
          <div
            key={i}
            className="w-full h-1.5 md:h-2 bg-gray-100 rounded-full mb-1 md:mb-2"
          >
            <div
              className="h-1.5 md:h-2 bg-blue-600 rounded-full transition-all"
              style={{ width: `${item.value}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-green-600 text-xs md:text-sm font-medium mt-2">
        <CheckCircle className="w-4 h-4" />
        All systems operational
      </div>
    </div>
  );
}
