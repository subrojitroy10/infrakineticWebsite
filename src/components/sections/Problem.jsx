import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import { problem } from '../../data/content'

const disconnected = ['Sales', 'HR', 'Payroll', 'Projects', 'Finance', 'Support']

export default function Problem() {
  return (
    <Section id="problem" eyebrow={problem.eyebrow} title={problem.title} lead={problem.lead}>
      {/* Disconnected-tools visual */}
      <Reveal variant="fade" className="mt-14">
        <div className="relative flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {disconnected.map((t, i) => (
            <span
              key={t}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/50"
              style={{ transform: `rotate(${((i % 3) - 1) * 2.5}deg)` }}
            >
              {t}
              <span className="ml-2 text-rose-400/70">⚡</span>
            </span>
          ))}
        </div>
        <p className="mt-4 text-center text-xs uppercase tracking-[0.25em] text-white/30">
          Separate tools · no shared data
        </p>
      </Reveal>

      {/* Pain grid */}
      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problem.pains.map((p, i) => (
          <Reveal key={p.title} variant="up" delay={i * 0.08}>
            <div className="group glass-card h-full p-6 transition-colors hover:border-rose-400/30">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-rose-500/10 text-rose-400">
                ✕
              </div>
              <h3 className="text-base font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
