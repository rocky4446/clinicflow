import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/lib/mongodb';
import { Doctor } from '@/lib/models';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

export async function POST(req: NextRequest) {
  await dbConnect();
  const { email, password } = await req.json();

  // For demo: password is always 'doctor123' for all doctors
  const doctor = await Doctor.findOne({ email });
  if (!doctor || password !== 'doctor123') {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  // Create JWT
  const token = jwt.sign({ id: doctor._id, role: 'Doctor', email: doctor.email }, JWT_SECRET, { expiresIn: '1d' });

  // Set HttpOnly cookie
  const response = NextResponse.json({ user: { id: doctor._id, name: doctor.name, email: doctor.email, role: 'Doctor' } });
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
  });
  return response;
}
