import React from 'react'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import { ArrowRight, ArrowLeft } from '@/components/ui/Icons'
import { guides, type GuideMeta } from '@/lib/guides'

interface GuideLayoutProps {
  guide: GuideMeta
  children: React.ReactNode
}

/**
 * Shared shell for /guides/* articles: hero, prose body, closing CTA, topical
 * related guides, and consistent Article/WebPage/Breadcrumb structured data.
 * FAQ structured data is emitted by the shared FAQSection component so each
 * schema type has one source of truth.
 */
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

      <section className="relative pb-16 pt-32 md:pt-40">
        <div className="container-page">
          <Reveal variant="fade">
            <Link
              href="/guides"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white/80"
            >
              <ArrowLeft size={14} />
              All guides
            </Link>
          </Reveal>

          <Reveal variant="fade" delay={0.05} className="mt-6">
            <span className="eyebrow">{guide.eyebrow}</span>
          </Reveal>

          <Reveal variant="up" delay={0.1}>
            <h1 className="heading-serif mt-5 max-w-4xl text-3xl leading-[1.1] md:text-5xl">
              {guide.title}
            </h1>
          </Reveal>

          <Reveal variant="up" delay={0.15}>
            <div className="mt-6 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">
                Quick answer
              </span>
              <p className="mt-3 text-lg leading-relaxed text-white/60">{guide.dek}</p>
            </div>
          </Reveal>

          <p className="mt-4 text-sm text-white/40">
            Published by{' '}
            <Link href="https://www.polynovea.in" className="text-white/60 hover:text-white">
              Polynovea
            </Link>
            {' '}for Infrakinetic, a Polynovea product.
          </p>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="container-page">
          <div className="guide-prose max-w-3xl">{children}</div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="container-page">
          <Reveal variant="up">
            <div className="mx-auto max-w-3xl rounded-2xl border border-brand-violet/20 bg-gradient-to-br from-brand-aubergine to-brand-obsidian p-8 text-center md:p-12">
              <h2 className="heading-serif text-2xl md:text-3xl">
                See this mapped against your own data
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/60">
                A platform briefing walks through your actual source system and
                shows exactly how the governed pipeline handles it, not a
                generic demo.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link href="/briefing" className="btn-primary">
                  Request a platform briefing
                  <ArrowRight size={15} />
                </Link>
                <Link href="/migration" className="btn-ghost">
                  Explore the Migration Engine
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="relative pb-24">
          <div className="container-page">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              More guides
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  href={`/guides/${item.slug}`}
                  className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-gold-400/30"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-gold-300">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-white transition-colors group-hover:text-gold-200">
                    {item.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
