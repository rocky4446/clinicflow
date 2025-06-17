import { CalendarDays, ClipboardList, User2, Phone, MapPin, Pill, AlertTriangle } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  phone: string;
  address: string;
  diagnosis: string;
  allergies: string[];
  medications: string[];
  history: { date: string; reason: string; doctor: string }[];
  doctorId: string;
}

export function PatientCard() {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<Patient | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPatient() {
      setLoading(true);
      const res = await fetch(`/api/patients?doctorId=doc1`);
      const patients: Patient[] = await res.json();
      const found = patients.find((p) => p.id === id);
      setPatient(found || null);
      setLoading(false);
    }
    fetchPatient();
  }, [id]);

  if (loading) return <div className="p-4">Loading patient...</div>;
  if (!patient) return <div className="p-4 text-red-600">Patient not found.</div>;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 w-full max-w-md shadow text-black">
      <div className="flex items-center gap-3 mb-4">
        <User2 className="text-blue-600 w-6 h-6" />
        <h2 className="text-blue-600 text-xl font-bold">{patient.name}</h2>
      </div>
      <p className="text-sm text-gray-500 mb-2">Age: {patient.age} | Gender: {patient.gender}</p>
      <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
        <Phone className="w-4 h-4" /> {patient.phone}
        <MapPin className="w-4 h-4 ml-4" /> {patient.address}
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-1">
          <ClipboardList className="w-4 h-4 text-gray-400" />
          <h3 className="text-sm font-semibold text-black">Diagnosis Summary</h3>
        </div>
        <p className="text-sm text-gray-700">{patient.diagnosis}</p>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-1">
          <AlertTriangle className="w-4 h-4 text-yellow-500" />
          <h3 className="text-sm font-semibold text-black">Allergies</h3>
        </div>
        <ul className="text-sm text-gray-700 list-disc ml-6">
          {patient.allergies.length > 0 ? patient.allergies.map((a, i) => <li key={i}>{a}</li>) : <li>None</li>}
        </ul>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-2 mb-1">
          <Pill className="w-4 h-4 text-green-600" />
          <h3 className="text-sm font-semibold text-black">Current Medications</h3>
        </div>
        <ul className="text-sm text-gray-700 list-disc ml-6">
          {patient.medications.length > 0 ? patient.medications.map((m, i) => <li key={i}>{m}</li>) : <li>None</li>}
        </ul>
      </div>
      <div className="mt-6">
        <div className="flex items-center gap-2 mb-1">
          <CalendarDays className="w-4 h-4 text-gray-400" />
          <h3 className="text-sm font-semibold text-black">Visit History</h3>
        </div>
        <div className="mt-2 text-sm text-gray-700 space-y-2">
          {patient.history.map((visit, idx) => (
            <div key={idx} className="flex justify-between border-b border-gray-200 pb-2">
              <span>{visit.date}</span>
              <span>{visit.reason}</span>
              <span className="text-right text-blue-600">{visit.doctor}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
