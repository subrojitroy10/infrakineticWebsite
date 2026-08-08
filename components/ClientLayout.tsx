'use client'

import { ThemeProvider } from '@/components/theme/ThemeProvider'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <div className="relative">
        <Navbar />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}