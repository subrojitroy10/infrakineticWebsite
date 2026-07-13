import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import ParallaxCard from '../ui/ParallaxCard'
import { meet } from '../../data/content'
import {
  Check,
  Sliders,
  Wallet,
  Briefcase,
  LifeBuoy,
  Megaphone,
  Sparkles,
} from '../ui/Icons'

const expandIcons = {
  Operations: Sliders,
  Finance: Wallet,
  Projects: Briefcase,
  Support: LifeBuoy,
  Marketing: Megaphone,
  'AI & Analytics': Sparkles,
}

export default function MeetNoviq() {
  return (
    <Section id="platform" eyebrow={meet.eyebrow} title={meet.title} lead={meet.lead}>
      <div className="mt-14 grid gap-6 lg:grid-cols-5">
        {/* Start Here */}
        <Reveal variant="left" className="lg:col-span-2">
          <ParallaxCard
            depth={16}
            className="relative h-full overflow-hidden rounded-2xl border border-teal-400/25 bg-gradient-to-br from-teal-500/[0.1] to-cyan-500/[0.03] p-8"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
              Start here
            </span>
            <h3 className="heading-serif mt-3 text-2xl">The Foundation</h3>
            <ul className="mt-6 space-y-3">
              {meet.startHere.map((m) => (
                <li key={m} className="flex items-center gap-3 text-lg font-medium text-white">
                  <span className="grid h-6 w-6 place-items-center rounded-full border border-teal-400/25 bg-teal-400/15 text-teal-300">
                    <Check size={12} />
                  </span>
                  {m}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/45">
              Everything a growing business needs on day one: customers, people, and pay in one
              place.
            </p>
          </ParallaxCard>
        </Reveal>

        {/* Expand */}
        <Reveal variant="right" delay={0.1} className="lg:col-span-3">
          <ParallaxCard
            depth={22}
            className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Expand when you're ready
            </span>
            <h3 className="heading-serif mt-3 text-2xl text-white/90">Everything else</h3>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {meet.expand.map((m) => {
                const Icon = expandIcons[m]
                return (
                  <div
                    key={m}
                    className="group flex flex-col gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 transition-all hover:border-teal-400/30 hover:bg-white/[0.04]"
                  >
                    {Icon && (
                      <Icon
                        size={16}
                        className="text-white/35 transition-colors group-hover:text-teal-300"
                      />
                    )}
                    <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                      {m}
                    </span>
                  </div>
                )
              })}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/45">
              Add capabilities as your business grows, without migrating to a new platform or
              disrupting existing workflows.
            </p>
          </ParallaxCard>
        </Reveal>
      </div>
    </Section>
  )
}
