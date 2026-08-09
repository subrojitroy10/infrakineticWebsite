import type { Metadata } from 'next'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: 'Products & Packaging — Atomic Packs & Add-ons',
  description:
    'Commerce and People atomic packs, plus standalone Finance and Marketing. Add-ons for customer success and agencies. Five capabilities free with every tenant.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/products',
  },
}

export default function ProductsPage() {
  return <ProductsClient />
}
