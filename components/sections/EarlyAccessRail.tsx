import Link from 'next/link'

interface Props {
  count: number | null
}

export default function EarlyAccessRail({ count }: Props) {
  return (
    <section aria-labelledby="early-access-heading" className="border-y border-white/10">
      <div className="container-page py-8 md:py-10">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">
                Controlled Early Access
              </p>
              <h2 id="early-access-heading" className="heading-serif mt-2 text-2xl md:text-3xl">
                {count ?? '—'} organisations have joined.
              </h2>
            </div>
            <p className="max-w-xl pb-1 text-sm leading-relaxed text-white/50">
              Infrakinetic is onboarding organisations in limited cohorts. Only explicit Early Access registrations are included in this count.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:justify-end">
            <Link href="/early-access" className="btn-primary !px-5 !py-2.5 text-xs">
              Join Early Access
            </Link>
            <Link href="/briefing" className="text-xs font-semibold text-white/60 hover:text-white">
              Request a briefing →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
