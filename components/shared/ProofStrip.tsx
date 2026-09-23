import Reveal from '@/components/ui/Reveal'

interface ProofStat {
  label: string
  value: string
}

interface ProofStripProps {
  stats: ProofStat[]
  note?: string
  className?: string
}

/** Measured evidence presented as an editorial data strip, not a card carousel. */
export default function ProofStrip({ stats, note, className = '' }: ProofStripProps) {
  return (
    <Reveal variant="fade" className={className}>
      <div className="border-y border-gold-300/25 py-6 md:py-7">
        <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-white/10 pl-4 first:border-l-0 first:pl-0 sm:first:border-l sm:first:pl-4">
              <p className="text-2xl font-semibold tracking-tight text-gold-300 sm:text-3xl">{stat.value}</p>
              <p className="mt-1.5 text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] text-white/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        {note && <p className="mt-5 max-w-3xl text-xs leading-relaxed text-white/48">{note}</p>}
      </div>
    </Reveal>
  )
}
