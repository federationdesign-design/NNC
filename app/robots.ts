import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/checkout/',
          '/cart/',
          '/orders/',
          '/declaration/',
        ],
      },
    ],
    sitemap: 'https://myadaptability.co.uk/sitemap.xml',
  }
}
