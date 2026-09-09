import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SearchIntentPage from '@/components/search/SearchIntentPage'
import { searchIntents, searchIntentBySlug } from '@/lib/searchIntents'

interface Props {
  params: Promise<{ intent: string }>
}

export function generateStaticParams() {
  return searchIntents.map((intent) => ({ intent: intent.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { intent } = await params
  const page = searchIntentBySlug[intent]

  if (!page) {
    return {}
  }

  const url = `https://www.infrakinetic.in/${page.slug}`
  const brandedTitle = `${page.metaTitle} | Infrakinetic`
  const searchTitle = brandedTitle.length <= 64 ? brandedTitle : page.metaTitle

  return {
    title: { absolute: searchTitle },
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: searchTitle,
      description: page.metaDescription,
      url,
      siteName: 'Infrakinetic',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: searchTitle,
      description: page.metaDescription,
    },
  }
}

export default async function IntentPage({ params }: Props) {
  const { intent } = await params
  const page = searchIntentBySlug[intent]

  if (!page) {
    notFound()
  }

  return <SearchIntentPage intent={page} />
}
