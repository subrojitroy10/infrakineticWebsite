import type { Metadata } from 'next'
import PlatformClient from './PlatformClient'

export const metadata: Metadata = {
  title: 'Platform Architecture — One Schema. One Event Bus.',
  description:
    'Single PostgreSQL database. One event bus. One transaction boundary. 11+ engines that literally cannot drift apart. Lifecycle spine, signal framework, and database-level tenant isolation.',
}

export default function PlatformPage() {
  return <PlatformClient />
}
