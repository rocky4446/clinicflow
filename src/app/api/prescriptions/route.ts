import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Prescriptions API endpoint' });
}

export async function POST(request: Request) {
  // Example: handle prescription creation
  const data = await request.json();
  return NextResponse.json({ message: 'Prescription created', data });
}
