// Homepage copy for Infrakinetic.
// The narrative is intentionally problem-led: enterprise friction first,
// shared operating infrastructure second, product capabilities as evidence.

export interface Brand {
  name: string
  parent: string
  tagline: string
  subtitle: string
}

export interface NavItem {
  label: string
  href: string
}

export interface PainPoint {
  title: string
  desc: string
}

export interface ProblemSection {
  eyebrow: string
  title: string
  lead: string
  pains: PainPoint[]
}

export interface NotThisItem {
  label: string
  reason: string
}

export interface NotThisSection {
  eyebrow: string
  title: string
  items: NotThisItem[]
}

export interface MeetSection {
  eyebrow: string
  title: string
  lead: string
  foundation: string[]
  engines: string[]
}

export interface NodeItem {
  label: string
  desc: string
}

export interface ConnectedSection {
  eyebrow: string
  title: string
  lead: string
  closer: string
  nodes: NodeItem[]
}

export interface Journey {
  key: string
  name: string
  tag: string
  summary: string
  steps: string[]
  evidence: string[]
}

export interface DifferentiatorPoint {
  title: string
  desc: string
}

export interface DifferentiatorsSection {
  eyebrow: string
  title: string
  lead: string
  points: DifferentiatorPoint[]
}

export interface ScaleLayer {
  n: string
  title: string
  items: string
  details: string[]
}

export interface EnterpriseCard {
  title: string
  desc: string
}

export interface EnterpriseSection {
  eyebrow: string
  title: string
  cards: EnterpriseCard[]
}

export interface EnableItem {
  capability: string
  foundation: string
}

export interface EnablesSection {
  eyebrow: string
  title: string
  items: EnableItem[]
}

export interface WhySection {
  eyebrow: string
  title: string
  lead: string
  traditional: string[]
  infrakinetic: string[]
  bottomLine: string
}

export interface RoadmapPhase {
  phase: string
  summary: string
  items: string[]
}

export interface CTASection {
  eyebrow: string
  title: string
  lead: string
}

export const brand: Brand = {
  name: 'Infrakinetic',
  parent: 'A Polynovea Product',
  tagline: 'Run the company, not the software stack.',
  subtitle:
    'Infrakinetic connects commercial, workforce, finance, operations, documents, workflow, and reporting on one governed business data layer.',
}

export const nav: NavItem[] = [
  { label: 'Reality', href: '#problem' },
  { label: 'Foundation', href: '#platform' },
  { label: 'Journeys', href: '#modules' },
  { label: 'Intelligence', href: '#intelligence' },
  { label: 'Enterprise', href: '#enterprise' },
  { label: 'Products', href: '/products' },
]

export const problem: ProblemSection = {
  eyebrow: 'The operating reality',
  title: "Companies don't lack software. The work between systems still breaks.",
  lead:
    'Your CRM, HRIS, and finance tools each work fine in isolation. But the handoffs between them — lead to contract, hire to payroll, project to invoice — run on spreadsheets, Slack, and hope. This is the status quo.',
  pains: [
    {
      title: 'Renewals fall through the cracks',
      desc: 'With disconnected tools, a renewal is just a date on a contract — not an opportunity that re-enters Sales with full context. The loop never closes.',
    },
    {
      title: 'Health scores are guesswork',
      desc: 'Four different scorers (lead quality, opportunity priority, intelligence confidence, customer health) — all browser-only, never persisted, never versioned. Every weight is asserted, not measured.',
    },
    {
      title: 'Finance is invisible to the rest of the org',
      desc: 'Invoice status changes, payment receipts, and write-offs emit zero events. Your churn model is blind to the single most objective signal a B2B business has.',
    },
    {
      title: 'Nobody knows why customers leave',
      desc: 'No loss_reason, churn_reason, or win_reason fields exist. Without labeled outcomes, no model can learn why customers churn — only that they did.',
    },
    {
      title: "Deals don't hand off cleanly",
      desc: 'Sales closes in the CRM, delivery starts in a different tool with no shared record — lost context, a delayed kickoff, and no trail showing what changed hands or when.',
    },
    {
      title: 'Approvals work differently everywhere',
      desc: 'Leave goes through one tool, budgets through email, contracts through a shared drive. Six approval processes means six sets of rules — and nobody owns the audit trail.',
    },
    {
      title: 'Org charts live in slide decks',
      desc: 'Reporting lines and access live in a slide nobody updates. New hires get routed to the wrong approver because the system has no idea who actually reports to whom.',
    },
  ],
}

export const notThis: NotThisSection = {
  eyebrow: 'What Infrakinetic is not',
  title: "It doesn't fit neatly into a category you already know.",
  items: [
    { label: 'A CRM', reason: "Too narrow — it also runs finance, HR, governance, operations, and customer success." },
    { label: 'An ERP', reason: 'Too rigid — built around event-driven automation, not batch processing.' },
    { label: 'An HRIS or payroll tool', reason: 'Too siloed — hiring is inseparable from payroll, and payroll posts straight to an immutable ledger.' },
    { label: 'A workflow tool', reason: 'Too generic — approvals, events, and governance are platform primitives, not bolt-on features.' },
    { label: 'An integration platform', reason: 'Wrong architecture — one data model and one source of truth, not synced copies drifting apart.' },
  ],
}

export const meet: MeetSection = {
  eyebrow: 'Infrakinetic foundation',
  title: 'The operational foundation that keeps business work connected.',
  lead:
    'Infrakinetic provides shared infrastructure for identity, permissions, workflow, approvals, documents, audit trails, reporting, notifications, and organizational structure. Every operating engine runs on the same foundation.',
  foundation: [
    'Shared identity',
    'Shared permissions',
    'Shared workflow',
    'Shared approvals',
    'Shared documents',
    'Shared records',
    'Shared audit trails',
    'Shared reporting',
    'Shared notifications',
  ],
  engines: [
    'Commercial',
    'Sales',
    'Marketing',
    'Finance',
    'HR',
    'Recruitment',
    'Workforce',
    'Payroll',
    'Documents',
    'Executive Reporting',
    'Approvals',
    'Workflow',
    'Tickets',
    'Governance',
  ],
}

export const connected: ConnectedSection = {
  eyebrow: 'Operating architecture',
  title: 'Every engine contributes to one connected operating environment.',
  lead:
    'Infrakinetic is not organized around isolated applications. Commercial, workforce, finance, documents, workflow, and reporting share the same business context, controls, events, and visibility model.',
  closer: 'Continuity across work. Governance across process. Visibility across the organization.',
  nodes: [
    { label: 'Business context', desc: 'Customers, people, vendors, agreements, projects, and documents' },
    { label: 'Workflow', desc: 'Approvals, transitions, events, notifications, and accountability' },
    { label: 'Control', desc: 'Roles, teams, permissions, audit history, and operational policies' },
    { label: 'Visibility', desc: 'Executive reporting from connected operational activity' },
  ],
}

export const journeys: Journey[] = [
  {
    key: 'revenue',
    name: 'Revenue execution',
    tag: 'Commercial continuity',
    summary:
      'A customer journey should not break when it leaves the CRM. Infrakinetic carries context from demand to agreement, delivery, finance, and reporting.',
    steps: ['Lead', 'Opportunity', 'Agreement', 'Project', 'Invoice', 'Revenue', 'Executive reporting'],
    evidence: [
      'Customer and agreement context stay connected',
      'Finance activity links back to commercial work',
      'Reporting reflects operational events, not spreadsheet reconstruction',
    ],
  },
  {
    key: 'workforce',
    name: 'Workforce execution',
    tag: 'People continuity',
    summary:
      'A workforce journey should not reset at hiring. Infrakinetic connects recruitment, onboarding, HR operations, payroll, performance, and employee records.',
    steps: ['Candidate', 'Recruitment', 'Hiring', 'Onboarding', 'HR', 'Payroll', 'Performance'],
    evidence: [
      'Employee records connect across workforce and payroll',
      'Approvals and audit history follow sensitive changes',
      'Payroll runs from governed records instead of disconnected handoffs',
    ],
  },
  {
    key: 'cx360',
    name: 'Customer lifecycle intelligence',
    tag: 'CX360',
    summary:
      'Portfolio Radar, health scoring, measured interventions, action rail, document management, and calibrated churn risk — the customer record that connects commercial, finance, support, and success. Built and deployed end-to-end.',
    steps: ['Lifecycle state', 'Health score', 'Interventions', 'Action rail', 'Churn risk'],
    evidence: [
      'Unified customer view across commercial, finance, support',
      'Measured interventions with +30d outcome tracking',
      'Calibrated ML predictions with SHAP explanations',
    ],
  },
]

export const differentiators: DifferentiatorsSection = {
  eyebrow: 'Platform differentiators',
  title: 'Built for governed execution, not disconnected activity.',
  lead:
    'Infrakinetic is designed around the controls complex operations need as work moves across commercial, workforce, finance, documents, approvals, and reporting.',
  points: [
    {
      title: 'Tamper-evident finance controls',
      desc:
        'Financial activity is designed around append-only discipline, actor attribution, approval context, and traceable change history.',
    },
    {
      title: 'Bitemporal payroll history',
      desc:
        'Payroll and compensation changes can be superseded without losing the rule, rate, or package context that produced a historical outcome.',
    },
    {
      title: 'Database-level tenant isolation',
      desc:
        'Tenant boundaries are enforced at the data layer so isolation is not dependent only on application-screen logic.',
    },
    {
      title: 'Source-bound AI assistance',
      desc:
        'AI-assisted outputs are treated as governed drafts tied to source facts, review states, and audit context.',
    },
    {
      title: 'Cross-engine event automation',
      desc:
        'Business events and approval states can connect commercial, finance, workforce, project, and document workflows without rebuilding context.',
    },
    {
      title: 'Operational execution history',
      desc:
        'Approvals, ownership, workflow transitions, and sensitive changes are captured as part of execution, not reconstructed later.',
    },
    {
      title: 'Calibrated churn intelligence',
      desc:
        'Three-tier model (heuristic → statistical → learned) with isotonic calibration, conformal prediction intervals, and SHAP explanations — per tenant, never pooled.',
    },
    {
      title: 'Platform infrastructure included from day one',
      desc:
        'Approvals, Workflow, Tickets, Governance, and Documents ship with every tenant — not held back as something you have to unlock later.',
    },
    {
      title: 'Engines that come as complete systems',
      desc:
        'Commerce is Commercial and Sales working as one connected pipeline, not two products stitched together. People is HR, Recruitment, Workforce, and Payroll sharing a single employee record, not four tools synced after the fact.',
    },
  ],
}

export const scaleLayers: ScaleLayer[] = [
  {
    n: '01',
    title: 'Operational continuity',
    items: 'Work moves across functions without losing context.',
    details: [
      'Commercial, workforce, finance, and document workflows share one execution path.',
      'Teams do not rebuild the same business context at every handoff.',
    ],
  },
  {
    n: '02',
    title: 'Governed execution',
    items: 'Permissions, approvals, audit history, and workflow states operate together.',
    details: [
      'Sensitive changes carry actor, approval, and timing context.',
      'Controls live with the workflow instead of sitting in separate admin screens.',
    ],
  },
  {
    n: '03',
    title: 'Enterprise visibility',
    items: 'Reporting is built from connected operational activity.',
    details: [
      'Leadership sees the movement of work, not only after-the-fact exports.',
      'Operational signals stay tied to the functions that produced them.',
    ],
  },
  {
    n: '04',
    title: 'Expansion without rebuilding',
    items: 'New domains join the same foundation instead of creating another stack.',
    details: [
      'Additional engines can reuse identity, permissions, approvals, documents, and reporting.',
      'The roadmap extends the foundation rather than multiplying isolated control planes.',
    ],
  },
]

export const enterprise: EnterpriseSection = {
  eyebrow: 'Governance',
  title: 'Governance is an operating capability, not a settings page.',
  cards: [
    {
      title: 'Permissioned execution',
      desc: 'Role and team controls define who can see, approve, and act across sensitive operational domains.',
    },
    {
      title: 'Approval accountability',
      desc: 'Decisions are routed through governed workflows with clear responsibility and operational history.',
    },
    {
      title: 'Audit-ready records',
      desc: 'Operational changes create history that can be reviewed, traced, and governed as the company scales.',
    },
    {
      title: 'Organizational structure',
      desc: 'Teams, roles, hierarchy, and ownership are part of the operating model, not disconnected admin data.',
    },
  ],
}

export const enables: EnablesSection = {
  eyebrow: 'What the architecture enables',
  title: "The controls aren't bolted on — they're why the platform works.",
  items: [
    { capability: 'Real-time budget vs. actual', foundation: 'One shared ledger that every spend event writes to immediately, not overnight' },
    { capability: 'Deal to onboarding in seconds', foundation: 'Deal close fires an event that routes through approvals and org structure automatically' },
    { capability: 'Audit-ready at any moment', foundation: 'An append-only, cryptographically verified trail — not a reconstruction exercise' },
    { capability: 'Governance-aware routing', foundation: 'Org structure and governance model decide who approves what, automatically' },
    { capability: 'Per-country payroll compliance', foundation: 'Each legal entity carries its own statutory rules, not a single global template' },
    { capability: 'Customer health from real signals', foundation: 'One versioned scoring system tied to outcomes, not four disconnected formulas' },
    { capability: 'AI assistance without the risk', foundation: 'Every output is gated, transparent, bounded, and overridable by a human' },
  ],
}

export const why: WhySection = {
  eyebrow: 'Operating model',
  title: 'The difference is continuity.',
  lead:
    'Most business software optimizes departments. Infrakinetic is built around the work that moves between them.',
  traditional: [
    'Department-specific tools',
    'Manual handoffs between systems',
    'Duplicate operational records',
    'Approvals in email and chat',
    'Reporting rebuilt after the fact',
    'Governance applied inconsistently',
  ],
  infrakinetic: [
    'Shared operating foundation',
    'Connected cross-functional workflows',
    'Common business data layer',
    'Governed approvals and records',
    'Operational visibility by design',
    'Controls that scale with the organization',
  ],
  bottomLine:
    'Infrakinetic reduces the structural friction created when business work, records, approvals, and reporting are split across disconnected systems.',
}

export const roadmap: RoadmapPhase[] = [
  {
    phase: 'Will be published soon',
    summary: 'Detailed roadmap coming to /resources.',
    items: [],
  },
]

export const cta: CTASection = {
  eyebrow: 'Platform briefing',
  title: 'Evaluate Infrakinetic as operating infrastructure.',
  lead:
    'Review how the platform connects commercial, workforce, finance, governance, and reporting workflows on one operational foundation.',
}
