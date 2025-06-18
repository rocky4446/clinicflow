import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const isLogin = url.pathname === '/login';
  const isProtected =
    url.pathname.startsWith('/dashboard') ||
    url.pathname.startsWith('/appointments') ||
    url.pathname.startsWith('/patients') ||
    url.pathname.startsWith('/prescriptions');

  // Only allow access if user is a doctor
  const user = request.cookies.get('user');
  let userObj = null;
  try {
    userObj = user ? JSON.parse(user.value) : null;
  } catch {
    userObj = null;
  }

  if (isProtected) {
    if (!userObj || userObj.role !== 'Doctor') {
      url.pathname = '/login';
      return NextResponse.redirect(url);
    }
  }

  // If already logged in as doctor, redirect from login to dashboard
  if (isLogin && userObj && userObj.role === 'Doctor') {
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/appointments/:path*', '/patients/:path*', '/prescriptions/:path*', '/login'],
};
