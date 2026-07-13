import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import ParallaxCard from '../ui/ParallaxCard'
import { roadmap } from '../../data/content'

export default function Roadmap() {
  return (
    <Section
      id="roadmap"
      eyebrow="Product roadmap"
      title="Where Noviq is headed."
      lead="How Noviq plans to evolve, expanding its capabilities to meet your growing business needs."
    >
      <div className="relative mt-16">
        {/* Vertical timeline spine */}
        <div className="absolute left-[19px] top-2 h-full w-px bg-gradient-to-b from-teal-400/60 via-teal-400/25 to-transparent md:left-1/2" />

        <div className="space-y-10">
          {roadmap.map((r, i) => {
            const isLast = i === roadmap.length - 1
            return (
              <Reveal key={r.phase} variant="up" delay={i * 0.08}>
                <div className="relative flex items-start gap-6 md:grid md:grid-cols-2 md:gap-12">
                  {/* Node */}
                  <div className="absolute left-0 top-1 z-10 md:left-1/2 md:-translate-x-1/2">
                    <div
                      className={`grid h-10 w-10 place-items-center rounded-full border text-sm font-bold ${
                        isLast
                          ? 'border-teal-400 bg-gradient-to-br from-teal-400 to-cyan-400 text-ink-900'
                          : 'border-teal-400/40 bg-ink-800 text-teal-300'
                      }`}
                    >
                      {i + 1}
                    </div>
                  </div>

                  {/* Card (offset to one side on desktop) */}
                  <div
                    className={`ml-16 md:ml-0 ${
                      i % 2 === 0 ? 'md:col-start-1 md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                    }`}
                  >
                    <ParallaxCard
                      depth={14 + i * 2}
                      className={`glass-card p-6 transition-colors hover:border-teal-400/30 ${
                        isLast ? 'border-teal-400/30 bg-teal-500/[0.06]' : ''
                      }`}
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
                        {r.phase}
                      </span>
                      <p className="mt-2 leading-relaxed text-white/70">{r.items}</p>
                    </ParallaxCard>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
