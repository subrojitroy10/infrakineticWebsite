'use client'

import React from 'react'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { enterprise, enables } from '@/lib/content'
import { Shield, Key, Cloud, Grid, Lock, FileCheck, BadgeCheck, Users, ArrowRight } from '@/components/ui/Icons'

const icons = [Shield, Key, Cloud, Grid]

const securityCompliance = [
  {
    icon: Lock,
    title: 'Isolation enforced by the database, not just the app',
    desc: 'Every tenant\'s data is walled off at the database layer. Even if there were a bug in application code, the database itself would still block cross-tenant access — isolation doesn\'t depend on every screen getting the filter right.',
  },
  {
    icon: BadgeCheck,
    title: 'Built for DPDP 2023, not retrofitted',
    desc: 'No tenant\'s data is ever pooled with another\'s — including for AI and machine learning. Consent and retention rules are enforced by the data model itself, not left to a policy document nobody checks against.',
  },
  {
    icon: FileCheck,
    title: 'Finance records you can\'t quietly edit',
    desc: 'Ledger entries are append-only and cryptographically chained, so tampering is mathematically detectable, not just discouraged. Every entry carries who did it, when, and under what approval.',
  },
  {
    icon: Users,
    title: 'Payroll history that doesn\'t get rewritten',
    desc: 'When compensation changes, the old rate, rule, and package stay intact. A payslip from last year still shows exactly what was paid and why — not a reconstruction based on today\'s settings.',
  },
  {
    icon: Shield,
    title: 'SOC 2 Type II (in progress)',
    desc: 'Access controls, audit logging, encryption at rest and in transit, and incident response are already in place. Formal SOC 2 Type II certification is underway.',
  },
  {
    icon: Grid,
    title: 'Designed to stay fast as portfolios grow',
    desc: 'Account rankings and dashboards are built on indexed, denormalized lookups rather than expensive joins computed on every page load — so performance doesn\'t degrade as your customer count climbs.',
  },
]

export default function Enterprise() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-900 to-transparent" />

      <Section id="enterprise" eyebrow={enterprise.eyebrow} title={enterprise.title}>
        <div className="mt-14 grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {enterprise.cards.map((c, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={c.title} variant="up" delay={i * 0.08}>
                <ParallaxCard
                  depth={15 + i * 2}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-gold-400/30"
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-gold-400/20 bg-gold-400/[0.08] text-gold-300">
                    <Icon size={19} />
                  </div>
                  <h3 className="heading-serif text-xl">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{c.desc}</p>
                </ParallaxCard>
              </Reveal>
            )
          })}
        </div>

        <Reveal variant="fade" className="mt-20">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-6 block">
            Security &amp; Compliance
          </span>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {securityCompliance.map((item, i) => (
              <Reveal key={item.title} variant="up" delay={i * 0.05}>
                <ParallaxCard
                  depth={14 + i * 2}
                  className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-gold-400/30"
                >
                  <div className="mb-4 grid h-9 w-9 place-items-center rounded-lg border border-violet-400/20 bg-violet-400/[0.08] text-violet-300">
                    <item.icon size={16} />
                  </div>
                  <h4 className="text-base font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{item.desc}</p>
                </ParallaxCard>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal variant="fade" className="mt-20">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-3 block">
            {enables.eyebrow}
          </span>
          <h3 className="heading-serif max-w-2xl text-xl md:text-2xl">{enables.title}</h3>
          <div className="mt-8 divide-y divide-white/[0.06] rounded-2xl border border-white/10 bg-white/[0.02]">
            {enables.items.map((item, i) => (
              <Reveal key={item.capability} variant="fade" delay={i * 0.04}>
                <div className="flex flex-col gap-1.5 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <ArrowRight size={13} className="shrink-0 text-gold-300/70" />
                    {item.capability}
                  </p>
                  <p className="text-sm text-white/50 sm:max-w-md sm:text-right">{item.foundation}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>
    </section>
  )
}
