import type { Metadata } from 'next'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: 'Products & Packaging — Atomic Packs, Standalones & Add-ons',
  description:
    'Commerce (Commercial + Sales) and People (HR + Recruitment + Workforce + Payroll) atomic packs. Standalone Finance, Marketing, Operations. Add-ons: Marketing Agency, CX360, Equity. Five free platform engines.',
}

export default function ProductsPage() {
  return <ProductsClient />
}
