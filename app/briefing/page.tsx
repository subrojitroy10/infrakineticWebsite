import type { Metadata } from 'next'
import BriefingClient from './BriefingClient'

export const metadata: Metadata = {
  title: 'Executive Platform Briefing',
  description:
    'Evaluate Infrakinetic as operating infrastructure. 60 minutes. Technical walkthrough. No sales fluff. Review how one shared database unifies commercial, workforce, finance, and reporting.',
}

export default function BriefingPage() {
  return <BriefingClient />
}
