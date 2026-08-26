import type { Metadata } from 'next'
import PlatformClient from './PlatformClient'

export const metadata: Metadata = {
  title: 'Unified CRM, Finance & HR Data Model — No Sync, No Middleware',
  description:
    'CRM, finance, HR, and operations read and write the same shared business data model instead of separate synced copies — no integration middleware, no sync jobs, no drift between systems. See the architecture behind it.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/platform',
  },
  openGraph: {
    title: 'One Data Model for CRM, Finance & HR — No Sync Required',
    description:
      'The architecture behind running CRM, finance, HR, and operations on one shared data model, with governed events and database-level tenant isolation instead of integration middleware.',
    url: 'https://www.infrakinetic.in/platform',
  },
}

export default function PlatformPage() {
  return <PlatformClient />
}
