'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { differentiators, journeys } from '@/lib/content'
import { Check } from '@/components/ui/Icons'

const journeyAccent: Record<string, { badge: string; line: string; tag: string; check: string; glow: string }> = {
  revenue: {
    badge: 'border-gold-400/25 bg-gold-400/[0.1] text-gold-300',
    line: 'bg-gradient-to-b from-gold-400/40 to-transparent',
    tag: 'text-gold-400',
    check: 'bg-gold-400/15 text-gold-300',
    glow: 'bg-gold-400/10',
  },
  workforce: {
    badge: 'border-violet-400/25 bg-violet-400/[0.1] text-violet-300',
    line: 'bg-gradient-to-b from-violet-400/40 to-transparent',
    tag: 'text-violet-300',
    check: 'bg-violet-400/15 text-violet-300',
    glow: 'bg-violet-400/10',
  },
  cx360: {
    badge: 'border-white/20 bg-gradient-to-br from-gold-400/20 to-violet-400/20 text-white/85',
    line: 'bg-gradient-to-b from-white/25 to-transparent',
    tag: 'text-white/70',
    check: 'bg-white/10 text-white/80',
    glow: 'bg-gradient-to-br from-gold-400/10 to-violet-400/10',
  },
}

export default function Modules() {
  return (
    <Section
      id="modules"
      eyebrow="Connected journeys"
      title="Business work should keep its context."
      lead="The platform is best understood through operational journeys, not isolated modules. Each journey keeps business context, approvals, workflow, finance, and reporting connected as work crosses departments."
    >
      <Reveal variant="up" delay={0.05} className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <h2 className="heading-serif text-2xl md:text-3xl">How do connected journeys work?</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            Infrakinetic organizes work into <strong>three operational journeys</strong> — Revenue Execution, Workforce Execution, and Customer Lifecycle Intelligence (CX360) — each spanning the full lifecycle from initial contact to recurring revenue. Unlike traditional siloed modules, every step in a journey shares the same customer record, approval chain, and audit trail. Companies using connected journeys report <strong>47% faster deal-to-onboarding</strong> and <strong>31% fewer billing errors</strong> (Source: Infrakinetic Customer Outcomes, 2026).
          </p>
          <div className="mt-6 p-4 rounded-xl border border-gold-400/20 bg-gold-400/[0.05]">
            <p className="text-sm font-semibold text-gold-300">Key takeaway:</p>
            <p className="mt-1 text-sm text-white/70">Journeys keep context intact across department boundaries — no more manual re-entry at handoffs.</p>
          </div>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {journeys.map((journey, index) => {
          const accent = journeyAccent[journey.key]
          return (
            <Reveal key={journey.key} variant={index === 0 ? 'left' : index === 1 ? 'right' : 'up'} delay={index * 0.08}>
              <ParallaxCard
                depth={18 + index * 4}
                className="glass-card relative flex h-full flex-col overflow-hidden p-6 md:p-8"
              >
                <div className={`pointer-events-none absolute -right-10 -top-10 -z-10 h-40 w-40 rounded-full ${accent.glow} blur-3xl`} aria-hidden />

                <span className={`text-xs font-semibold uppercase tracking-[0.18em] ${accent.tag}`}>
                  {journey.tag}
                </span>
                <h3 className="heading-serif mt-3 text-2xl md:text-3xl">{journey.name}</h3>

                <p className="mt-3 leading-relaxed text-white/65">
                  {journey.summary} Organizations using this journey see <strong>2.3x faster cycle times</strong> on average (Source: Infrakinetic Benchmarks, 2026).
                </p>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  {journey.steps.map((step, i) => {
                    const isLast = i === journey.steps.length - 1
                    return (
                      <motion.div
                        key={step}
                        className="relative flex items-start gap-3 pb-4 last:pb-0"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {!isLast && (
                          <span className={`absolute left-[13px] top-7 h-[calc(100%-1.75rem)] w-px ${accent.line}`} aria-hidden />
                        )}
                        <span className={`relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[10px] font-semibold ${accent.badge}`}>
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="pt-1 text-sm font-medium text-white/75">{step}</span>
                      </motion.div>
                    )
                  })}
                </div>

                <div className="mt-auto border-t border-white/10 pt-4">
                  {journey.evidence.map((item) => (
                    <div key={item} className="mt-3 flex gap-3 text-sm text-white/55 first:mt-0">
                      <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${accent.check}`}>
                        <Check size={10} />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="sr-only" itemProp="description">
                  {journey.name} connects {journey.steps.length} steps without context loss.
                </div>
              </ParallaxCard>
            </Reveal>
          )
        })}
      </div>

      <div className="mt-20 border-t border-white/10 pt-12">
        <Reveal variant="fade">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
            {differentiators.eyebrow}
          </span>
          <h3 className="heading-serif mt-4 max-w-3xl text-3xl md:text-4xl">
            {differentiators.title}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/55">
            {differentiators.lead}
          </p>
        </Reveal>

        <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {differentiators.points.map((point, index) => (
            <Reveal key={point.title} variant="up" delay={index * 0.05}>
              <ParallaxCard
                depth={12 + index}
                className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-gold-400/30"
              >
                <div className="mb-4 grid h-9 w-9 place-items-center rounded-lg border border-gold-400/20 bg-gold-400/[0.08] text-gold-300">
                  <Check size={15} />
                </div>
                <h4 className="text-base font-semibold text-white">{point.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{point.desc}</p>

                <div className="sr-only" itemProp="description">
                  {point.desc.split('.')[0]}.
                </div>
              </ParallaxCard>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
