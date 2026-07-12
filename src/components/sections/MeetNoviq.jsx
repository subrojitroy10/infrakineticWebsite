import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import { meet } from '../../data/content'

export default function MeetNoviq() {
  return (
    <Section id="platform" eyebrow={meet.eyebrow} title={meet.title} lead={meet.lead}>
      <div className="mt-14 grid gap-6 lg:grid-cols-5">
        {/* Start Here */}
        <Reveal variant="left" className="lg:col-span-2">
          <div className="relative h-full overflow-hidden rounded-2xl border border-teal-400/30 bg-gradient-to-br from-teal-500/[0.12] to-cyan-500/[0.04] p-8">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-teal-400/20 blur-3xl" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
              Start here
            </span>
            <h3 className="heading-serif mt-3 text-2xl">The Foundation</h3>
            <ul className="mt-6 space-y-3">
              {meet.startHere.map((m) => (
                <li key={m} className="flex items-center gap-3 text-lg font-medium text-white">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-teal-400/20 text-xs text-teal-300">
                    ✓
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Expand */}
        <Reveal variant="right" delay={0.1} className="lg:col-span-3">
          <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Expand when you're ready
            </span>
            <h3 className="heading-serif mt-3 text-2xl text-white/90">Everything else</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {meet.expand.map((m, i) => (
                <div
                  key={m}
                  className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm font-medium text-white/70 transition-all hover:border-teal-400/40 hover:text-white"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  {m}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/45">
              Add capabilities as your business grows — without migrating to a new platform or
              disrupting existing workflows.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
