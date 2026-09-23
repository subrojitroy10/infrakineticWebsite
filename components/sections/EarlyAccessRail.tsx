import Link from 'next/link'

interface Props {
  count: number | null
}

export default function EarlyAccessRail({ count }: Props) {
  return (
    <aside
      aria-label="Infrakinetic controlled early access"
      className="mt-8 max-w-2xl rounded-r-xl border-l-2 border-gold-300/45 bg-gold-300/[0.028] px-5 py-4"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4" aria-live="polite">
          <strong className="font-display text-[2.6rem] font-medium leading-none tracking-[-0.045em] text-white">
            {count ?? '—'}
          </strong>
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-gold-300">
              Controlled Early Access
            </p>
            <p className="mt-1 text-xs text-white/46">organisations have joined</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:justify-end">
          <Link href="/early-access" className="text-xs font-semibold text-gold-300 transition-colors hover:text-gold-200">
            Join Early Access <span aria-hidden>→</span>
          </Link>
          <Link href="/briefing" className="text-[11px] text-white/40 transition-colors hover:text-white/70">
            Briefing ↗
          </Link>
        </div>
      </div>
    </aside>
  )
}
