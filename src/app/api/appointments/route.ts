import { NextRequest, NextResponse } from 'next/server';
import { appointments } from '../../../lib/mockData';

function getDateStrings() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const toISO = (d: Date) => d.toISOString().slice(0, 10);
  return { today: toISO(today), tomorrow: toISO(tomorrow) };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const doctorId = searchParams.get('doctorId');
  const dateFilter = searchParams.get('date');
  const { today, tomorrow } = getDateStrings();

  let filtered = appointments;
  if (doctorId) {
    filtered = filtered.filter(a => a.doctorId === doctorId);
  }

  let todayAppointments = filtered.filter(a => a.date === today);
  let tomorrowAppointments = filtered.filter(a => a.date === tomorrow);

  if (dateFilter === 'today') {
    tomorrowAppointments = [];
  } else if (dateFilter === 'tomorrow') {
    todayAppointments = [];
  }

  const patientIds = new Set(filtered.map(a => a.patientId));
  const totalPatients = patientIds.size;
  const pending = filtered.filter(a => a.status === 'pending').length;
  const voiceBookings = filtered.filter(a => a.bookingType === 'voice').length;

  return NextResponse.json({
    todayAppointments,
    tomorrowAppointments,
    totalPatients,
    pending,
    voiceBookings,
  });
}
