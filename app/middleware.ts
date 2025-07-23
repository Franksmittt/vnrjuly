import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  // Define your Content Security Policy.
  // IMPORTANT: Test thoroughly after any CSP changes, as misconfigurations can break your site.
  // In production, aim to remove 'unsafe-eval' if possible.
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' ${process.env.NODE_ENV === 'development' ? "'unsafe-eval'" : ''};
    style-src 'self' 'nonce-${nonce}' https://fonts.googleapis.com; /* Removed 'unsafe-inline' completely */
    img-src 'self' blob: data: https://www.google.com;
    font-src 'self' https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self' https://www.google.com; /* Allow Google Maps embed */
    block-all-mixed-content;
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim(); // Remove extra whitespace

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set the CSP header on the response
  response.headers.set('Content-Security-Policy', cspHeader);

  // Optional: Set X-Frame-Options (redundant if frame-ancestors is strict in CSP)
  response.headers.set('X-Frame-Options', 'DENY');

  // Optional: Set Strict-Transport-Security (HSTS) for HTTPS enforcement
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

  return response;
}

// Configures which paths the middleware applies to
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static assets)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
