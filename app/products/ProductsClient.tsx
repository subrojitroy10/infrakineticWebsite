'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import {
  Target,
  Users,
  Wallet,
  ChartBar,
  Briefcase,
  Building,
  Sliders,
  GitBranch,
  Ticket,
  Shield,
  FileText,
  Lock,
  ArrowRight,
  Check,
} from '@/components/ui/Icons'

const coreProducts = [
  {
    id: 'commerce',
    icon: Target,
    title: 'Commerce',
    subtitle: 'Atomic Pack — Never Split',
    components: ['Commercial', 'Sales'],
    description: 'Hard FKs, shared tables, single pipeline. Commercial + Sales are one product because the handoff from lead to contract to revenue cannot afford a seam.',
    color: 'gold',
    features: [
      'Pipeline & deal management',
      'Agreements & orders',
      'Renewal loop auto-creation',
      'Expansion detection',
      'Revenue attribution to source',
    ],
  },
  {
    id: 'people',
    icon: Users,
    title: 'People',
    subtitle: 'Atomic Pack — 4 Gates, One Product',
    components: ['HR Core', 'Recruitment', 'Workforce', 'Payroll'],
    description: 'Four RBAC gates (HR, Recruitment, Workforce, Payroll) on shared employee records. Payroll runs from governed records, not disconnected handoffs.',
    color: 'violet',
    features: [
      'Employee lifecycle (hire → retire)',
      'Recruitment → onboarding flow',
      'Bitemporal payroll history',
      'Statutory compliance (EPF, ESI, GST)',
      'Performance & compensation',
    ],
  },
  {
    id: 'finance',
    icon: Wallet,
    title: 'Finance',
    subtitle: 'Standalone Product',
    components: ['Budgets', 'Invoices', 'Accounting'],
    description: 'Append-only ledger, hash chains, tamper-evident by architecture. Finance emits events — invoice_overdue, payment_received, write_off — so intelligence sees cash flow.',
    color: 'gold',
    features: [
      'Double-entry accounting',
      'AR/AP with payment behavior tracking',
      'Budget vs actuals',
      'Hash chain audit trail',
      'Multi-currency, multi-entity',
    ],
  },
  {
    id: 'marketing',
    icon: ChartBar,
    title: 'Marketing',
    subtitle: 'Standalone Product',
    components: ['Campaigns', 'Content', 'Lead Tracking'],
    description: 'Campaigns, email sequences, lead scoring. Email events (open/click/bounce) feed into intelligence when writer exists.',
    color: 'violet',
    features: [
      'Multi-channel campaigns',
      'Email sequences & tracking',
      'Lead scoring (persisted)',
      'Content library',
      'Attribution to revenue',
    ],
  },
  {
    id: 'operations',
    icon: Briefcase,
    title: 'Operations',
    subtitle: 'Standalone Product',
    components: ['Projects', 'Delivery', 'Resources'],
    description: 'Project delivery, resource planning, utilization. Connects to Finance for invoicing, to People for staffing.',
    color: 'gold',
    features: [
      'Project lifecycle & milestones',
      'Resource allocation & utilization',
      'Time tracking & billing',
      'Delivery health signals',
      'Capacity planning',
    ],
  },
]

const addOns = [
  {
    id: 'agency',
    icon: Building,
    title: 'Marketing Agency',
    subtitle: 'Add-on — Needs Commerce',
    description: 'Client workspaces, retainer management, agency-specific reporting. Hard FK to Commercial — cannot exist without Commerce.',
    color: 'violet',
    requires: 'Commerce',
    features: [
      'Multi-client workspaces',
      'Retainer & project billing',
      'Agency P&L per client',
      'Client portal access',
      'Resource sharing across clients',
    ],
  },
  {
    id: 'cx360',
    icon: Target,
    title: 'CX360',
    subtitle: 'Add-on — Needs Commerce',
    description: 'Portfolio Radar, health scoring, interventions, action rail, calibrated churn risk. The customer record that connects commercial, finance, support, and success.',
    color: 'gold',
    requires: 'Commerce',
    features: [
      'Portfolio Radar (server-ranked)',
      'Lifecycle state + health + delta',
      'Measured interventions (+30d outcome)',
      'Action rail (renewal, payment, case, suspend, NPS)',
      'Calibrated churn risk (3 tiers)',
    ],
  },
  {
    id: 'equity',
    icon: ChartBar,
    title: 'Equity',
    subtitle: 'Add-on — Needs People',
    description: 'Cap table, equity grants, vesting schedules, scenario modeling. Hard FK to People — employee records are the source of truth.',
    color: 'violet',
    requires: 'People',
    features: [
      'Cap table management',
      'Grant lifecycle (approval → vest)',
      'Scenario modeling (exit, dilution)',
      '409A valuation tracking',
      'Employee equity portal',
    ],
  },
]

const platformInfra = [
  { icon: Sliders, title: 'Approvals', desc: 'Multi-step chains, role-based routing, SLA, audit trail' },
  { icon: GitBranch, title: 'Workflow', desc: 'Stage-based automation, cross-engine triggers, assignment registry' },
  { icon: Ticket, title: 'Tickets', desc: 'Case types, SLA with pause states, breach notifications' },
  { icon: Shield, title: 'Governance', desc: 'Teams, roles, hierarchy as operating model, permissioned execution' },
  { icon: FileText, title: 'Documents', desc: 'Folders, versioning, expiry, approval workflow, quota' },
]

export default function ProductsClient() {
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
            <span className="eyebrow">Products &amp; Packaging</span>
            <h1 className="heading-serif mt-5 text-4xl md:text-5xl lg:text-[4.4rem] leading-[1.04]">
              Atomic Packs. Three Add-ons. Five Free Platform Engines.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Commerce = Commercial + Sales. People = HR + Recruitment + Workforce + Payroll. Never split. Add-ons have hard dependencies. Platform infra is always free.
            </p>
          </motion.div>
        </div>
      </section>

      <Section
        id="core"
        eyebrow="Core Products"
        title="Two Atomic Packs + Three Standalone Products"
        lead="Atomic packs share tables and RBAC — they cannot be purchased separately. Standalone products integrate via the shared foundation."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <ParallaxCard depth={14 + i * 2} className="h-full p-6 md:p-8 flex flex-col">
                  <div className={`mb-4 grid h-12 w-12 place-items-center rounded-xl border ${product.color === 'gold' ? 'border-gold-300/30 bg-gold-300/[0.08] text-gold-300' : 'border-violet-400/30 bg-violet-400/[0.08] text-violet-300'}`}>
                    <product.icon size={20} />
                  </div>
                  <h3 className="heading-serif text-xl mb-1">{product.title}</h3>
                  <p className="text-sm text-gold-300/80 mb-3">{product.subtitle}</p>
                  <p className="text-white/60 text-sm mb-4 flex-1">{product.description}</p>
                  <ul className="space-y-2 text-sm text-white/60">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check size={12} className="shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </ParallaxCard>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="fade" className="mt-20">
          <ParallaxCard depth={12} className="p-6 md:p-8">
            <h3 className="heading-serif text-2xl mb-6 text-center">Atomic Pack Logic — Visualized</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gold-300/30 bg-gold-300/[0.04] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target size={20} className="text-gold-300" />
                  <h4 className="text-lg font-semibold text-white">Commerce = Commercial + Sales</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-gold-300/20 bg-gold-300/[0.04]">
                    <span className="w-8 h-8 rounded-lg bg-gold-300/20 flex items-center justify-center text-gold-300 font-mono text-xs">C</span>
                    <div>
                      <p className="font-medium text-white">Commercial</p>
                      <p className="text-white/50">Lead → Qualified → Opportunity</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-gold-300/20 bg-gold-300/[0.04]">
                    <span className="w-8 h-8 rounded-lg bg-gold-300/20 flex items-center justify-center text-gold-300 font-mono text-xs">S</span>
                    <div>
                      <p className="font-medium text-white">Sales</p>
                      <p className="text-white/50">Opportunity → Agreement → Order</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-gold-300/50 bg-gold-300/[0.08]">
                    <span className="w-8 h-8 rounded-lg bg-gold-300/30 flex items-center justify-center text-gold-300 font-mono text-xs">+</span>
                    <div>
                      <p className="font-medium text-gold-300">Shared Tables</p>
                      <p className="text-gold-300/70">organizations, contacts, deals, orders, agreements</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-gold-300/50 bg-gold-300/[0.08]">
                    <span className="w-8 h-8 rounded-lg bg-gold-300/30 flex items-center justify-center text-gold-300 font-mono text-xs">+</span>
                    <div>
                      <p className="font-medium text-gold-300">Hard FKs</p>
                      <p className="text-gold-300/70">deal.organization_id → organizations.id (NOT NULL)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-gold-300/50 bg-gold-300/[0.08]">
                    <span className="w-8 h-8 rounded-lg bg-gold-300/30 flex items-center justify-center text-gold-300 font-mono text-xs">+</span>
                    <div>
                      <p className="font-medium text-gold-300">Single RBAC</p>
                      <p className="text-gold-300/70">4 gates: view, edit, approve, admin</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-violet-400/30 bg-violet-400/[0.04] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users size={20} className="text-violet-300" />
                  <h4 className="text-lg font-semibold text-white">People = HR + Recruitment + Workforce + Payroll</h4>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-violet-400/20 bg-violet-400/[0.04]">
                    <span className="w-8 h-8 rounded-lg bg-violet-400/20 flex items-center justify-center text-violet-300 font-mono text-xs">HR</span>
                    <div>
                      <p className="font-medium text-white">HR Core</p>
                      <p className="text-white/50">Employee records, org structure</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-violet-400/20 bg-violet-400/[0.04]">
                    <span className="w-8 h-8 rounded-lg bg-violet-400/20 flex items-center justify-center text-violet-300 font-mono text-xs">REC</span>
                    <div>
                      <p className="font-medium text-white">Recruitment</p>
                      <p className="text-white/50">Candidate → Hiring → Onboarding</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-violet-400/20 bg-violet-400/[0.04]">
                    <span className="w-8 h-8 rounded-lg bg-violet-400/20 flex items-center justify-center text-violet-300 font-mono text-xs">WF</span>
                    <div>
                      <p className="font-medium text-white">Workforce</p>
                      <p className="text-white/50">Scheduling, leave, performance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border border-violet-400/20 bg-violet-400/[0.04]">
                    <span className="w-8 h-8 rounded-lg bg-violet-400/20 flex items-center justify-center text-violet-300 font-mono text-xs">PAY</span>
                    <div>
                      <p className="font-medium text-white">Payroll</p>
                      <p className="text-white/50">Bitemporal, statutory, governed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg border-2 border-violet-400/50 bg-violet-400/[0.08]">
                    <span className="w-8 h-8 rounded-lg bg-violet-400/30 flex items-center justify-center text-violet-300 font-mono text-xs">4</span>
                    <div>
                      <p className="font-medium text-violet-300">RBAC Gates</p>
                      <p className="text-violet-300/70">HR | Recruitment | Workforce | Payroll</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxCard>
        </Reveal>
      </Section>

      <Section
        id="addons"
        eyebrow="Add-Ons"
        title="Three Add-Ons — Hard Dependencies, Not Upsells"
        lead="Each add-on has a hard FK to a core product. You cannot buy CX360 without Commerce. You cannot buy Equity without People. This is architectural, not commercial."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {addOns.map((addon, i) => (
              <motion.div
                key={addon.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <ParallaxCard depth={14 + i * 2} className="h-full p-6 md:p-8 flex flex-col">
                  <div className={`mb-4 grid h-12 w-12 place-items-center rounded-xl border ${addon.color === 'gold' ? 'border-gold-300/30 bg-gold-300/[0.08] text-gold-300' : 'border-violet-400/30 bg-violet-400/[0.08] text-violet-300'}`}>
                    <addon.icon size={20} />
                  </div>
                  <h3 className="heading-serif text-xl mb-1">{addon.title}</h3>
                  <p className="text-sm text-gold-300/80 mb-3">{addon.subtitle}</p>
                  <p className="text-white/60 text-sm mb-4 flex-1">{addon.description}</p>
                  <div className="mb-4 p-3 rounded-lg border border-gold-300/30 bg-gold-300/[0.04] flex items-center gap-2">
                    <Lock size={14} className="text-gold-300" />
                    <span className="text-sm font-medium text-gold-300">Requires: {addon.requires}</span>
                  </div>
                  <ul className="space-y-2 text-sm text-white/60">
                    {addon.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check size={12} className="shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </ParallaxCard>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        id="platform-infra"
        eyebrow="Platform Infrastructure"
        title="Five Engines — Free for Every Tenant. Always."
        lead="Approvals, Workflow, Tickets, Governance, Documents. Not a tier. Not a feature flag. The substrate every product runs on."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {platformInfra.map((infra, i) => (
              <motion.div
                key={infra.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <ParallaxCard depth={14 + i * 2} className="h-full p-6">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg border border-gold-300/30 bg-gold-300/[0.08] text-gold-300">
                    <infra.icon size={18} />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">{infra.title}</h4>
                  <p className="text-sm text-white/50">{infra.desc}</p>
                </ParallaxCard>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="fade" className="mt-10">
          <ParallaxCard depth={12} className="rounded-2xl border border-gold-300/30 bg-gold-300/[0.06] p-6 md:p-8 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 block mb-4">
              Always Included
            </span>
            <h3 className="heading-serif text-2xl md:text-3xl mb-6">
              Platform infra is not a product tier.
            </h3>
            <div className="max-w-2xl mx-auto space-y-3 text-left">
              {[
                'No feature flags — all engines enabled for every tenant',
                'No upsell — platform infra is not a product tier',
                'No seat limits — unlimited users within tenant',
                'No usage caps — storage quota is configurable, not tiered',
                'RBAC included — governance engine powers all access control',
              ].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.06 }}
                  className="flex items-start gap-3"
                >
                  <Check size={16} className="shrink-0 mt-0.5 text-gold-300" />
                  <span className="text-white/70">{item}</span>
                </motion.div>
              ))}
            </div>
          </ParallaxCard>
        </Reveal>
      </Section>

      <Section
        id="cta"
        align="center"
      >
        <Reveal variant="fade" className="mt-14">
          <ParallaxCard depth={12} className="rounded-2xl border border-gold-300/30 bg-gold-300/[0.06] p-6 md:p-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 block mb-4">
              Ready to Evaluate?
            </span>
            <h3 className="heading-serif text-2xl md:text-3xl mb-6">
              Request a platform briefing to see how the products work together.
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
