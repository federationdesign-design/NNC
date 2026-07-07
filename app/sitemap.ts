import type { MetadataRoute } from 'next'

const BASE_URL = 'https://nurturingnests.co.uk'

const staticRoutes = [
  { path: '',            priority: 1.0, changeFrequency: 'weekly'  as const },
  { path: '/homes',      priority: 0.9, changeFrequency: 'weekly'  as const },
  { path: '/vacancies',  priority: 0.8, changeFrequency: 'weekly'  as const },
  { path: '/contact',    priority: 0.7, changeFrequency: 'monthly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
