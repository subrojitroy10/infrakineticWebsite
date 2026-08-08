'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { KpiTileRow, StatusBadge, EntityAvatar, DataTable, Sparkline, TrendDelta } from '@/components/shared'
import {
  Target,
  Users,
  Wallet,
  HeartPulse,
  Shield,
  Zap,
  ArrowRight,
  ChevronRight,
  Activity,
  Bell,
  FileText,
  RefreshCw,
  AlertTriangle,
} from '@/components/ui/Icons'

const radarColumns = [
  {
    key: 'name',
    header: 'Account',
    sortable: true,
    width: '200px',
    render: (val: unknown, row: Record<string, unknown>) => (
      <div className="flex items-center gap-3">
        <EntityAvatar name={String(val)} type="org" size="sm" />
        <div>
          <p className="font-medium text-white">{String(val)}</p>
          <p className="text-[10px] text-white/40">{String(row.segment || 'Enterprise')}</p>
        </div>
      </div>
    ),
  },
  {
    key: 'lifecycle_state',
    header: 'State',
    sortable: true,
    render: (val: unknown) => <StatusBadge value={String(val)} family="lifecycle" size="sm" dot />,
  },
  {
    key: 'health_score',
    header: 'Health',
    sortable: true,
    render: (val: unknown, row: Record<string, unknown>) => (
      <div className="flex items-center gap-2">
        <span className="font-semibold text-white">{String(val)}</span>
        <TrendDelta value={Number(String(row.health_delta).replace('+', ''))} />
      </div>
    ),
  },
  {
    key: 'arr',
    header: 'ARR',
    sortable: true,
    render: (val: unknown) => <span className="font-semibold text-white">{String(val)}</span>,
  },
  {
    key: 'next_renewal',
    header: 'Renewal',
    sortable: true,
    render: (val: unknown) => <span className="text-white/70">{String(val)}</span>,
  },
  {
    key: 'overdue_count',
    header: 'Overdue',
    sortable: true,
    render: (val: unknown) => <StatusBadge value={Number(val) > 0 ? 'overdue' : 'paid'} family="invoice" size="sm" />,
  },
  {
    key: 'open_cases',
    header: 'Cases',
    sortable: true,
    render: (val: unknown) => <span className="text-white/70">{String(val)}</span>,
  },
  {
    key: 'action_required',
    header: 'Action',
    sortable: true,
    render: (val: unknown) => <span className="text-gold-300 font-medium text-sm">{String(val)}</span>,
  },
]

const radarData = [
  { name: 'Meridian Systems', segment: 'Enterprise', lifecycle_state: 'renewing', health_score: 82, health_delta: '+5', arr: '$240K', next_renewal: '2026-09-15', overdue_count: 0, open_cases: 1, action_required: 'Renewal review' },
  { name: 'Northwind Retail', segment: 'Mid-Market', lifecycle_state: 'at_risk', health_score: 38, health_delta: '-12', arr: '$180K', next_renewal: '2026-08-20', overdue_count: 2, open_cases: 3, action_required: 'Urgent intervention' },
  { name: 'Cobalt Health', segment: 'Enterprise', lifecycle_state: 'active', health_score: 91, health_delta: '+3', arr: '$420K', next_renewal: '2026-12-01', overdue_count: 0, open_cases: 0, action_required: 'None' },
  { name: 'Atlas Freight', segment: 'SMB', lifecycle_state: 'onboarding', health_score: 67, health_delta: '+8', arr: '$95K', next_renewal: '—', overdue_count: 0, open_cases: 0, action_required: 'Complete onboarding' },
  { name: 'Juniper Labs', segment: 'Mid-Market', lifecycle_state: 'expanding', health_score: 74, health_delta: '+2', arr: '$156K', next_renewal: '2027-01-10', overdue_count: 0, open_cases: 1, action_required: 'Expansion review' },
  { name: 'Halcyon Media', segment: 'SMB', lifecycle_state: 'active', health_score: 71, health_delta: '-1', arr: '$87K', next_renewal: '2026-11-05', overdue_count: 1, open_cases: 0, action_required: 'Payment follow-up' },
]

const interventionsData = [
  { date: '2026-07-10', type: 'exec_meeting', description: 'QBR with C-suite', outcome: 'recovered', health_before: 42, health_after: 78 },
  { date: '2026-06-22', type: 'discount', description: '15% renewal discount', outcome: 'recovered', health_before: 35, health_after: 71 },
  { date: '2026-05-15', type: 'payment_plan', description: 'Restructured overdue', outcome: 'unchanged', health_before: 31, health_after: 33 },
  { date: '2026-04-08', type: 'call', description: 'Champion check-in', outcome: 'recovered', health_before: 58, health_after: 82 },
]

const actionRailItems = [
  { icon: RefreshCw, label: 'Create Renewal Opp', action: 'renewal', variant: 'primary', desc: 'Auto-fills from contract', color: 'gold' },
  { icon: Zap, label: 'Create Expansion Opp', action: 'expansion', variant: 'primary', desc: 'Links to parent account', color: 'gold' },
  { icon: Bell, label: 'Send Payment Reminder', action: 'payment_reminder', variant: 'secondary', desc: 'Email + in-app notification', color: 'violet' },
  { icon: FileText, label: 'Generate Invoice', action: 'invoice', variant: 'secondary', desc: 'From subscription schedule', color: 'violet' },
  { icon: Activity, label: 'Create Case', action: 'case', variant: 'secondary', desc: 'Routes to CS team', color: 'violet' },
  { icon: Shield, label: 'Suspend Subscription', action: 'suspend', variant: 'danger', desc: 'Immediate, reversible', color: 'red' },
  { icon: HeartPulse, label: 'Record NPS', action: 'nps', variant: 'secondary', desc: 'Single-question survey', color: 'violet' },
]

const healthBreakdown = [
  { component: 'Subscription', score: 30, weight: 30, detail: 'Active subscription, 14 months tenure', color: 'gold' },
  { component: 'Financial', score: 22, weight: 22, detail: '0 overdue, avg pay 12 days', color: 'gold' },
  { component: 'Engagement', score: 14, weight: 17, detail: 'Last activity 3 days ago', color: 'violet' },
  { component: 'Support', score: 12, weight: 15, detail: '1 case, 0 SLA breaches', color: 'violet' },
  { component: 'NPS', score: 8, weight: 10, detail: 'Last score: 9/10', color: 'gold' },
  { component: 'Onboarding', score: 6, weight: 6, detail: 'Completed 6/6 milestones', color: 'gold' },
]

export default function CX360Client() {
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
            <span className="eyebrow">CX360</span>
            <h1 className="heading-serif mt-5 text-4xl md:text-5xl lg:text-[4.4rem] leading-[1.04]">
              The Customer Record That Connects Everything
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Portfolio Radar, health scoring, measured interventions, action rail, and calibrated churn risk — one operational surface for Commercial, Finance, Support, and Success.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-gold-300">
              <StatusBadge value="add-on" family="lifecycle" size="sm" dot />
              <span className="text-white/50">Requires Commerce</span>
              <span className="text-white/50">|</span>
              <StatusBadge value="atomic" family="lifecycle" size="sm" dot />
              <span className="text-white/50">Commercial + Sales</span>
            </div>
          </motion.div>
        </div>
      </section>

      <Section
        id="radar"
        eyebrow="Portfolio Radar"
        title="Every Account. One View. Server-Ranked by Risk."
        lead="Default view for CX360. Ordered by lifecycle state precedence (churned → at_risk → renewing → expanding → active), then health score delta. Not a static list — a live operational dashboard."
      >
        <Reveal variant="fade" className="mt-14">
          <ParallaxCard depth={18} className="p-6 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h3 className="heading-serif text-xl">Portfolio Overview</h3>
                <p className="text-sm text-white/50 mt-1">{radarData.length} accounts · {radarData.filter(a => a.lifecycle_state === 'at_risk').length} at risk · {radarData.filter(a => a.lifecycle_state === 'renewing').length} renewing</p>
              </div>
              <div className="flex items-center gap-2">
                <StatusBadge value="lifecycle" family="lifecycle" size="sm" dot />
                <StatusBadge value="severity" family="severity" size="sm" dot />
              </div>
            </div>
            <DataTable
              columns={radarColumns}
              data={radarData}
              keyField="name"
              pageSize={10}
              striped
              hoverable
              accentBar
              selectable
              emptyState={{
                title: 'No accounts',
                description: 'Add organizations in Commercial to see them here.',
                icon: <Users size={32} />,
              }}
            />
          </ParallaxCard>
        </Reveal>

        <Reveal variant="fade" className="mt-10">
          <KpiTileRow tiles={[
            { label: 'Total ARR', value: '$1.18M', icon: Wallet, variant: 'positive' },
            { label: 'At Risk ARR', value: '$180K', icon: AlertTriangle, variant: 'warning', subLine: '15.3%', subIcon: ChevronRight },
            { label: 'Renewing This Quarter', value: '3', icon: RefreshCw, variant: 'neutral' },
            { label: 'Avg Health', value: '71', icon: HeartPulse, variant: 'positive', subLine: '+3', subIcon: ChevronRight },
            { label: 'Open Interventions', value: '4', icon: Activity, variant: 'neutral' },
            { label: 'Churn Risk >70%', value: '1', icon: Target, variant: 'danger' },
          ]} gap="gap-3 sm:gap-4" />
        </Reveal>
      </Section>

      <Section
        id="account-shell"
        eyebrow="Account Shell"
        title="Health Scoring. Measured Interventions. Action Rail."
        lead="Click any account in Radar to open the shell. Health breakdown (heuristic_v2), intervention log with +30d outcomes, action rail calling owning engines."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ParallaxCard depth={18} className="h-full p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="heading-serif text-xl">Health Score — Heuristic v2</h3>
                    <p className="text-sm text-white/50 mt-1">Meridian Systems · 82/100 · ▲ +5 vs 30d</p>
                  </div>
                  <StatusBadge value="heuristic" family="lifecycle" size="sm" />
                </div>

                <div className="space-y-3">
                  {healthBreakdown.map((comp) => (
                    <motion.div
                      key={comp.component}
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: '100%' }}
                      transition={{ duration: 0.6, delay: 0.05 }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-white/80">{comp.component}</span>
                        <span className="font-semibold text-white">{comp.score}/{comp.weight}</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(comp.score / comp.weight) * 100}%` }}
                          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className={`h-full rounded-full ${comp.color === 'gold' ? 'bg-gold-300' : 'bg-violet-400'}`}
                        />
                      </div>
                      <p className="mt-1 text-xs text-white/40">{comp.detail}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkline data={[72, 74, 70, 75, 78, 76, 80, 82]} color="gold-300" width={120} height={30} />
                    <div>
                      <p className="text-sm font-semibold text-white">30-Day Trend</p>
                      <p className="text-xs text-white/50">+10 points · heuristic_v2</p>
                    </div>
                  </div>
                </div>
              </ParallaxCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ParallaxCard depth={22} className="h-full p-6 md:p-8 flex flex-col">
                <h3 className="heading-serif text-xl mb-4">Interventions (+30d Outcome)</h3>
                <div className="flex-1 overflow-y-auto space-y-3">
                  {interventionsData.map((intervention) => (
                    <motion.div
                      key={intervention.date}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="p-4 rounded-xl border border-white/10 bg-white/[0.02]"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <p className="text-sm font-medium text-white">{intervention.description}</p>
                          <p className="text-xs text-white/40 flex items-center gap-1">
                            <span className="px-2 py-0.5 rounded-full bg-violet-400/20 text-violet-300 text-[9px] font-medium">{intervention.type}</span>
                            <span>{intervention.date}</span>
                          </p>
                        </div>
                        <StatusBadge value={intervention.outcome} family="outcome" size="sm" />
                      </div>
                      <div className="flex items-center gap-4 text-xs text-white/50">
                        <span>Before: <span className="font-medium text-white">{intervention.health_before}</span></span>
                        <span>After: <span className="font-medium text-gold-300">{intervention.health_after}</span></span>
                        <TrendDelta value={intervention.health_after - intervention.health_before} />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-sm font-semibold text-gold-300 mb-3">Action Rail</h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {actionRailItems.map((action) => (
                      <button
                        key={action.action}
                        className={`p-3 rounded-xl border text-left transition-all text-sm ${
                          action.variant === 'primary'
                            ? 'border-gold-300/30 bg-gold-300/[0.04] hover:bg-gold-300/[0.08]'
                            : action.variant === 'danger'
                            ? 'border-red-400/30 bg-red-400/[0.04] hover:bg-red-400/[0.08]'
                            : 'border-violet-400/30 bg-violet-400/[0.04] hover:bg-violet-400/[0.08]'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <action.icon size={16} className={`shrink-0 mt-0.5 ${action.color === 'gold' ? 'text-gold-300' : action.color === 'violet' ? 'text-violet-300' : 'text-red-400'}`} />
                          <div>
                            <p className="font-medium text-white">{action.label}</p>
                            <p className="text-[10px] text-white/40">{action.desc}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </ParallaxCard>
            </motion.div>
          </div>
        </Reveal>
      </Section>

      <Section
        id="churn-risk"
        eyebrow="Churn Intelligence"
        title="Calibrated. Explainable. Per-Tenant."
        lead="Three-tier model (heuristic → statistical → learned). Conformal prediction intervals. SHAP explanations in business language. Never pooled."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ParallaxCard depth={20} className="p-6 md:p-8 border-gold-300/30 bg-gold-300/[0.04]">
                <div className="inline-flex items-center gap-2 mb-4">
                  <StatusBadge value="learned" family="lifecycle" size="md" dot />
                </div>
                <p className="text-5xl font-semibold tracking-tight text-white mb-1">73%</p>
                <p className="text-sm text-white/50">Churn Risk · Learned · n=342 · 90% CI: 69–77%</p>
                <p className="mt-4 text-xs text-white/40">Per-tenant. Never pooled. DPDP 2023 compliant by architecture.</p>
              </ParallaxCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ParallaxCard depth={18} className="p-6 md:p-8">
                <h3 className="heading-serif text-xl mb-6">Top Risk Drivers (SHAP)</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Payment latency 4→31 days', impact: '+28%', color: 'red' },
                    { label: 'Champion inactive 60 days', impact: '+19%', color: 'red' },
                    { label: '2 open urgent cases', impact: '+14%', color: 'red' },
                    { label: 'Relationship engagement 45/100', impact: '+11%', color: 'violet' },
                    { label: 'Onboarding incomplete', impact: '+8%', color: 'violet' },
                  ].map((factor, i) => (
                    <motion.div
                      key={factor.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-white/80">{factor.label}</span>
                        <span className={`font-semibold ${factor.color === 'red' ? 'text-red-400' : 'text-violet-300'}`}>{factor.impact}</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: factor.impact }}
                          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                          className={`h-full rounded-full ${factor.color === 'red' ? 'bg-red-400' : 'bg-violet-400'}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ParallaxCard>
            </motion.div>
          </div>
        </Reveal>
      </Section>

      <Section
        id="cases-timeline"
        eyebrow="Cases & Timeline"
        title="SLA Countdown. Paused States. Vertical Timeline."
        lead="customer_case ticket type with proper SLA (paused on on_hold/waiting_on_customer). business_events vertical timeline — cases, interventions, opportunities, documents, risks, orders, subscriptions."
      >
        <Reveal variant="fade" className="mt-14">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ParallaxCard depth={18} className="p-6 h-full">
                <h3 className="heading-serif text-xl mb-4">Open Cases (Meridian Systems)</h3>
                <div className="space-y-3">
                  {[
                    { id: 'CASE-047', title: 'API rate limit errors', status: 'in_progress', priority: 'high', sla: '2h remaining', assignee: 'AR' },
                    { id: 'CASE-052', title: 'SSO configuration', status: 'waiting_on_customer', priority: 'medium', sla: 'Paused', assignee: 'PK' },
                    { id: 'CASE-058', title: 'Billing discrepancy Q2', status: 'open', priority: 'urgent', sla: '4h overdue', assignee: 'SM' },
                  ].map((case_) => (
                    <motion.div
                      key={case_.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      className="p-4 rounded-xl border border-white/10 bg-white/[0.02]"
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-gold-300 text-sm">{case_.id}</span>
                          <p className="font-medium text-white">{case_.title}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <StatusBadge value={case_.status} family="ticket" size="sm" />
                          <StatusBadge value={case_.priority} family="severity" size="sm" />
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <span>SLA: <span className="font-medium text-white">{case_.sla}</span></span>
                        <span>Assignee: <EntityAvatar name={case_.assignee} type="person" size="xs" /></span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ParallaxCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ParallaxCard depth={22} className="p-6 h-full">
                <h3 className="heading-serif text-xl mb-4">Activity Timeline</h3>
                <div className="space-y-4">
                  {[
                    { time: '2h ago', type: 'intervention', icon: HeartPulse, color: 'gold', title: 'Exec meeting conducted', detail: 'QBR with C-suite · Outcome: recovered', badge: 'recovered' },
                    { time: '1d ago', type: 'case', icon: Activity, color: 'violet', title: 'Case created: API rate limit', detail: 'High priority · Assigned to AR', badge: 'in_progress' },
                    { time: '3d ago', type: 'opportunity', icon: Target, color: 'gold', title: 'Renewal opportunity created', detail: '$240K · Auto-created from contract', badge: 'renewing' },
                    { time: '5d ago', type: 'document', icon: FileText, color: 'violet', title: 'Contract uploaded', detail: 'MSA v3.2 · Status: approved', badge: 'approved' },
                    { time: '1w ago', type: 'subscription', icon: RefreshCw, color: 'gold', title: 'Invoice paid', detail: 'INV-2026-047 · $42K · 12 days to pay', badge: 'paid' },
                  ].map((event, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex gap-3"
                    >
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${event.color === 'gold' ? 'bg-gold-300/20 text-gold-300' : 'bg-violet-400/20 text-violet-300'}`}>
                          <event.icon size={16} />
                        </div>
                        <div className="w-px h-full bg-white/10 mt-2" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="font-medium text-white">{event.title}</p>
                          <StatusBadge value={event.badge} family={event.type === 'intervention' ? 'outcome' : event.type === 'case' ? 'ticket' : event.type === 'opportunity' ? 'lifecycle' : 'invoice'} size="xs" />
                        </div>
                        <p className="text-sm text-white/50">{event.detail}</p>
                        <p className="text-xs text-white/30">{event.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ParallaxCard>
            </motion.div>
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
              See CX360 Live
            </span>
            <h3 className="heading-serif text-2xl md:text-3xl mb-6">
              Request a platform briefing to see Portfolio Radar, interventions, and churn intelligence in action.
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
