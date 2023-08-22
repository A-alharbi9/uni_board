import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  if (req.cookies.get('token')) {
    return NextResponse.rewrite(new URL('/dashboard', req.url));
  }
}

export const config = { matcher: ['/'] };
