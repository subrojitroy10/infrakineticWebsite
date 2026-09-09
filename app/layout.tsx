import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/globals.css'
import ClientLayout from '@/components/ClientLayout'
import Analytics from '@/components/Analytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.infrakinetic.in'),
  title: {
    default: 'Business Software for CRM, Finance, HR & Workflow | Infrakinetic',
    template: '%s | Infrakinetic',
  },
  description:
    'CRM, sales, finance, billing, HR, payroll, documents, workflow automation, governance, customer success, and business data migration in one connected business platform. A Polynovea product.',
  keywords: [
    'Business Operating System',
    'CRM',
    'ERP software',
    'Business management software',
    'Finance software',
    'HR software',
    'Document management software',
    'HRIS',
    'Payroll software',
    'Billing and invoicing',
    'Workflow automation',
    'Customer success platform',
    'CRM migration',
    'Polynovea',
    'Infrakinetic',
  ],
  authors: [{ name: 'Polynovea LLP' }],
  creator: 'Polynovea',
  publisher: 'Polynovea',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://www.infrakinetic.in/',
  },
  openGraph: {
    title: 'CRM, Finance, HR & Workflow on One Business Platform',
    description:
      'CRM, sales, finance, billing, payments, HR, payroll, workflow, governance, and customer success - running on one shared data model instead of synced between separate tools.',
    url: 'https://www.infrakinetic.in/',
    siteName: 'Infrakinetic',
    images: [
      {
        url: 'https://www.infrakinetic.in/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Infrakinetic Operating System Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM, Finance, HR & Workflow on One Business Platform',
    description:
      'CRM, sales, finance, billing, payments, HR, payroll, workflow, governance, and customer success - running on one shared data model instead of synced between separate tools.',
    images: ['https://www.infrakinetic.in/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.polynovea.in/#organization',
        name: 'Polynovea',
        url: 'https://www.polynovea.in',
        brand: { '@id': 'https://www.infrakinetic.in/#brand' },
      },
      {
        '@type': 'Brand',
        '@id': 'https://www.infrakinetic.in/#brand',
        name: 'Infrakinetic',
        url: 'https://www.infrakinetic.in/',
        logo: 'https://www.infrakinetic.in/logo.png',
        description:
          'Infrakinetic is a Polynovea product for CRM, sales, finance, billing, payments, HR, payroll, workflow, governance, customer success, and business data migration.',
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.infrakinetic.in/#website',
        name: 'Infrakinetic',
        url: 'https://www.infrakinetic.in/',
        publisher: { '@id': 'https://www.polynovea.in/#organization' },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://www.infrakinetic.in/#software',
        name: 'Infrakinetic',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://www.infrakinetic.in/',
        brand: { '@id': 'https://www.infrakinetic.in/#brand' },
        provider: { '@id': 'https://www.polynovea.in/#organization' },
        description:
          'A connected business operating system for CRM, sales, finance, billing, payments, HR, payroll, workflow, governance, customer success, and business data migration.',
      },
    ],
  }

  return (
    <html lang="en" data-theme="dark" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ink-900 text-white min-h-screen antialiased">
        <Analytics />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
