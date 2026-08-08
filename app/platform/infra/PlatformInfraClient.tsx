'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import {
  Sliders,
  GitBranch,
  Ticket,
  Shield,
  FileText,
  Check,
  ArrowRight,
  Server,
  Building,
} from '@/components/ui/Icons'

const infraEngines = [
  {
    icon: Sliders,
    title: 'Approvals',
    subtitle: 'Governance Engine',
    features: [
      'Multi-step approval chains',
      'Role-based routing (SUPERVISOR_CHAIN, SPECIFIC_ROLE)',
      'Fallback strategies',
      'Audit trail on every decision',
      'SLA tracking per step',
    ],
    color: 'gold',
  },
  {
    icon: GitBranch,
    title: 'Workflow',
    subtitle: 'Process Automation',
    features: [
      'Stage-based workflows with SLA',
      'Work automation dispatcher',
      'Cross-engine event triggers',
      'Conditional routing rules',
      'Assignment registry (tickets, approvals, reviews)',
    ],
    color: 'violet',
  },
  {
    icon: Ticket,
    title: 'Tickets',
    subtitle: 'Case Management',
    features: [
      'Multiple ticket types (customer_case, research_intake, document_review)',
      'SLA with pause states (on_hold, waiting_on_customer)',
      'Breach notifications',
      'Assignment chains',
      'Integration with approvals & workflows',
    ],
    color: 'gold',
  },
  {
    icon: Shield,
    title: 'Governance',
    subtitle: 'Organizational Structure',
    features: [
      'Teams, roles, hierarchy as operating model',
      'Permissioned execution across engines',
      'Actor attribution on every change',
      'Organizational structure IS the RBAC',
      'Audit-ready by default',
    ],
    color: 'violet',
  },
  {
    icon: FileText,
    title: 'Documents',
    subtitle: 'Managed Content',
    features: [
      'Folder hierarchy per entity',
      'Versioning, checksums, expiry tracking',
      'Approval workflow integration',
      'Recycle bin (soft delete)',
      'Per-tenant storage quota (default 5GB)',
    ],
    color: 'gold',
  },
]

const alwaysFree = [
  'Every tenant gets all five engines from day one',
  'Unlimited users within your organization',
  'Access control that scales with your team, not your plan',
]

export default function PlatformInfraClient() {
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
            <span className="eyebrow">Platform Infra</span>
            <h1 className="heading-serif mt-5 text-4xl md:text-5xl lg:text-[4.4rem] leading-[1.04]">
              Approvals. Workflow. Tickets. Governance. Documents.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Five engines, included with every tenant, from day one.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-gold-300">
              {alwaysFree.map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-1.5 bg-gold-300/[0.08] border border-gold-300/30 rounded-full px-4 py-2"
                >
                  <Check size={14} />
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Section
        id="engines"
        eyebrow="The Five Engines"
        title="Infrastructure That Runs the Platform"
        lead="Every Infrakinetic tenant gets these five engines enabled by default. They're not add-ons — they're the substrate every other engine runs on."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {infraEngines.map((engine, i) => (
              <motion.div
                key={engine.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <ParallaxCard depth={14 + i * 2} className="h-full p-6 md:p-8 flex flex-col">
                  <div className={`mb-4 grid h-12 w-12 place-items-center rounded-xl border ${engine.color === 'gold' ? 'border-gold-300/30 bg-gold-300/[0.08] text-gold-300' : 'border-violet-400/30 bg-violet-400/[0.08] text-violet-300'}`}>
                    <engine.icon size={20} />
                  </div>
                  <h3 className="heading-serif text-xl mb-1">{engine.title}</h3>
                  <p className="text-sm text-white/50 mb-4">{engine.subtitle}</p>
                  <ul className="flex-1 space-y-2 text-sm text-white/60">
                    {engine.features.map((feature) => (
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
          <ParallaxCard depth={12} className="rounded-2xl border border-gold-300/30 bg-gold-300/[0.06] p-6 md:p-8 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 block mb-4">
              Always Included
            </span>
            <h3 className="heading-serif text-2xl md:text-3xl mb-6">
              Platform infra is not a product tier.
            </h3>
            <div className="max-w-2xl mx-auto space-y-3 text-left">
              {alwaysFree.map((item) => (
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
        id="connections"
        eyebrow="Integration"
        title="Every Engine Runs on This Foundation"
        lead="Commercial, Sales, Finance, HR, Payroll, Marketing — they all write to business_events, read from entity_scores, route through workflows, gate through approvals, store in documents."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: GitBranch, title: 'Event Bus', desc: 'business_events — one append-only log. Cross-engine automation is a query, not a project.', color: 'violet' },
              { icon: Building, title: 'Shared Identity', desc: 'One organizations table. One contacts table. One app_users table. No sync needed.', color: 'gold' },
              { icon: Shield, title: 'Unified Permissions', desc: 'Governance engine powers RBAC for every engine. Teams, roles, hierarchy as operating model.', color: 'violet' },
              { icon: Sliders, title: 'Approval Gates', desc: 'Contract termination, subscription cancellation, high-value renewals — all routed through approvals.', color: 'gold' },
              { icon: Ticket, title: 'Case Management', desc: 'Customer cases, research intake, document review — unified ticket types with SLA.', color: 'violet' },
              { icon: FileText, title: 'Document Layer', desc: 'Every engine stores in Documents. Folders, expiry, approval, quota — shared infrastructure.', color: 'gold' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <ParallaxCard depth={14 + i * 2} className="h-full p-6">
                  <div className={`mb-4 grid h-10 w-10 place-items-center rounded-lg border ${item.color === 'gold' ? 'border-gold-300/30 bg-gold-300/[0.08] text-gold-300' : 'border-violet-400/30 bg-violet-400/[0.08] text-violet-300'}`}>
                    <item.icon size={18} />
                  </div>
                  <h4 className="text-base font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-white/50">{item.desc}</p>
                </ParallaxCard>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section
        id="cta"
        align="center"
      >
        <Reveal variant="fade" className="mt-14">
          <ParallaxCard depth={12} className="rounded-2xl border border-gold-300/30 bg-gold-300/[0.06] p-6 md:p-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 block mb-4">
              See It in Action
            </span>
            <h3 className="heading-serif text-2xl md:text-3xl mb-6">
              Request a platform briefing to see how the infra powers the product.
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
