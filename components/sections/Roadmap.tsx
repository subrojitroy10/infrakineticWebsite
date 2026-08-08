'use client'

import React from 'react'
import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { roadmap } from '@/lib/content'
import { Check } from '@/components/ui/Icons'

export default function Roadmap() {
  return (
    <Section
      id="roadmap"
      eyebrow="Future roadmap"
      title="A wider operating layer, grouped by the work it improves."
      lead="The roadmap extends the same governed foundation into workforce intelligence, communication, automation, finance control, compliance, and document execution."
    >
      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {roadmap.map((group, i) => (
          <Reveal key={group.phase} variant="up" delay={i * 0.08}>
            <ParallaxCard
              depth={15 + i * 3}
              className="glass-card h-full overflow-hidden p-6 transition-colors hover:border-gold-400/30 md:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-400/30 bg-gold-400/[0.08] text-sm font-bold text-gold-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="heading-serif text-2xl">{group.phase}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{group.summary}</p>
                </div>
              </div>

              <div className="mt-7 space-y-3 border-t border-white/10 pt-5">
                {group.items.map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-relaxed text-white/60">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-400/15 text-gold-300">
                      <Check size={10} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ParallaxCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
