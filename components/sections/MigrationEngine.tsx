'use client'

import React from 'react'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { ProofStrip } from '@/components/shared'
import { migrationEngine } from '@/lib/content'
import Link from 'next/link'
import { Check, ArrowRight, Database, Shield, GitBranch, FileCheck, Layers, RefreshCw } from '@/components/ui/Icons'

const differentiatorIcons = [Layers, Database, GitBranch, FileCheck, RefreshCw, Shield]

export default function MigrationEngine() {
  return (
    <Section
      id="migration"
      eyebrow={migrationEngine.eyebrow}
      title={migrationEngine.title}
      lead={migrationEngine.lead}
    >
      {/* Proof strip — the real, evidenced numbers */}
      <ProofStrip className="mt-10" stats={migrationEngine.proof} note={migrationEngine.proofNote} />


      {/* The six-step governed pipeline */}
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {migrationEngine.steps.map((step, i) => (
          <Reveal key={step.n} variant="up" delay={i * 0.06}>
            <ParallaxCard depth={12 + i * 2} className="h-full p-6">
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-gold-400/25 bg-gold-400/[0.08] text-xs font-bold text-gold-300">
                {step.n}
              </span>
              <h3 className="heading-serif mt-4 text-lg text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{step.desc}</p>
            </ParallaxCard>
          </Reveal>
        ))}
      </div>

      {/* Connectors */}
      <Reveal variant="fade" className="mt-12">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">
            Implemented connector paths
          </span>
          <div className="mt-4 flex flex-wrap gap-3">
            {migrationEngine.connectors.map((connector) => (
              <span
                key={connector}
                className="rounded-full border border-violet-400/25 bg-violet-400/[0.08] px-4 py-2 text-sm font-medium text-violet-300"
              >
                {connector}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/50">{migrationEngine.connectorsNote}</p>
          <p className="mt-2 text-xs text-white/40">Live third-party certification has separate environment requirements and is tracked independently of the connector implementation.</p>
          <Link
            href="/guides/salesforce-to-netsuite-sync-breaking"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 hover:text-gold-200 transition-colors"
          >
            Why Salesforce-to-NetSuite sync keeps breaking
            <ArrowRight size={14} />
          </Link>
        </div>
      </Reveal>

      {/* Differentiators */}
      <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {migrationEngine.differentiators.map((point, index) => {
          const Icon = differentiatorIcons[index % differentiatorIcons.length]
          return (
            <Reveal key={point.title} variant="up" delay={index * 0.05}>
              <ParallaxCard
                depth={12 + index}
                className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-gold-400/30"
              >
                <div className="mb-4 grid h-9 w-9 place-items-center rounded-lg border border-gold-400/20 bg-gold-400/[0.08] text-gold-300">
                  <Icon size={15} />
                </div>
                <h4 className="text-base font-semibold text-white">{point.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{point.desc}</p>
              </ParallaxCard>
            </Reveal>
          )
        })}
      </div>

      <Reveal variant="fade" className="mt-12">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
          <div className="flex items-center gap-3 text-sm text-white/60">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-400/15 text-gold-300">
              <Check size={14} />
            </span>
            Live in production, canary-proven, and ready to evaluate against your own data.
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/migration" className="btn-ghost inline-flex">
              Explore the Migration Engine
              <ArrowRight size={15} />
            </Link>
            <a href="/briefing" className="btn-primary inline-flex">
              See your migration mapped
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
