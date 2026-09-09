/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.NEXT_DIST_DIR || '.next',
  transpilePackages: [
    '@react-three/fiber',
    '@react-three/drei',
    'three',
    'framer-motion'
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.infrakinetic.in',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/guides/salesforce-to-netsuite-sync-breaking',
        destination: '/guides/why-crm-erp-sync-breaks',
        permanent: true,
      },
      {
        source: '/guides/hubspot-tally-sync-without-duplicates',
        destination: '/guides/crm-finance-integration-without-duplicates',
        permanent: true,
      },
      {
        source: '/guides/what-replaces-quickbooks-and-hubspot',
        destination: '/guides/outgrowing-disconnected-business-software',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
