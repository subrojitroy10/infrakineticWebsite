'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { Sparkline, StatusBadge } from '@/components/shared'
import { Check } from '@/components/ui/Icons'

const tierAccent: Record<string, { border: string; glow: string; ring: string }> = {
  neutral: { border: 'border-white/10', glow: 'bg-white/[0.04]', ring: 'hover:border-white/25' },
  violet: { border: 'border-violet-400/20', glow: 'bg-violet-400/10', ring: 'hover:border-violet-400/40' },
  gold: { border: 'border-gold-400/25', glow: 'bg-gold-400/10', ring: 'hover:border-gold-400/40' },
}

const tierData = [
  {
    id: 'heuristic',
    label: 'Heuristic',
    threshold: '< 30 churn events',
    method: 'Hand-weighted formula',
    badge: 'Insufficient history',
    color: 'neutral',
    description: 'Asserted weights (subscription 35 / financial 25 / engagement 20 / NPS 12 / onboarding 8 / support 15). No training data required.',
    example: 'Health score = 72/100 — "Heuristic — insufficient history"',
    sparklineData: [65, 67, 66, 68, 70, 69, 71, 72],
  },
  {
    id: 'statistical',
    label: 'Statistical',
    threshold: '30–200 churn events',
    method: 'Cox proportional hazards / Kaplan-Meier',
    badge: 'Censored handled correctly',
    color: 'violet',
    description: "Survival analysis handles censored observations — customers who haven't churned yet are information, not missing data.",
    example: 'Churn risk: 34% — "Statistical — n=87"',
    sparklineData: [42, 38, 35, 33, 34, 36, 34, 34],
  },
  {
    id: 'learned',
    label: 'Learned',
    threshold: '> 200 churn events',
    method: 'LightGBM + isotonic calibration',
    badge: 'Calibrated 73% ± 4%',
    color: 'gold',
    description: 'Gradient-boosted trees, warm-started from public base model. Isotonic calibration + conformal prediction intervals.',
    example: 'Churn risk: 73% [Learned · n=342 · 90% CI: 69–77%]',
    sparklineData: [78, 75, 74, 73, 72, 73, 72, 73],
  },
]

const shapExample = {
  score: '73%',
  tier: 'Learned',
  sampleSize: 342,
  confidenceInterval: '69–77%',
  factors: [
    { label: 'Payment latency 4→31 days', impact: '+28%', color: 'red' },
    { label: 'Champion inactive 60 days', impact: '+19%', color: 'red' },
    { label: '2 open urgent cases', impact: '+14%', color: 'red' },
    { label: 'Relationship engagement 45/100', impact: '+11%', color: 'violet' },
    { label: 'Onboarding incomplete', impact: '+8%', color: 'violet' },
  ],
}

const intelligenceDifferentiators = [
  {
    title: 'Honest uncertainty',
    desc: 'Three-tier model (Heuristic → Statistical → Learned) degrades truthfully. Small tenants get an honest "insufficient history" label, not a borrowed prediction. Automatic fallback if calibration degrades.',
  },
  {
    title: 'Honest intervals',
    desc: 'Conformal prediction intervals — distribution-free, valid at small n. You get a real confidence range (69–77%), not a point estimate dressed as certainty.',
  },
  {
    title: 'Explanations in business language',
    desc: '"Payment latency increased from 4 to 31 days" not "feature_12: 0.28". The explanation is the product; the probability is just the sort key.',
  },
  {
    title: 'Per-tenant isolation by architecture',
    desc: "Scoring pipeline can never bypass tenant isolation — by design, not convention. Standing test: tenant A's model produces identical output whether tenant B's rows exist or not. Built to align with DPDP 2023 by architecture, not policy.",
  },
  {
    title: 'Calibration monitoring built-in',
    desc: 'Brier score + reliability curve computed per training run. Reliability curve (10 bins) stored and surfaced in calibration dashboard.',
  },
  {
    title: 'Every number shows provenance',
    desc: 'Mode (heuristic/statistical/learned), confidence interval, sample size. No number appears without its provenance.',
  },
]

export default function Intelligence() {
  return (
    <Section
      id="intelligence"
      eyebrow="Intelligence"
      title="Intelligence that's honest about uncertainty."
      lead="Every prediction shows its provenance: mode, confidence interval, sample size. Three-tier model degrades truthfully — small tenants get an honest 'insufficient history' label, not a borrowed prediction."
    >
      <Reveal variant="fade" className="mt-14">
        <ParallaxCard depth={20} className="p-6 md:p-8">
          <h3 className="heading-serif text-2xl mb-6">Three-Tier Model by Data Volume</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {tierData.map((tier, i) => {
              const accent = tierAccent[tier.color]
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl border ${accent.border} bg-white/[0.02] p-6 transition-colors ${accent.ring}`}
                >
                  <div className={`pointer-events-none absolute -right-8 -top-8 -z-10 h-32 w-32 rounded-full ${accent.glow} blur-3xl`} aria-hidden />

                  <StatusBadge
                    value={tier.badge}
                    family="lifecycle"
                    size="sm"
                  />
                  <h4 className="heading-serif mt-4 text-xl text-white">{tier.label}</h4>
                  <p className="mt-2 text-sm text-white/50">{tier.threshold}</p>
                  <p className="mt-1 text-xs text-white/40 font-mono">{tier.method}</p>

                  <div className="mt-5 w-full">
                    <Sparkline
                      data={tier.sparklineData}
                      color={tier.color === 'gold' ? 'gold-300' : tier.color === 'violet' ? 'violet-400' : 'white/40'}
                      width={220}
                      height={48}
                      className="w-full"
                    />
                  </div>

                  <p className="mt-5 text-sm text-white/60">{tier.description}</p>
                  <p className="mt-3 border-t border-white/[0.06] pt-3 text-xs font-medium text-white/50 italic">
                    &quot;{tier.example}&quot;
                  </p>
                </motion.div>
              )
            })}
          </div>
        </ParallaxCard>
      </Reveal>

      <Reveal variant="fade" className="mt-10">
        <ParallaxCard depth={18} className="p-6 md:p-8 border-gold-300/30 bg-gold-500/[0.04]">
          <h3 className="heading-serif text-2xl mb-6">SHAP Explanation — The Product, Not the Probability</h3>
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 mb-4">
                <StatusBadge value={shapExample.tier.toLowerCase()} family="lifecycle" size="md" dot />
              </div>
              <p className="text-5xl font-semibold tracking-tight text-white mb-1">{shapExample.score}</p>
              <p className="text-sm text-white/50">
                Churn Risk · {shapExample.tier} · n={shapExample.sampleSize} · 90% CI: {shapExample.confidenceInterval}
              </p>
              <p className="mt-4 text-xs text-white/65">
                Per-tenant. Never pooled. DPDP 2023 aligned by architecture.
              </p>
            </div>
            <div className="space-y-3">
              {shapExample.factors.map((factor, i) => (
                <motion.div
                  key={factor.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative"
                >
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-white/80">{factor.label}</span>
                    <span className={`font-semibold ${factor.color === 'red' ? 'text-red-400' : 'text-violet-300'}`}>
                      {factor.impact}
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${Math.abs(parseInt(factor.impact, 10))}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full ${
                        factor.color === 'red' ? 'bg-red-400' : 'bg-violet-400'
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ParallaxCard>
      </Reveal>

      <Reveal variant="fade" className="mt-10">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400 mb-6 block">
          Intelligence Differentiators
        </span>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {intelligenceDifferentiators.map((point, index) => (
            <ParallaxCard
              key={point.title}
              depth={14 + index}
              className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-gold-400/30"
            >
              <div className="mb-4 grid h-9 w-9 place-items-center rounded-lg border border-gold-400/20 bg-gold-400/[0.08] text-gold-300">
                <Check size={15} />
              </div>
              <h4 className="text-base font-semibold text-white">{point.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{point.desc}</p>
            </ParallaxCard>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
