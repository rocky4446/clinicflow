import { NextRequest, NextResponse } from 'next/server';
import { patients } from '../../../lib/mockData';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const doctorId = searchParams.get('doctorId');

  let filtered = patients;
  if (doctorId) {
    filtered = filtered.filter(p => p.doctorId === doctorId);
  }

  return NextResponse.json(filtered);
}

export async function POST() {
  // Not implemented for mock data
  return NextResponse.json({ message: 'Not implemented' }, { status: 501 });
}
