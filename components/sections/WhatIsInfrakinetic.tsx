import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { KeyTakeaway } from '@/components/shared'

export default function WhatIsInfrakinetic() {
  return (
    <Section id="what-is-infrakinetic" eyebrow="In one paragraph" title="What is Infrakinetic?">
      <Reveal variant="fade" className="mt-6 max-w-3xl">
        <p className="text-lg leading-relaxed text-white/70">
          Infrakinetic is a unified business operating system that replaces separate CRM, HR, payroll,
          finance, and workflow tools with one shared database, one event bus, and one approval engine —
          so commercial, workforce, and finance work never lose context moving between departments.
        </p>
        <KeyTakeaway>
          Infrakinetic is not a CRM, an ERP, or an integration platform layered over existing tools — it is
          the single operating foundation those tools would otherwise be bolted onto.
        </KeyTakeaway>
      </Reveal>
    </Section>
  )
}
