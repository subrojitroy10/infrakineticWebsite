import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { ArrowRight, GitBranch, Shield, Wallet } from '@/components/ui/Icons'
import Link from 'next/link'

const workstreams = [
  {
    title: 'Recruitment overhaul',
    eyebrow: 'In development',
    icon: GitBranch,
    body: 'The next Recruitment experience is being rebuilt around job understanding, requirement integrity, evidence-backed candidate matching, structured interviews and governed offers — while keeping the human hiring decision explicit.',
    points: [
      'Job-description and role understanding',
      'Weak or accidental requirement detection',
      'Evidence-backed matching and talent-pool rediscovery',
      'Structured interviews and governed offers',
    ],
  },
  {
    title: 'Finance experience expansion',
    eyebrow: 'In development',
    icon: Wallet,
    body: 'Finance already has its own canonical ownership for accounting truth, ledger, budgets and reconciliation. The broader Finance experience and planned overhaul work are still being expanded and are not presented as finished today.',
    points: [
      'Broader finance workspace coverage',
      'Expanded reporting and operating views',
      'Deeper connected controls across billing and payments',
      'Current ownership boundaries remain intact while the experience expands',
    ],
  },
]

export default function DevelopmentFrontier() {
  return (
    <Section
      id="in-development"
      eyebrow="What we are building next"
      title="Show the frontier without pretending it is already finished."
      lead="Some of the most ambitious Infrakinetic work belongs to this phase but is still being built. We would rather show that clearly than blur current capability and roadmap into one claim."
      className="border-b border-white/[0.06]"
    >
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {workstreams.map((item, index) => (
          <Reveal key={item.title} variant={index === 0 ? 'left' : 'right'}>
            <div className="h-full overflow-hidden rounded-[1.75rem] border border-review-border/35 bg-review-bg/20">
              <div className="flex items-center justify-between gap-4 border-b border-review-border/25 px-6 py-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-review-border/35 bg-review-bg/40 text-review">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-review">{item.eyebrow}</span>
                    <h3 className="mt-1 font-display text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                </div>
                <span className="rounded-full border border-review-border/40 bg-review-bg/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-review">WIP</span>
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-white/62">{item.body}</p>
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-start gap-2 rounded-xl border border-white/[0.065] bg-white/[0.018] p-3">
                      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-review" />
                      <span className="text-xs leading-relaxed text-white/48">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.015] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold-300/[0.07] text-gold-300">
            <Shield size={16} />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Current capability stays separate from future-state ambition.</p>
            <p className="mt-1 text-xs leading-relaxed text-white/45">The product pages distinguish what is available now, what is being expanded, and what belongs to the complete-state direction.</p>
          </div>
        </div>
        <Link href="/products" className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-gold-300">
          Explore the current product
          <ArrowRight size={13} />
        </Link>
      </div>
    </Section>
  )
}
