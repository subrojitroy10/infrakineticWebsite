'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { brand, footerGroups } from '@/lib/content'

function isAnchorLink(href: string) {
  return href.startsWith('#')
}

function getNavHref(href: string, pathname: string) {
  if (isAnchorLink(href)) {
    return pathname === '/' ? href : `/${href}`
  }
  return href
}

export default function Footer() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()
  const lastUpdated = '2026-08-08'

  return (
    <footer
      className="relative border-t border-white/10 bg-ink-900"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="Infrakinetic" />
      <meta itemProp="url" content="https://www.infrakinetic.in/" />
      <link itemProp="logo" href="https://www.infrakinetic.in/logo.png" />
      <meta
        itemProp="description"
        content="Infrakinetic provides a unified business operating system connecting commercial, workforce, finance, governance, and reporting on one shared database."
      />
      <link
        itemProp="sameAs"
        href="https://linkedin.com/company/infrakinetic"
      />
      <link itemProp="sameAs" href="https://twitter.com/infrakinetic" />
      <link
        itemProp="sameAs"
        href="https://www.google.com/maps/place/Infrakinetic"
      />

      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold-400 to-violet-400 text-lg font-bold tracking-tight text-ink-900">
                I
              </span>
              <span
                className="text-lg font-semibold tracking-tight text-white"
                itemProp="name"
              >
                {brand.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Operating infrastructure for connected workflows, governed
              records, and enterprise visibility.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400/80">
              {brand.parent}
            </p>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400/80">
                Contact
              </p>
              <a
                href="mailto:hello@infrakinetic.io"
                className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/55 transition-colors hover:text-white"
                itemProp="email"
              >
                hello@infrakinetic.io
              </a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.label}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/60">
                {group.label}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={getNavHref(item.href, pathname)}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/60">
              &copy; {new Date().getFullYear()} Infrakinetic — A Polynovea
              Product. All rights reserved.
            </p>
            <span className="text-xs text-white/20">·</span>
            <Link
              href="/privacy"
              className="text-xs text-white/55 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <span className="text-xs text-white/20">·</span>
            <Link
              href="/terms"
              className="text-xs text-white/55 transition-colors hover:text-white"
            >
              Terms of Use
            </Link>
          </div>
          <p
            className="text-xs text-gold-400/70"
            itemProp="dateModified"
            content="2026-08-08"
          >
            Last updated:{' '}
            {new Date('2026-08-08').toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      </div>
    </footer>
  )
}
