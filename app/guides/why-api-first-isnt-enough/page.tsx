import type { Metadata } from 'next'
import Link from 'next/link'
import GuideLayout from '@/components/guides/GuideLayout'
import { KeyTakeaway, FAQSection } from '@/components/shared'
import { guides } from '@/lib/guides'

const guide = guides.find((g) => g.slug === 'why-api-first-isnt-enough')!

export const metadata: Metadata = {
  title: 'Why "API-First" Isn\'t the Fix for CRM-ERP Integration',
  description:
    'An API-first CRM makes it easier to build an integration. It does not make the integration correct. Here is the difference between an API you can connect to and a data model that does not need connecting.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/guides/why-api-first-isnt-enough',
  },
  openGraph: {
    title: 'Why "API-First" Isn\'t the Fix for CRM-ERP Integration',
    description:
      'A well-documented API is still two databases that need to agree. It moves the failure point, it does not remove it.',
    url: 'https://www.infrakinetic.in/guides/why-api-first-isnt-enough',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: guide.title,
  description: metadata.description,
  url: 'https://www.infrakinetic.in/guides/why-api-first-isnt-enough',
  author: { '@type': 'Organization', name: 'Infrakinetic' },
  publisher: { '@type': 'Organization', name: 'Infrakinetic' },
}

const faqs = [
  {
    question: 'Is API-first architecture bad?',
    answer:
      'No. A well-documented API with every function exposed is a real improvement over a system that only works through its own UI. The question this guide answers is narrower: does exposing a good API remove the need to reconcile two systems, and it does not, because there are still two systems.',
  },
  {
    question:
      'What should a buyer actually evaluate instead of "is it API-first"?',
    answer:
      'Whether the integration you are building has one owner for each field, whether failed writes are logged and retried, and whether there is a reconciliation step that checks the two systems agree, not just that the API calls succeeded.',
  },
  {
    question: 'How is a shared data model different from a great API?',
    answer:
      'A great API is a well-built door between two rooms. A shared data model means there is one room. The first still requires someone to walk data through the door correctly every time; the second has nothing to carry across.',
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
            An API-first CRM exposes every function, data access, workflows,
            automations, through a documented API instead of locking
            functionality inside its own UI. That is a real engineering
            advantage: it means your ERP, your billing tool, and your data
            warehouse can all reach the same underlying functions instead of
            being limited to whatever the CRM&apos;s own screens expose. It does
            not, on its own, make a CRM-ERP integration correct, because an
            API-first CRM and an API-first ERP are still two separately
            maintained databases that happen to have well-documented doors
            between them.
          </p>

          <h2>What an API actually solves</h2>
          <p>
            A documented, stable API solves the connection problem: it tells you
            exactly how to read and write data, what the rate limits are, and
            what a given endpoint guarantees. A system without that forces every
            integration to reverse-engineer undocumented behavior, which is a
            real and common source of bugs. Moving from no API to a
            well-documented one removes an entire category of integration
            failure.
          </p>

          <h2>What it does not solve</h2>
          <p>
            It does not solve identity resolution: the CRM and the ERP still
            need to agree that &quot;Acme Inc&quot; in one system and &quot;Acme
            Incorporated&quot; in the other are the same account. It does not
            solve field ownership: a well-documented endpoint for updating
            invoice status does not tell you whether the CRM or the ERP should
            be the one calling it. It does not solve ordering: two API calls
            that arrive out of sequence produce the same update-war and
            stale-data problems whether the API is elegant or not. A great API
            moves the failure point from &quot;we couldn&apos;t figure out how
            to connect&quot; to &quot;we connected correctly and the two systems
            still disagree,&quot; which is a real improvement, but it is not the
            same as removing the disagreement.
          </p>

          <KeyTakeaway>
            An API is a contract for how two systems talk to each other. It says
            nothing about whether they mean the same thing by the data they are
            exchanging. That is a modeling problem, not an interface problem,
            and a better interface does not fix it.
          </KeyTakeaway>

          <h2>The alternative: nothing left to connect</h2>
          <p>
            Infrakinetic&apos;s architecture sidesteps this by removing the
            second system rather than building a better bridge to it.
            Commercial, Finance, HR, and Workflow operate directly on shared
            business entities, so there is no CRM-side copy of an account and a
            separate ERP-side copy that an API has to keep synchronized,
            correctly, in order, with one clear owner per field. Writes to
            tenant-scoped tables are logged at the database layer independent of
            which route made the change, so the audit trail does not depend on
            every API caller behaving correctly. The API still exists, every
            engine is reachable through one, but it is a way to read and act on
            one record, not a bridge between two that might drift apart.
          </p>
          <p>
            For what that route-independent audit trail actually guarantees, see{' '}
            <Link
              href="/guides/transactional-integrity-and-tenant-isolation"
              className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
            >
              transactional integrity and tenant isolation, explained
            </Link>
            .
          </p>
        </GuideLayout>

        <FAQSection
          id="faq"
          eyebrow="Common questions"
          title="API-first CRM, answered"
          items={faqs}
        />
      </main>
    </>
  )
}
