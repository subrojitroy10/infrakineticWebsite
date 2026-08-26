import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'The terms governing your use of the Infrakinetic website, including intellectual property, acceptable use, disclaimers, and governing law.',
  alternates: {
    canonical: 'https://www.infrakinetic.in/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const lastUpdated = '2026-08-27'

export default function TermsPage() {
  return (
    <main>
      <section className="relative pb-16 pt-32 md:pt-40">
        <div className="container-page">
          <span className="eyebrow">Legal</span>
          <h1 className="heading-serif mt-5 max-w-3xl text-4xl leading-[1.1] md:text-5xl">
            Terms of Use
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
              this document covers use of the marketing website only, drafted
              for structural completeness with real company details filled in,
              but not yet reviewed by a qualified lawyer. It is separate from,
              and does not cover, any commercial subscription agreement, SLA, or
              data processing agreement entered into by a customer of the
              Infrakinetic product; those are governed by a separate signed
              contract. Have this document reviewed before relying on it as
              final.
            </div>

            <p>
              These Terms of Use govern your access to and use of{' '}
              <Link
                href="/"
                className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
              >
                infrakinetic.in
              </Link>{' '}
              (the &quot;Site&quot;), operated by Polynovea LLP
              (&quot;Polynovea,&quot; &quot;Infrakinetic,&quot; &quot;we,&quot;
              &quot;us&quot;). By using the Site, you agree to these terms. If
              you do not agree, do not use the Site.
            </p>

            <h2>What this Site is</h2>
            <p>
              The Site is a marketing and informational resource describing the
              Infrakinetic product, including product architecture, migration
              capabilities, and technical guides, and a way to request a
              platform briefing or get in touch with our team. The Site does not
              itself provide access to the Infrakinetic product; product access
              is governed by a separate commercial agreement entered into
              directly with customers.
            </p>

            <h2>Intellectual property</h2>
            <p>
              All content on the Site, text, graphics, logos, product names, and
              the underlying code, is owned by Polynovea LLP or its licensors
              and protected by applicable intellectual property law. You may
              view and share content from the Site for non-commercial,
              informational purposes. You may not reproduce, redistribute,
              modify, or create derivative works from Site content for
              commercial purposes without our written permission.
            </p>

            <h2>Acceptable use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the Site in a way that violates any applicable law or
                regulation.
              </li>
              <li>
                Attempt to gain unauthorized access to the Site, its underlying
                systems, or any account or data not belonging to you.
              </li>
              <li>
                Interfere with or disrupt the Site&apos;s operation, including
                through automated scraping at a rate that degrades service for
                other users.
              </li>
              <li>
                Submit false, misleading, or fraudulent information through any
                form on the Site.
              </li>
            </ul>

            <h2>Third-party links and services</h2>
            <p>
              The Site may link to third-party websites or use third-party
              services (including FormSubmit.co for form delivery and Google
              Analytics for usage measurement, described in our{' '}
              <Link
                href="/privacy"
                className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
              >
                Privacy Policy
              </Link>
              ). We are not responsible for the content, accuracy, or practices
              of third-party sites or services we do not control.
            </p>

            <h2>Disclaimers</h2>
            <p>
              The Site and its content are provided &quot;as is&quot; without
              warranties of any kind, express or implied, including accuracy,
              completeness, or fitness for a particular purpose. Statements
              about product capabilities, migration outcomes, and performance
              figures describe audited results under stated conditions and are
              not a guarantee of results for any specific deployment; actual
              results depend on the specifics of your source systems and data.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the maximum extent permitted by applicable law, Polynovea LLP
              is not liable for any indirect, incidental, or consequential
              damages arising from your use of the Site. Nothing in this section
              limits liability that cannot be excluded under applicable Indian
              law.
            </p>

            <h2>Governing law</h2>
            <p>
              These Terms are governed by the laws of India. Any dispute arising
              from these Terms or your use of the Site is subject to the
              exclusive jurisdiction of the courts of Mumbai, Maharashtra.
            </p>

            <h2>Changes to these Terms</h2>
            <p>
              We may update these Terms as the Site changes. Material changes
              will update the &quot;Last updated&quot; date above. Continued use
              of the Site after a change constitutes acceptance of the updated
              Terms.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these Terms can be sent to{' '}
              <a
                href="mailto:admin@infrakinetic.in"
                className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
              >
                admin@infrakinetic.in
              </a>
              .
            </p>

            <p className="mt-8 text-sm text-white/50">
              See also:{' '}
              <Link
                href="/privacy"
                className="text-gold-300 underline decoration-gold-300/40 underline-offset-4 hover:text-gold-200"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
