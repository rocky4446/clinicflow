import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Doctor } from '@/lib/models';
import { z } from 'zod';

const doctorSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  specialization: z.string().min(1, 'Specialization is required'),
});

export async function GET() {
  try {
    await dbConnect();
    const doctors = await Doctor.find();
    return NextResponse.json(doctors);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch doctors', details: error instanceof Error ? error.message : error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data = await req.json();
    const parsed = doctorSchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 400 });
    }
    const doctor = await Doctor.create(parsed.data);
    return NextResponse.json(doctor);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create doctor', details: error instanceof Error ? error.message : error }, { status: 500 });
  }
}
