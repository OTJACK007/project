import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple middleware that doesn't check authentication
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: []
};