import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import ParallaxCard from '../ui/ParallaxCard'
import { scaleLayers } from '../../data/content'
import { Check, ArrowRight } from '../ui/Icons'

export default function Scale() {
  return (
    <Section
      id="scale"
      eyebrow="Enterprise scale"
      title="Expansion without rebuilding the operating foundation."
      lead="As organizations grow, approvals multiply, reporting slows, and governance becomes harder. Infrakinetic lets new operating domains reuse the same identity, workflow, approvals, documents, and reporting foundation."
    >
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {scaleLayers.map((layer, i) => (
          <Reveal key={layer.n} variant="up" delay={i * 0.08}>
            <ParallaxCard
              depth={14 + i * 3}
              className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-gold-400/30 hover:bg-white/[0.04] md:p-8"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-400/60 to-violet-400/60"
                aria-hidden
              />
              <div className="flex items-start gap-5">
                <span className="text-5xl font-semibold tracking-tight text-gold-400/70 tabular-nums md:text-6xl">
                  {layer.n}
                </span>
                <div className="min-w-0">
                  <h3 className="heading-serif text-2xl md:text-3xl">{layer.title}</h3>
                  <p className="mt-2 text-white/55">{layer.items}</p>
                </div>
              </div>

              <div className="mt-7 space-y-3 border-t border-white/10 pt-5">
                {layer.details.map((detail) => (
                  <div key={detail} className="flex gap-3 text-sm leading-relaxed text-white/55">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-400/15 text-gold-300">
                      <Check size={10} />
                    </span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </ParallaxCard>
          </Reveal>
        ))}
      </div>

      {/* Roadmap — Will be published soon */}
      <Reveal variant="fade" className="mt-20">
        <ParallaxCard
          depth={12}
          className="rounded-2xl border border-gold-400/20 bg-gold-500/[0.06] p-6 md:p-8 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 block mb-4">
            Roadmap
          </span>
          <h3 className="heading-serif text-2xl md:text-3xl mb-4">
            Detailed roadmap coming soon
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto mb-6">
            We're finalizing the next phase of platform extensions — Workforce Intelligence, Communication Hub, Automation & Service Control, and Finance/Compliance/Documents.
          </p>
          <a
            href="/resources"
            className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 font-medium text-sm"
          >
            Notify me when published
            <ArrowRight size={14} />
          </a>
        </ParallaxCard>
      </Reveal>
    </Section>
  )
}