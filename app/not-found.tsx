import Link from 'next/link'
import { ArrowRight } from '@/components/ui/Icons'

export default function NotFound() {
  return (
    <main className="min-h-[78vh] pt-32 md:pt-40">
      <div className="container-page">
        <div className="grid max-w-5xl gap-10 lg:grid-cols-[180px_minmax(0,1fr)] lg:items-start">
          <div className="font-display text-7xl font-semibold tracking-[-0.05em] text-gold-300/85 md:text-8xl">
            404
          </div>
          <div className="border-l border-white/10 pl-6 md:pl-8">
            <span className="eyebrow">Route not found</span>
            <h1 className="heading-serif mt-5 max-w-2xl text-4xl leading-tight md:text-5xl">
              This page is not part of the current Infrakinetic site.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/52">
              Return to the operating platform, explore the business engines, or go straight to the technical guides.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/" className="btn-primary">
                Back to Infrakinetic <ArrowRight size={15} />
              </Link>
              <Link href="/products" className="btn-ghost">Explore engines</Link>
              <Link href="/guides" className="hairline-link self-center text-sm text-white/58">Technical guides</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
