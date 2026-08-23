'use client'

import React from 'react'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { consolidates } from '@/lib/content'
import { Check } from '@/components/ui/Icons'

export default function Consolidates() {
  return (
    <Section id="consolidates" eyebrow={consolidates.eyebrow} title={consolidates.title} lead={consolidates.lead}>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <Reveal variant="left">
          <ParallaxCard depth={16} className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <h3 className="text-lg font-semibold text-white/70">Companies usually buy separately</h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {consolidates.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-white/60"
                >
                  {category}
                </span>
              ))}
            </div>
          </ParallaxCard>
        </Reveal>

        <Reveal variant="right" delay={0.1}>
          <ParallaxCard
            depth={22}
            className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-gold-400/30 bg-gradient-to-br from-gold-500/[0.12] to-violet-500/[0.03] p-8"
          >
            <h3 className="relative text-lg font-semibold text-gold-300">Infrakinetic</h3>
            <p className="relative mt-3 text-xl font-medium text-white md:text-2xl">
              One connected operating environment.
            </p>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {consolidates.categories.map((category) => (
                <span key={category} className="flex items-center gap-1.5 text-sm text-white/80">
                  <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gold-400/25 text-gold-300">
                    <Check size={8} />
                  </span>
                  {category}
                </span>
              ))}
            </div>
          </ParallaxCard>
        </Reveal>
      </div>

      <Reveal variant="fade" className="mt-6">
        <p className="max-w-2xl text-sm text-white/50">{consolidates.note}</p>
      </Reveal>
    </Section>
  )
}
