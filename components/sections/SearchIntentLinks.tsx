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
      eyebrow="Explore in the language buyers already use"
      title="Start with the category you know. Follow it into the operating model."
      lead="These routes answer familiar software searches first, then show how that function connects to the rest of Infrakinetic."
    >
      <div className="mt-14 columns-1 gap-x-14 md:columns-2 xl:gap-x-20">
        {intents.map(([title, description, href], index) => (
          <Reveal key={href} variant="fade" delay={index * 0.025} className="break-inside-avoid">
            <Link href={href} className="group grid grid-cols-[30px_1fr_auto] gap-4 border-t border-white/[0.09] py-5">
              <span className="font-display text-xs text-white/24">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="text-sm font-semibold text-white transition-colors group-hover:text-gold-200">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/42">{description}</p>
              </div>
              <ArrowRight size={13} className="mt-1 text-white/20 transition-colors group-hover:text-gold-300" />
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm">
        <Link href="/business-management-software" className="hairline-link text-white/58">Business management software</Link>
        <Link href="/business-operating-system" className="hairline-link text-white/58">Our broader platform thesis</Link>
      </div>
    </Section>
  )
}
