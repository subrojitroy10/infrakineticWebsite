import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { ArrowRight } from '@/components/ui/Icons'
import { guides } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Guides - CRM, ERP & Migration Architecture',
  description:
    'Technical guides on why CRM-ERP sync breaks, how to prevent data drift, and how governed migration architecture avoids the failure modes ordinary integration tools patch around.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/guides',
  },
  openGraph: {
    title: 'Infrakinetic Guides',
    description:
      'Technical guides on CRM-ERP sync failure, data drift, and governed migration architecture.',
    url: 'https://www.infrakinetic.in/guides',
  },
}

export default function GuidesIndexPage() {
  const [featured, ...rest] = guides

  return (
    <main>
      <section className="pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
            <div>
              <Reveal variant="fade">
                <span className="eyebrow">Guides</span>
              </Reveal>
              <Reveal variant="up" delay={0.05}>
                <h1 className="heading-serif mt-5 max-w-3xl text-4xl leading-[1.05] md:text-6xl">
                  Why the ordinary fixes don&apos;t hold.
                </h1>
              </Reveal>
            </div>
            <Reveal variant="fade" delay={0.1}>
              <p className="border-l border-white/10 pl-5 text-sm leading-6 text-white/48">
                Technical notes on integration, migration, data integrity and the operating architecture underneath Infrakinetic.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {featured ? (
        <section className="pb-14">
          <div className="container-page">
            <Reveal variant="up">
              <Link
                href={`/guides/${featured.slug}`}
                className="feature-frame group grid gap-8 p-6 transition-colors hover:border-gold-300/25 md:p-8 lg:grid-cols-[150px_minmax(0,1fr)_auto] lg:items-end"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">Featured guide</p>
                  <p className="mt-3 text-sm text-white/42">{featured.category}</p>
                </div>
                <div>
                  <h2 className="heading-serif max-w-3xl text-2xl leading-tight text-white md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55">{featured.dek}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-colors group-hover:text-gold-200">
                  Read <ArrowRight size={14} />
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="pb-32">
        <div className="container-page">
          <div className="grid gap-x-14 lg:grid-cols-2">
            {rest.map((guide, index) => (
              <Reveal key={guide.slug} variant="up" delay={Math.min(index * 0.035, 0.16)}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="group grid grid-cols-[40px_minmax(0,1fr)] gap-4 border-t border-white/[0.09] py-7 transition-colors hover:border-gold-300/35"
                >
                  <span className="font-mono text-[10px] text-gold-300/60">{String(index + 2).padStart(2, '0')}</span>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/34">{guide.category}</span>
                    <h2 className="mt-2 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-gold-200">
                      {guide.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/48">{guide.dek}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-300">
                      Read guide <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
