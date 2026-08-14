import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import WhatIsInfrakinetic from '@/components/sections/WhatIsInfrakinetic'
import Problem from '@/components/sections/Problem'
import MigrationEngine from '@/components/sections/MigrationEngine'
import MeetInfrakinetic from '@/components/sections/MeetInfrakinetic'
import Connected from '@/components/sections/Connected'
import Modules from '@/components/sections/Modules'
import Intelligence from '@/components/sections/Intelligence'
import Scale from '@/components/sections/Scale'
import Enterprise from '@/components/sections/Enterprise'
import WhyInfrakinetic from '@/components/sections/WhyInfrakinetic'
import Contact from '@/components/sections/Contact'
import { FAQSection } from '@/components/shared'
import { homeFaqItems } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Infrakinetic — Your Business. One Operating System.',
  description:
    'Infrakinetic connects commercial, workforce, finance, operations, documents, workflow, and reporting on one governed business data layer. A Polynovea product.',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatIsInfrakinetic />
      <Problem />
      <MigrationEngine />
      <MeetInfrakinetic />
      <Connected />
      <Modules />
      <Intelligence />
      <Scale />
      <Enterprise />
      <WhyInfrakinetic />
      <FAQSection
        id="faq"
        eyebrow="Frequently Asked Questions"
        title="What people ask before evaluating Infrakinetic"
        items={homeFaqItems}
      />
      <Contact />
    </main>
  )
}
