import type { Metadata } from 'next'
import GuideLayout from '@/components/guides/GuideLayout'
import { FAQSection, KeyTakeaway } from '@/components/shared'
import { guides } from '@/lib/guides'

const guide = guides.find((g) => g.slug === 'why-crm-erp-sync-breaks')!

export const metadata: Metadata = {
  title: 'Why CRM-to-ERP Sync Keeps Breaking - Root Causes and Better Architecture',
  description:
    'CRM-to-ERP integrations fail for recurring structural reasons: competing record ownership, mapping drift, retries, ordering problems, and missing reconciliation. Here is what fixes the design rather than the symptom.',
  alternates: { canonical: 'https://www.infrakinetic.in/guides/why-crm-erp-sync-breaks' },
  openGraph: {
    title: 'Why CRM-to-ERP Sync Keeps Breaking',
    description:
      'The structural reasons CRM and ERP data drifts apart, and why governed ownership and reconciliation matter more than faster synchronization.',
    url: 'https://www.infrakinetic.in/guides/why-crm-erp-sync-breaks',
  },
}

const faqs = [
  {
    question: 'Why does CRM-to-ERP sync keep failing even when the connector is working?',
    answer:
      'A connector can successfully move a payload while the two systems still disagree. Competing field ownership, changed schemas, duplicate identities, late events, and retry behavior can all create incorrect but technically successful writes.',
  },
  {
    question: 'Should CRM or ERP own customer data?',
    answer:
      'Ownership should be explicit by business fact. Commercial identity, finance status, invoice state, and operational state do not all need the same owner. Problems start when both systems are allowed to author the same fact independently.',
  },
  {
    question: 'What catches errors that sync monitoring misses?',
    answer:
      'Reconciliation. Sync monitoring confirms whether a write ran. Reconciliation compares the source and destination after execution: counts, relationships, totals, identities, and unresolved exceptions.',
  },
]

export default function Page() {
  return (
    <main>
      <GuideLayout guide={guide}>
        <p>
          CRM-to-ERP integration usually begins as a simple requirement: when a deal changes,
          update finance; when an invoice changes, update the customer record. The first version
          often works. The trouble appears later, when both systems evolve independently and the
          integration becomes responsible for deciding which version of the business is true.
        </p>

        <h2>The recurring failure modes</h2>
        <h3>Two systems think they own the same fact</h3>
        <p>
          If both sides can change customer status, contract value, billing state, or a shared
          identifier, the integration becomes a conflict-resolution engine. Last-write-wins is
          easy to implement and dangerous to trust because it hides the disagreement instead of
          resolving it.
        </p>

        <h3>Mappings drift as schemas change</h3>
        <p>
          A new required field, renamed status, changed currency rule, or new business entity can
          make a previously correct mapping incomplete. The connector may continue running while
          silently dropping meaning because transport success is not semantic correctness.
        </p>

        <h3>Retries create duplicates</h3>
        <p>
          Network failures and timeouts are normal. If a retry cannot prove that a previous write
          already succeeded, a second customer, order, invoice, or activity record can be created.
          Durable source identity and idempotent writes are therefore data-integrity requirements,
          not implementation polish.
        </p>

        <h3>Events arrive late or out of order</h3>
        <p>
          Revenue and operational events do not always arrive in the sequence they happened. A
          payment, cancellation, amendment, and account update can cross in transit. Without
          explicit ordering and ownership rules, each system can calculate a different current
          state from the same history.
        </p>

        <KeyTakeaway>
          A reliable integration needs more than a working connector. It needs explicit ownership,
          durable identity, idempotency, governed mapping, and reconciliation after execution.
        </KeyTakeaway>

        <h2>What Infrakinetic does differently</h2>
        <p>
          Infrakinetic is designed around canonical engine ownership and explicit contracts rather
          than private cross-engine writes. During migration, source data is discovered, mapped,
          staged, executed in dependency order, and reconciled before a permitted person signs off.
          During operation, the product keeps commercial, finance, people, workflow, documents,
          approvals, and governance inside one connected operating environment instead of making a
          permanent synchronization layer the source of truth.
        </p>
      </GuideLayout>
      <FAQSection
        eyebrow="Common questions"
        title="CRM-to-ERP integration, answered"
        items={faqs}
      />
    </main>
  )
}
