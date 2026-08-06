import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import ParallaxCard from '../ui/ParallaxCard'
import { why, notThis } from '../../data/content'
import { Check, XMark } from '../ui/Icons'

export default function WhyInfrakinetic() {
  return (
    <Section id="why" eyebrow={why.eyebrow} title={why.title} lead={why.lead}>
      {/* What Infrakinetic is not — negative positioning before the positive contrast */}
      <Reveal variant="fade" className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
          {notThis.eyebrow}
        </p>
        <h3 className="heading-serif mt-3 max-w-2xl text-xl md:text-2xl">{notThis.title}</h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {notThis.items.map((item, i) => (
            <Reveal key={item.label} variant="up" delay={i * 0.05}>
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-center gap-2">
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet-400/15 text-violet-300/85">
                    <XMark size={9} />
                  </span>
                  <p className="text-sm font-semibold text-white/85">{item.label}</p>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-white/50">{item.reason}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>

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
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet-400/15 text-violet-300/85">
                    <XMark size={10} />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </ParallaxCard>
        </Reveal>

        {/* Infrakinetic */}
        <Reveal variant="right" delay={0.1}>
          <ParallaxCard
            depth={22}
            className="relative h-full overflow-hidden rounded-2xl border border-gold-400/30 bg-gradient-to-br from-gold-500/[0.12] to-violet-500/[0.03] p-8"
          >
            <h3 className="relative text-lg font-semibold text-gold-300">With Infrakinetic</h3>
            <ul className="relative mt-6 space-y-3.5">
              {why.infrakinetic.map((t) => (
                <li key={t} className="flex items-start gap-3 font-medium text-white">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-400/25 text-gold-300">
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
          className="rounded-2xl border border-gold-400/20 bg-gold-500/[0.06] p-6 md:p-8"
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
