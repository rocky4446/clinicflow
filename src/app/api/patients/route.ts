import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Patient } from '@/lib/models';
import { z } from 'zod';

const patientSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.number().int().min(0, 'Age must be a positive integer'),
  gender: z.string().min(1, 'Gender is required'),
  phone: z.string().min(1, 'Phone is required'),
  address: z.string().min(1, 'Address is required'),
  diagnosis: z.string().min(1, 'Diagnosis is required'),
  allergies: z.array(z.string()),
  medications: z.array(z.string()),
  history: z.array(z.object({ date: z.string(), reason: z.string(), doctor: z.string() })),
  doctorId: z.string().min(1, 'Doctor ID is required'),
});

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const doctorId = searchParams.get('doctorId');
    const filter: Record<string, unknown> = {};
    if (doctorId) filter.doctorId = doctorId;
    const patients = await Patient.find(filter);
    return NextResponse.json(patients);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch patients', details: error instanceof Error ? error.message : error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data = await req.json();
    const parsed = patientSchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 400 });
    }
    const patient = await Patient.create(parsed.data);
    return NextResponse.json(patient);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create patient', details: error instanceof Error ? error.message : error }, { status: 500 });
  }
}
