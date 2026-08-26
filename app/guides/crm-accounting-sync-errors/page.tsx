import type { Metadata } from 'next'
import GuideLayout from '@/components/guides/GuideLayout'
import { KeyTakeaway, FAQSection } from '@/components/shared'
import { guides } from '@/lib/guides'

const guide = guides.find((g) => g.slug === 'crm-accounting-sync-errors')!

export const metadata: Metadata = {
  title:
    'How to Fix CRM-to-Accounting Sync Errors (Root Causes and the Real Fix)',
  description:
    'A CRM-to-accounting sync error is not the same risk as a marketing sync error. Here are the specific ways revenue data breaks between systems, and why reconciliation, not a faster sync, is what actually catches it.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/guides/crm-accounting-sync-errors',
  },
  openGraph: {
    title: 'Fixing CRM-to-Accounting Sync Errors',
    description:
      'Identity mismatches, late events, and no field ownership between a CRM and an accounting system, and why reconciliation catches what sync monitoring misses.',
    url: 'https://www.infrakinetic.in/guides/crm-accounting-sync-errors',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: guide.title,
  description: metadata.description,
  url: 'https://www.infrakinetic.in/guides/crm-accounting-sync-errors',
  author: { '@type': 'Organization', name: 'Infrakinetic' },
  publisher: { '@type': 'Organization', name: 'Infrakinetic' },
}

const faqs = [
  {
    question:
      'Who should own invoice status, the CRM or the accounting system?',
    answer:
      'In most stacks, accounting should own invoice status, payment status, and outstanding balance, while the CRM owns sales stage and lead ownership. Sync errors spike when both sides think they own the same field.',
  },
  {
    question: 'Does better error logging fix sync errors?',
    answer:
      'Logging and alerts catch a failed write after it happens, which shortens the time to notice a problem. It does not stop the write from failing, and it does not answer whether the two systems agree on totals right now.',
  },
  {
    question: 'What does reconciliation catch that a sync monitor does not?',
    answer:
      'A sync monitor confirms that a write attempt succeeded or failed. Reconciliation compares record counts, relationships, and financial totals between source and destination after the fact, which is the only way to catch a write that succeeded but wrote the wrong value.',
  },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <GuideLayout guide={guide}>
          <p>
            A sync error between a CRM and a marketing tool means a contact gets
            an email late. A sync error between a CRM and an accounting system
            means a customer gets billed twice, or a payment gets applied to the
            wrong invoice, or a write-off lands in the wrong reporting period.
            The stakes are different, so the fix needs to be different too:
            catching the error after the fact through reconciliation, not just
            monitoring whether the sync ran.
          </p>

          <h2>The specific ways revenue data breaks</h2>

          <h3>Identity mismatches</h3>
          <p>
            A CRM identifies a customer by an internal ID. Accounting software
            identifies the same customer by a tax ID, a billing name, or its own
            customer number. When those identifiers do not map one to one, a
            sync creates a second customer record instead of updating the first,
            and every invoice booked against it splits the customer&apos;s
            history in two.
          </p>

          <h3>Field ownership disputes</h3>
          <p>
            Sales stage belongs to the CRM. Payment status belongs to
            accounting. When that split is not explicit, a rep marking a deal
            &quot;closed won&quot; and a bookkeeper marking an invoice
            &quot;paid&quot; can both be writing to the same downstream revenue
            field, and whichever write lands last wins, silently.
          </p>

          <h3>Late or out-of-order events</h3>
          <p>
            A refund processed in accounting and a subscription downgrade
            processed in the CRM within the same hour do not always arrive at
            the other system in the order they happened. Applied out of order,
            the two systems can each compute a different current balance from
            the same two events.
          </p>

          <KeyTakeaway>
            None of these three failures show up as a sync error message. Each
            one produces a record that looks synced and is wrong, which is why
            monitoring the sync job is not the same as verifying the data.
          </KeyTakeaway>

          <h2>Why reconciliation is the actual fix</h2>
          <p>
            Sync monitoring answers one question: did the write succeed.
            Reconciliation answers a different one: do the two systems currently
            agree, checking record counts, relationships, and financial totals
            against each other rather than just confirming each individual write
            went through. That second question is the one that catches identity
            mismatches and ownership disputes, because both of those produce
            writes that technically succeed while still being wrong.
          </p>
          <p>
            Infrakinetic runs that discipline on its own financial data by
            default. Financial migrations and ongoing operations both go through
            the same reconciliation pass, checking totals and record counts
            between source and destination before anything is called complete,
            because a rounding difference or a duplicated invoice is exactly the
            kind of error that a successful sync log will not show you.
          </p>
        </GuideLayout>

        <FAQSection
          id="faq"
          eyebrow="Common questions"
          title="CRM-accounting sync errors, answered"
          items={faqs}
        />
      </main>
    </>
  )
}
