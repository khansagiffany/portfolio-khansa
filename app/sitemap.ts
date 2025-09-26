import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://portfolio-khansa.vercel.app'
  const routes = [
    '', // home
    '/about',
    '/experience',
    '/projects',
    '/education',
    '/certificates',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))
}
