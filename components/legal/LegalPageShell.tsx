import Link from 'next/link'
import type { ReactNode } from 'react'

interface LegalNavItem {
  href: string
  label: string
}

interface LegalPageShellProps {
  title: string
  lastUpdated: string
  nav: LegalNavItem[]
  children: ReactNode
  siblingHref: string
  siblingLabel: string
}

export default function LegalPageShell({
  title,
  lastUpdated,
  nav,
  children,
  siblingHref,
  siblingLabel,
}: LegalPageShellProps) {
  const formattedDate = new Date(lastUpdated).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main>
      <section className="pb-14 pt-32 md:pb-18 md:pt-40">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
            <div>
              <span className="eyebrow">Legal</span>
              <h1 className="heading-serif mt-5 max-w-3xl text-4xl leading-[1.05] md:text-6xl">
                {title}
              </h1>
              <p className="mt-6 text-sm text-white/48">Last updated {formattedDate}</p>
            </div>
            <div className="border-l border-white/10 pl-5 text-sm leading-relaxed text-white/46">
              Website terms and privacy information for Infrakinetic, a Polynovea product.
            </div>
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,760px)] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/34">On this page</p>
              <nav className="mt-4 space-y-2" aria-label={`${title} sections`}>
                {nav.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group flex items-start gap-3 py-1 text-sm text-white/48 transition-colors hover:text-white/80"
                  >
                    <span className="mt-0.5 font-mono text-[10px] text-gold-300/65">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>
              <div className="mt-8 border-t border-white/10 pt-5">
                <Link href={siblingHref} className="hairline-link text-sm text-white/60">
                  {siblingLabel}
                </Link>
              </div>
            </aside>

            <article className="guide-prose min-w-0 max-w-none legal-prose">{children}</article>
          </div>
        </div>
      </section>
    </main>
  )
}
