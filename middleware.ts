import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest, event: NextFetchEvent) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if ((req.nextUrl.pathname.startsWith('/login') || req.nextUrl.pathname.startsWith('/register')) && isAuthenticated) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (req.nextUrl.pathname.startsWith('/register') && !isAuthenticated) {
    return NextResponse.next();
  }

  const authMiddleware = await withAuth({
    pages: {
      signIn: `/login`,
    },
  });

  // @ts-expect-error
  return authMiddleware(req, event);
}
