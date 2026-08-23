'use client'

import React, { Fragment } from 'react'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { problem } from '@/lib/content'
import {
  Target,
  Users,
  Wallet,
  Briefcase,
  ChartBar,
  XMark,
  FileText,
  AlertTriangle,
  Zap,
  RefreshCw,
  AlertCircle,
  Users as UsersIcon,
} from '@/components/ui/Icons'

const flowIcons = {
  revenue: [Target, FileText, Briefcase, Wallet, ChartBar],
  workforce: [UsersIcon, FileText, UsersIcon, Wallet, ChartBar],
}

const flowLabels = {
  revenue: ['Lead', 'Contract', 'Project', 'Invoice', 'Revenue'],
  workforce: ['Candidate', 'Offer', 'Hire', 'Payroll', 'Performance'],
}

const flowAccent = {
  revenue: {
    glow: 'bg-gold-400/10',
    iconBg: 'bg-gold-400/10 text-gold-300 border-gold-400/20',
    dot: 'bg-gold-300',
  },
  workforce: {
    glow: 'bg-violet-400/10',
    iconBg: 'bg-violet-400/10 text-violet-300 border-violet-400/20',
    dot: 'bg-violet-300',
  },
}

export default function Problem() {
  return (
    <Section id="problem" eyebrow={problem.eyebrow} title={problem.title} lead={problem.lead}>
      <Reveal variant="fade" className="mt-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.035] to-white/[0.01] p-5 md:p-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              { label: 'Revenue work', flow: 'revenue' as const, brokenAt: 1 },
              { label: 'Workforce work', flow: 'workforce' as const, brokenAt: 2 },
            ].map((flow) => {
              const accent = flowAccent[flow.flow]
              return (
                <div key={flow.label} className="relative">
                  <div className={`pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] ${accent.glow} blur-3xl`} aria-hidden />
                  <div className="mb-5 flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} aria-hidden />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">{flow.label}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-y-5">
                    {flowIcons[flow.flow].map((Icon, i) => (
                      <Fragment key={i}>
                        <div
                          className="group flex items-center gap-3 rounded-xl border border-white/10 bg-ink-800/60 py-2.5 pl-2.5 pr-4 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-ink-800"
                        >
                          <div className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border ${accent.iconBg}`}>
                            <Icon size={13} />
                          </div>
                          <span className="text-sm font-medium text-white/75">{flowLabels[flow.flow][i]}</span>
                        </div>
                        {i < 4 && (
                          <>
                            <div className="hidden items-center px-1.5 sm:flex" aria-hidden>
                              <span className="w-3 border-t border-dashed border-white/15 md:w-5" />
                              {i === flow.brokenAt && (
                                <span className="relative mx-1 grid h-6 w-6 place-items-center rounded-full border border-danger/40 bg-danger/10 text-danger">
                                  <span className="absolute inset-0 animate-pulse-glow rounded-full bg-danger/20" />
                                  <XMark size={11} className="relative" />
                                </span>
                              )}
                              {i !== flow.brokenAt && (
                                <span className="mx-1 grid h-6 w-6 place-items-center rounded-full border border-gold-300/25 bg-gold-300/10 text-gold-300/80">
                                  <Zap size={10} />
                                </span>
                              )}
                              <span className="w-3 border-t border-dashed border-white/15 md:w-5" />
                            </div>
                            <div className="flex items-center px-1.5 sm:hidden" aria-hidden>
                              <span className="w-3 border-t border-dashed border-white/15" />
                              {i === flow.brokenAt && (
                                <span className="mx-1 grid h-6 w-6 place-items-center rounded-full border border-danger/40 bg-danger/10 text-danger">
                                  <XMark size={11} className="relative" />
                                </span>
                              )}
                              {i !== flow.brokenAt && (
                                <span className="mx-1 grid h-6 w-6 place-items-center rounded-full border border-gold-300/25 bg-gold-300/10 text-gold-300/80">
                                  <Zap size={10} />
                                </span>
                              )}
                              <span className="w-3 border-t border-dashed border-white/15" />
                            </div>
                          </>
                        )}
                      </Fragment>
                    ))}
                  </div>
                  <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.15em] text-danger/60">
                    Context lost at step {flow.brokenAt + 1}
                  </p>
                </div>
              )
            })}
          </div>
          <div className="mt-8 border-t border-white/[0.06] pt-5 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/30">
              The break happens between departments — not inside them
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal variant="up" delay={0.1} className="mt-14">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <h2 className="heading-serif text-2xl md:text-3xl">Why does context break between departments?</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Most B2B companies use 7-12 different SaaS tools. When a deal closes in CRM, the contract details don&apos;t automatically flow to finance for invoicing. When a candidate is hired, their data doesn&apos;t flow to payroll. Each handoff requires manual re-entry — and every re-entry is a place context can be lost, delayed, or gotten wrong. 38% of revenue operations leaders name inaccurate, low-quality data as a top challenge (Source: Forrester Revenue Operations Survey, 2024) — the direct cost of exactly this kind of disconnected handoff. These breaks compound: delayed kickoffs, wrong billing, compliance gaps, and zero visibility for leadership.
          </p>
          <div className="mt-6 p-4 rounded-xl border border-gold-400/20 bg-gold-400/[0.05]">
            <p className="text-sm font-semibold text-gold-300">Key takeaway:</p>
            <p className="mt-1 text-sm text-white/70">Context loss isn&apos;t a people problem — it&apos;s an architecture problem. Fix the data layer, not the handoffs.</p>
          </div>
        </div>
      </Reveal>

      <Reveal variant="up" delay={0.15} className="mt-14">
        <h2 className="heading-serif text-2xl md:text-3xl">The 7 operational pains that stall growth</h2>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {problem.pains.map((pain, i) => {
          const icons = [RefreshCw, AlertCircle, Wallet, AlertCircle, Briefcase, AlertTriangle, Users]
          const colors = ['gold', 'violet', 'gold', 'violet', 'gold', 'violet', 'gold']
          const Icon = icons[i]

          return (
            <Reveal key={pain.title} variant="up" delay={i * 0.08}>
              <ParallaxCard
                depth={14 + i * 2}
                className="group glass-card h-full p-6 transition-colors hover:border-white/20"
              >
                <div className={`mb-4 grid h-10 w-10 place-items-center rounded-lg ${colors[i] === 'gold' ? 'border-gold-400/20 bg-gold-400/[0.08] text-gold-300/85' : 'border-violet-400/20 bg-violet-400/[0.08] text-violet-300/85'}`}>
                  <Icon size={17} />
                </div>
                <h3 className="text-base font-semibold text-white">{pain.title}</h3>

                <p className="mt-3 text-sm leading-relaxed text-white/50">{pain.desc}</p>

                <div className="sr-only" itemProp="description">
                  {pain.desc.split('.')[0]}.
                </div>
              </ParallaxCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
