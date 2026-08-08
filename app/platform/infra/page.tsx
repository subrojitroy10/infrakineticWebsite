import type { Metadata } from 'next'
import PlatformInfraClient from './PlatformInfraClient'

export const metadata: Metadata = {
  title: 'Platform Infrastructure — Approvals, Workflow, Tickets, Governance, Documents',
  description:
    'Five platform engines included with every tenant from day one: Approvals, Workflow, Tickets, Governance, and Documents. Shared infrastructure powering all operating modules.',
}

export default function PlatformInfraPage() {
  return <PlatformInfraClient />
}
