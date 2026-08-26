import type { Metadata } from 'next'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { ArrowRight } from '@/components/ui/Icons'
import { guides } from '@/lib/guides'

export const metadata: Metadata = {
  title: 'Guides — CRM, ERP & Migration Architecture',
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
  return (
    <main>
      <section className="relative pb-16 pt-32 md:pt-40">
        <div className="container-page">
          <Reveal variant="fade">
            <span className="eyebrow">Guides</span>
          </Reveal>
          <Reveal variant="up" delay={0.05}>
            <h1 className="heading-serif mt-5 max-w-3xl text-4xl leading-[1.1] md:text-5xl">
              Why the ordinary fixes don&apos;t hold
            </h1>
          </Reveal>
          <Reveal variant="up" delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Sync breaks, data drifts, and migrations lose relationships for
              structural reasons, not bad luck. Each guide below breaks down one
              failure mode in detail and what a governed architecture does
              differently.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-2">
            {guides.map((guide, i) => (
              <Reveal key={guide.slug} variant="up" delay={i * 0.05}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-gold-400/30 md:p-8"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-gold-300">
                    {guide.category}
                  </span>
                  <h2 className="heading-serif mt-3 text-xl text-white">
                    {guide.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                    {guide.dek}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 transition-colors group-hover:text-gold-200">
                    Read the guide
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
