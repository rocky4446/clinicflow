import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IDoctor extends Document {
  name: string;
  email: string;
  specialization: string;
}

const DoctorSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  specialization: { type: String, required: true },
});

export const Doctor: Model<IDoctor> = mongoose.models.Doctor || mongoose.model<IDoctor>('Doctor', DoctorSchema);

export interface IPatient extends Document {
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

const PatientSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  diagnosis: { type: String, required: true },
  allergies: [{ type: String }],
  medications: [{ type: String }],
  history: [{ date: String, reason: String, doctor: String }],
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
});

export const Patient: Model<IPatient> = mongoose.models.Patient || mongoose.model<IPatient>('Patient', PatientSchema);

export interface IAppointment extends Document {
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'pending' | 'completed';
  bookingType: 'voice' | 'manual';
}

const AppointmentSchema: Schema = new Schema({
  patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed'], required: true },
  bookingType: { type: String, enum: ['voice', 'manual'], required: true },
});

export const Appointment: Model<IAppointment> = mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);

export interface IPrescription extends Document {
  patientId: string;
  doctorId: string;
  date: string;
  medicines: string[];
  symptoms: string;
  diagnosis: string;
}

const PrescriptionSchema: Schema = new Schema({
  patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  date: { type: String, required: true },
  medicines: [{ type: String }],
  symptoms: { type: String, required: true },
  diagnosis: { type: String, required: true },
});

export const Prescription: Model<IPrescription> = mongoose.models.Prescription || mongoose.model<IPrescription>('Prescription', PrescriptionSchema);
