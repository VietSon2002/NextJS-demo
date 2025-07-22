import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const token = await getToken({
        req: request,
        secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
        return NextResponse.redirect(new URL('/api/auth/signin', request.url));
    }

    return NextResponse.next();
}

export const config = {
    // *: zero or more
    // +: one or more
    // ?: zero or one
    matcher: ['/users/:path*', '/dashboard'],
};
