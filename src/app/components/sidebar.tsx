'use client'

import {
  Calendar,
  Settings,
  User,
  LayoutDashboard,
  Stethoscope,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { useUser } from "@/lib/UserContext"

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "My Appointments", icon: Calendar, href: "/appointments" },
  { label: "Profile", icon: User, href: "/profile" },
  { label: "Settings", icon: Settings, href: "/settings" },
]

export function Sidebar() {
  const [active, setActive] = useState("Dashboard")
  const [collapsed, setCollapsed] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { user, logout } = useUser()

  const NavLinks = ({ collapsed }: { collapsed: boolean }) => (
    <nav className="flex flex-col gap-2 mt-4">
      {navItems.map(({ label, icon: Icon, href }) => (
        <Link
          key={label}
          href={href}
          onClick={() => {
            setActive(label)
            setDrawerOpen(false)
          }}
          className={cn(
            "flex items-center gap-4 px-4 py-2 rounded-lg text-sm font-medium transition-all",
            "hover:bg-blue-50 hover:scale-[1.02]",
            active === label
              ? "bg-blue-100 text-blue-700 shadow"
              : "text-gray-700 hover:text-blue-700"
          )}
          style={{
            boxShadow:
              active === label
                ? "0 2px 12px 0 rgba(59,130,246,0.08)"
                : undefined,
          }}
        >
          <Icon className="h-5 w-5 shrink-0" />
          {!collapsed && <span>{label}</span>}
        </Link>
      ))}
    </nav>
  )

  return (
    <>
      {/* Mobile Drawer */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="flex items-center gap-3">
                <Stethoscope className="text-blue-600 h-6 w-6" />
                <span className="font-extrabold text-xl text-blue-700">
                  ClinicFlow
                </span>
              </DrawerTitle>
            </DrawerHeader>
            <div className="p-4">
              <NavLinks collapsed={false} />
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden md:flex fixed top-0 left-0 z-40 h-full bg-white border-r shadow-lg transition-all duration-300 ease-in-out flex-col",
          collapsed ? "w-[70px]" : "w-[260px]"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Stethoscope className="text-blue-600 h-6 w-6" />
            {!collapsed && (
              <span className="font-extrabold text-xl text-blue-700 tracking-tight">
                ClinicFlow
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed((prev) => !prev)}
          >
            {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
          </Button>
        </div>

        <div className="border-b border-gray-200 mx-3 mb-3" />

        <div className="flex-1 overflow-y-auto px-2">
          <NavLinks collapsed={collapsed} />
        </div>

        {/* User Info */}
        {user && (
          <div className="flex flex-col items-center mt-6">
            <div className="font-semibold text-blue-700">{user.name}</div>
            <div className="text-xs text-gray-500">{user.role}</div>
          </div>
        )}

        {/* Logout Button */}
        <div className="mt-8 px-4">
          <Button
            variant="outline"
            className="w-full"
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Page offset for sidebar */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          "hidden md:block",
          collapsed ? "ml-[70px]" : "ml-[260px]"
        )}
      />
    </>
  )
}
