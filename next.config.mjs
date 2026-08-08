/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
};

export default nextConfig;
