'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { brand, navGroups } from '@/lib/content'
import { useTheme } from '@/components/theme/ThemeProvider'
import { Sun, Moon, ChevronDown } from '@/components/ui/Icons'

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
    return pathname === '/' ? href : `/${href}`
  }
  return href
}

function DesktopNavGroup({ label, href, items, pathname }: { label: string; href?: string; items?: { label: string; href: string }[]; pathname: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (!items || items.length === 0) {
    return (
      <Link
        href={getNavHref(href ?? '/', pathname)}
        className="whitespace-nowrap text-sm font-medium text-white/60 transition-colors hover:text-white"
      >
        {label}
      </Link>
    )
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 whitespace-nowrap text-sm font-medium text-white/60 transition-colors hover:text-white"
      >
        {label}
        <ChevronDown size={13} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 mt-3 min-w-[15rem] rounded-xl border border-white/10 bg-ink-900/95 p-2 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            {items.map((child) => (
              <Link
                key={child.href}
                href={getNavHref(child.href, pathname)}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-white/65 transition-colors hover:bg-white/5 hover:text-white"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileNavGroup({ label, href, items, pathname, onNavigate }: { label: string; href?: string; items?: { label: string; href: string }[]; pathname: string; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState(false)

  if (!items || items.length === 0) {
    return (
      <Link
        href={getNavHref(href ?? '/', pathname)}
        onClick={onNavigate}
        className="rounded-lg px-3 py-3 text-base font-medium text-white/70 hover:bg-white/5 hover:text-white"
      >
        {label}
      </Link>
    )
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-white/70 hover:bg-white/5 hover:text-white"
      >
        {label}
        <ChevronDown size={16} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-3"
          >
            {items.map((child) => (
              <Link
                key={child.href}
                href={getNavHref(child.href, pathname)}
                onClick={onNavigate}
                className="block rounded-lg px-3 py-2.5 text-sm text-white/55 hover:bg-white/5 hover:text-white"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
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

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navGroups.map((group) => (
            <DesktopNavGroup key={group.label} label={group.label} href={group.href} items={group.children} pathname={pathname} />
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link href="/migration" className="btn-ghost !px-5 !py-2.5 text-xs">
            Assess a migration
          </Link>
          <Link href="/briefing" className="btn-primary !px-5 !py-2.5 text-xs">
            Request a briefing
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
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
            <div className="container-page flex max-h-[70vh] flex-col gap-1 overflow-y-auto py-4">
              {navGroups.map((group) => (
                <MobileNavGroup
                  key={group.label}
                  label={group.label}
                  href={group.href}
                  items={group.children}
                  pathname={pathname}
                  onNavigate={() => setOpen(false)}
                />
              ))}
              <Link
                href="/migration"
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/70 hover:bg-white/5 hover:text-white"
              >
                Assess a migration
              </Link>
              <Link
                href="/briefing"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-gold-300 px-3 py-3 text-center text-base font-semibold text-ink-900"
              >
                Request a briefing
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
