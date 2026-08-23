'use client'

import React from 'react'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { engineeringProof } from '@/lib/content'

export default function EngineeringProof() {
  return (
    <Section
      id="engineering-proof"
      eyebrow={engineeringProof.eyebrow}
      title={engineeringProof.title}
      lead={engineeringProof.lead}
    >
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {engineeringProof.items.map((item, i) => (
          <Reveal key={item.title} variant="up" delay={i * 0.06}>
            <ParallaxCard depth={12 + i * 2} className="h-full p-6">
              <h3 className="heading-serif text-base text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{item.outcome}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/50">{item.mechanism}</p>
              {item.detail && (
                <span className="mt-4 inline-flex rounded-full border border-gold-300/25 bg-gold-300/[0.06] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-gold-300">
                  {item.detail}
                </span>
              )}
            </ParallaxCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
