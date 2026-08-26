import type { Metadata } from 'next'
import GuideLayout from '@/components/guides/GuideLayout'
import { KeyTakeaway, FAQSection } from '@/components/shared'
import { guides } from '@/lib/guides'

const guide = guides.find((g) => g.slug === 'preventing-crm-data-drift')!

export const metadata: Metadata = {
  title: 'How to Prevent CRM Data Drift Without a Cleanup Job',
  description:
    'Most CRM data drift advice is a maintenance routine layered on top of the problem. Here is the architectural difference between records that drift and get cleaned up, and records that structurally cannot disagree with themselves.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/guides/preventing-crm-data-drift',
  },
  openGraph: {
    title: 'How to Prevent CRM Data Drift',
    description:
      'Scheduled audits and dedup jobs manage drift after it happens. A shared data model with governed events removes the condition that produces it.',
    url: 'https://www.infrakinetic.in/guides/preventing-crm-data-drift',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: guide.title,
  description: metadata.description,
  url: 'https://www.infrakinetic.in/guides/preventing-crm-data-drift',
  author: { '@type': 'Organization', name: 'Infrakinetic' },
  publisher: { '@type': 'Organization', name: 'Infrakinetic' },
}

const faqs = [
  {
    question: 'Is a scheduled data-quality audit enough to prevent drift?',
    answer:
      'An audit catches drift after it has already happened, which is still useful, but it does not stop the next record from drifting the same way next week. It is a detection tool, not a prevention mechanism.',
  },
  {
    question: 'Does deduplication software solve the root problem?',
    answer:
      'Deduplication merges records that have already split. It does not address why two records were created for the same entity in the first place, so the merge rate stays roughly constant even as the tool gets better.',
  },
  {
    question: 'What is the actual alternative to a maintenance routine?',
    answer:
      'A data model where lead, opportunity, account, and invoice status are computed fields resolved from one shared record and one event log, not independently-entered fields that can disagree with each other. There is nothing to reconcile because there was never a second copy.',
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
            CRM data drift is usually treated as a hygiene problem: run a
            quarterly audit, assign field owners, deduplicate on a schedule.
            Those practices reduce the damage, but they all assume drift is
            something that happens and then gets cleaned up. It is worth asking
            why the drift happens at all, because most of it traces back to one
            design choice: the same fact about a customer is stored in more than
            one place.
          </p>

          <h2>Where drift actually comes from</h2>
          <p>
            A lead becomes an opportunity, the opportunity becomes an account,
            the account gets a health score, and somewhere along the way a
            status field, a lifecycle stage, and a renewal date all get set by
            hand, by different people, in different tools, at different times.
            None of those fields are wrong on the day they are entered. They go
            stale independently, because nothing recalculates them when the
            underlying facts change. A support ticket gets closed and the health
            score does not move. A contract renews and the lifecycle stage still
            reads "at risk." Each field was correct once and nobody owns keeping
            it correct.
          </p>

          <h2>Why audits and dedup only manage the symptom</h2>
          <p>
            A scheduled audit finds the fields that went stale last quarter.
            Deduplication merges the two account records a rep created because
            the first one did not show up in search. Both are real fixes for
            real instances of drift, and both run again next quarter, because
            the condition that produced the drift, fields that can be set once
            and never revisited, is still there. The maintenance job is
            permanent because the cause is permanent.
          </p>

          <KeyTakeaway>
            Drift is not a data-quality failure. It is what happens when a fact
            about a customer has more than one place to live and no single
            process responsible for updating all of them at once.
          </KeyTakeaway>

          <h2>What a governed event model does differently</h2>
          <p>
            Infrakinetic&apos;s lifecycle state (prospect, qualified, active, at
            risk, renewing, churned) is not a field a rep sets. It is resolved
            by a precedence rule engine against the underlying facts, active
            subscriptions, overdue invoices, open opportunities, health score,
            in that priority order, and every transition is written atomically
            with the business event that caused it. There is no separate
            &quot;status&quot; field to forget to update, because the status is
            a computed read of the same shared record every other engine already
            sees. Commercial, Finance, HR, and Workflow operate on those shared
            entities directly instead of keeping synchronized copies, so there
            is no second copy left to drift out of alignment with the first.
          </p>
          <p>
            This does not eliminate every source of error. A customer&apos;s job
            title can still go stale if nobody updates it. What it eliminates is
            the specific failure mode where two parts of the same business
            disagree about whether a deal is open, an invoice is paid, or a
            customer is active, because there is exactly one record of each fact
            instead of several that were supposed to match.
          </p>
        </GuideLayout>

        <FAQSection
          id="faq"
          eyebrow="Common questions"
          title="CRM data drift, answered"
          items={faqs}
        />
      </main>
    </>
  )
}
