"use client"
import React, { useEffect, useState } from 'react'

import { StatCard } from "../components/stat-card"
import {
  CalendarDays,
  Users,
  Clock,
  Mic,
} from "lucide-react"
import { RecentAppointments } from '../components/recent-appointments'
import { QuickActions } from '../components/quick-actions'
import { SystemStatus } from '../components/system-status'

const doctorId = 'doc1'; // TODO: Replace with actual logged-in doctor ID

const Dashboard = () => {
  const [stats, setStats] = useState({
    todayAppointments: [],
    tomorrowAppointments: [],
    totalPatients: 0,
    pending: 0,
    voiceBookings: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      const res = await fetch(`/api/appointments?doctorId=${doctorId}`);
      const data = await res.json();
      setStats(data);
      setLoading(false);
    }
    fetchStats();
  }, []);

  const cardData = [
    {
      title: "Today's Appointments",
      value: loading ? '...' : stats.todayAppointments.length,
      subtitle: `+${stats.todayAppointments.length - 2} from yesterday`, // Example logic
      icon: <CalendarDays className="h-5 w-5 text-blue-600" />,
      iconBgColor: "bg-blue-100",
    },
    {
      title: "Total Patients",
      value: loading ? '...' : stats.totalPatients,
      subtitle: "+15% this month",
      icon: <Users className="h-5 w-5 text-green-600" />,
      iconBgColor: "bg-green-100",
    },
    {
      title: "Pending Confirmations",
      value: loading ? '...' : stats.pending,
      subtitle: "3 urgent",
      icon: <Clock className="h-5 w-5 text-orange-600" />,
      iconBgColor: "bg-orange-100",
    },{
      title: "Voice Bookings",
      value: loading ? '...' : stats.voiceBookings,
      subtitle: "+8 today",
      icon: <Mic className="h-5 w-5 text-purple-600" />,
      iconBgColor: "bg-purple-100",
    },
  ]
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center">
      <main className="w-full max-w-7xl px-2 md:px-8 py-6">
        <h1 className="text-2xl font-bold">Doctor&apos;s Dashboard</h1>
        <div className="mt-4 p-2">
          <h2 className="text-4xl font-bold">Good morning, Dr. Smith</h2>
          <p className="text-zinc-400 mt-2">Here&apos;s what&apos;s happening with your practice today.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardData.map((card, index) => (
            <StatCard key={index} {...card} />
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 w-full">
          <div className="lg:col-span-2 min-w-0">
            <RecentAppointments />
          </div>
          <div className="flex gap-6 w-full max-w-sm min-w-[260px] mx-auto lg:mx-0 lg:col-span-2 ">
            <QuickActions />
            <SystemStatus />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard