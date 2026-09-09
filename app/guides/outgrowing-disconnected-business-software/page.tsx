import type { Metadata } from 'next'
import GuideLayout from '@/components/guides/GuideLayout'
import { FAQSection, KeyTakeaway } from '@/components/shared'
import { guides } from '@/lib/guides'

const guide = guides.find((g) => g.slug === 'outgrowing-disconnected-business-software')!

export const metadata: Metadata = {
  title: 'What to Do When Disconnected Business Software Stops Scaling',
  description:
    'If CRM, finance, HR, payroll, documents, and workflow tools are creating handoff problems, upgrading each silo separately may preserve the same architecture. Here is a better evaluation framework.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/guides/outgrowing-disconnected-business-software',
  },
  openGraph: {
    title: 'When Disconnected Business Software Stops Scaling',
    description:
      'A practical way to evaluate whether the next step is another point solution, more integration, or a connected operating platform.',
    url: 'https://www.infrakinetic.in/guides/outgrowing-disconnected-business-software',
  },
}

const faqs = [
  {
    question: 'How do you know your business software stack has become too fragmented?',
    answer:
      'Common signals are duplicate customer and employee records, manual handoffs between departments, approvals in separate tools, reconciliation work after every reporting cycle, and teams disagreeing about which system is authoritative.',
  },
  {
    question: 'Should a growing company replace every tool at once?',
    answer:
      'Not necessarily. The useful first step is to identify the cross-functional workflows causing the most friction, define ownership and migration requirements, and choose a transition path that preserves evidence and business continuity.',
  },
  {
    question: 'What should business management software connect natively?',
    answer:
      'At minimum, the operating model should make customer, finance, people, documents, approvals, workflow, governance, and reporting context available without forcing every department to recreate the same business facts.',
  },
]

export default function Page() {
  return (
    <main>
      <GuideLayout guide={guide}>
        <p>
          Growing companies rarely choose fragmentation deliberately. They add a CRM when sales
          needs one, accounting software when finance needs one, an HR system when headcount grows,
          and workflow tools when approvals become painful. Each decision can be sensible on its
          own. The problem appears in the work that crosses those boundaries.
        </p>

        <h2>The symptoms are usually cross-functional</h2>
        <p>
          A deal closes, but operations needs someone to re-enter the customer context. A new hire
          is approved, but payroll setup starts from another form. Finance reports a number that
          sales cannot trace back to the original agreement. Documents carry approvals separately
          from the records they govern. These are not isolated feature gaps; they are continuity
          gaps between systems.
        </p>

        <h2>Why upgrading each silo can preserve the problem</h2>
        <p>
          Replacing an undersized CRM with a larger CRM improves the commercial function. Replacing
          accounting software with a larger finance system improves finance. But if the operating
          architecture is still CRM on one side, finance on another, HR elsewhere, and workflow in
          another layer, the company may simply rebuild the same handoffs with more expensive
          systems.
        </p>

        <KeyTakeaway>
          Evaluate the next software decision by the workflows that cross departments, not only by
          the feature checklist inside each department.
        </KeyTakeaway>

        <h2>A better evaluation framework</h2>
        <p>
          Ask where canonical customer, employee, agreement, invoice, document, approval, and
          workflow state should live. Ask how authority is enforced. Ask how events move between
          functions, how a migration is reconciled, and whether reporting reads connected operating
          history or reconstructed exports.
        </p>
        <p>
          Infrakinetic approaches that problem as one connected business operating system. Its
          commercial, finance, billing, payments, people, documents, workflow, approval,
          automation, governance, customer-success, and migration capabilities share an operating
          foundation while retaining explicit engine ownership. The product is designed to reduce
          the structural friction created by disconnected handoffs rather than hide those handoffs
          behind more synchronization.
        </p>
      </GuideLayout>
      <FAQSection
        eyebrow="Common questions"
        title="Scaling business software, answered"
        items={faqs}
      />
    </main>
  )
}
