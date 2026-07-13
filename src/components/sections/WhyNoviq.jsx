import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import ParallaxCard from '../ui/ParallaxCard'
import { why } from '../../data/content'
import { Check, XMark } from '../ui/Icons'

export default function WhyNoviq() {
  return (
    <Section id="why" eyebrow={why.eyebrow} title={why.title} lead={why.lead}>
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {/* Traditional */}
        <Reveal variant="left">
          <ParallaxCard
            depth={16}
            className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8"
          >
            <h3 className="text-lg font-semibold text-white/70">Traditional approach</h3>
            <ul className="mt-6 space-y-3.5">
              {why.traditional.map((t) => (
                <li key={t} className="flex items-start gap-3 text-white/50">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-rose-500/15 text-rose-400/80">
                    <XMark size={10} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </ParallaxCard>
        </Reveal>

        {/* Noviq */}
        <Reveal variant="right" delay={0.1}>
          <ParallaxCard
            depth={22}
            className="relative h-full overflow-hidden rounded-2xl border border-teal-400/30 bg-gradient-to-br from-teal-500/[0.12] to-cyan-500/[0.03] p-8"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal-400/20 blur-3xl" />
            <h3 className="relative text-lg font-semibold text-teal-300">With Noviq</h3>
            <ul className="relative mt-6 space-y-3.5">
              {why.noviq.map((t) => (
                <li key={t} className="flex items-start gap-3 font-medium text-white">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-400/25 text-teal-300">
                    <Check size={10} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </ParallaxCard>
        </Reveal>
      </div>

      <Reveal variant="fade" className="mt-6">
        <ParallaxCard
          depth={12}
          className="rounded-2xl border border-teal-400/20 bg-teal-500/[0.06] p-6 md:p-8"
        >
          <p className="text-center text-base leading-relaxed text-white/75 md:text-lg">
            <span className="font-semibold text-white">The bottom line: </span>
            {why.bottomLine}
          </p>
        </ParallaxCard>
      </Reveal>
    </Section>
  )
}
