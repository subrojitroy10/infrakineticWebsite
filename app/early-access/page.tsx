import type { Metadata } from 'next'
import EarlyAccessClient from './EarlyAccessClient'
import { getInfrakineticEarlyAccessCount } from '@/lib/early-access-server'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Infrakinetic Early Access',
  description:
    'Join Infrakinetic Controlled Early Access for limited onboarding cohorts. Tell us which engines you need, what you use today and the operating problem you want to solve.',
  alternates: { canonical: 'https://www.infrakinetic.in/early-access' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Infrakinetic Controlled Early Access',
    description:
      'Register your organisation for a controlled Infrakinetic onboarding cohort.',
    url: 'https://www.infrakinetic.in/early-access',
  },
}

export default async function EarlyAccessPage() {
  const count = await getInfrakineticEarlyAccessCount()
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Infrakinetic Controlled Early Access',
    description:
      'Explicit Early Access registration for controlled Infrakinetic onboarding cohorts. Briefing requests and general enquiries are not counted as Early Access registrations.',
    url: 'https://www.infrakinetic.in/early-access',
    about: {
      '@type': 'SoftwareApplication',
      name: 'Infrakinetic',
      applicationCategory: 'BusinessApplication',
      provider: {
        '@type': 'Organization',
        name: 'Polynovea',
        url: 'https://www.polynovea.in/',
      },
    },
    potentialAction: {
      '@type': 'RegisterAction',
      name: 'Join Infrakinetic Early Access',
      target: 'https://www.infrakinetic.in/early-access',
    },
    ...(count !== null
      ? {
          interactionStatistic: {
            '@type': 'InteractionCounter',
            interactionType: { '@type': 'RegisterAction' },
            userInteractionCount: count,
          },
        }
      : {}),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <EarlyAccessClient initialCount={count} />
    </>
  )
}
