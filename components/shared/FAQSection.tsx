import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'

export interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  id?: string
  eyebrow?: string
  title?: string
  items: FAQItem[]
}

export default function FAQSection({
  id = 'faq',
  eyebrow = 'Frequently Asked Questions',
  title = 'Common questions',
  items,
}: FAQSectionProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <Section id={id} eyebrow={eyebrow} title={title}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Reveal variant="fade" className="mt-12">
        <div className="grid gap-x-14 md:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item.question}
              className="grid grid-cols-[32px_minmax(0,1fr)] gap-3 border-t border-white/[0.09] py-6"
            >
              <span className="font-mono text-[10px] text-gold-300/55">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-base font-semibold leading-snug text-white">{item.question}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/56">{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
