import React from 'react'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { ArrowRight, ArrowLeft } from '@/components/ui/Icons'
import { guides, type GuideMeta } from '@/lib/guides'

interface GuideLayoutProps {
  guide: GuideMeta
  children: React.ReactNode
}

export default function GuideLayout({ guide, children }: GuideLayoutProps) {
  const related = [
    ...guides.filter((g) => g.slug !== guide.slug && g.category === guide.category),
    ...guides.filter((g) => g.slug !== guide.slug && g.category !== guide.category),
  ].slice(0, 3)

  const pageUrl = `https://www.infrakinetic.in/guides/${guide.slug}`
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        '@id': `${pageUrl}#article`,
        headline: guide.title,
        description: guide.dek,
        url: pageUrl,
        isPartOf: { '@id': 'https://www.infrakinetic.in/#website' },
        about: { '@id': 'https://www.infrakinetic.in/#software' },
        author: { '@id': 'https://www.polynovea.in/#organization' },
        publisher: { '@id': 'https://www.polynovea.in/#organization' },
        mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: guide.title,
        description: guide.dek,
        isPartOf: { '@id': 'https://www.infrakinetic.in/#website' },
        about: { '@id': 'https://www.infrakinetic.in/#software' },
        publisher: { '@id': 'https://www.polynovea.in/#organization' },
        mainEntity: { '@id': `${pageUrl}#article` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Infrakinetic',
            item: 'https://www.infrakinetic.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: 'https://www.infrakinetic.in/guides',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: pageUrl,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="pb-14 pt-32 md:pb-18 md:pt-40">
        <div className="container-page">
          <Reveal variant="fade">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/46 transition-colors hover:text-white/80"
            >
              <ArrowLeft size={14} />
              All guides
            </Link>
          </Reveal>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_270px] lg:items-end">
            <div>
              <Reveal variant="fade" delay={0.04}>
                <span className="eyebrow">{guide.eyebrow}</span>
              </Reveal>
              <Reveal variant="up" delay={0.08}>
                <h1 className="heading-serif mt-5 max-w-4xl text-3xl leading-[1.05] md:text-5xl lg:text-[3.6rem]">
                  {guide.title}
                </h1>
              </Reveal>
            </div>
            <Reveal variant="fade" delay={0.12}>
              <div className="border-l border-white/10 pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">Quick answer</p>
                <p className="mt-3 text-sm leading-6 text-white/58">{guide.dek}</p>
              </div>
            </Reveal>
          </div>

          <p className="mt-7 text-xs text-white/34">
            Published by{' '}
            <Link href="https://www.polynovea.in" className="text-white/58 transition-colors hover:text-white">
              Polynovea
            </Link>{' '}
            for Infrakinetic.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,760px)_240px] lg:gap-16">
            <article className="guide-prose min-w-0 max-w-none">{children}</article>
            <aside className="hidden lg:block lg:self-start">
              <div className="sticky top-28 border-l border-white/10 pl-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/32">Guide context</p>
                <p className="mt-3 text-sm font-semibold text-white/78">{guide.category}</p>
                <p className="mt-3 text-xs leading-5 text-white/42">
                  Infrakinetic guides explain the architecture and operating constraints behind the product, not just a feature checklist.
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  <Link href="/platform" className="block hairline-link text-white/58">Platform architecture</Link>
                  <Link href="/migration" className="block hairline-link text-white/58">Migration engine</Link>
                  <Link href="/briefing" className="block hairline-link text-gold-300">Request a briefing</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <Reveal variant="up">
            <div className="feature-frame mx-auto max-w-4xl grid gap-7 p-7 md:p-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">Apply it to your stack</span>
                <h2 className="heading-serif mt-3 text-2xl md:text-3xl">See this mapped against your own data.</h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/54">
                  A platform briefing walks through your actual source system and shows how the governed pipeline handles it rather than relying on a generic demo.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/briefing" className="btn-primary">
                  Request a briefing <ArrowRight size={15} />
                </Link>
                <Link href="/migration" className="text-sm font-semibold text-white/56 transition-colors hover:text-white/80">
                  Explore migration →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="pb-28">
          <div className="container-page">
            <div className="grid gap-8 lg:grid-cols-[200px_minmax(0,1fr)]">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Continue reading</h2>
                <p className="mt-3 text-xs leading-5 text-white/34">Related architecture and operating guides.</p>
              </div>
              <div className="grid gap-x-10 md:grid-cols-3">
                {related.map((item, index) => (
                  <Link
                    key={item.slug}
                    href={`/guides/${item.slug}`}
                    className="group grid grid-cols-[28px_minmax(0,1fr)] gap-3 border-t border-white/10 py-5 transition-colors hover:border-gold-400/35"
                  >
                    <span className="font-mono text-[9px] text-gold-300/60">0{index + 1}</span>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-white/32">{item.category}</span>
                      <h3 className="mt-2 text-sm font-semibold leading-snug text-white transition-colors group-hover:text-gold-200">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
