'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import SectionHeader from '@/components/shared/SectionHeader'
import {
  Database,
  GitBranch,
  Zap,
  Shield,
  Lock,
  ArrowRight,
  Server,
  Layers,
  Network,
} from '@/components/ui/Icons'

const architecturePillars = [
  {
    icon: Database,
    title: 'One Schema',
    desc: 'Single PostgreSQL database. All engines — Commercial, Finance, HR, Payroll, Documents, Workflow — share tables. No ETL, no sync, no eventual consistency.',
    color: 'gold',
  },
  {
    icon: GitBranch,
    title: 'One Event Bus',
    desc: 'Every write goes through logBusinessEvent + dispatchWorkAutomation. One append-only business_events table. Cross-engine automation is a query, not a project.',
    color: 'violet',
  },
  {
    icon: Zap,
    title: 'One Transaction Boundary',
    desc: 'State changes, events, and automation dispatch happen in the same DB transaction. No dual-write problems. No outbox pattern needed.',
    color: 'gold',
  },
  {
    icon: Shield,
    title: 'Lifecycle Spine',
    desc: '10-state machine (prospect → churned → won_back) spanning Commercial → Sales → CX360. Renewal auto-creates opportunity. Expansion detected via opportunity_type.',
    color: 'violet',
  },
  {
    icon: Lock,
    title: 'Signal Framework',
    desc: 'entity_scores table — insert-only, versioned formulas (heuristic_v1, heuristic_v2), ML rows alongside. Lead quality, opportunity priority, customer health, churn risk, relationship engagement.',
    color: 'gold',
  },
  {
    icon: Network,
    title: 'Tenant Isolation',
    desc: "Isolation is enforced by the database on every table, not just by application code — so a missed filter in one screen can never leak another tenant's data. Standing test: output for tenant A is identical whether tenant B's rows exist or not.",
    color: 'violet',
  },
]

const signalTypes = [
  { type: 'lead_quality', entity: 'organizations', desc: 'Server-side, persisted on org create/update' },
  { type: 'opportunity_priority', entity: 'opportunities', desc: 'Server-side, persisted on opp create/update' },
  { type: 'customer_health', entity: 'organizations', desc: '6 components: subscription, financial, engagement, NPS, onboarding, support' },
  { type: 'churn_risk', entity: 'organizations', desc: 'Three-tier: heuristic / statistical / learned' },
  { type: 'relationship_engagement', entity: 'organizations', desc: 'Recency, cadence, breadth, case ratio — from sales_activities' },
  { type: 'renewal_readiness', entity: 'organizations', desc: 'Derived from lifecycle state + contract data' },
  { type: 'expansion_readiness', entity: 'organizations', desc: 'Derived from expansion opportunity signals' },
]

export default function PlatformClient() {
  return (
    <div className="relative pt-16">
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="container-page">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="eyebrow">Platform Architecture</span>
            <h1 className="heading-serif mt-5 text-4xl md:text-5xl lg:text-[4.4rem] leading-[1.04]">
              One Schema. One Event Bus. One Transaction Boundary.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Infrakinetic isn&apos;t a suite of integrated apps. It&apos;s a single database, a single event bus, and a single transaction boundary — with 11+ engines that literally cannot drift apart.
            </p>
          </motion.div>
        </div>
      </section>

      <Section
        id="architecture"
        eyebrow="Core Architecture"
        title="Three Pillars That Make Everything Else Possible"
        lead="Every differentiator — lifecycle spine, calibrated ML, atomic packs, free platform infra — derives from these three architectural decisions."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {architecturePillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <ParallaxCard depth={14 + i * 2} className="h-full p-6 md:p-8">
                  <div className={`mb-4 grid h-12 w-12 place-items-center rounded-xl border ${pillar.color === 'gold' ? 'border-gold-300/30 bg-gold-300/[0.08]' : 'border-violet-400/30 bg-violet-400/[0.08]'} ${pillar.color === 'gold' ? 'text-gold-300' : 'text-violet-300'}`}>
                    <pillar.icon size={20} />
                  </div>
                  <h3 className="heading-serif text-xl mb-3">{pillar.title}</h3>
                  <p className="text-white/60 leading-relaxed">{pillar.desc}</p>
                </ParallaxCard>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        id="lifecycle-spine"
        eyebrow="Lifecycle Spine"
        title="The Loop That Closes Itself"
        lead="One state machine spanning Commercial → Sales → CX360. No handoff at 'won'. Renewal auto-creates opportunity. Expansion detected natively."
      >
        <Reveal variant="fade" className="mt-14">
          <ParallaxCard depth={18} className="p-6 md:p-8 overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {[
                  { id: 'prospect', label: 'Prospect' },
                  { id: 'qualified', label: 'Qualified' },
                  { id: 'in_pipeline', label: 'In Pipeline' },
                  { id: 'committed', label: 'Committed' },
                  { id: 'onboarding', label: 'Onboarding' },
                  { id: 'active', label: 'Active' },
                  { id: 'at_risk', label: 'At Risk' },
                  { id: 'renewing', label: 'Renewing' },
                  { id: 'expanding', label: 'Expanding' },
                  { id: 'churned', label: 'Churned', sticky: true },
                  { id: 'won_back', label: 'Won Back', sticky: true },
                ].map((state) => (
                  <motion.div
                    key={state.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.04 }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl border bg-white/[0.02] ${state.sticky ? 'border-gold-300/30' : 'border-white/10'}`}
                  >
                    <span className="text-[10px] font-medium uppercase tracking-wider text-white/40">{state.label}</span>
                    {state.sticky && <span className="text-[9px] font-medium text-gold-300/70">(sticky)</span>}
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/50 text-center">
                First-match-wins precedence resolver. Transitions written atomically with business_events + work automation dispatch.
              </p>
            </div>
          </ParallaxCard>
        </Reveal>

        <Reveal variant="fade" className="mt-10">
          <SectionHeader
            title="Precedence Rules (Resolver)"
            description="Computed on every sweep. First match wins. No ambiguity."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { n: 1, state: 'churned', condition: 'Zero active subscriptions AND (≥1 cancelled subscription OR agreement terminated)' },
              { n: 2, state: 'at_risk', condition: '≥2 overdue invoices OR health < 40 OR health dropped >20pts in 30d OR urgent case >7d' },
              { n: 3, state: 'renewing', condition: 'Agreement renewal_date within 90 days' },
              { n: 4, state: 'expanding', condition: 'Open opportunity with type=expansion' },
              { n: 5, state: 'onboarding', condition: 'Onboarding milestones exist and incomplete' },
              { n: 6, state: 'active', condition: '≥1 active subscription OR fulfilled order' },
              { n: 7, state: 'committed', condition: 'Won deal with order, no subscription/onboarding yet' },
              { n: 8, state: 'in_pipeline', condition: '≥1 open opportunity' },
              { n: 9, state: 'qualified', condition: 'organizations.current_status = qualified' },
              { n: 10, state: 'prospect', condition: 'Default' },
            ].map((rule) => (
              <ParallaxCard key={rule.state} depth={14} className="p-4">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 font-mono text-gold-300 tabular-nums w-8">{rule.n}.</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-white">{rule.state}</span>
                      {rule.n <= 2 && <span className="text-[10px] font-medium text-gold-300/70">(sticky)</span>}
                    </div>
                    <p className="text-sm text-white/50">{rule.condition}</p>
                  </div>
                </div>
              </ParallaxCard>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        id="signal-framework"
        eyebrow="Signal Framework"
        title="One Insert-Only Table. Seven Score Types. Versioned Forever."
        lead="entity_scores replaces four browser-only scorers. Every score persisted, versioned, correlated with outcomes. The foundation for all ML."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-white/40 uppercase tracking-wider text-xs">
                  <th className="pb-3 pr-6">Score Type</th>
                  <th className="pb-3 pr-6">Entity</th>
                  <th className="pb-3 pr-6">Source</th>
                  <th className="pb-3">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {signalTypes.map((signal) => (
                  <tr key={signal.type} className="hover:bg-white/[0.02]">
                    <td className="py-4 pr-6 font-mono text-gold-300">{signal.type}</td>
                    <td className="py-4 pr-6 text-white/70">{signal.entity}</td>
                    <td className="py-4 pr-6 text-white/50">Server-side, insert-only</td>
                    <td className="py-4 text-white/60">{signal.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal variant="fade" className="mt-10">
          <ParallaxCard depth={14} className="p-6 md:p-8 border-gold-300/30 bg-gold-300/[0.04]">
            <h3 className="heading-serif text-xl mb-4">Why This Matters</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <p className="font-semibold text-gold-300">Versioned Formulas</p>
                <p className="text-sm text-white/60">heuristic_v1, heuristic_v2, ml_v1 coexist. Rebalancing weights never invalidates history.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gold-300">History for Everything</p>
                <p className="text-sm text-white/60">Lead quality and opportunity priority become trend lines, not ephemeral browser values.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gold-300">One Join to Outcomes</p>
                <p className="text-sm text-white/60">Correlate any score with any outcome — the precondition for all ML.</p>
              </div>
            </div>
          </ParallaxCard>
        </Reveal>
      </Section>

      <Section
        id="tenant-isolation"
        eyebrow="Tenant Isolation"
        title="DPDP 2023 Compliant by Architecture, Not Policy"
        lead="Cross-tenant ML pooling is structurally impossible, not just against policy. Every query is scoped to its tenant at the database layer, and a standing test enforces it on every deploy."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Lock, title: 'Enforced at the database, not just in code', desc: 'Every tenant\'s data is walled off at the database layer. Even if there were a bug in application code, the database itself would still block cross-tenant access — isolation doesn\'t depend on every screen getting the filter right.' },
              { icon: Server, title: 'No privileged bypass for ML', desc: 'The scoring service connects with the same restricted, tenant-scoped access as everything else — never through an elevated path that could see across tenants. A missing tenant filter returns zero rows, not everyone\'s.' },
              { icon: Layers, title: 'Per-tenant model artifacts', desc: 'Trained models are stored and looked up per tenant, always. One tenant\'s model is never merged into or used to initialize another\'s.' },
              { icon: Network, title: 'Job-level scope', desc: 'Every inference job is bound to exactly one tenant by construction — there\'s no shared batch that touches multiple tenants at once.' },
              { icon: Shield, title: 'Standing Test', desc: 'Automated test: model for tenant A produces identical output whether tenant B rows exist or not. Runs on every deploy.' },
              { icon: Database, title: 'Data Residency', desc: 'Single-region RDS (ap-south-1). No cross-region replication. Encryption at rest + transit. Key management via AWS KMS.' },
            ].map((item) => (
              <ParallaxCard key={item.title} depth={14} className="p-6">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg border border-violet-400/30 bg-violet-400/[0.08] text-violet-300">
                  <item.icon size={18} />
                </div>
                <h4 className="text-base font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-white/50">{item.desc}</p>
              </ParallaxCard>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        id="deployment"
        eyebrow="Deployment & Operations"
        title="EC2 + RDS. PM2. EventBridge. S3 Artifacts."
        lead="Proven pattern from polynovea-payroll-compute. No Lambda for daily jobs. EventBridge triggers internal routes. Detached Python processes for ML."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Server, title: 'API Server', desc: 'Node.js on EC2 (t3.small), PM2 cluster mode. Health checks, graceful reloads, zero-downtime deploys.' },
              { icon: Database, title: 'PostgreSQL RDS', desc: 'Flexible Server (B1ms). RLS, audit triggers, hash chains, automated backups, point-in-time recovery.' },
              { icon: Zap, title: 'EventBridge Scheduler', desc: 'Cron-expression rules → internal routes (/internal/*/run). No in-process cron. requirePlatformKey on every route.' },
              { icon: Layers, title: 'S3 Artifacts', desc: 'ML models in s3://polynovea-ml-artifacts/. Base model + per-tenant blended + tenant-only audit. Versioned by formula_version.' },
            ].map((item) => (
              <ParallaxCard key={item.title} depth={14} className="p-6">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg border border-gold-300/30 bg-gold-300/[0.08] text-gold-300">
                  <item.icon size={18} />
                </div>
                <h4 className="text-base font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-white/50">{item.desc}</p>
              </ParallaxCard>
            ))}
          </div>
        </Reveal>
      </Section>
    </div>
  )
}
