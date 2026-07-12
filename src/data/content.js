// All landing-page copy, sourced directly from the Noviq pitch deck.
// Centralized here so content edits never touch component logic.

export const brand = {
  name: 'Noviq',
  parent: 'A Polynovea Product',
  tagline: 'Your Business. One Operating System.',
  subtitle:
    'CRM · HR · Payroll — unified from the start, designed to scale across your entire organization.',
}

export const nav = [
  { label: 'Platform', href: '#platform' },
  { label: 'Modules', href: '#modules' },
  { label: 'Scale', href: '#scale' },
  { label: 'Why Noviq', href: '#why' },
  { label: 'Roadmap', href: '#roadmap' },
]

export const problem = {
  eyebrow: 'The real problem',
  title: "Businesses don't have a CRM problem.",
  lead: 'They have a disconnected software problem. Sales, HR, Payroll, Projects, Finance, and Support each run on separate tools that don’t communicate — creating friction at every level of the business.',
  pains: [
    { title: 'Duplicate Work', desc: 'Teams re-enter data across systems.' },
    { title: 'Inconsistent Data', desc: 'Conflicting records drive bad decisions.' },
    { title: 'Manual Reporting', desc: 'Hours lost compiling spreadsheets.' },
    { title: 'Slow Decisions', desc: 'Leadership lacks real-time visibility.' },
  ],
}

export const meet = {
  eyebrow: 'Meet Noviq',
  title: 'One platform that grows with you.',
  lead: 'Noviq is a modular business operating platform — start with what you need today and expand as you grow. Every module shares one unified database, so data flows seamlessly across your entire organization.',
  startHere: ['CRM', 'HR', 'Payroll'],
  expand: ['Operations', 'Finance', 'Projects', 'Support', 'Marketing', 'AI & Analytics'],
}

export const connected = {
  eyebrow: 'Everything connected',
  title: 'One shared business database.',
  lead: 'Noviq replaces your fragmented tool stack with a single, shared business database. Every module — from CRM to Payroll to Finance — reads and writes to the same source of truth, eliminating data silos permanently.',
  closer: 'One platform. One database. Complete organizational visibility.',
  nodes: [
    { label: 'CRM', desc: 'Unified customer records' },
    { label: 'HR', desc: 'Employee data in one place' },
    { label: 'Payroll', desc: 'Accurate pay and records' },
    { label: 'Executive Dashboard', desc: 'Real-time company insights' },
  ],
}

export const modules = [
  {
    key: 'crm',
    name: 'CRM',
    tag: 'Commercial Engine',
    summary:
      'A complete view of every customer relationship — from first lead to closed contract and beyond.',
    features: [
      {
        title: 'Lead & Opportunity Management',
        desc: 'Track leads, qualify opportunities, and manage your full pipeline with precision.',
      },
      {
        title: 'Accounts, Contacts & Timeline',
        desc: 'Unified customer profiles with full interaction history and relationship context.',
      },
      {
        title: 'Contracts & Engagements',
        desc: 'Manage agreements and ongoing engagements directly within each customer record.',
      },
      {
        title: 'Pipeline Analytics',
        desc: 'Real-time visibility into deal flow, conversion rates, and revenue forecasting.',
      },
    ],
  },
  {
    key: 'hr',
    name: 'HR & Payroll',
    tag: 'People Engine',
    summary:
      'Manage your people and pay them accurately — all within the same platform where your customer data lives.',
    features: [
      {
        title: 'People Management',
        desc: 'Employee profiles, organizational structure, and department & team configuration.',
      },
      {
        title: 'Attendance & Leave',
        desc: 'Attendance tracking and leave management built into the same record.',
      },
      {
        title: 'Automated Payroll',
        desc: 'Automated payroll processing with accurate pay and complete records.',
      },
      {
        title: 'Role-Based Access',
        desc: 'Granular, team-level permissions across users and departments.',
      },
    ],
  },
]

export const scaleLayers = [
  { n: '01', title: 'Foundation', items: 'CRM · HR · Payroll' },
  { n: '02', title: 'Operations Layer', items: 'Finance · Projects · Support' },
  { n: '03', title: 'Intelligence Layer', items: 'Marketing · AI Assistants · Analytics' },
  { n: '04', title: 'Enterprise Layer', items: 'Executive Dashboards · Industry Modules' },
]

export const enterprise = {
  eyebrow: 'Enterprise ready',
  title: 'Built for security, control, and scale — from day one.',
  cards: [
    {
      title: 'Security & Isolation',
      desc: 'Multi-tenant architecture with secure data isolation and audit-ready logging across all modules.',
    },
    {
      title: 'Access Control',
      desc: 'Role-based permissions and team-level access ensure the right people see the right data.',
    },
    {
      title: 'Cloud & Scalability',
      desc: 'Fully cloud-hosted with scalable APIs designed to grow alongside your organization.',
    },
    {
      title: 'Modular Architecture',
      desc: 'Add or configure modules independently without disrupting existing operations or data.',
    },
  ],
}

export const why = {
  eyebrow: 'Why Noviq',
  title: "The choice isn't between CRMs.",
  lead: "It's between a fragmented stack and a unified operating system.",
  traditional: [
    'CRM only covers customer data',
    'Separate HR software',
    'Separate Payroll system',
    'Separate Operations tools',
    'Multiple subscriptions & logins',
    'No shared data layer',
  ],
  noviq: [
    'Customers, Employees & Payroll',
    'Operations & Finance',
    'Projects, Support & Marketing',
    'AI Assistants & Analytics',
    'One platform, one subscription',
    'One shared database',
  ],
  bottomLine:
    'Noviq eliminates the cost, complexity, and risk of managing disconnected business software — so your team can focus on growth, not integration.',
}

export const roadmap = [
  { phase: 'Phase 1', items: 'CRM, HR, Payroll' },
  { phase: 'Phase 2', items: 'Finance, Projects, Operations' },
  { phase: 'Phase 3', items: 'Marketing, Support, Research, Analytics' },
  {
    phase: 'Phase 4',
    items: 'AI Business Operating System — Natural language search, AI Copilot, Workflow automation, Decision intelligence',
  },
]

export const cta = {
  eyebrow: 'Get started',
  title: 'Run your entire business on one operating system.',
  lead: 'See how Noviq unifies CRM, HR, and Payroll today — and scales to everything else tomorrow.',
}
