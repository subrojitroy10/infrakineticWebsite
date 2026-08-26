import type { Metadata } from 'next'
import Link from 'next/link'
import GuideLayout from '@/components/guides/GuideLayout'
import { KeyTakeaway, FAQSection } from '@/components/shared'
import { guides } from '@/lib/guides'

const guide = guides.find((g) => g.slug === 'erp-implementation-failure-rate')!

export const metadata: Metadata = {
  title: 'Why ERP Implementations Fail, and Where Migration Fits In',
  description:
    'Gartner research puts ERP implementation failure rates above 70%, and most postmortems point to leadership and planning, not the software. Here is the narrower, defensible claim about where migration specifically fits in that failure pattern.',
  alternates: {
    canonical:
      'https://www.infrakinetic.in/guides/erp-implementation-failure-rate',
  },
  openGraph: {
    title: 'Why ERP Implementations Fail',
    description:
      'Most ERP failure is organizational, not technical. Migration is the one phase where an organizational failure and a technical failure can compound each other early enough to sink the whole rollout.',
    url: 'https://www.infrakinetic.in/guides/erp-implementation-failure-rate',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: guide.title,
  description: metadata.description,
  url: 'https://www.infrakinetic.in/guides/erp-implementation-failure-rate',
  author: { '@type': 'Organization', name: 'Infrakinetic' },
  publisher: { '@type': 'Organization', name: 'Infrakinetic' },
}

const faqs = [
  {
    question: 'What percentage of ERP implementations actually fail?',
    answer:
      'Gartner research puts the figure above 70% failing to fully meet their original business case goals by 2027, with roughly a quarter of those failing outright. Different research firms report figures in a similar range, generally citing leadership, planning, and change management as the leading causes rather than the software itself.',
  },
  {
    question: 'So is buying different software the fix?',
    answer:
      'Not on its own, and this guide does not claim otherwise. If the reported causes are mostly organizational, software choice cannot be the primary fix. What software architecture can do is prevent the migration phase specifically from turning a recoverable planning problem into an unrecoverable one.',
  },
  {
    question:
      'Why does migration specifically matter if the causes are organizational?',
    answer:
      'Migration is usually the first moment the new system is visibly tested against real historical data, in front of the people whose buy-in the rollout depends on. A broken migration does not just delay a project; it gives skeptical stakeholders concrete proof the new system is unreliable, before the organizational work has a chance to succeed.',
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
            Gartner research puts ERP implementation failure rates above 70% for
            projects that fail to fully meet their original business case goals,
            with roughly a quarter of those failing outright. That number gets
            cited constantly in vendor marketing, usually as a setup for
            &quot;and our software fixes it.&quot; The more useful, less
            flattering fact sits one level deeper: most research attributes ERP
            failure primarily to leadership, planning, and change management,
            not to which software was chosen. Software vendors citing the 70%
            figure rarely mention that part.
          </p>

          <h2>What the research actually says fails</h2>
          <p>
            Postmortems on failed ERP projects consistently point to the same
            organizational causes: strategy not aligned with the implementation
            plan, executive sponsorship that fades once the project gets hard,
            users who were never given a reason to trust the new system over
            their old workarounds. None of those are things a better-architected
            product fixes by itself. A team that has not resolved who owns the
            rollout, or why it matters, will struggle with any vendor.
          </p>
          <p>
            Data migration shows up specifically inside that pattern, not as a
            separate cause but as one of the named leading factors: several
            independent postmortems on failed Salesforce rollouts cite dirty,
            duplicate, or poorly migrated data as a leading reason the
            implementation derailed. That detail is what makes the narrower
            claim below testable rather than just plausible.
          </p>

          <KeyTakeaway>
            If the honest reading of the failure statistics is that they are
            mostly organizational, then any pitch that reduces to &quot;our
            software will prevent the 70%&quot; is overstating what software can
            do. The claim worth making is narrower.
          </KeyTakeaway>

          <h2>Where migration specifically fits in</h2>
          <p>
            Migration is usually the first point in a rollout where the new
            system gets tested against real historical data in front of the
            people whose cooperation the rest of the project depends on. An
            organization that has not fully resolved its planning and
            sponsorship problems can often still survive a slow start, if early
            results at least look trustworthy. A migration that loses
            relationships, silently drops records, or requires a manual
            reconciliation nobody signed up for gives every skeptic in the
            building concrete proof the new system cannot be trusted, at the
            exact moment trust is what the rollout needs most.
          </p>
          <p>
            That is the specific, defensible claim: not that governed migration
            prevents organizational failure, but that it removes one of the few
            technical failure modes capable of confirming an organization&apos;s
            worst fears about the rollout before the leadership and
            change-management work has had time to succeed. Infrakinetic&apos;s
            migration pipeline is built around exactly that moment: discovery
            before mapping, staging before execution, and a reconciliation
            report before anyone calls it done, so the first thing stakeholders
            see is a migration that visibly checked its own work.
          </p>
          <p>
            A budget that already ran over on integration middleware makes this
            failure mode more likely, not less. See{' '}
            <Link
              href="/guides/hidden-cost-of-integration-middleware"
              className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
            >
              the hidden cost of CRM-ERP integration middleware
            </Link>{' '}
            for where that overrun typically comes from.
          </p>
        </GuideLayout>

        <FAQSection
          id="faq"
          eyebrow="Common questions"
          title="ERP failure rates, answered"
          items={faqs}
        />
      </main>
    </>
  )
}
