import Link from 'next/link'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { ArrowRight } from '@/components/ui/Icons'

const intents = [
  ['CRM software', 'Sales, accounts, opportunities, quotes, renewals, and commercial handoffs.', '/crm-software'],
  ['ERP software', 'Finance, people, payroll, workflow, governance, documents, and operations.', '/erp-software'],
  ['HR software', 'Recruitment, employee lifecycle, workforce, compensation, performance, and payroll.', '/hr-software'],
  ['Payroll software', 'Governed calculation, approvals, historical rates, payslips, and reconciliation.', '/payroll-software'],
  ['Finance software', 'Ledger, journals, budgets, reconciliation, reporting, billing handoffs, and controls.', '/finance-software'],
  ['Document management', 'Templates, generation, versioning, governance, search, approvals, and evidence.', '/document-management-software'],
  ['Workflow automation', 'Approvals, workflow stages, tickets, SLA controls, routing, and event automation.', '/workflow-automation-software'],
  ['CRM data migration', 'Schema discovery, mapping, staging, dependency-aware execution, and reconciliation.', '/crm-data-migration'],
]

export default function SearchIntentLinks() {
  return (
    <Section
      eyebrow="Explore by business need"
      title="Start with the software problem you are already trying to solve."
      lead="Infrakinetic spans familiar categories. Each entry point below answers that search intent directly, then shows how the function connects to the rest of the operating platform."
    >
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {intents.map(([title, description, href], index) => (
          <Reveal key={href} variant="up" delay={index * 0.04}>
            <Link
              href={href}
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-gold-300/30"
            >
              <h2 className="text-base font-semibold text-white">{title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">{description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 group-hover:text-gold-200">
                Explore
                <ArrowRight size={14} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/business-management-software" className="btn-ghost">
          Business management software
          <ArrowRight size={14} />
        </Link>
        <Link href="/business-operating-system" className="btn-ghost">
          What is a Business Operating System?
          <ArrowRight size={14} />
        </Link>
      </div>
    </Section>
  )
}
