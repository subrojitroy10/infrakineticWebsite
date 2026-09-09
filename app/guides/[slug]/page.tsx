import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import GuideLayout from '@/components/guides/GuideLayout'
import { FAQSection, KeyTakeaway } from '@/components/shared'
import { ArrowRight, Check } from '@/components/ui/Icons'
import { longTailGuideBySlug, longTailGuides } from '@/lib/longTailGuides'
import type { GuideMeta } from '@/lib/guides'

interface Props {
  params: Promise<{ slug: string }>
}

function compactGuideTitle(title: string, primaryKeyword: string) {
  let base = title

  if (base.length > 58) {
    const prefix = base.split(':')[0]
    base =
      prefix.length >= 18 && prefix.length <= 50
        ? prefix
        : primaryKeyword.charAt(0).toUpperCase() + primaryKeyword.slice(1)
  }

  const branded = `${base} | Infrakinetic`
  return branded.length <= 62 ? branded : base
}

export function generateStaticParams() {
  return longTailGuides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = longTailGuideBySlug[slug]
  if (!guide) return {}

  const url = `https://www.infrakinetic.in/guides/${guide.slug}`
  const searchTitle = compactGuideTitle(guide.title, guide.primaryKeyword)

  return {
    title: { absolute: searchTitle },
    description: guide.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: searchTitle,
      description: guide.metaDescription,
      url,
      siteName: 'Infrakinetic',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: searchTitle,
      description: guide.metaDescription,
    },
  }
}

export default async function LongTailGuidePage({ params }: Props) {
  const { slug } = await params
  const guide = longTailGuideBySlug[slug]
  if (!guide) notFound()

  const url = `https://www.infrakinetic.in/guides/${guide.slug}`
  const guideMeta: GuideMeta = {
    slug: guide.slug,
    eyebrow: guide.eyebrow,
    title: guide.title,
    dek: guide.dek,
    category: guide.category,
  }

  const relatedGuides = longTailGuides
    .filter(
      (candidate) =>
        candidate.slug !== guide.slug && candidate.relatedIntent === guide.relatedIntent,
    )
    .slice(0, 3)


  return (
    <>
      <main>
        <GuideLayout guide={guideMeta}>
          <p>{guide.intro}</p>

          {guide.sections.map((section, index) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {index === 1 && (
                <KeyTakeaway>
                  The useful test is whether the process preserves business meaning, ownership,
                  evidence, and the ability to verify what happened. A faster handoff is not
                  enough if those controls disappear.
                </KeyTakeaway>
              )}
            </div>
          ))}

          <h2>Practical checklist</h2>
          <ul>
            {guide.checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          {relatedGuides.length > 0 && (
            <div className="not-prose mt-10">
              <h2 className="text-xl font-semibold text-white">Related guides</h2>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {relatedGuides.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/guides/${related.slug}`}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/65 transition-colors hover:border-gold-300/30 hover:text-white"
                  >
                    {related.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="not-prose mt-10 rounded-2xl border border-gold-300/20 bg-gold-300/[0.05] p-6">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-gold-300/25 bg-gold-300/[0.08] text-gold-200">
                <Check size={14} />
              </span>
              <div>
                <h2 className="text-base font-semibold text-white">
                  See the connected product context
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  This guide targets a narrow operating problem. The related Infrakinetic
                  capability page shows how that problem connects to the wider product architecture
                  and adjacent workflows.
                </p>
                <Link
                  href={`/${guide.relatedIntent}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 hover:text-gold-200"
                >
                  Explore the related capability <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </GuideLayout>

        <FAQSection
          id="faq"
          eyebrow="Common questions"
          title={`${guide.primaryKeyword}, answered`}
          items={guide.faq}
        />
      </main>
    </>
  )
}
