import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ModularPlatform from '@/components/sections/ModularPlatform'
import ConnectedJourney from '@/components/sections/ConnectedJourney'
import EngineeringProof from '@/components/sections/EngineeringProof'
import MigrationEngine from '@/components/sections/MigrationEngine'
import DevelopmentFrontier from '@/components/sections/DevelopmentFrontier'
import SearchIntentLinks from '@/components/sections/SearchIntentLinks'
import Contact from '@/components/sections/Contact'
import { FAQSection } from '@/components/shared'
import { homeFaqItems } from '@/lib/content'

export const metadata: Metadata = {
  title: 'CRM, Billing, HR, Payroll & Finance Software',
  description:
    'Start with CRM, billing, finance, HR, payroll or customer success. Infrakinetic adds shared documents, approvals, workflow, automation and governance underneath every enabled engine.',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ModularPlatform />
      <ConnectedJourney />
      <EngineeringProof />
      <MigrationEngine />
      <DevelopmentFrontier />
      <SearchIntentLinks />
      <FAQSection
        id="faq"
        eyebrow="Frequently Asked Questions"
        title="Understand the buying model before you evaluate the platform"
        items={homeFaqItems}
      />
      <Contact />
    </main>
  )
}
