import type { Metadata } from 'next'
import PlatformClient from './PlatformClient'

export const metadata: Metadata = {
  title: 'Platform Architecture — One Event Bus',
  description:
    'How Infrakinetic unifies commercial, finance, HR, and operations on one shared database, event bus, and transaction boundary — instead of synced tools.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/platform',
  },
}

export default function PlatformPage() {
  return <PlatformClient />
}
