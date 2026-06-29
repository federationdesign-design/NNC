import type { MetadataRoute } from 'next'

const BASE_URL = 'https://myadaptability.co.uk'

// Static routes - add all 15 pages here as they are built.
// Dynamic routes (e.g. /products/[slug]) extend this array programmatically.
const staticRoutes = [
  { path: '',          priority: 1.0,  changeFrequency: 'weekly'  as const },
  { path: '/omeo',     priority: 0.9,  changeFrequency: 'weekly'  as const },
  { path: '/hoss',     priority: 0.9,  changeFrequency: 'weekly'  as const },
  { path: '/try',      priority: 0.8,  changeFrequency: 'monthly' as const },
  { path: '/products', priority: 0.8,  changeFrequency: 'weekly'  as const },
  { path: '/gallery',  priority: 0.6,  changeFrequency: 'monthly' as const },
  { path: '/about',    priority: 0.6,  changeFrequency: 'monthly' as const },
  { path: '/contact',  priority: 0.7,  changeFrequency: 'monthly' as const },
  { path: '/blog',     priority: 0.7,  changeFrequency: 'weekly'  as const },
  { path: '/privacy',  priority: 0.3,  changeFrequency: 'yearly'  as const },
  { path: '/cookies',  priority: 0.3,  changeFrequency: 'yearly'  as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
