import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import WhatIsInfrakinetic from '@/components/sections/WhatIsInfrakinetic'
import Problem from '@/components/sections/Problem'
import Consolidates from '@/components/sections/Consolidates'
import Connected from '@/components/sections/Connected'
import EngineeringProof from '@/components/sections/EngineeringProof'
import MigrationEngine from '@/components/sections/MigrationEngine'
import Modules from '@/components/sections/Modules'
import MeetInfrakinetic from '@/components/sections/MeetInfrakinetic'
import Intelligence from '@/components/sections/Intelligence'
import Scale from '@/components/sections/Scale'
import Enterprise from '@/components/sections/Enterprise'
import WhyInfrakinetic from '@/components/sections/WhyInfrakinetic'
import Contact from '@/components/sections/Contact'
import { FAQSection } from '@/components/shared'
import { homeFaqItems } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Infrakinetic — Stop Syncing CRM, ERP & HR. Run Them on One System.',
  description:
    'Stop syncing your CRM, ERP, HR, and finance tools together. Infrakinetic runs sales, finance, billing, payroll, workflow, governance, customer success, and business data migration on one shared data model instead — no middleware, no drift, no synced copies. A Polynovea product.',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhatIsInfrakinetic />
      <Problem />
      <Consolidates />
      <Connected />
      <EngineeringProof />
      <MigrationEngine />
      <Modules />
      <MeetInfrakinetic />
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
