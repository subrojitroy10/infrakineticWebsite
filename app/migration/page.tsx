import type { Metadata } from 'next'
import MigrationClient from './MigrationClient'

export const metadata: Metadata = {
  title: 'CRM, HRIS & ERP Migration — Discover, Map, Validate, Reconcile',
  description:
    "Infrakinetic's Migration Engine moves data between CRM, HRIS, ERP, and finance systems without losing relationships or meaning — schema discovery, entity mapping, staged execution, and a reconciliation report that proves the migration succeeded.",
  alternates: {
    canonical: 'https://www.infrakinetic.in/migration',
  },
}

export default function MigrationPage() {
  return <MigrationClient />
}
