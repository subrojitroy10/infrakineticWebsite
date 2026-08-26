import type { Metadata } from 'next'
import GuideLayout from '@/components/guides/GuideLayout'
import { KeyTakeaway, FAQSection } from '@/components/shared'
import { guides } from '@/lib/guides'

const guide = guides.find(
  (g) => g.slug === 'salesforce-to-netsuite-sync-breaking'
)!

export const metadata: Metadata = {
  title: 'Why Salesforce-to-NetSuite Sync Keeps Breaking — And the Actual Fix',
  description:
    'Two-way Salesforce-NetSuite sync fails for a small, recurring set of structural reasons: conflicting writes, silent field-mapping drift, and no reconciliation step. Here is why it happens and what a governed migration does instead.',
  alternates: {
    canonical:
      'https://www.infrakinetic.in/guides/salesforce-to-netsuite-sync-breaking',
  },
  openGraph: {
    title: 'Why Salesforce-to-NetSuite Sync Keeps Breaking',
    description:
      'The structural reasons two-way CRM-ERP sync fails, and how a governed, staged migration avoids the failure mode instead of patching around it.',
    url: 'https://www.infrakinetic.in/guides/salesforce-to-netsuite-sync-breaking',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: guide.title,
  description: metadata.description,
  url: 'https://www.infrakinetic.in/guides/salesforce-to-netsuite-sync-breaking',
  author: { '@type': 'Organization', name: 'Infrakinetic' },
  publisher: { '@type': 'Organization', name: 'Infrakinetic' },
}

const faqs = [
  {
    question: 'Can I just fix the field mapping and keep the two-way sync?',
    answer:
      'You can, and it will hold until the next time either system changes a field, a picklist value, or a workflow, which is usually within a quarter. Fixing a mapping treats the symptom; the underlying cause is that two independently-evolving schemas were never one system to begin with.',
  },
  {
    question: 'Is one-way sync (CRM to ERP only) safer than two-way?',
    answer:
      'It removes update wars, but it does not remove drift. The ERP side can still diverge if anyone corrects a record directly in NetSuite, and one-way sync has no mechanism to catch or reconcile that. It reduces one failure mode and leaves the others.',
  },
  {
    question: 'How is a governed migration different from a better sync tool?',
    answer:
      'A sync tool keeps two databases continuously and separately correct. A governed migration brings the data into one shared model once, with staging, dependency-ordered execution, and a reconciliation report, so there are no longer two sources of truth to keep in sync in the first place.',
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
            Salesforce-to-NetSuite sync breaks because two-way synchronization
            asks two independently evolving systems to stay in permanent
            agreement about records neither one fully owns. Usually it
            isn&apos;t one bug, but a small set of structural failure modes that
            show up again and again: conflicting writes, silent field-mapping
            drift, throttled or backlogged API calls, and duplicate records
            created when a rep works around a stale sync instead of waiting for
            it.
          </p>

          <h2>The four ways it actually breaks</h2>

          <h3>1. Update wars</h3>
          <p>
            When a sync runs both directions, the same record can be edited in
            Salesforce and NetSuite within the same window. Without a clear
            owner for that field, both edits get pushed, and whichever write
            lands last silently overwrites the other. Nobody gets an error
            message. The record just reverts, and the person who made the
            &quot;losing&quot; edit has no way of knowing it didn&apos;t stick.
          </p>

          <h3>2. Field-mapping drift</h3>
          <p>
            A sync integration is built against the schema both systems had on
            the day it was configured. Add a required field in Salesforce,
            rename a picklist value in NetSuite, or introduce a new subsidiary
            with different tax handling, and the mapping that used to be correct
            is now wrong, usually without anyone touching the integration
            itself. The sync doesn&apos;t know the meaning changed; it just
            keeps moving data through a mapping that no longer matches reality.
          </p>

          <h3>3. Throttling and backlog under load</h3>
          <p>
            Real-time sync depends on API capacity that both platforms
            rate-limit. During a pricing change, a bulk import, or quarter-end,
            write volume spikes and queued updates start to pile up. The systems
            don&apos;t fail loudly, they fall behind, and by the time the
            backlog clears, some of those updates have been superseded by newer
            ones and get applied out of order.
          </p>

          <h3>4. Workaround duplicates</h3>
          <p>
            When sync visibly lags, sales reps stop trusting it. A rep who
            can&apos;t see their new account reflected in NetSuite will often
            just create it again rather than wait, which is how a CRM and an ERP
            that are supposedly &quot;in sync&quot; end up with two records for
            the same customer, each accumulating its own history.
          </p>

          <KeyTakeaway>
            None of these four failure modes are configuration mistakes. They
            are what happens when two systems that don&apos;t share a data model
            are asked to behave as if they do. The sync layer is compensating
            for an architecture problem, not solving it.
          </KeyTakeaway>

          <h2>Why patching the sync doesn&apos;t hold</h2>
          <p>
            Every fix above targets one symptom: add a field-ownership rule to
            stop update wars, re-document the mapping to catch drift, add retry
            logic for backlog, add deduplication for workaround records. Each
            patch is reasonable on its own, and each one narrows the failure
            window rather than closing it, because the two systems are still
            separately maintained databases with separately maintained meaning.
            The next schema change, the next quarter-end spike, or the next
            impatient rep reopens the same class of problem in a new place.
          </p>

          <h2>What a governed migration does instead</h2>
          <p>
            Infrakinetic&apos;s Migration Engine removes the need for sync in
            the first place. It discovers source data (Salesforce, Zoho CRM,
            HubSpot, Tally, or file-based onboarding) at the schema level, maps
            it to Infrakinetic&apos;s shared data model with an explicit
            confidence label per field, stages it in an environment separated
            from production, and executes in dependency order so a contact never
            gets written before the account it belongs to. Nothing is called
            complete until a reconciliation pass checks record counts,
            relationship integrity, and financial totals against the source. In
            our audited run, that pipeline executed 10,000 of 10,000 staged
            records with 0 failures and passed 12 of 12 reconciliation checks,
            with one governed pipeline instead of two systems disagreeing with
            each other.
          </p>
        </GuideLayout>

        <FAQSection
          id="faq"
          eyebrow="Common questions"
          title="Salesforce-NetSuite sync, answered"
          items={faqs}
        />
      </main>
    </>
  )
}
