import type { Metadata } from 'next'
import GuideLayout from '@/components/guides/GuideLayout'
import { KeyTakeaway, FAQSection } from '@/components/shared'
import { guides } from '@/lib/guides'

const guide = guides.find(
  (g) => g.slug === 'transactional-integrity-and-tenant-isolation'
)!

export const metadata: Metadata = {
  title: 'Transactional Integrity and Tenant Isolation, Explained',
  description:
    'A shared business data model and a shared database schema answer two different questions. Here is what ACID transaction guarantees actually mean, and how tenant isolation stays intact when CRM, finance, and HR read the same record.',
  alternates: {
    canonical:
      'https://www.infrakinetic.in/guides/transactional-integrity-and-tenant-isolation',
  },
  openGraph: {
    title: 'Transactional Integrity and Tenant Isolation, Explained',
    description:
      'Unifying data across engines for one tenant and isolating data across tenants are separate architectural decisions. Here is how both hold at once.',
    url: 'https://www.infrakinetic.in/guides/transactional-integrity-and-tenant-isolation',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: guide.title,
  description: metadata.description,
  url: 'https://www.infrakinetic.in/guides/transactional-integrity-and-tenant-isolation',
  author: { '@type': 'Organization', name: 'Infrakinetic' },
  publisher: { '@type': 'Organization', name: 'Infrakinetic' },
}

const faqs = [
  {
    question: 'What does "atomic" actually mean for a business operation?',
    answer:
      'It means an operation with multiple parts either completes in full or leaves no trace of having started. If creating a deal, a project, and an order is one atomic operation, a failure partway through leaves zero new records, not two out of three.',
  },
  {
    question: 'Does a shared data model mean tenants share a database schema?',
    answer:
      "Those are separate questions. A shared data model describes whether CRM, finance, and HR read the same record for one tenant instead of keeping synced copies. Tenant isolation describes whether different customers' data is walled off from each other. Infrakinetic answers yes to unifying the first and no to sharing across the second.",
  },
  {
    question:
      'Why does isolation happen at the data layer instead of the application layer?',
    answer:
      "Application-layer isolation depends on every screen and every feature applying the right filter correctly, every time a developer writes new code. Data-layer isolation enforces the boundary below the application, so a missed filter in one feature cannot expose another tenant's data.",
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
            &quot;Shared data model&quot; and &quot;shared database schema&quot;
            sound like the same claim and answer two different questions. One is
            about whether your CRM, finance, and HR systems read the same record
            instead of synced copies. The other is about whether different
            customers on a multi-tenant platform share underlying database
            structure. A platform can unify the first across engines while
            keeping the second strictly isolated, and the distinction matters
            more to a technical evaluator than either term alone.
          </p>

          <h2>What transactional integrity guarantees</h2>
          <p>
            Transactional integrity, formalized as the ACID properties,
            atomicity, consistency, isolation, durability, is a database
            guarantee about operations with multiple parts. Atomicity means the
            operation completes in full or leaves no trace of starting.
            Consistency means the database moves from one valid state to
            another, never a partial or contradictory one. Isolation means
            concurrent transactions do not corrupt each other. Durability means
            a completed transaction survives a system failure. None of this is
            specific to any vendor; it is the baseline a database has to meet
            for multi-step business operations to be trustworthy at all.
          </p>
          <p>
            In practice, this is what makes &quot;atomic where it matters&quot;
            a real architectural claim rather than a slogan: a won opportunity
            creating its deal, project, and order as one transaction means all
            three exist or none do, with downstream finance notifications
            reacting only once that transaction has actually committed. Without
            that guarantee, a failure partway through can leave a deal marked
            won with no project and no order behind it, and nothing in the
            system would flag the gap.
          </p>

          <KeyTakeaway>
            Transactional integrity answers whether one tenant&apos;s multi-step
            operation can end up half-finished. Tenant isolation answers whether
            one tenant can ever see another tenant&apos;s data. A platform needs
            both, and they are enforced independently.
          </KeyTakeaway>

          <h2>How isolation holds across tenants</h2>
          <p>
            Sharing a data model across engines for a single tenant says nothing
            about how multiple tenants are separated from each other, and
            conflating the two is a reasonable source of confusion for a buyer
            evaluating &quot;shared schema&quot; risk. Infrakinetic isolates
            every tenant&apos;s data at the data layer, below the application,
            so isolation does not depend on every screen and every feature
            applying the correct filter by hand. Predictive scoring is trained
            and run separately per tenant, with no shared learning across
            customers. Writes to tenant-scoped tables are logged at the database
            layer independent of which API route made the change, so the audit
            trail does not rely on every code path remembering to log correctly.
          </p>
          <p>
            The result is two separate guarantees held at once: one shared,
            atomic record per tenant across every engine that tenant uses, and
            complete isolation between tenants enforced below the point where an
            application bug could ever cross that line.
          </p>
        </GuideLayout>

        <FAQSection
          id="faq"
          eyebrow="Common questions"
          title="Transactional integrity and isolation, answered"
          items={faqs}
        />
      </main>
    </>
  )
}
