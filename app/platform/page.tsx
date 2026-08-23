import type { Metadata } from 'next'
import PlatformClient from './PlatformClient'

export const metadata: Metadata = {
  title: 'Platform Architecture — One Business Data Model, Governed Events',
  description:
    'How Infrakinetic unifies commercial, finance, HR, and operations on one shared business data model with governed cross-engine events and database-level tenant isolation — instead of synced tools.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/platform',
  },
  openGraph: {
    title: 'Infrakinetic Platform Architecture',
    description:
      'One business data model, governed events, and atomic transactions where it matters — the architecture behind CRM, finance, HR, and operations running on one foundation.',
    url: 'https://www.infrakinetic.in/platform',
  },
}

export default function PlatformPage() {
  return <PlatformClient />
}
