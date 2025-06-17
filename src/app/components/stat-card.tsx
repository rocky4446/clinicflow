import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface StatCardProps {
  title: string
  value: string | number
  icon: ReactNode
  iconBgColor: string
  subtitle: string
}

export function StatCard({
  title,
  value,
  icon,
  iconBgColor,
  subtitle,
}: StatCardProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border bg-white p-6 shadow-sm w-full max-w-sm">
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
      <div
        className={cn(
          "rounded-full p-2",
          iconBgColor
        )}
      >
        {icon}
      </div>
    </div>
  )
}
