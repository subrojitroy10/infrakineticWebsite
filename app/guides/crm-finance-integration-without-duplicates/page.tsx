import type { Metadata } from 'next'
import GuideLayout from '@/components/guides/GuideLayout'
import { FAQSection, KeyTakeaway } from '@/components/shared'
import { guides } from '@/lib/guides'

const guide = guides.find((g) => g.slug === 'crm-finance-integration-without-duplicates')!

export const metadata: Metadata = {
  title: 'CRM and Finance Integration Without Duplicate Customers or Invoices',
  description:
    'Duplicate customers and invoices usually come from identity mismatches between CRM and finance systems. Learn how durable identity, ownership rules, idempotency, and reconciliation prevent them.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/guides/crm-finance-integration-without-duplicates',
  },
  openGraph: {
    title: 'Connect CRM and Finance Without Duplicate Records',
    description:
      'Why customer identity breaks across CRM and finance systems, and the controls that prevent duplicate customers, invoices, and fragmented revenue history.',
    url: 'https://www.infrakinetic.in/guides/crm-finance-integration-without-duplicates',
  },
}

const faqs = [
  {
    question: 'Why do CRM and finance integrations create duplicate customers?',
    answer:
      'The same organization is often identified differently in each system: an internal ID on one side, a billing name or tax identifier on the other. If the integration falls back to mutable names, near-matches become new records instead of updates.',
  },
  {
    question: 'How do you prevent duplicate invoices during retries?',
    answer:
      'Use idempotent writes tied to durable source identity. A retry should prove whether the original business action has already been applied before it is allowed to create another financial record.',
  },
  {
    question: 'Is deduplication enough after migration?',
    answer:
      'No. Deduplication cleans an existing symptom. The stronger design prevents the duplicate by preserving identity, relationship mapping, write ownership, and reconciliation from the beginning.',
  },
]

export default function Page() {
  return (
    <main>
      <GuideLayout guide={guide}>
        <p>
          CRM and finance systems describe the same business from different angles. Sales sees an
          account, contacts, opportunities, and agreements. Finance sees a billable organization,
          invoices, payments, balances, and accounting consequences. The integration problem is
          proving that both sides are talking about the same entity and the same business event.
        </p>

        <h2>Why duplicates appear</h2>
        <h3>Names are not durable identity</h3>
        <p>
          Company names change, abbreviations vary, punctuation differs, and legal entities can
          share similar trading names. Using a display name as the join key works until the first
          exception. Durable source identifiers and explicit mapping evidence are safer because a
          retry or re-import can resolve the same record again.
        </p>

        <h3>Retries do not know whether the first write succeeded</h3>
        <p>
          A timeout can happen after the destination accepted a request but before the source
          received confirmation. Retrying blindly creates a second record. Idempotency turns that
          uncertainty into a lookup: has this source action already been applied?
        </p>

        <h3>Finance and commercial state need different owners</h3>
        <p>
          A closed opportunity is not the same thing as a paid invoice. A signed agreement is not
          the same thing as recognized revenue. Keeping those facts distinct avoids the common
          mistake of pushing one status field back and forth until neither system&apos;s meaning is
          clear.
        </p>

        <KeyTakeaway>
          Preventing duplicates is an identity and ownership problem before it is a cleanup
          problem. The safest pipeline knows what a record is, who owns each fact, and whether a
          write has already happened.
        </KeyTakeaway>

        <h2>How Infrakinetic handles the handoff</h2>
        <p>
          Infrakinetic keeps commercial, billing, payments, and finance as distinct canonical
          engines while connecting them through explicit contracts and shared business context.
          Migration uses governed mapping, staging, dependency-ordered execution, reconciliation,
          and explicit human verification. That preserves the distinction between customer
          identity, billing lifecycle, payment observations, and accounting truth while keeping
          them connected inside one operating platform.
        </p>
      </GuideLayout>
      <FAQSection
        eyebrow="Common questions"
        title="CRM and finance integration, answered"
        items={faqs}
      />
    </main>
  )
}
