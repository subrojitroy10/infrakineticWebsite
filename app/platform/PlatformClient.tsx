'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { FAQSection, KeyTakeaway } from '@/components/shared'
import { Database, GitBranch, Zap, Shield, Lock, ArrowRight, Server, Layers, Network } from '@/components/ui/Icons'

const architecturePillars = [
  {
    icon: Database,
    title: 'Single Shared Database',
    desc: 'Commercial, Finance, HR, Payroll, Documents, and Workflow all read and write to the same tables. No sync, no ETL, no eventual consistency — just one source of truth.',
    color: 'gold',
  },
  {
    icon: GitBranch,
    title: 'One Event Bus',
    desc: 'Every business action — a deal won, an invoice paid, a candidate hired — publishes an event. Automation reacts instantly across engines. Cross-team workflows become queries, not integration projects.',
    color: 'violet',
  },
  {
    icon: Zap,
    title: 'One Transaction Boundary',
    desc: 'State changes, events, and automation dispatch happen atomically. No dual-write bugs. No outbox patterns. The database guarantees consistency — so your teams don\'t have to.',
    color: 'gold',
  },
  {
    icon: Shield,
    title: 'Lifecycle Spine',
    desc: 'A single 10-state journey from prospect to won-back, spanning Commercial, Sales, and Customer Success. Renewal auto-creates an opportunity. Expansion detected natively. No handoff gaps at "won."',
    color: 'violet',
  },
  {
    icon: Lock,
    title: 'Signal Framework',
    desc: 'Lead quality, opportunity priority, customer health, churn risk, relationship engagement, renewal readiness, expansion readiness — all persisted, versioned, correlated with outcomes. The foundation for trustworthy ML.',
    color: 'gold',
  },
  {
    icon: Network,
    title: 'Tenant Isolation by Architecture',
    desc: 'Isolation is enforced at the database layer, not application code. A missed filter returns zero rows, not another tenant\'s data. Cross-tenant ML pooling is structurally impossible. Built to align with India\'s Digital Personal Data Protection Act, 2023 (DPDP).',
    color: 'violet',
  },
]

const signalTypes = [
  { type: 'lead_quality', entity: 'Organizations', desc: 'Predicts conversion likelihood. Persisted on org create/update.' },
  { type: 'opportunity_priority', entity: 'Opportunities', desc: 'Ranks pipeline by win probability. Persisted on opp create/update.' },
  { type: 'customer_health', entity: 'Organizations', desc: '6 components: subscription, financial, engagement, NPS, onboarding, support' },
  { type: 'churn_risk', entity: 'Organizations', desc: 'Three-tier: heuristic → statistical → learned. Conformal intervals.' },
  { type: 'relationship_engagement', entity: 'Organizations', desc: 'Recency, cadence, breadth, case ratio — from sales activities' },
  { type: 'renewal_readiness', entity: 'Organizations', desc: 'Derived from lifecycle state + contract data' },
  { type: 'expansion_readiness', entity: 'Organizations', desc: 'Derived from expansion opportunity signals' },
]

const lifecycleStates = [
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
]

const precedenceRules = [
  { n: 1, state: 'churned', condition: 'Zero active subscriptions AND (≥1 cancelled subscription OR agreement terminated)' },
  { n: 2, state: 'at_risk', condition: '≥2 overdue invoices OR health < 40 OR health dropped >20pts in 30d OR urgent case >7d' },
  { n: 3, state: 'renewing', condition: 'Agreement renewal date within 90 days' },
  { n: 4, state: 'expanding', condition: 'Open opportunity with type=expansion' },
  { n: 5, state: 'onboarding', condition: 'Onboarding milestones exist and incomplete' },
  { n: 6, state: 'active', condition: '≥1 active subscription OR fulfilled order' },
  { n: 7, state: 'committed', condition: 'Won deal with order, no subscription/onboarding yet' },
  { n: 8, state: 'in_pipeline', condition: '≥1 open opportunity' },
  { n: 9, state: 'qualified', condition: 'Organization status = qualified' },
  { n: 10, state: 'prospect', condition: 'Default' },
]

const tenantIsolationItems = [
  { icon: Lock, title: 'Enforced at the database, not just in code', desc: 'Every tenant\'s data is walled off at the database layer. Even if there were a bug in application code, the database itself would still block cross-tenant access — isolation doesn\'t depend on every screen getting the filter right.' },
  { icon: Server, title: 'No privileged bypass for ML', desc: 'The scoring service connects with the same restricted, tenant-scoped access as everything else — never through an elevated path that could see across tenants. A missing tenant filter returns zero rows, not everyone\'s.' },
  { icon: Layers, title: 'Per-tenant model artifacts', desc: 'Trained models are stored and looked up per tenant, always. One tenant\'s model is never merged into or used to initialize another\'s.' },
  { icon: Network, title: 'Job-level scope', desc: 'Every inference job is bound to exactly one tenant by construction — there\'s no shared batch that touches multiple tenants at once.' },
  { icon: Shield, title: 'Standing test on every deploy', desc: 'Automated test: model for tenant A produces identical output whether tenant B rows exist or not. Runs on every deploy.' },
  { icon: Database, title: 'Data residency', desc: 'Single-region RDS (ap-south-1). No cross-region replication. Encryption at rest + transit. Key management via AWS KMS.' },
]

const faqItems = [
  {
    question: 'What makes Infrakinetic\'s architecture different from a normal SaaS stack?',
    answer: 'Every engine — Commercial, Finance, HR, Documents, Workflow — reads and writes to the same database and reacts to the same event bus. There is no sync job, no ETL pipeline, and no eventual consistency between modules, because there is only one copy of the data to begin with.',
  },
  {
    question: 'How does Infrakinetic keep tenant data isolated?',
    answer: 'Isolation is enforced at the database layer, not in application code. A missing tenant filter returns zero rows rather than another tenant\'s data, and a standing automated test verifies this on every deploy — the guarantee doesn\'t rely on every screen getting the filter right.',
  },
  {
    question: 'What is the lifecycle spine?',
    answer: 'A single 10-state journey — prospect through won-back — that spans Commercial, Sales, and Customer Success. A first-match-wins precedence resolver decides which state an account is in, and every transition is written atomically alongside the business event that caused it.',
  },
  {
    question: 'How is churn risk calculated?',
    answer: 'A three-tier model: heuristic for low-volume tenants, statistical (survival analysis) once there\'s enough history, and a learned gradient-boosted model at scale — always trained and scored per tenant, never pooled across customers, with conformal prediction intervals shown alongside every estimate.',
  },
  {
    question: 'Is Infrakinetic single-tenant or multi-tenant?',
    answer: 'Multi-tenant at the infrastructure level with database-enforced row-level isolation per tenant — not application-level filtering alone. Each tenant\'s ML models and inference jobs are also scoped individually and never merged across accounts.',
  },
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
              One Database. One Event Bus. One Transaction Boundary.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Infrakinetic runs every business engine — Commercial, Finance, HR, Documents, Workflow — on one shared database, one event bus, and one transaction boundary, so the 11+ engines it ships with cannot drift apart the way synced tools do.
            </p>
          </motion.div>
        </div>
      </section>

      <Section id="what-is-the-architecture" eyebrow="In one paragraph" title="What makes Infrakinetic's architecture different?">
        <Reveal variant="fade" className="mt-6 max-w-3xl">
          <p className="text-lg leading-relaxed text-white/70">
            Every Infrakinetic engine reads and writes to the same database and reacts to the same event bus,
            so there is no sync job, no ETL pipeline, and no eventual consistency between modules — a deal
            closing and an invoice posting happen inside the same transaction boundary, not two systems
            catching up with each other later.
          </p>
        </Reveal>
      </Section>

      <Section
        id="architecture"
        eyebrow="Core Architecture"
        title="Three Pillars That Make Everything Else Possible"
        lead="Every differentiator — lifecycle spine, calibrated ML, atomic packs, free platform infra — derives from these three architectural decisions."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {architecturePillars.slice(0, 3).map((pillar, i) => (
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
        <KeyTakeaway>
          Infrakinetic&apos;s engines share one database and one transaction boundary instead of syncing copies between separate tools — so cross-engine automation is a query, not an integration project.
        </KeyTakeaway>
      </Section>

      <Section
        id="lifecycle-spine"
        eyebrow="Lifecycle Spine"
        title="The Loop That Closes Itself"
        lead="One state machine spanning Commercial → Sales → Customer Success. No handoff at 'won'. Renewal auto-creates opportunity. Expansion detected natively."
      >
        <Reveal variant="fade" className="mt-14">
          <ParallaxCard depth={18} className="p-6 md:p-8 overflow-x-auto">
            <div className="min-w-[800px]">
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {lifecycleStates.map((state) => (
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
                First-match-wins precedence resolver. Transitions written atomically with business events + work automation dispatch.
              </p>
            </div>
          </ParallaxCard>
        </Reveal>

        <Reveal variant="fade" className="mt-10">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {precedenceRules.map((rule) => (
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
        <KeyTakeaway>
          A won deal never sits in a spreadsheet waiting for someone to remember the renewal date — the lifecycle spine creates the renewal opportunity automatically, 90 days out, with full deal context carried forward.
        </KeyTakeaway>
      </Section>

      <Section
        id="signal-framework"
        eyebrow="Signal Framework"
        title="One Insert-Only Table. Seven Score Types. Versioned Forever."
        lead="entity_scores replaces fragmented scorers. Every score persisted, versioned, correlated with outcomes. The foundation for trustworthy ML."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-white/40 uppercase tracking-wider text-xs">
                  <th className="pb-3 pr-6">Score Type</th>
                  <th className="pb-3 pr-6">Entity</th>
                  <th className="pb-3 pr-6">Source</th>
                  <th className="pb-3">Business Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {signalTypes.map((signal) => (
                  <tr key={signal.type} className="hover:bg-white/[0.02]">
                    <td className="py-4 pr-6 font-mono text-gold-300">{signal.type}</td>
                    <td className="py-4 pr-6 text-white/70">{signal.entity}</td>
                    <td className="py-4 pr-6 text-white/50">Server-side, insert-only, versioned</td>
                    <td className="py-4 text-white/60">{signal.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal variant="fade" className="mt-10">
          <ParallaxCard depth={14} className="p-6 md:p-8 border-gold-300/30 bg-gold-300/[0.04]">
            <h3 className="heading-serif text-xl mb-4">Why This Matters for Your Business</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <p className="font-semibold text-gold-300">Versioned Formulas</p>
                <p className="text-sm text-white/60">heuristic_v1, heuristic_v2, ml_v1 coexist. Rebalancing weights never invalidates history — you always know which model produced which score.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gold-300">History for Every Score</p>
                <p className="text-sm text-white/60">Lead quality and opportunity priority become trend lines, not ephemeral browser values. You see the trajectory, not just the snapshot.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gold-300">One Join to Outcomes</p>
                <p className="text-sm text-white/60">Correlate any score with any outcome — the precondition for ML that actually improves decisions.</p>
              </div>
            </div>
          </ParallaxCard>
        </Reveal>
      </Section>

      <Section
        id="tenant-isolation"
        eyebrow="Tenant Isolation"
        title="Built to Align With DPDP 2023 by Architecture, Not Policy"
        lead="Cross-tenant ML pooling is structurally impossible, not just against policy. Every query is scoped to its tenant at the database layer, and a standing test enforces it on every deploy."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {tenantIsolationItems.map((item) => (
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
        <KeyTakeaway>
          Isolation lives in the database, not in application screens — so a missing filter returns zero rows instead of another tenant&apos;s records, and that guarantee is verified by an automated test on every single deploy, not just at design time.
        </KeyTakeaway>
      </Section>

      <FAQSection
        id="platform-faq"
        eyebrow="Architecture FAQ"
        title="Questions about how the platform is built"
        items={faqItems}
      />

      <Section id="cta" align="center">
        <Reveal variant="fade" className="mt-14">
          <ParallaxCard depth={12} className="rounded-2xl border border-gold-300/30 bg-gold-300/[0.06] p-6 md:p-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 block mb-4">
              See the Architecture Live
            </span>
            <h3 className="heading-serif text-2xl md:text-3xl mb-6">
              Walk through the schema, event bus, and tenant isolation model in a live platform briefing.
            </h3>
            <a href="/briefing" className="btn-primary inline-flex">
              Request briefing
              <ArrowRight size={15} />
            </a>
          </ParallaxCard>
        </Reveal>
      </Section>
    </div>
  )
}
