'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { KpiTileRow, StatusBadge, EntityAvatar, DataTable, Sparkline, TrendDelta, FAQSection } from '@/components/shared'
import { KpiVariant } from '@/components/shared/KpiTile'
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
  HeartPulse,
  Zap,
  Activity,
  Bell,
  ChevronRight,
  RefreshCw,
  AlertTriangle,
  Database,
  FileCheck,
} from '@/components/ui/Icons'

type EngineKpi = {
  label: string
  value: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  variant: KpiVariant
  delta?: string
}

type EngineAction = {
  action: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  label: string
  desc: string
  color: string
  variant: 'primary' | 'secondary' | 'danger'
}
// Engine definitions - each engine gets CX360-level depth
const engines = [
  {
    id: 'migration',
    label: 'Migration Engine',
    icon: GitBranch,
    color: 'gold',
    subtitle: 'Governed Data Onboarding — Included for Every Tenant',
    description: 'The governed front door for your existing data — Salesforce, Zoho, HubSpot, Tally, or files. Immutable snapshots, versioned mapping, a staged airlock, dependency-ordered execution, and an explicit human verification gate. Proven end-to-end against a real production run, not a demo.',
    kpis: [
      { label: 'Records Migrated', value: '10,000/10,000', icon: Database, variant: 'positive' },
      { label: 'Reconciliation', value: '12/12', icon: Shield, variant: 'positive' },
      { label: 'Relationships', value: 'Passed', icon: GitBranch, variant: 'positive' },
      { label: 'Events Leaked', value: '0', icon: FileCheck, variant: 'positive' },
    ] satisfies EngineKpi[],
    features: [
      'Multi-file and connector-based source analysis — Salesforce, Zoho CRM, HubSpot, Tally',
      'Versioned mapping specification with governed custom-field support',
      'Staged airlock — validated before anything touches production',
      'Dependency-ordered, checkpointed execution with pause, resume, and per-record fault containment',
      'Reconciliation plus explicit human verification before a migration is ever called complete',
    ],
    detail: {
      healthComponents: [
        { component: 'Correctness Canary', score: 100, weight: 100, detail: '10,000/10,000 records migrated, audited', color: 'gold' },
        { component: 'Relationship Integrity', score: 100, weight: 100, detail: 'Relationship checks passed', color: 'gold' },
        { component: 'Reconciliation', score: 100, weight: 100, detail: '12/12 hard checks passed', color: 'violet' },
        { component: 'Automation Isolation', score: 100, weight: 100, detail: 'Zero historical events leaked to live automations', color: 'violet' },
      ],
      interventions: [],
      actions: [
        { action: 'start_migration', icon: RefreshCw, label: 'Start Migration', desc: 'Connect a source or upload files', color: 'gold', variant: 'primary' },
        { action: 'review_mapping', icon: GitBranch, label: 'Review Mapping', desc: 'Versioned, evidence-backed suggestions', color: 'gold', variant: 'primary' },
        { action: 'run_reconciliation', icon: Shield, label: 'Run Reconciliation', desc: 'Counts, relationships, totals', color: 'violet', variant: 'secondary' },
        { action: 'verify_migration', icon: Check, label: 'Verify & Complete', desc: 'Explicit human sign-off', color: 'violet', variant: 'secondary' },
        { action: 'create_reversal_plan', icon: FileText, label: 'Create Reversal Plan', desc: 'Governed, never a silent delete', color: 'red', variant: 'danger' },
      ],
    },
  },
  {
    id: 'commerce',
    label: 'Commerce',
    icon: Target,
    color: 'gold',
    subtitle: 'Commercial + Sales — Atomic Pack',
    description: 'One pipeline from lead to renewal. The Commercial Engine holds every organization and person you do business with; the Sales Engine runs pipeline, quotes, and deal conversion — renewal and expansion opportunities are created automatically, with no manual handoff.',
    kpis: [
      { label: 'Pipeline Value', value: '$2.4M', icon: Wallet, variant: 'positive', delta: '+12.4%' },
      { label: 'Active Deals', value: '148', icon: Target, variant: 'neutral', delta: '+8' },
      { label: 'Win Rate', value: '23%', icon: ChartBar, variant: 'positive', delta: '+2.1%' },
      { label: 'Renewal Rate', value: '94%', icon: RefreshCw, variant: 'positive', delta: '+1%' },
    ] satisfies EngineKpi[],
    features: [
      'Unified organization & contact records shared by every engine',
      'Agreements & contracts with signature-gated activation',
      'Pipeline: Prospect → Proposal → Negotiation → Closed Won/Lost',
      'Automatic renewal opportunities (90-day window) and expansion detection',
      'Campaign attribution — see which campaign sourced which revenue',
    ],
    detail: {
      healthComponents: [
        { component: 'Pipeline Coverage', score: 85, weight: 100, detail: '3.2x coverage vs quota', color: 'gold' },
        { component: 'Deal Velocity', score: 72, weight: 100, detail: '45 days avg close', color: 'gold' },
        { component: 'Win Rate Trend', score: 78, weight: 100, detail: '+5% vs last quarter', color: 'gold' },
        { component: 'Forecast Accuracy', score: 81, weight: 100, detail: 'Within 5% of actuals', color: 'violet' },
      ],
      interventions: [
        { date: '2026-07-15', type: 'deal_review', description: 'Stalled enterprise deal reviewed', outcome: 'recovered', health_before: 58, health_after: 82 },
        { date: '2026-06-20', type: 'pricing_adjustment', description: 'Competitive pricing approved', outcome: 'recovered', health_before: 45, health_after: 76 },
      ],
      actions: [
        { action: 'create_renewal_opp', icon: RefreshCw, label: 'Create Renewal Opp', desc: 'Auto-fills from contract', color: 'gold', variant: 'primary' },
        { action: 'create_expansion_opp', icon: Zap, label: 'Create Expansion Opp', desc: 'Links to parent account', color: 'gold', variant: 'primary' },
        { action: 'send_payment_reminder', icon: Bell, label: 'Send Payment Reminder', desc: 'Email + in-app notification', color: 'violet', variant: 'secondary' },
        { action: 'generate_invoice', icon: FileText, label: 'Generate Invoice', desc: 'From subscription schedule', color: 'violet', variant: 'secondary' },
        { action: 'create_case', icon: Activity, label: 'Create Case', desc: 'Routes to CS team', color: 'violet', variant: 'secondary' },
      ],
    },
  },
  {
    id: 'people',
    label: 'People',
    icon: Users,
    color: 'violet',
    subtitle: 'HR & Payroll — Atomic Pack',
    description: 'Hiring, compensation, leave, and payroll as one governed flow. Offer accepted becomes an employment record, a wired compensation package, and a payroll-ready profile — automatically, with statutory compliance built in.',
    kpis: [
      { label: 'Headcount', value: '342', icon: Users, variant: 'neutral', delta: '+12' },
      { label: 'Time to Fill', value: '38 days', icon: ChartBar, variant: 'positive', delta: '-5 days' },
      { label: 'Payroll Accuracy', value: '99.9%', icon: Shield, variant: 'positive', delta: '+0.1%' },
      { label: 'eNPS', value: '67', icon: HeartPulse, variant: 'positive', delta: '+8' },
    ] satisfies EngineKpi[],
    features: [
      'Recruitment: requisitions, applications, scorecards, auto-populated offer letters',
      'Compensation versioning with retroactive-adjustment detection',
      'Leave management with policy-based approval routing',
      'Payroll: dependency-ordered calculation, dual approval, immutable lock',
      'Statutory compliance reminders (PF, ESI, TDS) across multiple countries',
    ],
    detail: {
      healthComponents: [
        { component: 'Retention', score: 88, weight: 100, detail: '92% 12-month retention', color: 'gold' },
        { component: 'Onboarding Completion', score: 94, weight: 100, detail: '6/6 milestones avg', color: 'gold' },
        { component: 'Payroll Timeliness', score: 99, weight: 100, detail: 'Zero late payments', color: 'gold' },
        { component: 'Compliance Score', score: 96, weight: 100, detail: 'Zero audit findings', color: 'violet' },
      ],
      interventions: [
        { date: '2026-07-10', type: 'retention_program', description: 'High-performer retention plan', outcome: 'recovered', health_before: 72, health_after: 89 },
        { date: '2026-05-15', type: 'comp_adjustment', description: 'Market adjustment for engineers', outcome: 'recovered', health_before: 65, health_after: 84 },
      ],
      actions: [
        { action: 'initiate_offboarding', icon: RefreshCw, label: 'Initiate Offboarding', desc: 'Checklist + knowledge transfer', color: 'gold', variant: 'primary' },
        { action: 'run_payroll', icon: Zap, label: 'Run Payroll', desc: 'Validated against governed records', color: 'gold', variant: 'primary' },
        { action: 'send_compliance_alert', icon: Bell, label: 'Send Compliance Alert', desc: 'EPF/ESI deadline reminders', color: 'violet', variant: 'secondary' },
        { action: 'generate_offer_letter', icon: FileText, label: 'Generate Offer Letter', desc: 'From approved template', color: 'violet', variant: 'secondary' },
        { action: 'log_performance_review', icon: Activity, label: 'Log Performance Review', desc: 'Structured + calibrated', color: 'violet', variant: 'secondary' },
      ],
    },
  },
  {
    id: 'finance',
    label: 'Finance',
    icon: Wallet,
    color: 'gold',
    subtitle: 'Standalone Product',
    description: 'An append-only, cryptographically hash-chained ledger — tampering is mathematically detectable, and every correction is an explicit offsetting entry. Budgets enforce hard spending limits in real time, and payroll and campaign spend post directly to the ledger.',
    kpis: [
      { label: 'ARR', value: '$1.18M', icon: Wallet, variant: 'positive', delta: '+18%' },
      { label: 'DSO', value: '28 days', icon: ChartBar, variant: 'positive', delta: '-4 days' },
      { label: 'Overdue %', value: '2.3%', icon: AlertTriangle, variant: 'warning', delta: '-1.2%' },
      { label: 'Cash Flow', value: '+$240K', icon: ChartBar, variant: 'positive', delta: '+45%' },
    ] satisfies EngineKpi[],
    features: [
      'Cryptographic ledger — hash-chained, auditor-verifiable',
      'Budget planning with hard spend limits, not soft warnings',
      'Customer invoicing runs in the independent Billing & Invoicing engine — see below',
      'Multi-currency, multi-account, automatic reconciliation',
      'Native postings from payroll lock, campaign spend, and optional Billing & Payments activity',
    ],
    detail: {
      healthComponents: [
        { component: 'Revenue Recognition', score: 97, weight: 100, detail: 'ASC 606 compliant', color: 'gold' },
        { component: 'Collection Efficiency', score: 84, weight: 100, detail: '92% collected on time', color: 'gold' },
        { component: 'Budget Variance', score: 78, weight: 100, detail: 'Within 8% of plan', color: 'violet' },
        { component: 'Audit Readiness', score: 95, weight: 100, detail: 'Hash chain verified', color: 'violet' },
      ],
      interventions: [
        { date: '2026-07-12', type: 'collection_push', description: 'Targeted overdue outreach', outcome: 'recovered', health_before: 68, health_after: 84 },
        { date: '2026-06-01', type: 'budget_reforecast', description: 'Mid-year reforecast completed', outcome: 'recovered', health_before: 62, health_after: 79 },
      ],
      actions: [
        { action: 'create_renewal_opp', icon: RefreshCw, label: 'Create Renewal Opp', desc: 'Auto-fills from contract', color: 'gold', variant: 'primary' },
        { action: 'send_payment_reminder', icon: Bell, label: 'Send Payment Reminder', desc: 'Email + in-app notification', color: 'violet', variant: 'secondary' },
        { action: 'generate_invoice', icon: FileText, label: 'Generate Invoice', desc: 'From subscription schedule', color: 'violet', variant: 'secondary' },
        { action: 'create_case', icon: Activity, label: 'Create Case', desc: 'Routes to finance team', color: 'violet', variant: 'secondary' },
        { action: 'reconcile_accounts', icon: Shield, label: 'Reconcile Accounts', desc: 'Auto-match + exceptions', color: 'red', variant: 'danger' },
      ],
    },
  },
  {
    id: 'billing',
    label: 'Billing & Payments',
    icon: FileText,
    color: 'violet',
    subtitle: 'Standalone Product — Independent of Finance',
    description: 'Billing runs whether or not Finance is even switched on. A deterministic rating engine turns commercial facts into governed invoices; documents, delivery, and reminders run on policy; and certified payment connections handle payment requests, collection, and settlement reconciliation. When Finance is enabled, billing activity posts straight into the ledger — when it isn\'t, nothing breaks.',
    kpis: [
      { label: 'Invoices / Month', value: '412', icon: FileText, variant: 'neutral', delta: '+9%' },
      { label: 'Outstanding', value: '$186K', icon: Wallet, variant: 'warning' },
      { label: 'Days to Pay', value: '18 days', icon: ChartBar, variant: 'positive', delta: '-3 days' },
      { label: 'Reminders Sent', value: '99.6%', icon: Bell, variant: 'positive' },
    ] satisfies EngineKpi[],
    features: [
      'Independent entitlement — runs with or without Finance enabled',
      'Deterministic rating engine — fixed, tiered, usage, milestone, and prorated billing rules',
      'Governed, versioned billing configuration — nothing changes underneath a live rate card',
      'Automated invoice documents, delivery, and policy-driven reminders',
      'Certified payment connections with settlement ingestion and reconciliation',
    ],
    detail: {
      healthComponents: [
        { component: 'Invoice Integrity', score: 98, weight: 100, detail: 'Immutable, hashed issued snapshots', color: 'gold' },
        { component: 'Rating Accuracy', score: 99, weight: 100, detail: 'Deterministic fixed-point rating engine', color: 'gold' },
        { component: 'Reminder Delivery', score: 96, weight: 100, detail: 'Policy-driven, pauses on dispute/hold', color: 'violet' },
        { component: 'Payment Reconciliation', score: 92, weight: 100, detail: 'Automated settlement matching', color: 'violet' },
      ],
      interventions: [],
      actions: [
        { action: 'generate_invoice', icon: FileText, label: 'Generate Invoice', desc: 'From a governed billing run', color: 'gold', variant: 'primary' },
        { action: 'send_reminder', icon: Bell, label: 'Send Reminder', desc: 'Policy-driven, pausable', color: 'gold', variant: 'primary' },
        { action: 'record_payment', icon: Zap, label: 'Record Payment', desc: 'Via certified payment connection', color: 'violet', variant: 'secondary' },
        { action: 'reconcile_settlement', icon: Shield, label: 'Reconcile Settlement', desc: 'Batch match + exceptions', color: 'violet', variant: 'secondary' },
        { action: 'view_invoice_history', icon: Activity, label: 'View Invoice History', desc: 'Full issued-version trail', color: 'violet', variant: 'secondary' },
      ],
    },
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: ChartBar,
    color: 'violet',
    subtitle: 'Standalone Product',
    description: 'Campaigns, SEO auditing, and email marketing connected directly to revenue. Every deal carries its sourcing campaign automatically, so marketing spend and pipeline live in the same system — not a spreadsheet reconciliation.',
    kpis: [
      { label: 'MQLs/Month', value: '340', icon: Target, variant: 'positive', delta: '+22%' },
      { label: 'CAC', value: '$1,240', icon: Wallet, variant: 'positive', delta: '-15%' },
      { label: 'Email Open Rate', value: '34%', icon: ChartBar, variant: 'positive', delta: '+3%' },
      { label: 'Attributed Pipeline', value: '$890K', icon: Wallet, variant: 'positive', delta: '+31%' },
    ] satisfies EngineKpi[],
    features: [
      'Multi-channel campaigns with automatic deal attribution',
      'SEO crawler audit (13 rules) with AI-suggested, approval-gated fixes',
      'Email marketing with event-triggered drip sequences',
      'Persisted, versioned lead & opportunity scoring',
      'Content library with version control',
    ],
    detail: {
      healthComponents: [
        { component: 'Lead Quality', score: 76, weight: 100, detail: 'MQL→SQL 28%', color: 'gold' },
        { component: 'Campaign ROI', score: 82, weight: 100, detail: '4.2x avg return', color: 'gold' },
        { component: 'Email Deliverability', score: 94, weight: 100, detail: '98% inbox placement', color: 'gold' },
        { component: 'Attribution Coverage', score: 71, weight: 100, detail: '68% pipeline attributed', color: 'violet' },
      ],
      interventions: [
        { date: '2026-07-08', type: 'campaign_optimization', description: 'Shifted budget to top channels', outcome: 'recovered', health_before: 58, health_after: 81 },
        { date: '2026-06-15', type: 'lead_scoring_refresh', description: 'Retrained on latest wins', outcome: 'recovered', health_before: 61, health_after: 79 },
      ],
      actions: [
        { action: 'launch_campaign', icon: RefreshCw, label: 'Launch Campaign', desc: 'Multi-channel from template', color: 'gold', variant: 'primary' },
        { action: 'score_new_leads', icon: Zap, label: 'Score New Leads', desc: 'Persisted, versioned scores', color: 'gold', variant: 'primary' },
        { action: 'send_nurture_sequence', icon: Bell, label: 'Send Nurture Sequence', desc: 'Behavior-triggered emails', color: 'violet', variant: 'secondary' },
        { action: 'publish_content', icon: FileText, label: 'Publish Content', desc: 'Versioned + approved', color: 'violet', variant: 'secondary' },
        { action: 'create_mql', icon: Activity, label: 'Create MQL', desc: 'Routes to Commercial', color: 'violet', variant: 'secondary' },
      ],
    },
  },
  {
    id: 'operations',
    label: 'Operations',
    icon: Briefcase,
    color: 'gold',
    subtitle: 'Included with Commerce — Automatic Provisioning',
    description: 'Deal close is not the end of the sales process — it\'s the start of delivery. The moment a deal is won, Infrakinetic creates the project and order record, notifies the owner, and flags Finance for invoicing, in a single transaction. Delivery never waits on a manual handoff.',
    kpis: [
      { label: 'Projects Auto-Created', value: '47', icon: Briefcase, variant: 'neutral', delta: '+3' },
      { label: 'Handoff Time', value: '< 1 min', icon: Zap, variant: 'positive' },
      { label: 'Manual Handoffs Needed', value: '0', icon: Shield, variant: 'positive' },
      { label: 'Finance Notified', value: '100%', icon: Bell, variant: 'positive' },
    ] satisfies EngineKpi[],
    features: [
      'Project + order created automatically on deal close',
      'Owner notified the moment a project is created',
      'Finance flagged for invoicing without a separate request',
      'Full value, currency, and campaign attribution carried from the deal',
      'Complete amendment history from originating opportunity',
    ],
    detail: {
      healthComponents: [
        { component: 'Handoff Completeness', score: 100, weight: 100, detail: 'Project, order & owner set in one transaction', color: 'gold' },
        { component: 'Finance Notification', score: 100, weight: 100, detail: 'Invoicing flagged automatically on close', color: 'gold' },
        { component: 'Attribution Carried', score: 100, weight: 100, detail: 'Value, currency, campaign preserved from deal', color: 'violet' },
      ],
      interventions: [],
      actions: [
        { action: 'view_project', icon: RefreshCw, label: 'View Project', desc: 'Auto-created from won deal', color: 'gold', variant: 'primary' },
        { action: 'notify_owner', icon: Bell, label: 'Notify Owner', desc: 'Triggered on project creation', color: 'violet', variant: 'secondary' },
        { action: 'generate_invoice', icon: FileText, label: 'Generate Invoice', desc: 'Finance flagged on deal close', color: 'violet', variant: 'secondary' },
      ],
    },
  },
  {
    id: 'customer360',
    label: 'Customer 360',
    icon: Target,
    color: 'gold',
    subtitle: 'Add-on — Requires Commerce',
    description: 'Portfolio Radar, health scoring, measured interventions, action rail, calibrated churn risk. The customer record that connects Commercial, Finance, Support, and Success.',
    kpis: [
      { label: 'Total ARR', value: '$1.18M', icon: Wallet, variant: 'positive' },
      { label: 'At Risk ARR', value: '$180K', icon: AlertTriangle, variant: 'warning', delta: '15.3%' },
      { label: 'Renewing This Quarter', value: '3', icon: RefreshCw, variant: 'neutral' },
      { label: 'Avg Health', value: '71', icon: HeartPulse, variant: 'positive', delta: '+3' },
      { label: 'Open Interventions', value: '4', icon: Activity, variant: 'neutral' },
      { label: 'Churn Risk >70%', value: '1', icon: AlertTriangle, variant: 'danger' },
    ] satisfies EngineKpi[],
    features: [
      'Portfolio Radar (server-ranked)',
      'Lifecycle state + health + delta',
      'Measured interventions (+30d outcome)',
      'Action rail (renewal, payment, case, suspend, NPS)',
      'Calibrated churn risk (3 tiers)',
    ],
    detail: {
      healthComponents: [
        { component: 'Subscription', score: 30, weight: 30, detail: 'Active subscription, 14 months tenure', color: 'gold' },
        { component: 'Financial', score: 22, weight: 22, detail: '0 overdue, avg pay 12 days', color: 'gold' },
        { component: 'Engagement', score: 14, weight: 17, detail: 'Last activity 3 days ago', color: 'violet' },
        { component: 'Support', score: 12, weight: 15, detail: '1 case, 0 SLA breaches', color: 'violet' },
        { component: 'NPS', score: 8, weight: 10, detail: 'Last score: 9/10', color: 'gold' },
        { component: 'Onboarding', score: 6, weight: 6, detail: 'Completed 6/6 milestones', color: 'gold' },
      ],
      interventions: [
        { date: '2026-07-10', type: 'exec_meeting', description: 'QBR with C-suite', outcome: 'recovered', health_before: 42, health_after: 78 },
        { date: '2026-06-22', type: 'discount', description: '15% renewal discount', outcome: 'recovered', health_before: 35, health_after: 71 },
        { date: '2026-05-15', type: 'payment_plan', description: 'Restructured overdue', outcome: 'unchanged', health_before: 31, health_after: 33 },
        { date: '2026-04-08', type: 'call', description: 'Champion check-in', outcome: 'recovered', health_before: 58, health_after: 82 },
      ],
      actions: [
        { action: 'create_renewal_opp', icon: RefreshCw, label: 'Create Renewal Opp', desc: 'Auto-fills from contract', color: 'gold', variant: 'primary' },
        { action: 'create_expansion_opp', icon: Zap, label: 'Create Expansion Opp', desc: 'Links to parent account', color: 'gold', variant: 'primary' },
        { action: 'send_payment_reminder', icon: Bell, label: 'Send Payment Reminder', desc: 'Email + in-app notification', color: 'violet', variant: 'secondary' },
        { action: 'generate_invoice', icon: FileText, label: 'Generate Invoice', desc: 'From subscription schedule', color: 'violet', variant: 'secondary' },
        { action: 'create_case', icon: Activity, label: 'Create Case', desc: 'Routes to CS team', color: 'violet', variant: 'secondary' },
        { action: 'suspend_subscription', icon: Shield, label: 'Suspend Subscription', desc: 'Immediate, reversible', color: 'red', variant: 'danger' },
        { action: 'record_nps', icon: HeartPulse, label: 'Record NPS', desc: 'Single-question survey', color: 'violet', variant: 'secondary' },
      ],
    },
  },
  {
    id: 'agency',
    label: 'Marketing Agency',
    icon: Building,
    color: 'violet',
    subtitle: 'Add-on — Requires Commerce',
    description: 'The same Marketing Engine, isolated per client. An executed agreement gates campaign creation, and every dollar of spend is tracked and billed to the right client, with zero cross-client leakage.',
    kpis: [
      { label: 'Active Clients', value: '23', icon: Users, variant: 'neutral', delta: '+3' },
      { label: 'Retainer ARR', value: '$420K', icon: Wallet, variant: 'positive', delta: '+18%' },
      { label: 'Avg Utilization', value: '78%', icon: ChartBar, variant: 'positive', delta: '+5%' },
      { label: 'Client NPS', value: '72', icon: HeartPulse, variant: 'positive', delta: '+4' },
    ] satisfies EngineKpi[],
    features: [
      'Multiple client organizations, one workspace',
      'Executed agreement required before campaigns launch (approval gate)',
      'Per-client budgets, spend tracking, and billing transparency',
      'Separate campaign, budget, and email flows per client',
      'Client data isolation enforced at the platform level',
    ],
    detail: {
      healthComponents: [
        { component: 'Retainer Health', score: 85, weight: 100, detail: '94% renewal rate', color: 'gold' },
        { component: 'Delivery Quality', score: 88, weight: 100, detail: '4.7/5 avg client rating', color: 'gold' },
        { component: 'Resource Efficiency', score: 78, weight: 100, detail: '78% billable across clients', color: 'violet' },
        { component: 'Client Expansion', score: 72, weight: 100, detail: '34% upsell rate', color: 'violet' },
      ],
      interventions: [
        { date: '2026-07-12', type: 'client_review', description: 'Quarterly business review', outcome: 'recovered', health_before: 68, health_after: 84 },
      ],
      actions: [
        { action: 'create_client_workspace', icon: RefreshCw, label: 'Create Client Workspace', desc: 'Isolated + branded', color: 'gold', variant: 'primary' },
        { action: 'generate_retainer_invoice', icon: Zap, label: 'Generate Retainer Invoice', desc: 'From schedule + usage', color: 'gold', variant: 'primary' },
        { action: 'send_client_report', icon: Bell, label: 'Send Client Report', desc: 'Automated monthly', color: 'violet', variant: 'secondary' },
        { action: 'share_deliverable', icon: FileText, label: 'Share Deliverable', desc: 'Versioned + approved', color: 'violet', variant: 'secondary' },
        { action: 'log_client_feedback', icon: Activity, label: 'Log Client Feedback', desc: 'Structured + tracked', color: 'violet', variant: 'secondary' },
      ],
    },
  },
  {
    id: 'equity',
    label: 'Equity',
    icon: ChartBar,
    color: 'violet',
    subtitle: 'Included with People — Grants & Vesting',
    description: 'Equity grants route through the same approval engine as every other decision, and vesting schedules — cliff or graded — are tracked directly against the employee compensation record they belong to. No separate system, no separate audit trail.',
    kpis: [
      { label: 'Grants Tracked', value: '86', icon: Wallet, variant: 'neutral', delta: '+6' },
      { label: 'Active Vesting Schedules', value: '64', icon: ChartBar, variant: 'neutral' },
      { label: 'Approval Coverage', value: '100%', icon: Shield, variant: 'positive' },
      { label: 'Avg Approval Time', value: '1.2 days', icon: Zap, variant: 'positive' },
    ] satisfies EngineKpi[],
    features: [
      'Equity grants routed through the unified approval engine',
      'Cliff and graded vesting schedules',
      'Tied to the employee compensation record, not a spreadsheet',
      'Full approval and amendment audit trail',
    ],
    detail: {
      healthComponents: [
        { component: 'Grant Compliance', score: 96, weight: 100, detail: 'All grants approval-tracked', color: 'gold' },
        { component: 'Vesting Accuracy', score: 98, weight: 100, detail: 'Zero vesting calculation errors', color: 'gold' },
        { component: 'Audit Trail Completeness', score: 100, weight: 100, detail: 'Every grant change logged', color: 'violet' },
      ],
      interventions: [],
      actions: [
        { action: 'create_grant', icon: RefreshCw, label: 'Create Grant', desc: 'Routes through approval engine', color: 'gold', variant: 'primary' },
        { action: 'send_vesting_notice', icon: Bell, label: 'Send Vesting Notice', desc: 'Automated on schedule milestone', color: 'violet', variant: 'secondary' },
        { action: 'view_grant_history', icon: FileText, label: 'View Grant History', desc: 'Full approval & amendment trail', color: 'violet', variant: 'secondary' },
      ],
    },
  },
  {
    id: 'platform-infra',
    label: 'Operations & Governance',
    icon: Sliders,
    color: 'gold',
    subtitle: 'Free for Every Tenant — Always',
    description: 'Approval management, workflow automation, ticket management, governance, and document workflow — the five capabilities every engine is built on. Not a tier you unlock. Not a feature flag. Included from day one, for every tenant.',
    kpis: [
      { label: 'Engines Active', value: '11', icon: Sliders, variant: 'neutral' },
      { label: 'Uptime', value: '99.97%', icon: Shield, variant: 'positive' },
      { label: 'API Latency (p95)', value: '42ms', icon: Zap, variant: 'positive' },
      { label: 'Tenants', value: '47', icon: Building, variant: 'neutral', delta: '+3' },
    ] satisfies EngineKpi[],
    features: [
      'Approvals — one engine, routing by org structure, real-time SLA escalation',
      'Workflow — event-driven automation, no-code trigger rules',
      'Tickets — standalone work items with full activity history',
      'Governance — org structure, RBAC, board & committee model',
      'Documents — template generation, encrypted storage, version history',
    ],
    detail: {
      healthComponents: [
        { component: 'API Health', score: 99, weight: 100, detail: '99.97% uptime', color: 'gold' },
        { component: 'Data Integrity', score: 100, weight: 100, detail: 'Zero corruption events', color: 'gold' },
        { component: 'Security Posture', score: 97, weight: 100, detail: 'SOC 2 Type II in progress', color: 'gold' },
        { component: 'Performance', score: 94, weight: 100, detail: 'p95 < 50ms', color: 'violet' },
      ],
      interventions: [],
      actions: [
        { action: 'configure_approval_chain', icon: RefreshCw, label: 'Configure Approval Chain', desc: 'Drag-drop builder', color: 'gold', variant: 'primary' },
        { action: 'create_workflow', icon: Zap, label: 'Create Workflow', desc: 'Visual stage editor', color: 'gold', variant: 'primary' },
        { action: 'configure_sla', icon: Bell, label: 'Configure SLA', desc: 'Per case type', color: 'violet', variant: 'secondary' },
        { action: 'set_retention_policy', icon: FileText, label: 'Set Retention Policy', desc: 'Per document type', color: 'violet', variant: 'secondary' },
        { action: 'audit_trail_export', icon: Activity, label: 'Audit Trail Export', desc: 'Compliance-ready', color: 'violet', variant: 'secondary' },
      ],
    },
  },
]

const engineOrder = [
  'migration',
  'commerce',
  'people',
  'finance',
  'billing',
  'marketing',
  'operations',
  'customer360',
  'agency',
  'equity',
  'platform-infra',
]

const productsFaqItems = [
  {
    question: 'What is included in the Commerce atomic pack?',
    answer: 'Commerce bundles the Commercial Engine (organizations, contacts, agreements) and the Sales Engine (pipeline, quotes, deal conversion) as one connected pack — not two products stitched together. Renewal and expansion opportunities are created automatically.',
  },
  {
    question: 'What is included in the People atomic pack?',
    answer: 'People covers HR and Payroll as one governed flow: recruitment, compensation, leave, and payroll all share the same employee record, with statutory compliance reminders and multi-country support built in.',
  },
  {
    question: 'Are Approvals, Workflow, and Governance separate add-ons?',
    answer: 'No. Approvals, Workflow, Tickets, Governance, and Documents are included free with every tenant on every plan — they are the substrate every engine runs on, not a tier you unlock later.',
  },
  {
    question: 'Do I need Commerce to use the Customer 360 add-on?',
    answer: 'Yes. Customer 360 (CX360) requires Commerce because it anchors its lifecycle spine, health scoring, and churn-risk model on Commercial organization records.',
  },
  {
    question: 'Can I buy Finance or Marketing without the atomic packs?',
    answer: 'Yes. Finance and Marketing are standalone products and can run independently of the Commerce or People atomic packs.',
  },
  {
    question: 'Is the Migration Engine an extra product I have to buy?',
    answer: 'No. Governed data onboarding is included for every tenant — it is how you get your existing Salesforce, Zoho, HubSpot, Tally, or file-based data onto the platform in the first place, not a separate line item.',
  },
  {
    question: 'Do I need Finance to use Billing & Invoicing, or vice versa?',
    answer: 'No. Billing & Invoicing and Payments are independent, separately entitled engines. Billing runs whether or not Finance is enabled for your tenant; when Finance is also enabled, billing activity posts into the same ledger automatically.',
  },
]

export default function ProductsClient() {
  const [activeEngine, setActiveEngine] = useState('migration')
  const engine = engines.find(e => e.id === activeEngine)!

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && engines.some((e) => e.id === hash)) {
      setActiveEngine(hash)
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({ block: 'start' })
      })
    }
  }, [])

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
            <span className="eyebrow">Products & Packaging</span>
            <h1 className="heading-serif mt-5 text-4xl md:text-5xl lg:text-[4.4rem] leading-[1.04]">
              Every Engine. One Platform. Zero Drift.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              Two atomic packs, three standalone products, two add-ons, five platform capabilities,
              and governed data onboarding included for every tenant. One business data model. Governed events. Atomic where it matters.
            </p>
            <p className="mt-4 text-sm md:text-base text-white/65 max-w-2xl mx-auto">
              Infrakinetic is priced as Commerce and People atomic packs, standalone Finance, Billing & Invoicing, and Marketing engines, and Customer 360 and Marketing Agency add-ons — with Approvals, Workflow, Tickets, Governance, Documents, and the Migration Engine included free for every tenant, on every plan.
            </p>
            <p className="mt-4 text-sm text-white/50 max-w-2xl mx-auto">
              See the{' '}
              <Link href="/platform" className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200">
                architecture
              </Link>{' '}
              these engines share, or{' '}
              <Link href="/migration" className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200">
                bring your existing data in
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engine Selector Tabs */}
      <Section id="engine-selector" className="py-12">
        <Reveal variant="fade" className="mt-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {engineOrder.map((engineId) => {
              const eng = engines.find(e => e.id === engineId)!
              const isActive = activeEngine === engineId
              return (
                <button
                  key={engineId}
                  onClick={() => {
                    setActiveEngine(engineId)
                    window.history.replaceState(null, '', `#${engineId}`)
                  }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? `bg-gold-300/20 border-gold-300/40 text-gold-300 shadow-[0_0_20px_rgba(230,211,163,0.2)]`
                      : 'border-white/10 bg-white/[0.02] text-white/60 hover:border-gold-300/30 hover:bg-gold-300/[0.04] hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <eng.icon size={14} />
                    {eng.label}
                  </span>
                </button>
              )
            })}
          </div>
        </Reveal>
      </Section>

      {/* Active Engine Detail - CX360-level depth */}
      <motion.div
        key={activeEngine}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Hero / KPIs */}
        <Section id={engine.id} eyebrow={engine.subtitle} title={engine.label} lead={engine.description}>
          <Reveal variant="fade" className="mt-10">
            <KpiTileRow tiles={engine.kpis} gap="gap-3 sm:gap-4" />
            <p className="mt-3 text-xs text-white/65">Real product interface · illustrative data, not a customer outcome.</p>
          </Reveal>

          <Reveal variant="fade" className="mt-14">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {engine.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <ParallaxCard depth={14 + i * 2} className="h-full p-6 md:p-8 flex flex-col">
                    <div className={`mb-4 grid h-12 w-12 place-items-center rounded-xl border ${engine.color === 'gold' ? 'border-gold-300/30 bg-gold-300/[0.08] text-gold-300' : 'border-violet-400/30 bg-violet-400/[0.08] text-violet-300'}`}>
                      <engine.icon size={20} />
                    </div>
                    <p className="flex items-start gap-2 text-sm text-white/60 flex-1">
                      <Check size={12} className="shrink-0 mt-0.5" />
                      {feature}
                    </p>
                  </ParallaxCard>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* Deep Dive: Health Breakdown + Interventions + Actions */}
        {engine.detail.healthComponents.length > 0 && (
          <Section
            id={`${engine.id}-health`}
            eyebrow="Health & Intelligence"
            title={`${engine.label} Health Breakdown`}
            lead="Persisted, versioned scores. Every component correlated with outcomes."
          >
            <Reveal variant="fade" className="mt-14">
              <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <ParallaxCard depth={18} className="h-full p-6 md:p-8">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="heading-serif text-xl">Health Score — Versioned</h3>
                        <p className="text-sm text-white/50 mt-1">
                          {engine.label} · {engine.id === 'migration' ? 'Audited production run' : 'Heuristic v2'}
                        </p>
                      </div>
                      {engine.id === 'migration' ? (
                        <span className="rounded-full border border-gold-300/30 bg-gold-300/10 px-2.5 py-1 text-[11px] font-medium text-gold-300">
                          Audited
                        </span>
                      ) : (
                        <StatusBadge value="heuristic" family="lifecycle" size="sm" />
                      )}
                    </div>
                    <p className="text-xs text-white/65 mb-6">
                      {engine.id === 'migration'
                        ? 'Measured from a real production run, not a projection — see the correctness proof above.'
                        : `Illustrative example — shows what ${engine.label}'s scoring model computes, not a claim about your own data.`}
                    </p>

                    <div className="space-y-3">
                      {engine.detail.healthComponents.map((comp) => (
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
                      {engine.detail.interventions.length > 0 ? (
                        engine.detail.interventions.map((intervention) => (
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
                        ))
                      ) : (
                        <p className="text-white/50 text-sm">No interventions recorded yet.</p>
                      )}
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <h4 className="text-sm font-semibold text-gold-300 mb-3">Action Rail</h4>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {engine.detail.actions.map((action) => (
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
        )}

        {/* Churn / Risk Intelligence for relevant engines */}
        {engine.id === 'customer360' && (
          <Section
            id={`${engine.id}-churn-risk`}
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
                    <p className="mt-4 text-xs text-white/65">Per-tenant. Never pooled. DPDP 2023 aligned by architecture.</p>
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
        )}

        {/* CTA */}
        <Section id="cta" align="center">
          <Reveal variant="fade" className="mt-14">
            <ParallaxCard depth={12} className="rounded-2xl border border-gold-300/30 bg-gold-300/[0.06] p-6 md:p-10 text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 block mb-4">
                See {engine.label} Live
              </span>
              <h3 className="heading-serif text-2xl md:text-3xl mb-6">
                Request a platform briefing to see how {engine.label.toLowerCase()} works in your context.
              </h3>
              <a href="/briefing" className="btn-primary inline-flex">
                Request briefing
                <ArrowRight size={15} />
              </a>
            </ParallaxCard>
          </Reveal>
        </Section>
      </motion.div>

      <FAQSection
        id="products-faq"
        eyebrow="Pricing FAQ"
        title="How Infrakinetic packaging works"
        items={productsFaqItems}
      />
    </div>
  )
}