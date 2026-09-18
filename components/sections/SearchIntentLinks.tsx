import Link from 'next/link'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { ArrowRight } from '@/components/ui/Icons'

const intents = [
  ['CRM software', 'Accounts, contacts, opportunities, proposals, renewals and commercial handoffs.', '/crm-software'],
  ['Billing & invoicing software', 'Billing rules, invoice generation, delivery, reminders, collections and optional finance expansion.', '/billing-software'],
  ['Finance software', 'Ledger, journals, budgets, reconciliation, reporting and accounting controls.', '/finance-software'],
  ['HR software', 'Employee records, workforce, compensation, leave, people operations and payroll context.', '/hr-software'],
  ['Payroll software', 'Governed calculation, approvals, historical rates, payslips and reconciliation.', '/payroll-software'],
  ['Document management software', 'Templates, generation, versioning, reviews, approvals, relationships and evidence.', '/document-management-software'],
  ['Workflow automation software', 'Approvals, workflow stages, tickets, SLA controls, routing and event automation.', '/workflow-automation-software'],
  ['CRM data migration', 'Schema discovery, mapping, staging, dependency-aware execution and reconciliation.', '/crm-data-migration'],
  ['ERP software', 'Finance, people, payroll, workflow and operations through a modular rather than all-or-nothing architecture.', '/erp-software'],
]

export default function SearchIntentLinks() {
  return (
    <Section
      id="business-needs"
      eyebrow="Explore by the category you already know"
      title="Search for the problem in your language. Discover the platform behind it."
      lead="Infrakinetic should not require a buyer to learn a new software category before finding the right page. These entry points use the terms teams already search for, then explain how each engine can expand into the rest of the platform."
      className="border-b border-white/[0.06]"
    >
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {intents.map(([title, description, href], index) => (
          <Reveal key={href} variant="up" delay={index * 0.035}>
            <Link
              href={href}
              className="group flex h-full min-h-[185px] flex-col rounded-2xl border border-white/[0.08] bg-white/[0.018] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300/28 hover:bg-white/[0.03]"
            >
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">{description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 group-hover:text-gold-200">
                Explore
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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
          Our broader platform thesis
          <ArrowRight size={14} />
        </Link>
      </div>
    </Section>
  )
}
