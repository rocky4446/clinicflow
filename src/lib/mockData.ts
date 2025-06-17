// Doctor, Patient, Appointment, and Prescription interfaces
export interface Doctor {
  id: string;
  name: string;
  specialization: string;
}

export interface Patient {
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
  doctorId: string; // Assigned doctor
}

export type AppointmentStatus = 'pending' | 'completed';
export type BookingType = 'voice' | 'manual';

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string; // ISO date
  time: string;
  status: AppointmentStatus;
  bookingType: BookingType;
}

export interface Prescription {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  medicines: string[];
  symptoms: string;
  diagnosis: string;
}

// Example mock data arrays (can be expanded as needed)
export const doctors: Doctor[] = [
  { id: 'doc1', name: 'Dr. Smith', specialization: 'Cardiology' },
  { id: 'doc2', name: 'Dr. Lee', specialization: 'Dermatology' },
];

export const patients: Patient[] = [
  {
    id: 'pat1',
    name: 'Alice',
    age: 30,
    gender: 'Female',
    phone: '555-0123',
    address: '123 Main St, Springfield',
    diagnosis: 'Hypertension',
    allergies: ['Penicillin'],
    medications: ['Amlodipine'],
    history: [
      { date: '2024-12-01', reason: 'Blood pressure check', doctor: 'Dr. Smith' },
      { date: '2024-06-01', reason: 'Routine checkup', doctor: 'Dr. Smith' },
    ],
    doctorId: 'doc1',
  },
  {
    id: 'pat2',
    name: 'Bob',
    age: 45,
    gender: 'Male',
    phone: '555-0124',
    address: '456 Oak Ave, Springfield',
    diagnosis: 'Diabetes',
    allergies: [],
    medications: ['Metformin'],
    history: [
      { date: '2025-01-15', reason: 'Diabetes follow-up', doctor: 'Dr. Smith' },
      { date: '2024-07-10', reason: 'Annual physical', doctor: 'Dr. Smith' },
    ],
    doctorId: 'doc1',
  },
  {
    id: 'pat3',
    name: 'Charlie',
    age: 50,
    gender: 'Male',
    phone: '555-0125',
    address: '789 Pine Rd, Springfield',
    diagnosis: 'Eczema',
    allergies: ['Aspirin'],
    medications: ['Hydrocortisone cream'],
    history: [
      { date: '2025-02-20', reason: 'Skin rash', doctor: 'Dr. Lee' },
      { date: '2024-08-15', reason: 'Follow-up', doctor: 'Dr. Lee' },
    ],
    doctorId: 'doc2',
  },
];

export const appointments: Appointment[] = [
  {
    id: 'appt1',
    patientId: 'pat1',
    doctorId: 'doc1',
    date: '2025-06-18',
    time: '10:00',
    status: 'pending',
    bookingType: 'voice',
  },
  {
    id: 'appt2',
    patientId: 'pat2',
    doctorId: 'doc1',
    date: '2025-06-18',
    time: '11:00',
    status: 'completed',
    bookingType: 'manual',
  },
  {
    id: 'appt3',
    patientId: 'pat3',
    doctorId: 'doc2',
    date: '2025-06-19',
    time: '09:00',
    status: 'pending',
    bookingType: 'voice',
  },
];

export const prescriptions: Prescription[] = [
  {
    id: 'presc1',
    patientId: 'pat1',
    doctorId: 'doc1',
    date: '2025-06-18',
    medicines: ['Amlodipine'],
    symptoms: 'High blood pressure',
    diagnosis: 'Hypertension',
  },
];
