import { NextResponse } from 'next/server';

export async function POST() {
  // Clear the JWT cookie
  const response = NextResponse.json({ message: 'Logged out' });
  response.cookies.set('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
  return response;
}
