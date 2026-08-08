import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import MeetInfrakinetic from '@/components/sections/MeetInfrakinetic'
import Connected from '@/components/sections/Connected'
import Modules from '@/components/sections/Modules'
import Intelligence from '@/components/sections/Intelligence'
import Scale from '@/components/sections/Scale'
import Enterprise from '@/components/sections/Enterprise'
import WhyInfrakinetic from '@/components/sections/WhyInfrakinetic'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Infrakinetic — Your Business. One Operating System.',
  description:
    'Infrakinetic connects commercial, workforce, finance, operations, documents, workflow, and reporting on one governed business data layer. A Polynovea product.',
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <MeetInfrakinetic />
      <Connected />
      <Modules />
      <Intelligence />
      <Scale />
      <Enterprise />
      <WhyInfrakinetic />
      <Contact />
    </main>
  )
}
