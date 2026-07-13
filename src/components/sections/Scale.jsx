import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import ParallaxCard from '../ui/ParallaxCard'
import { scaleLayers } from '../../data/content'

export default function Scale() {
  return (
    <Section
      id="scale"
      eyebrow="Designed to scale"
      title="Start lean. Expand on your own terms."
      lead="Noviq's modular architecture means you add capabilities as your business grows — without migrating to a new platform or disrupting existing workflows."
    >
      <div className="mt-14 space-y-3">
        {scaleLayers.map((layer, i) => (
          <Reveal key={layer.n} variant="left" delay={i * 0.08}>
            <ParallaxCard
              depth={14 + i * 3}
              className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-teal-400/30 hover:bg-white/[0.04] sm:flex-row sm:items-center sm:gap-8 md:p-8"
            >
              {/* Progress bar showing widening scope */}
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-500/[0.08] to-transparent transition-all duration-500"
                style={{ width: `${25 + i * 22}%` }}
              />
              <span className="relative text-5xl font-semibold tracking-tight text-teal-400/70 tabular-nums md:text-6xl">
                {layer.n}
              </span>
              <div className="relative flex-1">
                <h3 className="heading-serif text-2xl md:text-3xl">{layer.title}</h3>
                <p className="mt-1 text-white/50">{layer.items}</p>
              </div>
              <span className="relative hidden text-sm font-medium text-teal-300 opacity-0 transition-opacity group-hover:opacity-100 sm:block">
                Layer {i + 1}
              </span>
            </ParallaxCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
