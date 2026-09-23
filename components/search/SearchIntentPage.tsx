import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import Section from '@/components/ui/Section'
import { FAQSection } from '@/components/shared'
import { ArrowRight, Check } from '@/components/ui/Icons'
import { searchIntentBySlug, type SearchIntentPage as SearchIntentPageData } from '@/lib/searchIntents'

interface Props {
  intent: SearchIntentPageData
}

const answerSummaries: Record<string, string> = {
  'crm-software': 'CRM software manages customer and sales relationships across organizations, contacts, opportunities, quotes, agreements, renewals, and commercial history. Infrakinetic adds that CRM capability inside a connected operating platform, so customer context can continue into finance, billing, documents, workflow, customer success, and operations without being rebuilt in separate systems.',
  'erp-software': 'ERP software coordinates core business operations such as finance, people, payroll, workflow, documents, governance, and commercial activity. Infrakinetic covers these ERP-style needs while keeping each operating domain explicitly owned, so shared context does not require every department to edit the same business state.',
  'hr-software': 'HR software supports the employee lifecycle from recruitment and hiring through employment, compensation, leave, performance, payroll, and organizational changes. Infrakinetic connects those people processes through governed employee context so hiring, workforce, payroll, documents, and approvals can operate without repeatedly recreating the same employee record.',
  'payroll-software': 'Payroll software calculates employee pay, applies compensation and statutory rules, supports review and approval, produces payslips, and reconciles payroll outcomes. Infrakinetic Payroll preserves effective-dated compensation and rule context so historical, backdated, off-cycle, and normal payroll runs can remain explainable and auditable.',
  'finance-software': 'Finance software manages accounting policy, journals, ledger activity, budgets, reconciliation, fiscal controls, and financial reporting. Infrakinetic keeps Finance distinct from Billing and Payments, allowing accounting truth to remain controlled while customer invoices, payment observations, payroll postings, and commercial events pass through governed handoffs.',
  'document-management-software': 'Document management software controls business document generation, storage, versions, search, lifecycle, approvals, and evidence. Infrakinetic connects document governance to the business record that produced the document while leaving invoice, payroll, agreement, employment, and other domain state with its canonical owner.',
  'workflow-automation-software': 'Workflow automation software routes work, approvals, decisions, events, tickets, and SLA-driven actions through defined business processes. Infrakinetic provides shared Workflow, Approval, Automation, and Ticket capabilities that can span commercial, finance, people, documents, and governance processes without rebuilding routing logic in every department.',
  'crm-data-migration': 'CRM data migration is the controlled movement of customer and sales data into a new system while preserving identities, relationships, ownership, history, custom fields, and business meaning. Infrakinetic approaches migration through discovery, governed mapping, staged validation, dependency-aware execution, reconciliation, and explicit verification rather than treating migration as a bulk import.',
  'business-management-software': 'Business management software brings multiple operating functions into one environment so teams can manage commercial work, finance, people, documents, approvals, workflow, and customer operations with less fragmentation. Infrakinetic goes further by keeping canonical ownership explicit while sharing identity, governance, events, and operating context across those functions.',
  'business-operating-system': 'A Business Operating System is a connected software foundation for running multiple business domains with shared context, governance, identity, workflow, and evidence. Infrakinetic applies this model across commercial, finance, people, documents, customer operations, approvals, workflow, and migration while preserving clear ownership of each domain business state.',
}

export default function SearchIntentPage({ intent }: Props) {
  const pageUrl = `https://www.infrakinetic.in/${intent.slug}`
  const answerSummary = answerSummaries[intent.slug] ?? intent.lead
  const softwareJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://www.infrakinetic.in/#software',
        name: 'Infrakinetic',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: 'https://www.infrakinetic.in/',
        description: intent.metaDescription,
        featureList: intent.capabilities.map((capability) => capability.title),
        brand: { '@id': 'https://www.infrakinetic.in/#brand' },
        provider: { '@id': 'https://www.polynovea.in/#organization' },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: intent.metaTitle,
        description: intent.metaDescription,
        isPartOf: { '@id': 'https://www.infrakinetic.in/#website' },
        about: { '@id': 'https://www.infrakinetic.in/#software' },
        publisher: { '@id': 'https://www.polynovea.in/#organization' },
        mainEntity: { '@id': 'https://www.infrakinetic.in/#software' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Infrakinetic',
            item: 'https://www.infrakinetic.in/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: intent.eyebrow,
            item: pageUrl,
          },
        ],
      },
    ],
  }

  const relatedIntents = intent.relatedIntents
    .map((slug) => searchIntentBySlug[slug])
    .filter(Boolean)

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      <section className="relative overflow-hidden pb-20 pt-32 md:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 bg-ink-900" />
        <div className="container-page relative z-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end">
            <div>
              <span className="eyebrow">{intent.eyebrow}</span>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.03] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
                {intent.heroTitle}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/65 md:text-xl">
                {intent.lead}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/briefing" className="btn-primary">
                  Request a briefing <ArrowRight size={15} />
                </Link>
                <Link href="/products" className="btn-ghost">
                  Explore product families <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <aside className="border-l border-white/10 pl-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">Quick answer</span>
              <p className="mt-3 text-sm leading-6 text-white/62">{answerSummary}</p>
              <p className="mt-5 text-xs text-white/34">
                Infrakinetic is a <Link href="https://www.polynovea.in" className="hairline-link text-white/56">Polynovea product</Link>.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Core capabilities"
        title={`What Infrakinetic covers for ${intent.eyebrow.toLowerCase()}`}
        lead="The immediate software need comes first. Each capability then connects to the surrounding business process through explicit engine ownership and governed handoffs."
      >
        <div className="feature-frame mt-10 grid gap-2 p-3 md:grid-cols-2">
          {intent.capabilities.map((capability, index) => (
            <Reveal key={capability.title} variant="up" delay={index * 0.05}>
              <div className="h-full rounded-xl px-5 py-6 md:px-6 md:py-7">
                <h2 className="text-lg font-semibold text-white">{capability.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  {capability.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Common use cases"
        title={`Where ${intent.eyebrow.toLowerCase()} shows up in real operations`}
        lead="Search intent is usually attached to a concrete operational job. These are the jobs this Infrakinetic capability is designed to support."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {intent.useCases.map((useCase, index) => (
            <Reveal key={useCase.title} variant="up" delay={index * 0.04}>
              <div className="grid h-full grid-cols-[34px_minmax(0,1fr)] gap-4 border-t border-white/10 py-6 pr-5 md:py-7">
                <span className="font-mono text-[10px] text-gold-300/55">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="text-lg font-semibold text-white">{useCase.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{useCase.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Connected operations"
        title="The search intent is one function. The operating context goes further."
        lead="Infrakinetic answers the immediate software need first, then keeps the surrounding business context connected instead of forcing another handoff."
      >
        <div className="feature-frame mt-10 grid gap-2 p-3 md:grid-cols-2">
          {intent.connections.map((connection) => (
            <div
              key={connection}
              className="flex items-start gap-3 rounded-lg px-4 py-4"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center text-gold-300">
                <Check size={13} />
              </span>
              <span className="text-sm leading-relaxed text-white/65">{connection}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Evaluation checklist"
        title={`Questions to ask when evaluating ${intent.eyebrow.toLowerCase()}`}
        lead="A category page should help a buyer evaluate the problem, not only describe a product. These questions expose the operating requirements behind the search."
      >
        <div className="mt-10 grid gap-x-12 md:grid-cols-2">
          {intent.evaluation.map((item, index) => (
            <div key={item} className="grid grid-cols-[32px_minmax(0,1fr)] gap-3 border-t border-white/10 py-5">
              <span className="font-mono text-[10px] text-violet-300/65">{String(index + 1).padStart(2, '0')}</span>
              <p className="text-sm leading-relaxed text-white/65">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Product evidence"
        title="What this positioning is grounded in"
        lead="These pages are based on Infrakinetic product architecture and implemented capability descriptions, not generic SEO feature lists."
      >
        <div className="soft-panel mt-10 grid gap-0 p-3 md:grid-cols-3">
          {intent.evidence.map((item, index) => (
            <Reveal key={item.title} variant="up" delay={index * 0.05}>
              <div className="h-full rounded-lg px-5 py-6">
                <h2 className="text-base font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Related guides"
        title="Go deeper on the problem behind the software search"
        lead="These guides target narrower questions that buyers ask while evaluating, migrating, or connecting the same operating domain."
      >
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {intent.relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group border-t border-white/10 py-6 pr-5 transition-colors hover:border-gold-300/35"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">Guide</span>
              <h2 className="mt-3 text-base font-semibold text-white transition-colors group-hover:text-gold-200">
                {guide.label}
              </h2>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-white/50 group-hover:text-white/70">
                Read guide <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="One product"
        title="Move from a familiar software category into the connected operating model."
        lead="Related Infrakinetic pages show how this function connects to adjacent operating needs without asking buyers to understand the whole platform before their immediate problem is answered."
      >
        <div className="mt-10 flex flex-wrap gap-3">
          {relatedIntents.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className="border-b border-white/15 pb-1 text-sm text-white/65 transition-colors hover:border-gold-300/50 hover:text-gold-200"
            >
              {item.eyebrow}
            </Link>
          ))}
          <Link
            href="/products"
            className="border-b border-white/15 pb-1 text-sm text-white/65 transition-colors hover:border-gold-300/50 hover:text-gold-200"
          >
            All product families
          </Link>
        </div>
      </Section>

      <FAQSection
        eyebrow="Frequently Asked Questions"
        title={`${intent.eyebrow}, answered`}
        items={intent.faq}
      />

      <section id="contact" className="pb-28 pt-6">
        <div className="container-page">
          <div className="feature-frame border-gold-300/20 p-7 md:p-10">
            <span className="eyebrow">Platform briefing</span>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
              See how this function connects to the rest of your operation.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
              Review Infrakinetic against your current workflows, data model, migration needs,
              approval structure, and operating requirements.
            </p>
            <Link href="/briefing" className="btn-primary mt-7 inline-flex">
              Request a platform briefing
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
