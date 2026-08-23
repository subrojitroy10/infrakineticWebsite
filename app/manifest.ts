import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Infrakinetic — Business Operating System',
    short_name: 'Infrakinetic',
    description: 'A unified business operating system for CRM, sales, finance, billing, HR, payroll, workflow, governance, customer success, and data migration.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#E6D3A3',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
