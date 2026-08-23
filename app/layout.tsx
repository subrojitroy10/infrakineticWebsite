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
    default: 'Infrakinetic — Business Operating System for CRM, Finance, HR & Operations',
    template: '%s | Infrakinetic',
  },
  description:
    'Infrakinetic is a unified business operating system for CRM, sales, finance, billing, payments, HR, payroll, workflow, governance, customer success, and business data migration — connected on one shared operating foundation. A Polynovea product.',
  keywords: [
    'Business Operating System',
    'CRM',
    'ERP alternative',
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
    title: 'Infrakinetic — Run Your Business on One Operating System',
    description:
      'CRM, sales, finance, billing, payments, HR, payroll, workflow, governance, and customer success — connected on one shared operating foundation, not synced between separate tools.',
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
    title: 'Infrakinetic — Run Your Business on One Operating System',
    description:
      'CRM, sales, finance, billing, payments, HR, payroll, workflow, governance, and customer success — connected on one shared operating foundation, not synced between separate tools.',
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
        'name': 'Infrakinetic',
        'url': 'https://www.infrakinetic.in/',
        'logo': 'https://www.infrakinetic.in/logo.png',
        'sameAs': [
          'https://linkedin.com/company/infrakinetic',
          'https://twitter.com/infrakinetic',
          'https://www.google.com/maps/place/Infrakinetic',
        ],
        'description':
          'Infrakinetic is a unified business operating system for CRM, sales, finance, billing, payments, HR, payroll, workflow, governance, customer success, and business data migration.',
      },
      {
        '@type': 'WebSite',
        'name': 'Infrakinetic',
        'url': 'https://www.infrakinetic.in/',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://www.infrakinetic.in/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'SoftwareApplication',
        'name': 'Infrakinetic',
        'applicationCategory': 'BusinessApplication',
        'operatingSystem': 'Web',
        'url': 'https://www.infrakinetic.in/',
        'description':
          'A unified business operating system connecting CRM, sales, finance, billing, payments, HR, payroll, workflow, governance, customer success, and business data migration on one shared operating foundation.',
      },
    ],
  }

  return (
    <html lang="en" data-theme="dark" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
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
