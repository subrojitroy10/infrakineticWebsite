import Link from 'next/link'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { ArrowRight, Check, FileText, GitBranch, Layers, Shield, Target, Users, Wallet, Zap } from '@/components/ui/Icons'

const engines = [
  {
    title: 'CRM & Sales',
    searchLabel: 'CRM software',
    href: '/crm-software',
    description: 'Organizations, contacts, pipeline, proposals, deal conversion, renewals and commercial continuity.',
    status: 'Available',
    statusTone: 'available',
    icon: Target,
  },
  {
    title: 'Billing & Invoicing',
    searchLabel: 'Billing software',
    href: '/billing-software',
    description: 'Deterministic billing rules, invoice generation, delivery, reminders and collection lifecycle.',
    status: 'Available',
    statusTone: 'available',
    icon: FileText,
  },
  {
    title: 'Payments',
    searchLabel: 'Payment operations',
    href: '/products#payments',
    description: 'Payment requests, provider observations, settlements, refunds, disputes and reconciliation support.',
    status: 'Available',
    statusTone: 'available',
    icon: Zap,
  },
  {
    title: 'Finance & Accounting',
    searchLabel: 'Finance software',
    href: '/finance-software',
    description: 'Ledger, journals, budgets, fiscal control, reconciliation and financial reporting foundations.',
    status: 'Available · expanding',
    statusTone: 'progress',
    icon: Wallet,
  },
  {
    title: 'HR',
    searchLabel: 'HR software',
    href: '/hr-software',
    description: 'Employee records, employment context, organizational structure, leave, compensation context and people operations.',
    status: 'Available',
    statusTone: 'available',
    icon: Users,
  },
  {
    title: 'Payroll',
    searchLabel: 'Payroll software',
    href: '/payroll-software',
    description: 'Payroll calculation, run approval, lock state, payslips, arrears, off-cycle processing and reconciliation.',
    status: 'Available',
    statusTone: 'available',
    icon: Wallet,
  },
  {
    title: 'Customer Success',
    searchLabel: 'Customer success software',
    href: '/products#customer360',
    description: 'Lifecycle state, customer health, interventions, relationship context and renewal continuity.',
    status: 'Available',
    statusTone: 'available',
    icon: Shield,
  },
  {
    title: 'Recruitment',
    searchLabel: 'Recruitment / ATS software',
    href: '/products#recruitment',
    description: 'The next-generation Recruitment overhaul adds job understanding, requirement integrity and evidence-backed matching.',
    status: 'Overhaul in development',
    statusTone: 'development',
    icon: GitBranch,
  },
  {
    title: 'Marketing',
    searchLabel: 'Marketing operations',
    href: '/products#marketing',
    description: 'Campaigns, attribution, SEO intelligence and content operations connected back to commercial activity.',
    status: 'Available',
    statusTone: 'available',
    icon: Layers,
  },
]

const infrastructure = [
  { title: 'Documents', detail: 'Templates, generation, versions, reviews, signatures and business relationships.' },
  { title: 'Approvals', detail: 'One decision-routing layer across commercial, finance, people and operational work.' },
  { title: 'Workflow', detail: 'Repeatable, staged processes with ownership, progression and traceable state.' },
  { title: 'Automation', detail: 'Governed business events can trigger approved actions without losing accountability.' },
  { title: 'Governance', detail: 'Users, teams, structure, permissions, authority and access context.' },
  { title: 'Work & Tickets', detail: 'Assigned work, requests and operational items in one accountable queue.' },
]

function Status({ tone, children }: { tone: string; children: React.ReactNode }) {
  const styles =
    tone === 'development'
      ? 'border-review-border/50 bg-review-bg/45 text-review'
      : tone === 'progress'
      ? 'border-warning-border/45 bg-warning-bg/35 text-warning'
      : 'border-success-border/45 bg-success-bg/35 text-success'

  return <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${styles}`}>{children}</span>
}

export default function ModularPlatform() {
  return (
    <Section
      id="engines"
      eyebrow="Start where you need"
      title="Buy the problem you need to solve. Expand without rebuilding."
      lead="Infrakinetic is not one mandatory mega-suite. Business engines are independently enabled, while shared platform infrastructure keeps the engines you choose connected."
      className="border-b border-white/[0.06]"
    >
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {engines.map((engine, index) => (
          <Reveal key={engine.title} variant="up" delay={index * 0.035}>
            <Link
              href={engine.href}
              className="group flex h-full min-h-[250px] flex-col rounded-2xl border border-white/[0.08] bg-white/[0.018] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300/28 hover:bg-white/[0.03]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-gold-300 transition-colors group-hover:border-gold-300/30 group-hover:bg-gold-300/[0.06]">
                  <engine.icon size={18} />
                </span>
                <Status tone={engine.statusTone}>{engine.status}</Status>
              </div>

              <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">{engine.searchLabel}</p>
              <h3 className="mt-2 font-display text-xl font-semibold tracking-[-0.02em] text-white">{engine.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">{engine.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-gold-300">
                Explore
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-400/[0.065] via-white/[0.015] to-gold-300/[0.045] p-6 md:p-9">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-400/10 blur-3xl" aria-hidden />
        <div className="relative grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300">
              <Layers size={12} />
              Included platform infrastructure
            </span>
            <h3 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-4xl">
              These are not six more products to buy.
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/58">
              Every enabled engine runs on the same operating infrastructure. That is why adding another Infrakinetic engine does not mean assembling another integration project around it.
            </p>

            <div className="mt-7 flex items-start gap-3 rounded-xl border border-gold-300/20 bg-gold-300/[0.04] p-4">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-300/10 text-gold-300">
                <Check size={12} />
              </span>
              <p className="text-sm leading-relaxed text-white/62">
                Governed migration is also part of the onboarding experience, so the route into the platform is treated as a product capability rather than an afterthought.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {infrastructure.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/[0.075] bg-ink-800/55 p-4 backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-300" />
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-white/45">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
