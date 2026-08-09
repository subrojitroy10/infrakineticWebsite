import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'

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

/**
 * Renders an FAQ block (question format matches how people actually search)
 * and emits matching FAQPage JSON-LD so the same content is eligible for
 * FAQ rich results and AI-answer-engine citation.
 */
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
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <ParallaxCard key={item.question} depth={12} className="p-6">
              <h3 className="text-base font-semibold text-white mb-2">{item.question}</h3>
              <p className="text-sm leading-relaxed text-white/60">{item.answer}</p>
            </ParallaxCard>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
