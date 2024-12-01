import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = request.nextUrl.pathname;

  // Public paths that don't require authentication
  const isPublicPath = path.startsWith('/auth/');

  // Check if the path starts with /dashboard
  const isDashboardPath = path.startsWith('/dashboard/');

  // For this demo, we'll just redirect unauthenticated users to login
  // In a real app, you would check for a valid session/token
  if (isDashboardPath) {
    // Redirect to login if accessing dashboard without auth
    // For demo purposes, we'll allow all dashboard access
    return NextResponse.next();
  }

  // Allow all other requests to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};