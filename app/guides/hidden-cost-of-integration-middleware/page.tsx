import type { Metadata } from 'next'
import GuideLayout from '@/components/guides/GuideLayout'
import { KeyTakeaway, FAQSection } from '@/components/shared'
import { guides } from '@/lib/guides'

const guide = guides.find(
  (g) => g.slug === 'hidden-cost-of-integration-middleware'
)!

export const metadata: Metadata = {
  title: 'The Hidden Cost of CRM-ERP Integration Middleware',
  description:
    'The seat cost of a CRM and an ERP is what gets budgeted. The automation subscription, the custom connector, and the admin hours spent maintaining both usually do not. Here is where that cost actually shows up.',
  alternates: {
    canonical:
      'https://www.infrakinetic.in/guides/hidden-cost-of-integration-middleware',
  },
  openGraph: {
    title: 'The Hidden Cost of CRM-ERP Integration Middleware',
    description:
      'Integration compute and maintenance scale on a different axis than software seats, which is exactly why it is easy to leave out of the original budget.',
    url: 'https://www.infrakinetic.in/guides/hidden-cost-of-integration-middleware',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: guide.title,
  description: metadata.description,
  url: 'https://www.infrakinetic.in/guides/hidden-cost-of-integration-middleware',
  author: { '@type': 'Organization', name: 'Infrakinetic' },
  publisher: { '@type': 'Organization', name: 'Infrakinetic' },
}

const faqs = [
  {
    question: 'Why does middleware cost get left out of the original budget?',
    answer:
      'Seat cost is the number every vendor quotes, so it is the number that gets budgeted. The automation subscription, the custom connector build, and the admin hours to maintain both are usually decided after the CRM and ERP contracts are already signed, once the integration gap becomes visible.',
  },
  {
    question:
      'Is a low-code automation tool cheaper than a custom-built integration?',
    answer:
      'Cheaper to start, not necessarily cheaper over time. A low-code tool avoids the upfront development cost, but its pricing scales with task volume, and a growing team can end up paying more per year in subscription tiers than a one-time custom build would have cost, while still owning the same maintenance burden.',
  },
  {
    question: 'Does removing the middleware layer remove all integration cost?',
    answer:
      'It removes the specific costs tied to keeping two separately-maintained systems in sync: the subscription, the custom connector, and the ongoing maintenance when either system changes its API or schema. It does not remove the cost of the underlying software itself.',
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
            A CRM-ERP integration budget usually accounts for one number: the
            seat cost of both systems. What tends to get left out is the layer
            that actually connects them, and by the time it shows up, it is
            rarely a single line item. It is a subscription, a custom build, and
            a maintenance burden that keeps recurring, spread across enough
            different budget lines that nobody adds them up until the total is
            already large.
          </p>

          <h2>Where the cost actually accumulates</h2>
          <p>
            A general-purpose automation tool prices by task volume, not seats,
            and volume grows with the business. A small team running a handful
            of automations can pay a modest monthly fee; a team running enough
            active workflows to keep a CRM and an ERP in sync in real time can
            end up paying a meaningfully larger recurring bill, because that
            layer scales on throughput, not headcount. A custom-built
            integration avoids the subscription but trades it for development
            time, commonly running into five figures for a single non-trivial
            connection, plus ongoing engineering hours every time either system
            changes its API or schema.
          </p>
          <p>
            None of this is unusual or a sign of a bad vendor relationship. It
            is a direct consequence of how the cost is structured: integration
            compute and maintenance scale on complexity and volume, which is a
            different axis than the per-seat pricing everyone budgets around
            from day one.
          </p>

          <KeyTakeaway>
            The integration layer is not an oversight in the budget. It is a
            cost that scales on a different axis than the number everyone
            actually planned for, which is exactly why it keeps arriving as a
            surprise.
          </KeyTakeaway>

          <h2>What removing the layer looks like</h2>
          <p>
            Infrakinetic&apos;s architecture does not compete on integration
            pricing, it removes the integration. Commercial, Finance, HR, and
            Workflow operate on the same shared business entities, so there is
            no separate connector to license, no automation subscription that
            scales with deal volume, and no engineering hours spent re-mapping
            fields every time a schema changes on one side. The cost that
            remains is the cost of the platform itself, not a second, growing
            bill for keeping two platforms talking to each other correctly.
          </p>
        </GuideLayout>

        <FAQSection
          id="faq"
          eyebrow="Common questions"
          title="Integration costs, answered"
          items={faqs}
        />
      </main>
    </>
  )
}
