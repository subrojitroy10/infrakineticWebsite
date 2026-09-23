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
    subtitle: 'Governed Data Onboarding - Included for Every Tenant',
    description: 'The governed front door for your existing CRM, HRIS, finance, legacy database, or file-based data. Immutable snapshots, versioned mapping, a staged airlock, dependency-ordered execution, and an explicit human verification gate. Latest production benchmark: 900,000 source data points executed with zero failures - reconciliation and sign-off are the next gate.',
    kpis: [
      { label: 'Source Data Points', value: '900,000', icon: Database, variant: 'positive' },
      { label: 'Records Executed', value: '107,114', icon: Shield, variant: 'positive' },
      { label: 'Staging Projections', value: '120,714', icon: GitBranch, variant: 'positive' },
      { label: 'Execution Failures', value: '0', icon: FileCheck, variant: 'positive' },
    ] satisfies EngineKpi[],
    features: [
      'Multi-file and connector-based source analysis across CRM, HRIS, finance, accounting, and legacy systems',
      'Versioned mapping specification with governed custom-field support',
      'Staged airlock - validated before anything touches production',
      'Dependency-ordered, checkpointed execution with pause, resume, and per-record fault containment',
      'Reconciliation plus explicit human verification before a migration is ever called complete',
    ],
    detail: {
      healthComponents: [
        { component: 'Source Data Mapped', score: 100, weight: 100, detail: '900,000 source data points → 120,714 governed staging projections', color: 'gold' },
        { component: 'Execution Layer', score: 100, weight: 100, detail: '107,114/107,114 eligible records executed, zero failures', color: 'gold' },
        { component: 'Relationship & Lineage Integrity', score: 100, weight: 100, detail: 'Preserved throughout execution', color: 'violet' },
        { component: 'Reconciliation & Sign-off', score: 0, weight: 100, detail: 'Next evidence gate - not yet run for this benchmark', color: 'violet' },
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
    id: 'crm-sales',
    label: 'CRM & Sales',
    icon: Target,
    color: 'gold',
    subtitle: 'Commercial + Sales - Modular Revenue Engines',
    description: 'A familiar CRM and sales starting point without ending at the pipeline. Commercial owns organizations and contacts; Sales owns opportunities and deal progression. Shared platform infrastructure carries documents, approvals, workflow and governed handoffs into the other engines you enable.',
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
      'Campaign attribution - see which campaign sourced which revenue',
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
    id: 'hr',
    label: 'HR',
    icon: Users,
    color: 'violet',
    subtitle: 'Standalone People Engine',
    description: 'HR owns the employee record and core people operations: employment context, organizational placement, leave, compensation context, onboarding and governed employee lifecycle changes. Payroll and Recruitment connect to HR, but remain separate engines with their own responsibilities.',
    kpis: [
      { label: 'Headcount', value: '342', icon: Users, variant: 'neutral', delta: '+12' },
      { label: 'Active Employees', value: '329', icon: Users, variant: 'positive' },
      { label: 'Leave Requests', value: '18', icon: Activity, variant: 'neutral' },
      { label: 'Onboarding', value: '11', icon: Briefcase, variant: 'neutral' },
    ] satisfies EngineKpi[],
    features: [
      'Employee records, employment context and organization placement',
      'Leave and people-policy workflows with approval routing',
      'Compensation context and effective-dated employee changes',
      'Onboarding, offboarding and governed lifecycle transitions',
      'Native connections to separate Recruitment, Payroll, Performance and Equity engines',
    ],
    detail: {
      healthComponents: [
        { component: 'Employee Record Completeness', score: 94, weight: 100, detail: 'Core people records complete and governed', color: 'gold' },
        { component: 'Onboarding Progress', score: 88, weight: 100, detail: 'Active onboarding workflows', color: 'gold' },
        { component: 'Leave Workflow', score: 96, weight: 100, detail: 'Policy and approval routing active', color: 'violet' },
        { component: 'People Data Governance', score: 97, weight: 100, detail: 'Role and team-scoped access', color: 'violet' },
      ],
      interventions: [],
      actions: [
        { action: 'create_employee', icon: Users, label: 'Create Employee', desc: 'Start a governed employee record', color: 'gold', variant: 'primary' },
        { action: 'start_onboarding', icon: Briefcase, label: 'Start Onboarding', desc: 'Launch role-aware onboarding work', color: 'gold', variant: 'primary' },
        { action: 'request_leave', icon: Activity, label: 'Request Leave', desc: 'Policy-driven approval flow', color: 'violet', variant: 'secondary' },
        { action: 'update_compensation', icon: Wallet, label: 'Update Compensation', desc: 'Versioned and approval-aware', color: 'violet', variant: 'secondary' },
        { action: 'initiate_offboarding', icon: RefreshCw, label: 'Initiate Offboarding', desc: 'Governed transition and checklist', color: 'red', variant: 'danger' },
      ],
    },
  },
  {
    id: 'payroll',
    label: 'Payroll',
    icon: Wallet,
    color: 'gold',
    subtitle: 'Standalone Payroll Engine',
    description: 'Payroll is a separate engine from HR. It owns payroll computation, run lifecycle, approval and lock state, payslips, arrears, off-cycle processing and payroll evidence. It consumes governed employee and compensation context from HR without turning HR into the payroll system.',
    kpis: [
      { label: 'Employees in Run', value: '329', icon: Users, variant: 'neutral' },
      { label: 'Gross Payroll', value: '$428K', icon: Wallet, variant: 'neutral' },
      { label: 'Exceptions', value: '3', icon: AlertTriangle, variant: 'warning' },
      { label: 'Run Status', value: 'Reviewed', icon: Shield, variant: 'positive' },
    ] satisfies EngineKpi[],
    features: [
      'Dependency-ordered payroll calculation with pre-run validation',
      'Review, approval and immutable run locking',
      'Effective-dated compensation context for historical accuracy',
      'Payslips, arrears, off-cycle runs and full-and-final settlement',
      'Governed posting handoff to Finance without surrendering payroll ownership',
    ],
    detail: {
      healthComponents: [
        { component: 'Input Readiness', score: 97, weight: 100, detail: 'Employee and compensation inputs validated', color: 'gold' },
        { component: 'Calculation Integrity', score: 99, weight: 100, detail: 'Dependency-ordered computation', color: 'gold' },
        { component: 'Approval Coverage', score: 100, weight: 100, detail: 'Run review and approval gates', color: 'violet' },
        { component: 'Finance Reconciliation', score: 95, weight: 100, detail: 'Posting handoff remains reconcilable', color: 'violet' },
      ],
      interventions: [],
      actions: [
        { action: 'prepare_payroll', icon: RefreshCw, label: 'Prepare Payroll', desc: 'Validate run inputs', color: 'gold', variant: 'primary' },
        { action: 'run_payroll', icon: Zap, label: 'Run Payroll', desc: 'Compute governed payroll', color: 'gold', variant: 'primary' },
        { action: 'approve_payroll', icon: Shield, label: 'Approve & Lock', desc: 'Freeze reviewed results', color: 'violet', variant: 'secondary' },
        { action: 'generate_payslips', icon: FileText, label: 'Generate Payslips', desc: 'Document-engine governed output', color: 'violet', variant: 'secondary' },
        { action: 'reconcile_payroll', icon: Activity, label: 'Reconcile', desc: 'Check downstream posting totals', color: 'violet', variant: 'secondary' },
      ],
    },
  },
  {
    id: 'recruitment',
    label: 'Recruitment',
    icon: Briefcase,
    color: 'violet',
    subtitle: 'Standalone Recruitment Engine · Next-Generation Overhaul In Development',
    description: 'Recruitment is a separate engine from HR and Payroll. The current hiring workflow remains part of the product today; the next-generation overhaul for job understanding, requirement-integrity review, evidence-backed candidate matching and deeper talent intelligence is explicitly in development.',
    kpis: [
      { label: 'Open Requisitions', value: '12', icon: Briefcase, variant: 'neutral' },
      { label: 'Applications', value: '186', icon: Users, variant: 'neutral' },
      { label: 'In Interview', value: '21', icon: Target, variant: 'neutral' },
      { label: 'Product State', value: 'In Development', icon: Activity, variant: 'warning' },
    ] satisfies EngineKpi[],
    features: [
      'Current requisition, application, interview and offer workflow',
      'In development: full job-description and work-requirement understanding',
      'In development: requirement-integrity checks before weak filters reject candidates',
      'In development: evidence-backed and transferable-skill candidate matching',
      'In development: governed talent knowledge base and candidate rediscovery',
    ],
    detail: {
      healthComponents: [
        { component: 'Current Hiring Workflow', score: 100, weight: 100, detail: 'Requisition through offer remains available', color: 'gold' },
        { component: 'JD Understanding Overhaul', score: 0, weight: 100, detail: 'In development', color: 'violet' },
        { component: 'Evidence Matching', score: 0, weight: 100, detail: 'In development', color: 'violet' },
        { component: 'Talent Knowledge Base', score: 0, weight: 100, detail: 'In development', color: 'violet' },
      ],
      interventions: [],
      actions: [
        { action: 'create_requisition', icon: Briefcase, label: 'Create Requisition', desc: 'Start a governed hiring request', color: 'gold', variant: 'primary' },
        { action: 'review_applications', icon: Users, label: 'Review Applications', desc: 'Current candidate workflow', color: 'gold', variant: 'primary' },
        { action: 'schedule_interview', icon: Target, label: 'Schedule Interview', desc: 'Structured hiring workflow', color: 'violet', variant: 'secondary' },
        { action: 'generate_offer', icon: FileText, label: 'Generate Offer', desc: 'Governed document output', color: 'violet', variant: 'secondary' },
        { action: 'convert_to_hire', icon: Check, label: 'Convert to Hire', desc: 'Hand off to HR after acceptance', color: 'violet', variant: 'secondary' },
      ],
    },
  },
  {
    id: 'finance',
    label: 'Finance',
    icon: Wallet,
    color: 'gold',
    subtitle: 'Standalone Engine - Core Available, Experience Expansion In Development',
    description: 'Finance owns accounting truth: journals, ledger and posting, budgets, fiscal controls and reconciliation. Core ownership and controls are available today; the broader Finance workspace and planned overhaul experience are still being expanded and are not represented as complete.',
    kpis: [
      { label: 'ARR', value: '$1.18M', icon: Wallet, variant: 'positive', delta: '+18%' },
      { label: 'DSO', value: '28 days', icon: ChartBar, variant: 'positive', delta: '-4 days' },
      { label: 'Overdue %', value: '2.3%', icon: AlertTriangle, variant: 'warning', delta: '-1.2%' },
      { label: 'Cash Flow', value: '+$240K', icon: ChartBar, variant: 'positive', delta: '+45%' },
    ] satisfies EngineKpi[],
    features: [
      'Cryptographic ledger - hash-chained, auditor-verifiable',
      'Budget planning with hard spend limits, not soft warnings',
      'Customer invoicing runs in the independent Billing & Invoicing engine - see below',
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
    label: 'Billing & Invoicing',
    icon: FileText,
    color: 'violet',
    subtitle: 'Standalone Billing Engine - Independent of Finance',
    description: 'Billing is a standalone engine. It owns billing configuration, deterministic rating, invoice generation, delivery, reminders and collection-oriented lifecycle. It can run without Finance or Payments; either engine can be enabled later without taking over Billing ownership.',
    kpis: [
      { label: 'Invoices / Month', value: '412', icon: FileText, variant: 'neutral', delta: '+9%' },
      { label: 'Outstanding', value: '$186K', icon: Wallet, variant: 'warning' },
      { label: 'Days to Pay', value: '18 days', icon: ChartBar, variant: 'positive', delta: '-3 days' },
      { label: 'Reminders Sent', value: '99.6%', icon: Bell, variant: 'positive' },
    ] satisfies EngineKpi[],
    features: [
      'Independent entitlement - runs with or without Finance enabled',
      'Deterministic rating engine - fixed, tiered, usage, milestone, and prorated billing rules',
      'Governed, versioned billing configuration - nothing changes underneath a live rate card',
      'Automated invoice documents, delivery, and policy-driven reminders',
      'Independent lifecycle that can run whether or not Payments or Finance is enabled',
    ],
    detail: {
      healthComponents: [
        { component: 'Invoice Integrity', score: 98, weight: 100, detail: 'Immutable, hashed issued snapshots', color: 'gold' },
        { component: 'Rating Accuracy', score: 99, weight: 100, detail: 'Deterministic fixed-point rating engine', color: 'gold' },
        { component: 'Reminder Delivery', score: 96, weight: 100, detail: 'Policy-driven, pauses on dispute/hold', color: 'violet' },
        { component: 'Collection Lifecycle', score: 92, weight: 100, detail: 'Reminder and collection state remains Billing-owned', color: 'violet' },
      ],
      interventions: [],
      actions: [
        { action: 'generate_invoice', icon: FileText, label: 'Generate Invoice', desc: 'From a governed billing run', color: 'gold', variant: 'primary' },
        { action: 'send_reminder', icon: Bell, label: 'Send Reminder', desc: 'Policy-driven, pausable', color: 'gold', variant: 'primary' },
        { action: 'pause_collection', icon: Shield, label: 'Pause Collection', desc: 'Dispute or expected-payment hold', color: 'violet', variant: 'secondary' },
        { action: 'review_collections', icon: Activity, label: 'Review Collections', desc: 'Outstanding and reminder state', color: 'violet', variant: 'secondary' },
        { action: 'view_invoice_history', icon: Activity, label: 'View Invoice History', desc: 'Full issued-version trail', color: 'violet', variant: 'secondary' },
      ],
    },
  },
  {
    id: 'payments',
    label: 'Payments',
    icon: Wallet,
    color: 'violet',
    subtitle: 'Standalone Payments Engine · Independently Entitled',
    description: 'Payments is separate from both Billing and Finance. It owns payment-provider connections, payment requests and observations, settlement evidence, refunds, disputes and chargebacks. Billing can use payment evidence without owning provider state, and Finance decides separately how trusted payment facts enter accounting.',
    kpis: [
      { label: 'Payment Requests', value: '286', icon: Wallet, variant: 'neutral' },
      { label: 'Settlements', value: '42', icon: Check, variant: 'positive' },
      { label: 'Exceptions', value: '4', icon: AlertTriangle, variant: 'warning' },
      { label: 'Provider Links', value: '3', icon: Shield, variant: 'neutral' },
    ] satisfies EngineKpi[],
    features: [
      'Independent payment-provider connections and encrypted credentials',
      'Hosted payment requests and verified payment observations',
      'Settlement ingestion and reconciliation support',
      'Approval-gated refunds, disputes and chargeback adjustments',
      'Governed handoff to Billing and Finance without collapsing ownership boundaries',
    ],
    detail: {
      healthComponents: [
        { component: 'Provider Verification', score: 98, weight: 100, detail: 'Verified observations before critical state is trusted', color: 'gold' },
        { component: 'Settlement Coverage', score: 94, weight: 100, detail: 'Settlement evidence available for reconciliation', color: 'gold' },
        { component: 'Adjustment Governance', score: 100, weight: 100, detail: 'Refunds and disputes route through approval', color: 'violet' },
        { component: 'Owner Boundary', score: 100, weight: 100, detail: 'Billing and Finance transitions delegated to owning engines', color: 'violet' },
      ],
      interventions: [],
      actions: [
        { action: 'create_payment_request', icon: Wallet, label: 'Create Payment Request', desc: 'Provider-backed collection request', color: 'gold', variant: 'primary' },
        { action: 'verify_payment', icon: Shield, label: 'Verify Payment', desc: 'Confirm provider-side observation', color: 'gold', variant: 'primary' },
        { action: 'reconcile_settlement', icon: Activity, label: 'Reconcile Settlement', desc: 'Match settlement evidence', color: 'violet', variant: 'secondary' },
        { action: 'request_refund', icon: RefreshCw, label: 'Request Refund', desc: 'Approval-gated adjustment', color: 'violet', variant: 'secondary' },
        { action: 'review_dispute', icon: AlertTriangle, label: 'Review Dispute', desc: 'Track dispute evidence', color: 'red', variant: 'danger' },
      ],
    },
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: ChartBar,
    color: 'violet',
    subtitle: 'Standalone Product',
    description: 'Campaigns, SEO auditing, and email marketing connected directly to revenue. Every deal carries its sourcing campaign automatically, so marketing spend and pipeline live in the same system - not a spreadsheet reconciliation.',
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
    subtitle: 'Included with Commerce - Automatic Provisioning',
    description: 'Deal close is not the end of the sales process - it\'s the start of delivery. The moment a deal is won, Infrakinetic creates the project and order record, notifies the owner, and flags Finance for invoicing, in a single transaction. Delivery never waits on a manual handoff.',
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
    subtitle: 'Add-on - Requires Commerce',
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
    subtitle: 'Add-on - Requires Commerce',
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
    subtitle: 'Included with People - Grants & Vesting',
    description: 'Equity grants route through the same approval engine as every other decision, and vesting schedules - cliff or graded - are tracked directly against the employee compensation record they belong to. No separate system, no separate audit trail.',
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
    label: 'Platform Infrastructure',
    icon: Sliders,
    color: 'gold',
    subtitle: 'Included Platform Infrastructure',
    description: 'Documents, Approvals, Workflow, Automation, Governance, and shared work capabilities operate underneath the business engines. They are platform infrastructure, not another departmental bundle a customer has to assemble separately.',
    kpis: [
      { label: 'Engines Active', value: '11', icon: Sliders, variant: 'neutral' },
      { label: 'Uptime', value: '99.97%', icon: Shield, variant: 'positive' },
      { label: 'API Latency (p95)', value: '42ms', icon: Zap, variant: 'positive' },
      { label: 'Tenants', value: '47', icon: Building, variant: 'neutral', delta: '+3' },
    ] satisfies EngineKpi[],
    features: [
      'Approvals - one engine, routing by org structure, real-time SLA escalation',
      'Workflow - event-driven automation, no-code trigger rules',
      'Tickets - standalone work items with full activity history',
      'Governance - org structure, RBAC, board & committee model',
      'Documents - template generation, encrypted storage, version history',
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
  'crm-sales',
  'billing',
  'payments',
  'finance',
  'hr',
  'payroll',
  'recruitment',
  'customer360',
  'marketing',
  'operations',
  'agency',
  'equity',
  'migration',
  'platform-infra',
]

const productsFaqItems = [
  {
    question: 'Do I have to buy every Infrakinetic engine?',
    answer: 'No. Business engines are enabled according to the operating problem you want to solve. You can start with a focused stack and add more engines later while keeping the same platform infrastructure.',
  },
  {
    question: 'Are CRM & Sales one giant module?',
    answer: 'No. Commercial and Sales keep distinct canonical ownership while presenting a connected revenue experience. Commercial owns organizations and contacts; Sales owns opportunities and pipeline state.',
  },
  {
    question: 'Are Approvals, Workflow, Documents, Automation and Governance separate add-ons?',
    answer: 'No. They operate as shared platform infrastructure underneath the enabled business engines rather than as another set of departmental applications to assemble.',
  },
  {
    question: 'Can Billing run without Finance?',
    answer: 'Yes. Billing is independently enabled and can run invoice, delivery, reminder and collection lifecycle without Finance. Payments and Finance can join later when required.',
  },
  {
    question: 'What is still in development?',
    answer: 'Recruitment is a separate engine from HR and Payroll. Its current hiring workflow is available, while the next-generation Recruitment overhaul and parts of the broader Finance experience are still in development. Current product capability and complete-state direction are intentionally labelled separately.',
  },
  {
    question: 'Is the Migration Engine a separate line item?',
    answer: 'Governed migration is part of the onboarding experience. It is designed to move existing CRM, HRIS, finance/accounting, legacy-database or file-based data into the platform with staging, reconciliation and verification controls.',
  },
]

const engineHashAliases: Record<string, string> = {
  commerce: 'crm-sales',
}

export default function ProductsClient() {
  const [activeEngine, setActiveEngine] = useState('crm-sales')
  const engine = engines.find(e => e.id === activeEngine)!

  useEffect(() => {
    let scrollFrame: number | null = null

    const readEngineFromLocation = () => {
      const rawHash = window.location.hash.replace('#', '')
      const normalizedHash = engineHashAliases[rawHash] ?? rawHash
      return engines.some((e) => e.id === normalizedHash) ? normalizedHash : 'crm-sales'
    }

    const scrollToEngine = (engineId: string) => {
      if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame)
      scrollFrame = window.requestAnimationFrame(() => {
        scrollFrame = window.requestAnimationFrame(() => {
          document.getElementById(engineId)?.scrollIntoView({ block: 'start' })
          scrollFrame = null
        })
      })
    }

    const syncEngineFromLocation = (shouldScroll = true) => {
      const rawHash = window.location.hash.replace('#', '')
      const nextEngine = readEngineFromLocation()

      if (rawHash && rawHash !== nextEngine && engineHashAliases[rawHash] === nextEngine) {
        const canonicalUrl = `${window.location.pathname}${window.location.search}#${nextEngine}`
        window.history.replaceState(window.history.state, '', canonicalUrl)
      }

      setActiveEngine((current) => (current === nextEngine ? current : nextEngine))
      if (shouldScroll && window.location.hash) scrollToEngine(nextEngine)
    }

    const onHashChange = () => syncEngineFromLocation(true)
    const onPopState = () => syncEngineFromLocation(true)

    // Hash changes are sufficient for the engine selector. Avoid patching History
    // methods: Next.js also observes them internally, and dispatching synchronous
    // state updates from those hooks can run during React's insertion phase.
    syncEngineFromLocation(Boolean(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('popstate', onPopState)

    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('popstate', onPopState)
      if (scrollFrame !== null) window.cancelAnimationFrame(scrollFrame)
    }
  }, [])

  return (
    <div className="relative pt-16">
      <section className="relative overflow-hidden pb-10 pt-12 md:pb-12 md:pt-16">
        <div className="container-page">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end"
          >
            <div>
              <span className="eyebrow">Modular business engines</span>
              <h1 className="heading-serif mt-5 max-w-4xl text-4xl leading-[1.02] md:text-5xl lg:text-[4.4rem]">
                Start focused. Add engines when the business is ready.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/60 md:text-xl">
                Choose the business engines you need now, then add others later without rebuilding identity, documents, approvals, workflow, automation or governance around them.
              </p>
              <p className="mt-5 max-w-2xl text-sm text-white/50">
                See the <Link href="/platform" className="hairline-link text-gold-300">architecture</Link> they share, or{' '}
                <Link href="/migration" className="hairline-link text-gold-300">bring your existing data in</Link>.
              </p>
            </div>
            <aside className="border-l border-white/10 pl-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">Deployment logic</p>
              <div className="mt-5 space-y-5">
                <div><strong className="block text-2xl text-white">17</strong><span className="text-xs text-white/42">business engines across current and complete-state scope</span></div>
                <div><strong className="block text-base text-white">One shared foundation</strong><span className="text-xs leading-5 text-white/42">Identity, documents, approvals, workflow, automation and governance remain common.</span></div>
                <div><strong className="block text-base text-white">No forced full-suite buy</strong><span className="text-xs leading-5 text-white/42">Enable the operating areas that make sense first.</span></div>
              </div>
            </aside>
          </motion.div>
        </div>
      </section>

      {/* Engine Selector Tabs */}
      <Section id="engine-selector" className="py-4 md:py-5">
        <Reveal variant="fade" className="mt-0">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {engineOrder.map((engineId) => {
              const eng = engines.find(e => e.id === engineId)!
              const isActive = activeEngine === engineId
              return (
                <button
                  key={engineId}
                  onClick={() => {
                    window.location.hash = engineId
                  }}
                  className={`border-b px-3 py-2.5 text-sm font-medium transition-colors ${
                    isActive
                      ? `border-gold-300 text-gold-300`
                      : 'border-white/10 text-white/60 hover:border-gold-300/40 hover:text-white'
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
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Hero / KPIs */}
        <Section id={engine.id} eyebrow={engine.subtitle} title={engine.label} lead={engine.description} className="pb-20 pt-8 md:pb-24 md:pt-10 scroll-mt-24">
          <Reveal variant="fade" className="mt-10">
            <KpiTileRow tiles={engine.kpis} gap="gap-3 sm:gap-4" />
            <p className="mt-3 text-xs text-white/65">
              {engine.id === 'migration'
                ? 'Real product interface · production benchmark figures, reconciliation and sign-off pending for this run.'
                : 'Real product interface · illustrative data, not a customer outcome.'}
            </p>
          </Reveal>

          <Reveal variant="fade" className="mt-14">
            <div className="soft-panel grid gap-0 p-3 md:grid-cols-2 lg:grid-cols-3">
              {engine.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <div className="flex h-full flex-col rounded-lg px-5 py-6 md:px-6 md:py-7">
                    <div className={`mb-4 grid h-12 w-12 place-items-center rounded-xl border ${engine.color === 'gold' ? 'border-gold-300/30 bg-gold-300/[0.08] text-gold-300' : 'border-violet-400/30 bg-violet-400/[0.08] text-violet-300'}`}>
                      <engine.icon size={20} />
                    </div>
                    <p className="flex items-start gap-2 text-sm text-white/60 flex-1">
                      <Check size={12} className="shrink-0 mt-0.5" />
                      {feature}
                    </p>
                  </div>
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
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <ParallaxCard depth={18} className="feature-frame h-full p-6 md:p-8">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="heading-serif text-xl">Health Score - Versioned</h3>
                        <p className="text-sm text-white/50 mt-1">
                          {engine.label} · {engine.id === 'migration' ? 'Execution-layer production run' : 'Heuristic v2'}
                        </p>
                      </div>
                      {engine.id === 'migration' ? (
                        <span className="rounded-full border border-gold-300/30 bg-gold-300/10 px-2.5 py-1 text-[11px] font-medium text-gold-300">
                          Zero failures
                        </span>
                      ) : (
                        <StatusBadge value="heuristic" family="lifecycle" size="sm" />
                      )}
                    </div>
                    <p className="text-xs text-white/65 mb-6">
                      {engine.id === 'migration'
                        ? 'Measured from a real production run, not a projection - reconciliation and final sign-off are the next gate, not yet complete for this run.'
                        : `Illustrative example - shows what ${engine.label}'s scoring model computes, not a claim about your own data.`}
                    </p>

                    <div className="space-y-3">
                      {engine.detail.healthComponents.map((comp) => (
                        <motion.div
                          key={comp.component}
                          initial={false}
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
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <ParallaxCard depth={22} className="feature-frame h-full p-6 md:p-8 flex flex-col">
                    <h3 className="heading-serif text-xl mb-4">Interventions (+30d Outcome)</h3>
                    <div className="flex-1 overflow-y-auto space-y-3">
                      {engine.detail.interventions.length > 0 ? (
                        engine.detail.interventions.map((intervention) => (
                          <motion.div
                            key={intervention.date}
                            initial={false}
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
                                ? 'border-danger/30 bg-danger/[0.04] hover:bg-danger/[0.08]'
                                : 'border-violet-400/30 bg-violet-400/[0.04] hover:bg-violet-400/[0.08]'
                            }`}
                          >
                            <div className="flex items-start gap-2">
                              <action.icon size={16} className={`shrink-0 mt-0.5 ${action.color === 'gold' ? 'text-gold-300' : action.color === 'violet' ? 'text-violet-300' : 'text-danger'}`} />
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
                  initial={false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <ParallaxCard depth={20} className="feature-frame p-6 md:p-8 border-gold-300/25">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <StatusBadge value="learned" family="lifecycle" size="md" dot />
                    </div>
                    <p className="text-5xl font-semibold tracking-tight text-white mb-1">73%</p>
                    <p className="text-sm text-white/50">Churn Risk · Learned · n=342 · 90% CI: 69–77%</p>
                    <p className="mt-4 text-xs text-white/65">Per-tenant. Never pooled. DPDP 2023 aligned by architecture.</p>
                  </ParallaxCard>
                </motion.div>

                <motion.div
                  initial={false}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <ParallaxCard depth={18} className="feature-frame p-6 md:p-8">
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
                          initial={false}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.08 }}
                          className="relative"
                        >
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-white/80">{factor.label}</span>
                            <span className={`font-semibold ${factor.color === 'red' ? 'text-danger' : 'text-violet-300'}`}>{factor.impact}</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: factor.impact }}
                              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                              className={`h-full rounded-full ${factor.color === 'red' ? 'bg-danger' : 'bg-violet-400'}`}
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
            <div className="border-y border-gold-300/25 py-8 text-center md:py-10">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-300 block mb-4">
                See {engine.label} Live
              </span>
              <h3 className="heading-serif text-2xl md:text-3xl mb-6">
                Request a platform briefing to see how {engine.label.toLowerCase()} works in your context.
              </h3>
              <Link href="/briefing" className="btn-primary inline-flex">
                Request briefing
                <ArrowRight size={15} />
              </Link>
            </div>
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