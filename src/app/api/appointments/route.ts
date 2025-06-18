import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Appointment } from '@/lib/models';
import { z } from 'zod';

const appointmentSchema = z.object({
  patientId: z.string().min(1, 'Patient ID is required'),
  doctorId: z.string().min(1, 'Doctor ID is required'),
  date: z.string().min(1, 'Date is required'),
  time: z.string().min(1, 'Time is required'),
  status: z.enum(['pending', 'completed']),
  bookingType: z.enum(['voice', 'manual']),
});

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const doctorId = searchParams.get('doctorId');
    const dateFilter = searchParams.get('date');
    const filter: Record<string, unknown> = {};
    if (doctorId) filter.doctorId = doctorId;
    if (dateFilter) filter.date = dateFilter;
    const appointments = await Appointment.find(filter);

    const today = new Date().toISOString().slice(0, 10);
    const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
    const todayAppointments = appointments.filter(a => a.date === today);
    const tomorrowAppointments = appointments.filter(a => a.date === tomorrow);
    const patientIds = new Set(appointments.map(a => a.patientId.toString()));
    const totalPatients = patientIds.size;
    const pending = appointments.filter(a => a.status === 'pending').length;
    const voiceBookings = appointments.filter(a => a.bookingType === 'voice').length;

    return NextResponse.json({
      todayAppointments,
      tomorrowAppointments,
      totalPatients,
      pending,
      voiceBookings,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch appointments', details: error instanceof Error ? error.message : error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const data = await req.json();
    const parsed = appointmentSchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Validation failed', details: parsed.error.flatten() }, { status: 400 });
    }
    const appointment = await Appointment.create(parsed.data);
    return NextResponse.json(appointment);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create appointment', details: error instanceof Error ? error.message : error }, { status: 500 });
  }
}
