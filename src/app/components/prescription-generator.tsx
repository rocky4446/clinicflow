'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Save, Info, Trash2, AlertTriangle } from "lucide-react"
import { cn } from "@/lib/utils"
import { useParams } from "next/navigation"
import type { Patient } from "@/lib/mockData"

interface Medicine {
  name: string;
  dosage: string;
  instructions: string;
}

export function PrescriptionGenerator() {
  const { id: patientId } = useParams<{ id: string }>();
  const [symptoms, setSymptoms] = useState("")
  const [loading, setLoading] = useState(false)
  const [medicines, setMedicines] = useState<Medicine[]>([])
  const [saved, setSaved] = useState(false)
  const [allergies, setAllergies] = useState<string[]>([])
  const [prevPrescriptions, setPrevPrescriptions] = useState<Medicine[][]>([])

  useEffect(() => {
    async function fetchPatientAndPrescriptions() {
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
      // Fetch patient allergies
      const patientRes = await fetch(`/api/patients?doctorId=${doctorId}`)
      if (!patientRes.ok) {
        setAllergies([])
        setLoading(false)
        return
      }
      let patients: Patient[] = [];
      try {
        patients = await patientRes.json();
      } catch {
        setAllergies([])
        setLoading(false)
        return
      }
      const patient = patients.find((p) => p.id === patientId)
      setAllergies(patient?.allergies || [])
      // Fetch previous prescriptions
      const presRes = await fetch(`/api/prescriptions?patientId=${patientId}&doctorId=${doctorId}`)
      let data: { medicines: string[]; symptoms: string }[] = [];
      if (presRes.ok) {
        try {
          data = await presRes.json();
        } catch {}
      }
      if (data.length > 0) {
        setPrevPrescriptions(data.map((p) => p.medicines.map((m) => ({ name: m, dosage: '', instructions: '' }))))

        setMedicines(data[0].medicines.map((m) => ({ name: m, dosage: '', instructions: '' })))
        setSymptoms(data[0].symptoms)
      }
      setLoading(false)
    }
    fetchPatientAndPrescriptions();
  }, [patientId])

  const handleGenerate = async () => {
    setLoading(true)
    setSaved(false)
    // Simple AI suggestion logic
    const suggestions: Medicine[] = []
    const s = symptoms.toLowerCase()
    if (s.includes('fever') && !allergies.includes('Paracetamol')) {
      suggestions.push({ name: 'Paracetamol', dosage: '500mg', instructions: 'Twice daily after food' })
    }
    if (s.includes('cough') && !allergies.includes('Cough Syrup')) {
      suggestions.push({ name: 'Cough Syrup', dosage: '10ml', instructions: 'Thrice daily' })
    }
    if (s.includes('hypertension') && !allergies.includes('Amlodipine')) {
      suggestions.push({ name: 'Amlodipine', dosage: '5mg', instructions: 'Once daily' })
    }
    if (suggestions.length === 0) {
      suggestions.push({ name: 'Consult specialist', dosage: '', instructions: 'No AI suggestion available' })
    }
    setMedicines(suggestions)
    setLoading(false)
  }

  const handleSave = async () => {
    setSaved(true)
    await fetch('/api/prescriptions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patientId,
        doctorId: 'doc1', // TODO: Replace with actual logged-in doctor
        symptoms,
        medicines: medicines.map(m => `${m.name} (${m.dosage}) - ${m.instructions}`),
        diagnosis: '',
        date: new Date().toISOString().slice(0, 10),
      })
    })
  }

  const handleMedicineChange = (idx: number, field: keyof Medicine, value: string) => {
    setMedicines(meds => meds.map((m, i) => i === idx ? { ...m, [field]: value } : m))
  }

  const handleRemoveMedicine = (idx: number) => {
    setMedicines(meds => meds.filter((_, i) => i !== idx))
  }

  const handleAddMedicine = () => {
    setMedicines([...medicines, { name: '', dosage: '', instructions: '' }])
  }

  return (
    <div className="rounded-xl border bg-white p-8 shadow-sm w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-600 mb-1">Prescription Generator</h2>
      <p className="text-sm text-muted-foreground mb-6">Enter symptoms and generate an AI-assisted prescription.</p>
      <div className="mb-5">
        <label htmlFor="symptoms" className="block text-base font-semibold mb-2 text-gray-900">
          Current Symptoms
        </label>
        <Textarea
          id="symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          className="bg-gray-50 text-gray-900 border-gray-300 focus:ring-blue-600 focus:border-blue-600 min-h-[80px]"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3 items-center mb-4">
        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {loading ? "Generating..." : "Generate Prescription (AI)"}
        </Button>
        <Button
          variant="secondary"
          onClick={handleSave}
          disabled={medicines.length === 0}
          className={cn(
            "w-full sm:w-auto flex items-center gap-2",
            medicines.length === 0 ? "opacity-60 cursor-not-allowed" : ""
          )}
        >
          <Save className="w-4 h-4 mr-2" />
          Save Prescription
        </Button>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Medicines</h3>
        {medicines.map((m, idx) => (
          <div key={idx} className="flex gap-2 items-center mb-2">
            <input
              className="border rounded px-2 py-1 w-32"
              placeholder="Medicine"
              value={m.name}
              onChange={e => handleMedicineChange(idx, 'name', e.target.value)}
            />
            <input
              className="border rounded px-2 py-1 w-24"
              placeholder="Dosage"
              value={m.dosage}
              onChange={e => handleMedicineChange(idx, 'dosage', e.target.value)}
            />
            <input
              className="border rounded px-2 py-1 w-40"
              placeholder="Instructions"
              value={m.instructions}
              onChange={e => handleMedicineChange(idx, 'instructions', e.target.value)}
            />
            <Button size="icon" variant="ghost" onClick={() => handleRemoveMedicine(idx)}>
              <Trash2 className="w-4 h-4 text-red-500" />
            </Button>
            {allergies.includes(m.name) && (
              <span title="Allergy warning">
                <AlertTriangle className="w-4 h-4 text-yellow-500" />
              </span>
            )}
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={handleAddMedicine} className="mt-2">+ Add Medicine</Button>
      </div>
      {prevPrescriptions.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Previous Prescriptions</h3>
          {prevPrescriptions.map((pres, i) => (
            <ul key={i} className="list-disc ml-6 text-sm text-gray-600 mb-2">
              {pres.map((m, j) => <li key={j}>{m.name}</li>)}
            </ul>
          ))}
        </div>
      )}
      {saved && (
        <div className="text-green-600 text-sm mb-2">Prescription saved!</div>
      )}
      <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
        <Info className="w-4 h-4" />
        Changes will be synced with MCP server in real-time.
      </div>
    </div>
  )
}
