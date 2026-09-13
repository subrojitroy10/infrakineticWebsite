import type { Metadata } from 'next'
import PricingCalculatorClient from './PricingCalculatorClient'

export const metadata: Metadata = {
  title: 'Pricing Calculator',
  description: 'Selective Infrakinetic pricing estimate calculator.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/infrakinetic/pricing-calculator',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-snippet': 0,
      'max-image-preview': 'none',
      'max-video-preview': 0,
    },
  },
}

export default function PricingCalculatorPage() {
  return <PricingCalculatorClient />
}
