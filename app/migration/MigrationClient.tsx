'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import FAQSection from '@/components/shared/FAQSection'
import { migrationEngine, migrationFaqItems } from '@/lib/content'
import {
  ArrowRight,
  Check,
  Search,
  GitBranch,
  Layers,
  Shield,
  Database,
  Building,
  Users,
  Wallet,
  Briefcase,
} from '@/components/ui/Icons'

const pipeline = [
  { title: 'Discover', desc: 'Entities, fields, data types, identifiers, relationships, custom objects, and historical volume in the source system.', icon: Search },
  { title: 'Model', desc: 'What the data actually means — lifecycle states, ownership, derived fields — not just what the column is named.', icon: Layers },
  { title: 'Map', desc: 'Direct, renamed, transformed, normalized, relational, and semantic mappings, each labeled by confidence.', icon: GitBranch },
  { title: 'Transform & execute', desc: 'Dependency-ordered writes in a staged airlock, separated from production until it clears readiness.', icon: Database },
  { title: 'Validate & reconcile', desc: 'Record, relationship, semantic, and aggregate checks — source vs. destination, with every discrepancy explained.', icon: Shield },
]

type Pair = {
  key: string
  category: string
  source: string
  destination: string
  objects: number
  fields: number
  relationships: number
  autoMappable: number
  transformations: number
  review: number
  unsupported: number
  risk: 'Low' | 'Medium' | 'High'
}

const pairs: Pair[] = [
  {
    key: 'sf-hs',
    category: 'CRM',
    source: 'Salesforce',
    destination: 'HubSpot',
    objects: 31,
    fields: 1842,
    relationships: 427,
    autoMappable: 1391,
    transformations: 281,
    review: 143,
    unsupported: 27,
    risk: 'High',
  },
  {
    key: 'zoho-sf',
    category: 'CRM',
    source: 'Zoho CRM',
    destination: 'Salesforce',
    objects: 18,
    fields: 690,
    relationships: 204,
    autoMappable: 561,
    transformations: 98,
    review: 27,
    unsupported: 4,
    risk: 'Medium',
  },
  {
    key: 'bamboo-workday',
    category: 'HRIS',
    source: 'BambooHR',
    destination: 'Workday',
    objects: 22,
    fields: 940,
    relationships: 168,
    autoMappable: 705,
    transformations: 176,
    review: 51,
    unsupported: 8,
    risk: 'Medium',
  },
  {
    key: 'qb-netsuite',
    category: 'Finance',
    source: 'QuickBooks',
    destination: 'NetSuite',
    objects: 14,
    fields: 512,
    relationships: 96,
    autoMappable: 448,
    transformations: 51,
    review: 12,
    unsupported: 1,
    risk: 'Low',
  },
]

const riskStyle: Record<Pair['risk'], string> = {
  Low: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  Medium: 'border-gold-300/30 bg-gold-300/10 text-gold-300',
  High: 'border-red-400/30 bg-red-400/10 text-red-300',
}

const categories = [
  {
    key: 'crm',
    label: 'CRM Migration',
    icon: Users,
    pairs: 'Salesforce ↔ HubSpot · Zoho CRM ↔ Salesforce · Pipedrive → HubSpot · Dynamics 365 → Salesforce',
    body: "The hardest part of a CRM migration is rarely the contact record — it's the pipeline stage that doesn't map 1:1, the owner field that points to a user ID the destination has never seen, and five years of activity history sitting on the account it belongs to. Infrakinetic maps accounts, contacts, deals, and activities as connected entities, not four unrelated tables.",
  },
  {
    key: 'hris',
    label: 'HRIS & Payroll Migration',
    icon: Briefcase,
    pairs: 'BambooHR → Workday · BambooHR → Rippling · Workday → Rippling',
    body: 'Employee records carry compensation history, statutory identifiers, and reporting-line relationships that most HRIS exports flatten into a single snapshot. The Migration Engine preserves history as history — superseded, not overwritten — and keeps org-chart relationships intact.',
  },
  {
    key: 'erp',
    label: 'ERP Migration',
    icon: Building,
    pairs: 'Custom database → ERP · Cross-domain (CRM → ERP)',
    body: 'ERP schemas are usually the most customized system in the stack — years of custom objects and fields nobody fully documented. Discovery surfaces every custom structure before mapping starts, so nothing gets silently dropped because it looked unfamiliar.',
  },
  {
    key: 'finance',
    label: 'Finance & Accounting Migration',
    icon: Wallet,
    pairs: 'QuickBooks → NetSuite · Xero → NetSuite · QuickBooks → Xero',
    body: 'Financial migrations fail quietly — a rounding difference, a duplicated invoice, a write-off that lands in the wrong period. Reconciliation checks totals and record counts between source and destination before anyone calls it done, the same discipline Infrakinetic runs on its own ledger.',
  },
]

export default function MigrationClient() {
  const [activePair, setActivePair] = useState<Pair>(pairs[0])

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section
        id="migration-top"
        eyebrow="Migration infrastructure"
        title="Move business systems without losing what makes the data meaningful."
        lead="CRM migration, HRIS migration, and ERP migration are usually treated as a file-import problem: export, clean a CSV, map some columns, hope. Infrakinetic treats it as a systems problem — discover the source schema, map entities and relationships, transform and execute in a governed airlock, then validate and reconcile before anyone calls it done."
      >
        <Reveal variant="fade" className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="/briefing" className="btn-primary inline-flex w-fit">
            Assess a migration
            <ArrowRight size={15} />
          </a>
          <Link href="/#migration" className="btn-ghost inline-flex w-fit">
            See the governed pipeline
          </Link>
        </Reveal>
      </Section>

      {/* Proof strip, reused from the audited run */}
      <Section id="migration-proof" className="pt-0">
        <Reveal variant="fade">
          <ParallaxCard depth={20} className="border-gold-300/30 bg-gold-300/[0.05] p-6 md:p-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {migrationEngine.proof.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
                >
                  <p className="text-2xl font-semibold tracking-tight text-gold-300 sm:text-3xl">{stat.value}</p>
                  <p className="mt-1.5 text-[11px] font-medium uppercase leading-snug tracking-wide text-white/45">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
            <p className="mt-5 text-xs text-white/45">{migrationEngine.proofNote}</p>
          </ParallaxCard>
        </Reveal>
      </Section>

      {/* The five-stage analysis pipeline */}
      <Section
        id="migration-pipeline"
        eyebrow="How the engine thinks"
        title="Don't migrate records. Migrate systems of meaning."
        lead="A naive migration maps source_field → destination_field. A serious one maps entity → relationship → semantics → transformation → validation. That distinction runs through every stage."
      >
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {pipeline.map((stage, i) => (
            <Reveal key={stage.title} variant="up" delay={i * 0.06}>
              <ParallaxCard depth={12 + i * 2} className="h-full p-6">
                <div className="mb-4 grid h-9 w-9 place-items-center rounded-lg border border-gold-400/25 bg-gold-400/[0.08] text-gold-300">
                  <stage.icon size={16} />
                </div>
                <h3 className="heading-serif text-base text-white">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{stage.desc}</p>
              </ParallaxCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Interactive assessment example */}
      <Section
        id="migration-assessment"
        eyebrow="Illustrative example"
        title="What a migration assessment looks like before anything moves."
        lead="Every migration is analyzed before execution — objects, fields, and relationships discovered, then scored for how much can be mapped automatically versus what needs a human decision. The numbers below are a representative example, not a live scan of your data."
      >
        <Reveal variant="fade" className="mt-10">
          <div className="flex flex-wrap gap-2">
            {pairs.map((pair) => (
              <button
                key={pair.key}
                onClick={() => setActivePair(pair)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  activePair.key === pair.key
                    ? 'border-gold-300/50 bg-gold-300/10 text-gold-300'
                    : 'border-white/10 bg-white/[0.02] text-white/60 hover:border-white/20 hover:text-white'
                }`}
              >
                {pair.source} → {pair.destination}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal variant="fade" className="mt-6" key={activePair.key}>
          <ParallaxCard depth={18} className="p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
                  {activePair.category}
                </span>
                <h3 className="heading-serif text-lg text-white sm:text-xl">
                  {activePair.source} <ArrowRight size={16} className="inline -translate-y-0.5 text-white/30" /> {activePair.destination}
                </h3>
              </div>
              <span className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${riskStyle[activePair.risk]}`}>
                Migration Risk: {activePair.risk.toUpperCase()}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-xl font-semibold text-white">{activePair.objects}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">Objects discovered</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-xl font-semibold text-white">{activePair.fields.toLocaleString()}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">Fields discovered</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-xl font-semibold text-white">{activePair.relationships}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">Relationships</p>
              </div>
              <div className="rounded-xl border border-gold-300/20 bg-gold-300/[0.04] p-4">
                <p className="text-xl font-semibold text-gold-300">{activePair.autoMappable.toLocaleString()}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">Auto-mappable</p>
              </div>
              <div className="rounded-xl border border-violet-400/20 bg-violet-400/[0.04] p-4">
                <p className="text-xl font-semibold text-violet-300">{activePair.transformations}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">Transformations</p>
              </div>
              <div className="rounded-xl border border-red-400/20 bg-red-400/[0.04] p-4">
                <p className="text-xl font-semibold text-red-300">{activePair.review + activePair.unsupported}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">Review + unsupported</p>
              </div>
            </div>
            <p className="mt-6 text-xs text-white/40">
              {activePair.review} mappings require human review; {activePair.unsupported} have no direct equivalent in {activePair.destination} and need an explicit decision before migration.
            </p>
          </ParallaxCard>
        </Reveal>
      </Section>

      {/* Category deep dives */}
      <Section
        id="migration-categories"
        eyebrow="By system"
        title="The same governed pipeline, tuned to what each system actually contains."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {categories.map((cat, i) => (
            <Reveal key={cat.key} variant="up" delay={i * 0.05}>
              <ParallaxCard depth={12 + i} className="h-full p-6 md:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-gold-400/20 bg-gold-400/[0.08] text-gold-300">
                    <cat.icon size={16} />
                  </span>
                  <h3 className="heading-serif text-lg text-white">{cat.label}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/55">{cat.body}</p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-white/35">{cat.pairs}</p>
              </ParallaxCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <FAQSection id="migration-faq" eyebrow="Migration questions" title="What people actually ask before migrating" items={migrationFaqItems} />

      <Section id="migration-cta" className="pb-32">
        <Reveal variant="fade">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div className="flex items-center gap-3 text-sm text-white/60">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-400/15 text-gold-300">
                <Check size={14} />
              </span>
              Bring your own export. We'll show you the mapping before anything moves.
            </div>
            <a href="/briefing" className="btn-primary inline-flex shrink-0">
              Assess a migration
              <ArrowRight size={15} />
            </a>
          </div>
        </Reveal>
      </Section>
    </div>
  )
}
