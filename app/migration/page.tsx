import type { Metadata } from 'next'
import MigrationClient from './MigrationClient'

export const metadata: Metadata = {
  title: 'CRM, HRIS & ERP Migration Into Infrakinetic — Discover, Map, Validate, Reconcile',
  description:
    "Infrakinetic's Migration Engine brings legacy CRM, HRIS, ERP, and finance data into Infrakinetic without losing relationships or meaning — schema discovery, entity mapping, staged execution, and a reconciliation report that proves the migration succeeded.",
  alternates: {
    canonical: 'https://www.infrakinetic.in/migration',
  },
  openGraph: {
    title: 'Governed Data Migration Into Infrakinetic',
    description:
      'Bring Salesforce, Zoho CRM, HubSpot, Tally, or file-based legacy data into Infrakinetic through governed staging, dependency-aware execution, reconciliation, and explicit verification.',
    url: 'https://www.infrakinetic.in/migration',
  },
}

export default function MigrationPage() {
  return <MigrationClient />
}
