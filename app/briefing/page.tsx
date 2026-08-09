import type { Metadata } from 'next'
import BriefingClient from './BriefingClient'

export const metadata: Metadata = {
  title: 'Platform Briefing — Book a Technical Session',
  description:
    'Book a 60-minute technical walkthrough of Infrakinetic — how one shared database unifies commercial, workforce, finance, and enterprise reporting.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/briefing',
  },
}

export default function BriefingPage() {
  return <BriefingClient />
}
