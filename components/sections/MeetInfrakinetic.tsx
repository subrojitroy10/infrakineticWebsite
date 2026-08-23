'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { meet } from '@/lib/content'
import { Check, Sliders, Wallet, Briefcase, FileText, Bell, Key, Database, Building, ChevronRight } from '@/components/ui/Icons'
import { StatusBadge } from '@/components/shared'

const foundationIcons = [Building, Key, Sliders, Check, FileText, Database, Briefcase, Wallet, Bell]

const lifecycleStates = [
  { id: 'prospect', label: 'Prospect', color: 'prospect', description: 'Default state for new organizations' },
  { id: 'qualified', label: 'Qualified', color: 'qualified', description: 'Organization has been qualified by sales' },
  { id: 'in_pipeline', label: 'In Pipeline', color: 'in_pipeline', description: 'Active opportunities exist' },
  { id: 'committed', label: 'Committed', color: 'committed', description: 'Deal won, order created, pre-onboarding' },
  { id: 'onboarding', label: 'Onboarding', color: 'onboarding', description: 'Onboarding milestones in progress' },
  { id: 'active', label: 'Active', color: 'active', description: 'Active subscription or fulfilled order' },
  { id: 'at_risk', label: 'At Risk', color: 'at_risk', description: 'Health score < 40, overdue invoices, or urgent cases' },
  { id: 'renewing', label: 'Renewing', color: 'renewing', description: 'Contract renewal within 90 days' },
  { id: 'expanding', label: 'Expanding', color: 'expanding', description: 'Open expansion opportunity' },
  { id: 'churned', label: 'Churned', color: 'churned', description: 'All subscriptions cancelled / contract terminated' },
  { id: 'won_back', label: 'Won Back', color: 'won_back', description: 'Reactivated from churned via explicit action' },
]

const precedenceRules = [
  { priority: 1, state: 'churned', condition: 'Zero active subscriptions AND (≥1 cancelled subscription OR agreement terminated)' },
  { priority: 2, state: 'at_risk', condition: '≥2 overdue invoices OR health < 40 OR health dropped >20pts in 30d OR urgent case >7d' },
  { priority: 3, state: 'renewing', condition: 'Agreement renewal_date within 90 days' },
  { priority: 4, state: 'expanding', condition: 'Open opportunity with type=expansion' },
  { priority: 5, state: 'onboarding', condition: 'Onboarding milestones exist and incomplete' },
  { priority: 6, state: 'active', condition: '≥1 active subscription OR fulfilled order' },
  { priority: 7, state: 'committed', condition: 'Won deal with order, no subscription/onboarding yet' },
  { priority: 8, state: 'in_pipeline', condition: '≥1 open opportunity' },
  { priority: 9, state: 'qualified', condition: 'organizations.current_status = qualified' },
  { priority: 10, state: 'prospect', condition: 'Default' },
]

export default function MeetInfrakinetic() {
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [showPrecedence, setShowPrecedence] = useState(false)

  return (
    <Section id="platform" eyebrow={meet.eyebrow} title={meet.title} lead={meet.lead}>
      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal variant="left">
          <ParallaxCard
            depth={18}
            className="relative h-full overflow-hidden rounded-2xl border border-brand-plum bg-gradient-to-br from-brand-plum to-brand-obsidian p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                Shared Infrastructure — Lifecycle Spine
              </span>
              <button
                onClick={() => setShowPrecedence(!showPrecedence)}
                className="text-xs font-medium text-gold-300 hover:text-gold-200 flex items-center gap-1"
                aria-expanded={showPrecedence}
              >
                <span>Precedence rules</span>
                <ChevronRight size={12} className={`transition-transform ${showPrecedence ? 'rotate-90' : ''}`} />
              </button>
            </div>

            <div className="space-y-3">
              {lifecycleStates.map((state, i) => {
                const isSelected = selectedState === state.id
                const isSticky = ['churned', 'won_back'].includes(state.id)
                const isMainFlow = !['won_back'].includes(state.id)

                return (
                  <motion.div
                    key={state.id}
                    layout
                    onClick={() => setSelectedState(isSelected ? null : state.id)}
                    className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-white/[0.05] border border-gold-300/30'
                        : 'bg-white/[0.02] border border-white/5 hover:border-gold-300/20 hover:bg-white/[0.04]'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <StatusBadge
                      value={state.id}
                      family="lifecycle"
                      size="sm"
                      dot
                      className="shrink-0 min-w-[140px]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-medium ${isSelected ? 'text-gold-300' : 'text-white/80'} truncate`}>
                        {state.label}
                        {isSticky && <span className="ml-2 text-[9px] font-medium text-white/40">(sticky)</span>}
                      </p>
                      <p className="text-[10px] text-white/40 truncate">{state.description}</p>
                    </div>
                    {isMainFlow && i < lifecycleStates.length - 1 && (
                      <div className="flex items-center justify-center w-8 text-white/20" aria-hidden>
                        <ChevronRight size={16} />
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            <AnimatePresence>
              {showPrecedence && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 overflow-hidden"
                >
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-3">
                      Resolution precedence (first match wins)
                    </p>
                    <div className="space-y-2 text-sm">
                      {precedenceRules.map((rule) => (
                        <div key={rule.state} className="flex items-start gap-3 text-white/60">
                          <span className="shrink-0 font-mono text-gold-300 tabular-nums w-6">{rule.priority}.</span>
                          <StatusBadge value={rule.state} family="lifecycle" size="xs" dot className="shrink-0 mt-0.5" />
                          <span className="flex-1">{rule.condition}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-white/65">
                      Computed by resolver; transitions written atomically with business_events + work automation dispatch.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </ParallaxCard>
        </Reveal>

        <Reveal variant="right" delay={0.1}>
          <ParallaxCard
            depth={22}
            className="h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 flex flex-col"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-4">
              Shared Infrastructure
            </span>
            <div className="grid gap-3 sm:grid-cols-3 mb-6 flex-1">
              {meet.foundation.map((item, i) => {
                const Icon = foundationIcons[i]
                return (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-ink-900/35 p-4"
                  >
                    <Icon size={16} className="text-gold-300" />
                    <p className="mt-3 text-sm font-medium text-white/80">{item}</p>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-white/10 pt-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40 mb-3 block">
                Operating Engines
              </span>
              <div className="flex flex-wrap gap-2">
                {meet.engines.map((engine) => (
                  <span
                    key={engine}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm font-medium text-white/65 hover:border-gold-300/30 hover:bg-gold-300/10 transition-colors"
                  >
                    {engine}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                The number of engines is not the claim. The claim is that each engine participates in
                the same records, permissions, events, approvals, and reporting model.
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-gold-300/30 bg-gold-300/[0.04] p-4">
              <div className="flex items-start gap-3">
                <span className="shrink-0 grid h-8 w-8 place-items-center rounded-lg bg-gold-300/15 text-gold-300">
                  <Database size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-gold-300">Engines that come as complete systems</p>
                  <p className="mt-1 text-xs text-white/60">
                    <strong>Commerce</strong> is Commercial and Sales working as one connected pipeline.<br />
                    <strong>People</strong> is HR, Recruitment, Workforce, and Payroll sharing a single employee record.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-violet-400/30 bg-violet-400/[0.04] p-4">
              <div className="flex items-start gap-3">
                <span className="shrink-0 grid h-8 w-8 place-items-center rounded-lg bg-violet-400/15 text-violet-300">
                  <Sliders size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-violet-300">Platform infrastructure included from day one</p>
                  <p className="mt-1 text-xs text-white/60">
                    Approvals, Workflow, Tickets, Governance, and Documents ship with every tenant —
                    not held back as something you have to unlock later.
                  </p>
                </div>
              </div>
            </div>
          </ParallaxCard>
        </Reveal>
      </div>
    </Section>
  )
}
