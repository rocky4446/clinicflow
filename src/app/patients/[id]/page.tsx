'use client'

import { PatientCard } from "@/app/components/patient-card"
import { PrescriptionGenerator } from "@/app/components/prescription-generator"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PatientsPage() {
  return (
    <div
      className="min-h-screen bg-white text-black transition-colors duration-200"
      style={{ minHeight: "100vh" }}
    >
      {/* Sidebar offset for desktop */}
      <div
        className="hidden md:block fixed top-0 left-0 h-screen bg-transparent"
        style={{ width: "260px", zIndex: 0 }}
      />
      <div className="md:ml-[260px] p-6">
        {/* Back Button */}
        <Link href="/dashboard" className="inline-flex items-center mb-6">
          <Button
            variant="default"
            className="bg-blue-600 text-white hover:bg-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>

        {/* Grid Layout for Patient Info + Prescription Generator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-md">
              <PatientCard />
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full max-w-md">
              <PrescriptionGenerator />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
