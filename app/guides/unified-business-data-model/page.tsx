import type { Metadata } from 'next'
import Link from 'next/link'
import GuideLayout from '@/components/guides/GuideLayout'
import { KeyTakeaway, FAQSection } from '@/components/shared'
import { guides } from '@/lib/guides'

const guide = guides.find((g) => g.slug === 'unified-business-data-model')!

export const metadata: Metadata = {
  title: 'What a Unified Business Data Model Actually Means',
  description:
    'A unified data model gets sold by data warehouses, CDPs, and MDM tools alike, and each one means something different by it. Here is the specific architectural distinction between unifying data after collection and never splitting it up front.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/guides/unified-business-data-model',
  },
  openGraph: {
    title: 'What a Unified Business Data Model Actually Means',
    description:
      'The difference between a data warehouse merging copies after the fact and an operating platform where CRM, finance, and HR read the same record directly.',
    url: 'https://www.infrakinetic.in/guides/unified-business-data-model',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: guide.title,
  description: metadata.description,
  url: 'https://www.infrakinetic.in/guides/unified-business-data-model',
  author: { '@type': 'Organization', name: 'Infrakinetic' },
  publisher: { '@type': 'Organization', name: 'Infrakinetic' },
}

const faqs = [
  {
    question: 'Is a data warehouse a unified data model?',
    answer:
      'A data warehouse unifies data for reporting: it copies records out of every source system into one place you can query together. The source systems keep their own separate copies and keep operating independently, so the warehouse is unified for analysis, not for operations.',
  },
  {
    question: 'Does master data management (MDM) solve this?',
    answer:
      'MDM builds a "golden record" by reconciling copies from multiple systems, which is a real improvement over no reconciliation at all. It is still reconciling copies after the fact rather than removing the copies, so drift between syncs is still possible.',
  },
  {
    question: 'What does "operational" unification mean specifically?',
    answer:
      'It means the applications themselves, CRM, finance, HR, not just the reporting layer, read and write the same underlying record. There is no export step and no sync job between them, because there was never a second copy to keep in sync.',
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
            &quot;Unified data model&quot; is used by data warehouses, customer
            data platforms, and master data management tools to describe three
            different architectures. All three are real improvements over
            disconnected systems. Only one of them removes the separate copies
            instead of reconciling them, and that distinction is what actually
            determines whether your CRM and your finance system can disagree
            with each other.
          </p>

          <h2>Three things people mean by &quot;unified&quot;</h2>

          <h3>Unified for reporting</h3>
          <p>
            A data warehouse pulls records out of every source system into one
            place you can query together. This is genuinely useful for
            analytics, and it changes nothing about how the source systems
            operate day to day. CRM, finance, and HR still keep independent
            copies, and the warehouse is a read-only snapshot that goes stale
            between syncs.
          </p>

          <h3>Unified after reconciliation</h3>
          <p>
            Master data management tools build a &quot;golden record&quot; by
            comparing copies from multiple systems and resolving conflicts. This
            is closer to operational, since the golden record can feed back into
            source systems, but the source systems still each hold their own
            copy, and the reconciliation process is still catching drift after
            it happens rather than preventing it.
          </p>

          <h3>Unified at the operating layer</h3>
          <p>
            The third architecture removes the separate copies. CRM, finance,
            HR, payroll, and workflow read and write the same business entities
            directly, so there is no export, no sync job, and no reconciliation
            step between them, because there was never a second copy to
            reconcile against.
          </p>

          <KeyTakeaway>
            The question that actually distinguishes these three approaches is
            how many places the same fact can be written. A warehouse and an MDM
            tool both still have more than one. An operating platform has
            exactly one.
          </KeyTakeaway>

          <h2>What this looks like in practice</h2>
          <p>
            Infrakinetic&apos;s architecture rests on three decisions that build
            the third kind of unification specifically. Commercial, Finance, HR,
            Payroll, Documents, and Workflow operate on shared business entities
            instead of maintaining synchronized copies, so there is nothing to
            keep in sync. Catalogued business events, a deal won, an invoice
            paid, a candidate hired, trigger workflows and automations across
            engine boundaries directly, so a cross-team handoff is a
            subscription to an event, not an integration project. Operations
            that must succeed or fail together execute as one transaction: a won
            opportunity creates its deal, project, and order together, or none
            of them, rather than three separate writes that can partially fail
            and leave the record set inconsistent.
          </p>
          <p>
            None of this makes the warehouse or MDM approach wrong. Both solve a
            real problem for teams that already have five separate systems and
            need to make them agree. The operating-layer approach solves a
            different problem: not making five systems agree, but not having
            five systems to begin with.
          </p>
          <p>
            &quot;Shared data model&quot; and &quot;shared database schema&quot;
            are easy to conflate. See{' '}
            <Link
              href="/guides/transactional-integrity-and-tenant-isolation"
              className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
            >
              transactional integrity and tenant isolation, explained
            </Link>{' '}
            for how unifying data across engines and isolating data across
            tenants are enforced independently.
          </p>
        </GuideLayout>

        <FAQSection
          id="faq"
          eyebrow="Common questions"
          title="Unified data models, answered"
          items={faqs}
        />
      </main>
    </>
  )
}
