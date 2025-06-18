import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Prescription } from '@/lib/models';
import { z } from 'zod';

const prescriptionSchema = z.object({
  patientId: z.string().min(1, 'Patient ID is required'),
  doctorId: z.string().min(1, 'Doctor ID is required'),
  date: z.string().min(1, 'Date is required'),
  medicines: z.array(z.string()),
  symptoms: z.string().min(1, 'Symptoms are required'),
  diagnosis: z.string().min(1, 'Diagnosis is required'),
});

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const doctorId = searchParams.get('doctorId');
    const patientId = searchParams.get('patientId');
    const filter: Record<string, unknown> = {};
    if (doctorId) filter.doctorId = doctorId;
    if (patientId) filter.patientId = patientId;
    const prescriptions = await Prescription.find(filter);
    return NextResponse.json(prescriptions);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch prescriptions', details: error instanceof Error ? error.message : error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data = await req.json();
    const parsed = prescriptionSchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 400 });
    }
    const prescription = await Prescription.create(parsed.data);
    return NextResponse.json(prescription);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create prescription', details: error instanceof Error ? error.message : error }, { status: 500 });
  }
}
