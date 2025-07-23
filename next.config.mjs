/** @type {import('next').NextConfig} */

const securityHeaders = [
  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self' vercel.live; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vercel-insights.com vercel.live; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src 'self' fonts.gstatic.com; img-src 'self' data: blob:; frame-ancestors 'none';",
  },
  // Prevents clickjacking
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // Prevents cross-site scripting (XSS)
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  // Prevents the browser from interpreting files as something other than what is declared
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Controls how much referrer information is included with requests
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  // Cross-Origin-Opener-Policy
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin',
  },
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