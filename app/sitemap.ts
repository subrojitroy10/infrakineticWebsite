import { MetadataRoute } from 'next'
import { guides } from '@/lib/guides'
import { searchIntents } from '@/lib/searchIntents'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.infrakinetic.in'
  const currentDate = new Date().toISOString()

  const intentPages: MetadataRoute.Sitemap = searchIntents.map((intent) => ({
    url: `${baseUrl}/${intent.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: intent.slug === 'business-operating-system' ? 0.95 : 0.9,
  }))

  const guidePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/guides`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...guides.map((guide) => ({
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ]

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...intentPages,
    {
      url: `${baseUrl}/platform`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/migration`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/briefing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...guidePages,
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
