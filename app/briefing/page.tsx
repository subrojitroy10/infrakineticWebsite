import type { Metadata } from 'next'
import BriefingClient from './BriefingClient'

export const metadata: Metadata = {
  title: 'Platform Briefing — Book a Technical Session',
  description:
    'Book a 60-minute technical walkthrough of Infrakinetic — how one shared operating foundation unifies CRM, finance, HR, payroll, workflow, governance, and customer success.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/briefing',
  },
  openGraph: {
    title: 'Request an Infrakinetic Platform Briefing',
    description:
      'A 60-minute technical walkthrough of the architecture, migration proof, and security model behind Infrakinetic.',
    url: 'https://www.infrakinetic.in/briefing',
  },
}

export default function BriefingPage() {
  return <BriefingClient />
}
