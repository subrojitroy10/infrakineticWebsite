'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { FAQSection, KeyTakeaway, UnderTheHood } from '@/components/shared'
import { Database, GitBranch, Zap, Shield, Lock, ArrowRight, HeartPulse, TrendingUp, RefreshCw } from '@/components/ui/Icons'

const architecturePillars = [
  {
    icon: Database,
    title: 'One Business Data Model',
    desc: 'Commercial, Finance, HR, Payroll, Documents, and Workflow operate on shared business entities rather than maintaining independent synchronized copies. No syncing, no copies drifting out of date.',
    color: 'gold',
  },
  {
    icon: GitBranch,
    title: 'Governed Events',
    desc: 'Catalogued business events — a deal won, an invoice paid, a candidate hired — can trigger workflows, automations, and registered platform actions across engine boundaries. Cross-team handoffs become automatic, not an integration project.',
    color: 'violet',
  },
  {
    icon: Zap,
    title: 'Atomic Where It Matters',
    desc: 'Operations that must succeed or fail together are executed transactionally. A won opportunity can create its Deal, Project, and Order as one controlled transaction — downstream processes like finance notification then react through the automation layer.',
    color: 'gold',
  },
]

const signalTypes = [
  { label: 'Lead Quality', icon: TrendingUp, desc: 'How likely a prospect is to convert, updated as new information comes in.' },
  { label: 'Deal Priority', icon: TrendingUp, desc: 'Ranks your pipeline by win probability, so reps know where to spend time.' },
  { label: 'Customer Health', icon: HeartPulse, desc: 'One score combining subscription status, payment behavior, engagement, satisfaction, onboarding progress, and support experience.' },
  { label: 'Churn Risk', icon: Shield, desc: 'Gets more precise as a tenant\'s history grows — starts simple, becomes predictive with scale.' },
  { label: 'Relationship Strength', icon: HeartPulse, desc: 'How engaged and broad the relationship is, from real logged calls, meetings, and emails.' },
  { label: 'Renewal Readiness', icon: RefreshCw, desc: 'Signals when an account is approaching renewal, drawn from its lifecycle stage and contract terms.' },
  { label: 'Expansion Readiness', icon: TrendingUp, desc: 'Flags accounts showing signs they\'re ready to grow, so expansion conversations happen at the right time.' },
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

const tenantIsolationItems = [
  { icon: Lock, title: 'Isolated at the data layer, not just the app', desc: 'Every tenant\'s data is walled off below the application — so isolation doesn\'t depend on every screen and every feature getting a filter right by hand.' },
  { icon: Shield, title: 'No shared learning across tenants', desc: 'Predictive scoring is trained and run separately for each tenant. One customer\'s data is never used to build or improve another customer\'s model.' },
  { icon: Database, title: 'India data residency', desc: 'Data is stored in a single region in India, encrypted at rest and in transit, with no cross-region replication.' },
]

const faqItems = [
  {
    question: 'What makes Infrakinetic\'s architecture different from a normal SaaS stack?',
    answer: 'Every engine — Commercial, Finance, HR, Documents, Workflow — reads and writes to the same underlying data and reacts to the same events. There\'s no background sync process trying to keep separate copies in agreement, because there\'s only one copy to begin with.',
  },
  {
    question: 'How does Infrakinetic keep customer data isolated between tenants?',
    answer: 'Isolation is enforced below the application layer, not just in screens and permissions, using database-level row policies rather than relying on every feature remembering to apply the right filter. Production certification remains an explicit release-evidence step.',
  },
  {
    question: 'What is the lifecycle spine?',
    answer: 'A single view of every account\'s journey — prospect through won-back — shared across Sales and Customer Success. There\'s no separate "sales stage" and "customer stage" that can disagree with each other.',
  },
  {
    question: 'How is churn risk calculated?',
    answer: 'The model gets more sophisticated as a tenant\'s own history grows — simple and rule-based at first, increasingly predictive with more data — and it\'s always trained on that tenant\'s data alone, never pooled across customers.',
  },
  {
    question: 'Is Infrakinetic single-tenant or multi-tenant?',
    answer: 'Multi-tenant, with each customer\'s data and predictive models kept fully separate under the hood — not just filtered apart in the interface.',
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
              One Business Data Model. Governed Events. Atomic Where It Matters.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Infrakinetic runs every business engine — Commercial, Finance, HR, Documents, Workflow — on one shared foundation, so the 17 engines it ships with cannot drift apart the way separate, synced tools do.
            </p>
          </motion.div>
        </div>
      </section>

      <Section id="what-is-the-architecture" eyebrow="In one paragraph" title="What makes Infrakinetic's architecture different?">
        <Reveal variant="fade" className="mt-6 max-w-3xl">
          <p className="text-lg leading-relaxed text-white/70">
            Infrakinetic engines operate on shared business entities and react to a catalogued set of
            business events, so there&apos;s no background process trying to keep separate systems in
            agreement. A won opportunity can create its Deal, Project, and Order as one controlled
            transaction, while downstream processes like finance notification react through the
            automation layer.
          </p>
        </Reveal>
      </Section>

      <Section
        id="architecture"
        eyebrow="Core Architecture"
        title="Three Pillars That Make Everything Else Possible"
        lead="Every differentiator — the lifecycle spine, customer intelligence, atomic packs, free platform infra — derives from these three architectural decisions."
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
        <KeyTakeaway>
          Infrakinetic&apos;s engines share one foundation instead of syncing copies between separate tools — so cross-engine automation just works, instead of being a project every time.
        </KeyTakeaway>
        <p className="mt-6 text-sm text-white/50">
          This is also what makes{' '}
          <Link href="/migration" className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200">
            migration reconciliation
          </Link>{' '}
          possible — data lands on the same governed model, not a separate synced copy. See how it&apos;s packaged across{' '}
          <Link href="/products" className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200">
            product families
          </Link>
          .
        </p>
      </Section>

      <Section
        id="lifecycle-spine"
        eyebrow="Lifecycle Spine"
        title="The Loop That Closes Itself"
        lead="One connected view of every account's journey, spanning Commercial, Sales, and Customer Success. No handoff gap at 'won'. Renewals and expansion are detected automatically, not tracked by hand."
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
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/50 text-center">
                Every account moves through this journey automatically as real business events happen — no one has to manually update a status.
              </p>
            </div>
          </ParallaxCard>
        </Reveal>
        <KeyTakeaway>
          A won deal never sits in a spreadsheet waiting for someone to remember the renewal date — the lifecycle spine creates the renewal opportunity automatically, 90 days out, with full deal context carried forward.
        </KeyTakeaway>
      </Section>

      <Section
        id="signal-framework"
        eyebrow="Customer Intelligence"
        title="Every Score Tracked Over Time, Not Just Today's Snapshot"
        lead="Lead quality, deal priority, customer health, churn risk — one connected scoring system instead of four disconnected spreadsheets, so you see the trend, not just a number."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {signalTypes.map((signal) => (
              <ParallaxCard key={signal.label} depth={14} className="p-5">
                <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg border border-gold-300/30 bg-gold-300/[0.08] text-gold-300">
                  <signal.icon size={16} />
                </div>
                <h4 className="text-base font-semibold text-white mb-1">{signal.label}</h4>
                <p className="text-sm text-white/50">{signal.desc}</p>
              </ParallaxCard>
            ))}
          </div>
        </Reveal>

        <Reveal variant="fade" className="mt-10">
          <ParallaxCard depth={14} className="p-6 md:p-8 border-gold-300/30 bg-gold-300/[0.04]">
            <h3 className="heading-serif text-xl mb-4">Why This Matters for Your Business</h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <p className="font-semibold text-gold-300">Scores Improve Without Losing History</p>
                <p className="text-sm text-white/60">When a scoring model is refined, past scores stay intact — you always know which version produced which number.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gold-300">Trends, Not Just Snapshots</p>
                <p className="text-sm text-white/60">Lead quality and deal priority become trend lines you can watch over time, not a number that resets every time you refresh the page.</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-gold-300">Scores Connected to Outcomes</p>
                <p className="text-sm text-white/60">Every score can be compared against what actually happened — the precondition for intelligence that actually improves decisions, not just looks impressive.</p>
              </div>
            </div>
          </ParallaxCard>
        </Reveal>
      </Section>

      <Section
        id="tenant-isolation"
        eyebrow="Data Isolation"
        title="Built to Align With DPDP 2023 by Architecture, Not Policy"
        lead="Your data is never mixed with another customer's — not just as a policy, but as a structural guarantee enforced by database-level controls below the application layer."
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
          Isolation is a structural guarantee enforced by database-level controls, not a screen-by-screen policy — production certification remains an explicit release-evidence step, not an assumption.
        </KeyTakeaway>
        <UnderTheHood label="Under the hood: how isolation is enforced">
          <ul className="space-y-2">
            <li><span className="font-medium text-white/80">PostgreSQL Row-Level Security</span> — tenant context is set per request and enforced by database policies, not filtered in application code.</li>
            <li><span className="font-medium text-white/80">Audit triggers</span> — writes to tenant-scoped tables are logged at the database layer, independent of which API route made the change.</li>
            <li><span className="font-medium text-white/80">Tenant-local model boundaries</span> — relationships between records are validated as tenant-safe, so a foreign key can never point across a tenant boundary.</li>
          </ul>
        </UnderTheHood>
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
              Walk through the platform architecture and data isolation model in a live briefing.
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
