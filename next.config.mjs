/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin'
  },
  {
    key: 'Content-Security-Policy',
    // CORRECTED: Added 'frame-src' to allow Google Maps
    value: "default-src 'self'; frame-src 'self' https://www.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:; script-src 'self' 'unsafe-eval' 'unsafe-inline'; connect-src 'self';"
  }
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;