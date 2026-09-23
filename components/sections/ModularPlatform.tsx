import Link from 'next/link'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { ArrowRight, Check, FileText, GitBranch, Layers, Shield, Target, Users, Wallet, Zap } from '@/components/ui/Icons'

const engines = [
  { title: 'CRM & Sales', searchLabel: 'CRM software', href: '/crm-software', description: 'Organizations, contacts, pipeline, proposals, deal conversion, renewals and commercial continuity.', status: 'Available', statusTone: 'available', icon: Target },
  { title: 'Billing & Invoicing', searchLabel: 'Billing software', href: '/billing-software', description: 'Deterministic billing rules, invoice generation, delivery, reminders and collection lifecycle.', status: 'Available', statusTone: 'available', icon: FileText },
  { title: 'Payments', searchLabel: 'Payment operations', href: '/products#payments', description: 'Payment requests, provider observations, settlements, refunds, disputes and reconciliation support.', status: 'Available', statusTone: 'available', icon: Zap },
  { title: 'Finance & Accounting', searchLabel: 'Finance software', href: '/finance-software', description: 'Ledger, journals, budgets, fiscal control, reconciliation and financial reporting foundations.', status: 'Available · expanding', statusTone: 'progress', icon: Wallet },
  { title: 'HR', searchLabel: 'HR software', href: '/hr-software', description: 'Employee records, employment context, organizational structure, leave, compensation context and people operations.', status: 'Available', statusTone: 'available', icon: Users },
  { title: 'Payroll', searchLabel: 'Payroll software', href: '/payroll-software', description: 'Payroll calculation, run approval, lock state, payslips, arrears, off-cycle processing and reconciliation.', status: 'Available', statusTone: 'available', icon: Wallet },
  { title: 'Customer Success', searchLabel: 'Customer success software', href: '/products#customer360', description: 'Lifecycle state, customer health, interventions, relationship context and renewal continuity.', status: 'Available', statusTone: 'available', icon: Shield },
  { title: 'Recruitment', searchLabel: 'Recruitment / ATS software', href: '/products#recruitment', description: 'The next-generation Recruitment overhaul adds job understanding, requirement integrity and evidence-backed matching.', status: 'Overhaul in development', statusTone: 'development', icon: GitBranch },
  { title: 'Marketing', searchLabel: 'Marketing operations', href: '/products#marketing', description: 'Campaigns, attribution, SEO intelligence and content operations connected back to commercial activity.', status: 'Available', statusTone: 'available', icon: Layers },
]

const infrastructure = [
  { title: 'Documents', detail: 'Templates, generation, versions, reviews, signatures and business relationships.' },
  { title: 'Approvals', detail: 'One decision-routing layer across commercial, finance, people and operational work.' },
  { title: 'Workflow', detail: 'Repeatable, staged processes with ownership, progression and traceable state.' },
  { title: 'Automation', detail: 'Governed business events can trigger approved actions without losing accountability.' },
  { title: 'Governance', detail: 'Users, teams, structure, permissions, authority and access context.' },
  { title: 'Work & Tickets', detail: 'Assigned work, requests and operational items in one accountable queue.' },
]

function statusClass(tone: string) {
  if (tone === 'development') return 'text-review'
  if (tone === 'progress') return 'text-warning'
  return 'text-success'
}

function EngineRow({ engine, index }: { engine: (typeof engines)[number]; index: number }) {
  return (
    <Reveal variant="up" delay={Math.min(index * 0.025, 0.12)}>
      <Link
        href={engine.href}
        className="group grid grid-cols-[34px_1fr_auto] gap-4 border-t border-white/[0.09] py-5 transition-colors hover:border-gold-300/35"
      >
        <span className="pt-0.5 font-display text-sm text-white/28">{String(index + 1).padStart(2, '0')}</span>
        <div className="min-w-0">
          <div className="flex items-center gap-2.5">
            <engine.icon size={15} className="shrink-0 text-gold-300" />
            <h3 className="text-base font-semibold text-white transition-colors group-hover:text-gold-200">{engine.title}</h3>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-white/45">{engine.description}</p>
          <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/28">{engine.searchLabel}</p>
        </div>
        <div className="flex flex-col items-end justify-between gap-4">
          <span className={`whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.12em] ${statusClass(engine.statusTone)}`}>{engine.status}</span>
          <ArrowRight size={13} className="text-white/24 transition-colors group-hover:text-gold-300" />
        </div>
      </Link>
    </Reveal>
  )
}

export default function ModularPlatform() {
  const left = engines.slice(0, 5)
  const right = engines.slice(5)

  return (
    <Section
      id="engines"
      eyebrow="Start where you need"
      title="Buy the problem you need to solve. Expand without rebuilding."
      lead="Infrakinetic is not one mandatory mega-suite. Business engines are independently enabled, while shared platform infrastructure keeps the engines you choose connected."
      className="bg-ink-800/16"
    >
      <div className="mt-14 grid gap-x-14 lg:grid-cols-2 xl:gap-x-20">
        <div>
          {left.map((engine, index) => <EngineRow key={engine.title} engine={engine} index={index} />)}
        </div>
        <div className="lg:mt-12">
          {right.map((engine, index) => <EngineRow key={engine.title} engine={engine} index={index + left.length} />)}
        </div>
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-start lg:gap-16">
        <div className="lg:sticky lg:top-28">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300">
            <Layers size={12} />
            Included platform infrastructure
          </div>
          <h3 className="mt-5 max-w-md font-display text-3xl font-semibold leading-tight tracking-[-0.035em] text-white md:text-4xl">
            The connective tissue is included, not sold back as six more modules.
          </h3>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/56">
            Every enabled engine runs on the same operating infrastructure. Adding another engine should feel like extending one system, not commissioning another integration project.
          </p>
          <div className="mt-7 flex items-start gap-3 border-l-2 border-gold-300/45 pl-4">
            <Check size={14} className="mt-1 shrink-0 text-gold-300" />
            <p className="text-sm leading-relaxed text-white/60">Governed migration is part of onboarding, so the route into the platform is treated as product capability rather than an afterthought.</p>
          </div>
        </div>

        <div className="soft-panel px-6 py-3 md:px-7">
          {infrastructure.map((item, index) => (
            <div key={item.title} className={`grid gap-2 py-5 sm:grid-cols-[150px_1fr] sm:gap-6 ${index > 0 ? 'border-t border-white/[0.07]' : ''}`}>
              <h4 className="text-sm font-semibold text-white">{item.title}</h4>
              <p className="text-xs leading-relaxed text-white/45">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
