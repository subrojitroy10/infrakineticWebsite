'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import FAQSection from '@/components/shared/FAQSection'
import { ProofStrip } from '@/components/shared'
import {
  migrationEngine,
  migrationFaqItems,
  migrationFailureReasons,
  migrationFileFormats,
} from '@/lib/content'
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
  XMark,
} from '@/components/ui/Icons'

const pipeline = [
  {
    title: 'Discover',
    desc: 'Entities, fields, data types, identifiers, relationships, custom objects, and historical volume in the source system.',
    icon: Search,
  },
  {
    title: 'Model',
    desc: 'What the data actually means — lifecycle states, ownership, derived fields — not just what the column is named.',
    icon: Layers,
  },
  {
    title: 'Map',
    desc: 'Direct, renamed, transformed, normalized, relational, and semantic mappings, each labeled by confidence.',
    icon: GitBranch,
  },
  {
    title: 'Transform & execute',
    desc: 'Dependency-ordered writes in a staged airlock, separated from production until it clears readiness.',
    icon: Database,
  },
  {
    title: 'Validate & reconcile',
    desc: 'Record, relationship, semantic, and aggregate checks — source vs. destination, with every discrepancy explained.',
    icon: Shield,
  },
]

type Pair = {
  key: string
  category: string
  source: string
  destination: string
  contextNote: string
  objects: number
  fields: number
  relationships: number
  direct: number
  transformed: number
  humanConfirm: number
  disposition: number
  complexity: 'Foundational' | 'Moderate' | 'Advanced'
}

const pairs: Pair[] = [
  {
    key: 'sf-ik',
    category: 'CRM',
    source: 'Salesforce',
    destination: 'Infrakinetic',
    contextNote: 'Representative complex Salesforce environment',
    objects: 31,
    fields: 1842,
    relationships: 427,
    direct: 1391,
    transformed: 281,
    humanConfirm: 143,
    disposition: 27,
    complexity: 'Advanced',
  },
  {
    key: 'zoho-ik',
    category: 'CRM',
    source: 'Zoho CRM',
    destination: 'Infrakinetic',
    contextNote: 'Representative Zoho CRM environment',
    objects: 18,
    fields: 690,
    relationships: 204,
    direct: 561,
    transformed: 98,
    humanConfirm: 27,
    disposition: 4,
    complexity: 'Moderate',
  },
  {
    key: 'csv-ik',
    category: 'People',
    source: 'CSV / Excel export',
    destination: 'Infrakinetic',
    contextNote: 'Representative HRIS export',
    objects: 22,
    fields: 940,
    relationships: 168,
    direct: 705,
    transformed: 176,
    humanConfirm: 51,
    disposition: 8,
    complexity: 'Moderate',
  },
  {
    key: 'tally-ik',
    category: 'Finance',
    source: 'Tally',
    destination: 'Infrakinetic',
    contextNote: 'Representative Tally environment',
    objects: 14,
    fields: 512,
    relationships: 96,
    direct: 448,
    transformed: 51,
    humanConfirm: 12,
    disposition: 1,
    complexity: 'Foundational',
  },
]

const categories = [
  {
    key: 'crm',
    label: 'CRM Migration',
    icon: Users,
    pairs:
      'Salesforce → Infrakinetic · Zoho CRM → Infrakinetic · HubSpot CRM → Infrakinetic',
    body: "The hardest part of a CRM migration is rarely the contact record — it's the pipeline stage that doesn't map 1:1, the owner field that points to a user ID the destination has never seen, and five years of activity history sitting on the account it belongs to. Infrakinetic maps accounts, contacts, deals, and activities as connected entities onboarding into the platform, not four unrelated tables.",
  },
  {
    key: 'hris',
    label: 'HRIS & Payroll Onboarding',
    icon: Briefcase,
    pairs: 'CSV / Excel export → Infrakinetic',
    body: 'Employee records carry compensation history, statutory identifiers, and reporting-line relationships that most HRIS exports flatten into a single snapshot. The Migration Engine preserves history as history — superseded, not overwritten — and keeps org-chart relationships intact when bringing that data into Infrakinetic.',
  },
  {
    key: 'erp',
    label: 'Legacy System Onboarding',
    icon: Building,
    pairs: 'Custom database export → Infrakinetic · CSV / Excel → Infrakinetic',
    body: 'Legacy and custom-built systems are usually the most idiosyncratic in the stack — years of custom objects and fields nobody fully documented. Discovery surfaces every custom structure before mapping starts, so nothing gets silently dropped because it looked unfamiliar.',
  },
  {
    key: 'finance',
    label: 'Finance & Accounting Onboarding',
    icon: Wallet,
    pairs: 'Tally → Infrakinetic',
    body: 'Financial migrations fail quietly — a rounding difference, a duplicated invoice, a write-off that lands in the wrong period. Reconciliation checks totals and record counts between source and destination before anyone calls it done, the same discipline Infrakinetic runs on its own ledger.',
  },
]

export default function MigrationClient() {
  const [activePair, setActivePair] = useState<Pair>(pairs[0])

  const total = activePair.fields
  const pctDirect = (activePair.direct / total) * 100
  const pctTransformed = (activePair.transformed / total) * 100
  const pctHuman = (activePair.humanConfirm / total) * 100
  const pctDisposition = (activePair.disposition / total) * 100
  const pctResolved = pctDirect + pctTransformed

  return (
    <div className="pt-20">
      {/* Hero */}
      <section id="migration-top" className="relative py-24 md:py-32">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="eyebrow">Migration infrastructure</span>
            <h1 className="heading-serif mt-5 text-4xl leading-[1.04] md:text-5xl lg:text-[4.4rem]">
              Move business systems without losing what makes the data
              meaningful.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 md:text-xl">
              CRM migration, HRIS migration, and ERP migration are usually
              treated as a file-import problem: export, clean a CSV, map some
              columns, hope. Infrakinetic treats it as a systems problem —
              discover the source schema, map entities and relationships,
              transform and execute in a governed airlock, then validate and
              reconcile before anyone calls it done.
            </p>
            <Reveal
              variant="fade"
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <a href="/briefing" className="btn-primary inline-flex w-fit">
                Assess a migration
                <ArrowRight size={15} />
              </a>
              <Link href="/#migration" className="btn-ghost inline-flex w-fit">
                See the governed pipeline
              </Link>
            </Reveal>
          </motion.div>
        </div>
      </section>

      {/* Why ordinary migration fails */}
      <Section
        id="migration-why-fails"
        eyebrow="Why ordinary migration fails"
        title="A CSV export is not a migration plan."
        lead="Most tools treat migration as a file-import problem. The failures that actually hurt happen after the file loads."
      >
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {migrationFailureReasons.map((reason, i) => (
            <Reveal key={reason} variant="up" delay={i * 0.05}>
              <div className="flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-danger/15 text-danger/85">
                  <XMark size={10} />
                </span>
                <p className="text-sm leading-relaxed text-white/60">
                  {reason}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Proof strip, reused from the audited run */}
      <Section id="migration-proof" className="pt-0">
        <ProofStrip
          stats={migrationEngine.proof}
          note={migrationEngine.proofNote}
        />
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
                <h3 className="heading-serif text-base text-white">
                  {stage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {stage.desc}
                </p>
              </ParallaxCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Interactive assessment example */}
      <Section
        id="migration-assessment"
        eyebrow="Illustrative example"
        title="See what Infrakinetic understands before anything moves."
        lead="In a complex Salesforce environment like this representative example, Infrakinetic discovers the objects, fields, and relationships first. It then separates direct mappings from transformations and genuinely ambiguous decisions — so uncertainty is surfaced before production data is touched. The numbers below are a representative example, not a live scan of your data."
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
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/60">
                    {activePair.category}
                  </span>
                  <h3 className="heading-serif text-lg text-white sm:text-xl">
                    {activePair.source}{' '}
                    <ArrowRight
                      size={16}
                      className="inline -translate-y-0.5 text-white/30"
                    />{' '}
                    {activePair.destination}
                  </h3>
                </div>
                <p className="mt-2 text-xs text-white/50">
                  {activePair.contextNote}
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-semibold text-gold-300 sm:text-3xl">
                  {pctResolved.toFixed(1)}%
                </p>
                <p className="text-[11px] uppercase tracking-wide text-white/50">
                  Automatically resolved
                </p>
                <p className="mt-1.5 text-[11px] text-white/40">
                  Source complexity: {activePair.complexity}
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-white/45">
              Source discovery
            </p>
            <div className="mt-3 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-xl font-semibold text-white">
                  {activePair.objects}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">
                  Objects discovered
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-xl font-semibold text-white">
                  {activePair.fields.toLocaleString()}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">
                  Fields discovered
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                <p className="text-xl font-semibold text-white">
                  {activePair.relationships}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">
                  Relationships
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-white/45">
              Mapping outcome
            </p>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-gold-300/20 bg-gold-300/[0.04] p-4">
                <p className="text-xl font-semibold text-gold-300">
                  {activePair.direct.toLocaleString()}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">
                  Direct mappings
                </p>
              </div>
              <div className="rounded-xl border border-violet-400/20 bg-violet-400/[0.04] p-4">
                <p className="text-xl font-semibold text-violet-300">
                  {activePair.transformed}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">
                  Governed transformations
                </p>
              </div>
              <div className="rounded-xl border border-review/20 bg-review/[0.06] p-4">
                <p className="text-xl font-semibold text-review">
                  {activePair.humanConfirm}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-white/40">
                  Human confirmations
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-white/50">
              {activePair.humanConfirm} ambiguous mappings are deliberately held
              for human confirmation rather than guessed — when confidence is
              insufficient, Infrakinetic asks instead of inventing a decision.
            </p>

            <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-white/45">
              Mapping coverage — 100% accounted for
            </p>
            <div className="mt-3 flex h-3 w-full overflow-hidden rounded-full border border-white/10 bg-white/[0.02]">
              <div
                className="h-full bg-gold-300"
                style={{ width: `${pctDirect}%` }}
                title={`Direct mapping — ${pctDirect.toFixed(1)}%`}
              />
              <div
                className="h-full bg-violet-400"
                style={{ width: `${pctTransformed}%` }}
                title={`Governed transformation — ${pctTransformed.toFixed(1)}%`}
              />
              <div
                className="h-full bg-review"
                style={{ width: `${pctHuman}%` }}
                title={`Human confirmation — ${pctHuman.toFixed(1)}%`}
              />
              <div
                className="h-full bg-warning/70"
                style={{ width: `${pctDisposition}%` }}
                title={`Explicit disposition — ${pctDisposition.toFixed(1)}%`}
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] text-white/50">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gold-300" />
                {pctDirect.toFixed(1)}% Direct mapping
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                {pctTransformed.toFixed(1)}% Governed transformation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-review" />
                {pctHuman.toFixed(1)}% Human confirmation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-warning/70" />
                {pctDisposition.toFixed(1)}% Explicit disposition
              </span>
            </div>
            <p className="mt-4 text-xs text-white/50">
              {(activePair.direct + activePair.transformed).toLocaleString()} of{' '}
              {activePair.fields.toLocaleString()} fields can proceed through
              direct mapping or governed transformation. Remaining ambiguity is
              surfaced for explicit review before production data is touched.
            </p>
            <p className="mt-3 text-xs text-white/40">
              {activePair.disposition} fields ({pctDisposition.toFixed(1)}%)
              have no direct equivalent in {activePair.destination} and require
              an explicit disposition before migration. Nothing is silently
              discarded.
            </p>
            <Link
              href="/guides/salesforce-to-netsuite-sync-breaking"
              className="mt-4 inline-block text-xs font-medium text-gold-300 transition-colors hover:text-gold-200"
            >
              Guide: why CRM-to-ERP sync breaks (and why this pipeline
              doesn&apos;t rely on sync) →
            </Link>
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
                  <h3 className="heading-serif text-lg text-white">
                    {cat.label}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-white/55">
                  {cat.body}
                </p>
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-white/65">
                  {cat.pairs}
                </p>
              </ParallaxCard>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-white/50">
          The same governed data model receiving this data is documented in the{' '}
          <Link
            href="/platform"
            className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
          >
            platform architecture
          </Link>
          . See where migrated CRM, finance, and people data lives once it
          arrives in the{' '}
          <Link
            href="/products"
            className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
          >
            product families
          </Link>
          . Guides:{' '}
          <Link
            href="/guides/crm-accounting-sync-errors"
            className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
          >
            fixing data sync errors between a CRM and accounting
          </Link>{' '}
          and{' '}
          <Link
            href="/guides/hubspot-tally-sync-without-duplicates"
            className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
          >
            syncing HubSpot deals with Tally invoices without duplicates
          </Link>
          .
        </p>
      </Section>

      {/* Supported sources */}
      <Section
        id="migration-sources"
        eyebrow="Supported sources"
        title="What can move into Infrakinetic today."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Reveal variant="left">
            <ParallaxCard
              depth={14}
              className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
            >
              <h3 className="text-base font-semibold text-white/80">
                Implemented connector paths
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {migrationEngine.connectors.map((connector) => (
                  <span
                    key={connector}
                    className="rounded-full border border-violet-400/25 bg-violet-400/[0.08] px-4 py-2 text-sm font-medium text-violet-300"
                  >
                    {connector}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs text-white/40">
                Source-tested and deployable. Live third-party certification has
                separate environment requirements and is tracked independently
                of the connector implementation.
              </p>
            </ParallaxCard>
          </Reveal>
          <Reveal variant="right" delay={0.1}>
            <ParallaxCard
              depth={14}
              className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
            >
              <h3 className="text-base font-semibold text-white/80">
                File-based onboarding
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {migrationFileFormats.map((format) => (
                  <span
                    key={format}
                    className="rounded-full border border-gold-300/25 bg-gold-300/[0.08] px-4 py-2 text-sm font-medium text-gold-200"
                  >
                    {format}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-xs text-white/40">
                Direct upload for anything not covered by an implemented
                connector — the same discovery, mapping, staging, and
                reconciliation pipeline applies.
              </p>
            </ParallaxCard>
          </Reveal>
        </div>
      </Section>

      <FAQSection
        id="migration-faq"
        eyebrow="Migration questions"
        title="What people actually ask before migrating"
        items={migrationFaqItems}
      />

      <Section id="migration-cta" className="pb-32">
        <Reveal variant="fade">
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div className="flex items-center gap-3 text-sm text-white/60">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gold-400/15 text-gold-300">
                <Check size={14} />
              </span>
              Bring your own export. We&apos;ll show you the mapping before
              anything moves.
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
