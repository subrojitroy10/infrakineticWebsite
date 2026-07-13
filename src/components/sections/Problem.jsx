import { Fragment } from 'react'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import ParallaxCard from '../ui/ParallaxCard'
import { problem } from '../../data/content'
import {
  Target,
  Users,
  Wallet,
  Briefcase,
  ChartBar,
  LifeBuoy,
  XMark,
  Copy,
  AlertTriangle,
  FileText,
  Clock,
} from '../ui/Icons'

const tools = [
  { label: 'Sales', icon: Target },
  { label: 'HR', icon: Users },
  { label: 'Payroll', icon: Wallet },
  { label: 'Projects', icon: Briefcase },
  { label: 'Finance', icon: ChartBar },
  { label: 'Support', icon: LifeBuoy },
]

const painIcons = [Copy, AlertTriangle, FileText, Clock]

export default function Problem() {
  return (
    <Section id="problem" eyebrow={problem.eyebrow} title={problem.title} lead={problem.lead}>
      {/* Fragmented-stack diagram */}
      <Reveal variant="fade" className="mt-16">
        <div className="flex flex-wrap items-center justify-center gap-y-4">
          {tools.map(({ label, icon: Icon }, i) => (
            <Fragment key={label}>
              <div className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2.5">
                <Icon size={15} className="text-white/35" />
                <span className="text-sm font-medium text-white/60">{label}</span>
              </div>
              {i < tools.length - 1 && (
                <div className="hidden items-center px-1 sm:flex" aria-hidden>
                  <span className="w-3 border-t border-dashed border-white/20 md:w-5" />
                  <span className="mx-1 grid h-4.5 w-4.5 place-items-center rounded-full border border-rose-400/30 bg-rose-500/10 p-0.5 text-rose-400">
                    <XMark size={9} />
                  </span>
                  <span className="w-3 border-t border-dashed border-white/20 md:w-5" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
        <p className="mt-5 text-center text-xs font-medium uppercase tracking-[0.25em] text-white/25">
          Six tools · zero shared data
        </p>
      </Reveal>

      {/* Pain grid */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problem.pains.map((p, i) => {
          const Icon = painIcons[i]
          return (
            <Reveal key={p.title} variant="up" delay={i * 0.08}>
              <ParallaxCard
                depth={14 + i * 2}
                className="group glass-card h-full p-6 transition-colors hover:border-white/20"
              >
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg border border-rose-400/15 bg-rose-500/[0.08] text-rose-300/80">
                  <Icon size={17} />
                </div>
                <h3 className="text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{p.desc}</p>
              </ParallaxCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
