import type { Metadata } from 'next'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: 'Products — CRM, Finance, Billing & Payments, HR, Customer Success, Migration',
  description:
    'Commerce (CRM & sales), Finance, Billing & Payments, People (HR & payroll), Customer Success, Operations & Governance, and the Migration Engine — packaged as atomic packs, standalone products, and add-ons, with core platform capabilities free for every tenant.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/products',
  },
  openGraph: {
    title: 'Infrakinetic Products',
    description:
      'CRM, finance, billing and payments, HR and payroll, customer success, operations and governance, and governed data migration — on one platform.',
    url: 'https://www.infrakinetic.in/products',
  },
}

export default function ProductsPage() {
  return <ProductsClient />
}
