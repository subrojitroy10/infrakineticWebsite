import type { Metadata } from 'next'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: 'Modular CRM, Billing, Finance, HR & Payroll Engines',
  description:
    'Explore Infrakinetic business engines for CRM & Sales, Billing & Invoicing, Payments, Finance, HR, Payroll, Recruitment, Customer Success and more. Start focused, then add engines without rebuilding shared platform infrastructure.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/products',
  },
  openGraph: {
    title: 'Infrakinetic Products - Start Focused, Expand Later',
    description:
      'Modular business engines on shared Documents, Approvals, Workflow, Automation and Governance infrastructure.',
    url: 'https://www.infrakinetic.in/products',
  },
}

export default function ProductsPage() {
  return <ProductsClient />
}
