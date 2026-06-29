import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // ------------------------------------
      // URL MAP - populate before launch
      // Map every existing myadaptability.co.uk URL to its new equivalent.
      // Pattern: { source: '/old-path', destination: '/new-path', permanent: true }
      // ------------------------------------

      // Homepage alias (if old site used /home)
      // { source: '/home', destination: '/', permanent: true },

      // Product / shop pages
      // { source: '/shop', destination: '/products', permanent: true },
      // { source: '/product/omeo', destination: '/products/omeo', permanent: true },
      // { source: '/product/hoss', destination: '/products/hoss', permanent: true },

      // Booking / trials
      // { source: '/book-a-trial', destination: '/try', permanent: true },

      // About / team
      // { source: '/about-us', destination: '/about', permanent: true },

      // Contact
      // { source: '/contact-us', destination: '/contact', permanent: true },

      // ------------------------------------
      // Add all 15 pages above before DNS cutover.
      // Run: curl -o /dev/null -s -w "%{http_code}" https://myadaptability.co.uk/OLD-PATH
      // to confirm each source URL returns 200 on the current site before mapping it.
      // ------------------------------------
    ]
  },
}

export default nextConfig
