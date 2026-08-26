import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    "How Infrakinetic and Polynovea LLP collect, use, store, and protect personal data submitted through this website, and how to exercise your rights under India's Digital Personal Data Protection Act, 2023.",
  alternates: {
    canonical: 'https://www.infrakinetic.in/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const lastUpdated = '2026-08-27'

export default function PrivacyPage() {
  return (
    <main>
      <section className="relative pb-16 pt-32 md:pt-40">
        <div className="container-page">
          <span className="eyebrow">Legal</span>
          <h1 className="heading-serif mt-5 max-w-3xl text-4xl leading-[1.1] md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
            Last updated:{' '}
            {new Date(lastUpdated).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="container-page">
          <div className="guide-prose max-w-3xl">
            <div className="mb-6 rounded-xl border border-warning/25 bg-warning/[0.06] p-4 text-sm text-white/70">
              <strong className="text-warning">Legal review notice:</strong>{' '}
              this policy was drafted to be structurally complete under
              India&apos;s Digital Personal Data Protection Act, 2023 (DPDPA),
              with real company details filled in, but it has not yet been
              reviewed by a qualified lawyer. Have it reviewed before relying on
              it as final, particularly the DPDP Rules 2025 procedural
              requirements (consent-manager registration, breach-notification
              timelines) that sit outside the scope of this notice.
            </div>

            <p>
              This Privacy Policy explains how Polynovea LLP
              (&quot;Polynovea,&quot; &quot;Infrakinetic,&quot; &quot;we,&quot;
              &quot;us&quot;) collects, uses, stores, shares, and protects
              personal data when you visit{' '}
              <Link
                href="/"
                className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
              >
                infrakinetic.in
              </Link>{' '}
              or submit information through it. It is written to meet the notice
              requirements of India&apos;s Digital Personal Data Protection Act,
              2023 (DPDPA), under which we act as a Data Fiduciary and you act
              as a Data Principal.
            </p>

            <h2>Who we are</h2>
            <p>
              Polynovea LLP, the company behind Infrakinetic, is registered in
              Vashi, Navi Mumbai, Maharashtra, India. You can reach us at{' '}
              <a
                href="mailto:hello@infrakinetic.io"
                className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
              >
                hello@infrakinetic.io
              </a>
              . Our designated Grievance Officer under the DPDPA is Raahul
              Thakur, reachable at{' '}
              <a
                href="mailto:raahul.thakur@polynovea.in"
                className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
              >
                raahul.thakur@polynovea.in
              </a>
              . Unresolved grievances can be escalated to Subrojit Roy at{' '}
              <a
                href="mailto:subrojitroy@polynovea.in"
                className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
              >
                subrojitroy@polynovea.in
              </a>
              .
            </p>

            <h2>What personal data we collect</h2>
            <p>
              We collect two categories of personal data, for two different
              purposes:
            </p>
            <h3>1. Data you submit through a form</h3>
            <p>
              When you request a platform briefing or submit the homepage
              contact form, we collect your name, work email address, company
              name, and which product areas you&apos;re interested in. This is
              the only place on the site where you are asked to provide personal
              data directly.
            </p>
            <h3>2. Data collected automatically through analytics</h3>
            <p>
              We use Google Analytics to understand how visitors use this site.
              Google Analytics collects your approximate location (derived from
              IP address), device and browser type, pages visited, and time
              spent on the site, using cookies and similar identifiers. We have
              Google signals enabled, which means that if you are signed into a
              Google account and have consented to Google&apos;s ad
              personalization, Google Analytics may associate your visit to this
              site with that Google account for cross-device reporting; Google,
              not Infrakinetic, controls that association and the consent behind
              it. You can review or revoke that consent at any time through{' '}
              <a
                href="https://myaccount.google.com/activitycontrols"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
              >
                My Google Activity
              </a>
              . See{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
              >
                Google&apos;s Privacy Policy
              </a>{' '}
              for how Google itself processes this data.
            </p>

            <h2>Why we process it, and how long we keep it</h2>
            <p>
              Form submissions are processed to respond to your briefing or
              contact request and to evaluate fit between your business and
              Infrakinetic&apos;s product. We retain form submissions for 12
              months from the date of submission, after which they are deleted
              unless you have become an active customer under a separate
              agreement.
            </p>
            <p>
              Analytics data is processed to understand site usage and improve
              page content and performance. Google Analytics retains event-level
              data (individual page views and interactions) for 2 months and
              user-level data for 14 months, resetting on each new visit;
              aggregated, non-identifying reporting data is retained longer for
              trend analysis.
            </p>

            <h2>Who we share it with</h2>
            <p>
              Form submissions are transmitted through FormSubmit.co, a
              third-party form-delivery service, which forwards the submission
              by email to Infrakinetic&apos;s team. We do not sell personal
              data, and we do not share it with any party outside Infrakinetic,
              Polynovea, FormSubmit.co, and Google Analytics for the purposes
              described above.
            </p>

            <h2>Your rights under the DPDPA</h2>
            <p>As a Data Principal, you have the right to:</p>
            <ul>
              <li>
                <strong>Access</strong> — request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong>Correction</strong> — request that inaccurate or
                outdated data be corrected.
              </li>
              <li>
                <strong>Erasure</strong> — request that we delete your personal
                data, subject to any legal retention obligations.
              </li>
              <li>
                <strong>Grievance redressal</strong> — raise a complaint with
                our Grievance Officer if you believe your data has been
                mishandled, and escalate to the Data Protection Board of India
                if unresolved.
              </li>
              <li>
                <strong>Nomination</strong> — nominate another individual to
                exercise these rights on your behalf in the event of your death
                or incapacity.
              </li>
            </ul>
            <p>
              To exercise any of these rights, or to withdraw consent for us to
              process your data, email{' '}
              <a
                href="mailto:hello@infrakinetic.io"
                className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
              >
                hello@infrakinetic.io
              </a>{' '}
              with the subject line &quot;Data request.&quot; Withdrawing
              consent does not affect the lawfulness of processing carried out
              before withdrawal.
            </p>

            <h2>Cookies</h2>
            <p>
              This site uses cookies set by Google Analytics to distinguish
              visitors and measure site usage. You can block or delete these
              cookies through your browser settings at any time; doing so will
              not affect your ability to browse the site, only our ability to
              measure your visit.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy as our data practices change. Material
              changes will update the &quot;Last updated&quot; date above.
              Continued use of the site after a change constitutes acceptance of
              the updated policy.
            </p>

            <p className="mt-8 text-sm text-white/50">
              See also:{' '}
              <Link
                href="/terms"
                className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
              >
                Terms of Use
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
