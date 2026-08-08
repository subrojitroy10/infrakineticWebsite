'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { brand, nav } from '@/lib/content'
import { useTheme } from '@/components/theme/ThemeProvider'
import { Sun, Moon } from '@/components/ui/Icons'

function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-white/20 hover:text-white ${className}`}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}

function isAnchorLink(href: string) {
  return href.startsWith('#')
}

function getNavHref(href: string, pathname: string) {
  if (isAnchorLink(href)) {
    // If on homepage, use anchor link; otherwise navigate to homepage + anchor
    return pathname === '/' ? href : `/${href}`
  }
  return href
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink-900/70 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold-300 to-violet-400 text-lg font-bold tracking-tight text-ink-900">
            I
          </span>
          <span className="text-lg font-semibold tracking-tight text-white">{brand.name}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={getNavHref(item.href, pathname)}
              className="text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link href="/briefing" className="btn-ghost !px-5 !py-2.5 text-xs">
            Sign in
          </Link>
          <Link href="/briefing" className="btn-primary !px-5 !py-2.5 text-xs">
            Request briefing
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span className={`block h-0.5 w-5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-ink-900/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={getNavHref(item.href, pathname)}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white/70 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/briefing"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/70 hover:bg-white/5 hover:text-white"
              >
                Briefing
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}