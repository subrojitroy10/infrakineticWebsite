'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ParallaxCard from '@/components/ui/ParallaxCard'
import Reveal from '@/components/ui/Reveal'

interface ProofStat {
  label: string
  value: string
}

interface ProofStripProps {
  stats: ProofStat[]
  note?: string
  className?: string
}

/**
 * Evidence-metric strip reused wherever the audited migration run (or similar
 * measured proof) needs to appear — homepage and the dedicated deep-dive page.
 */
export default function ProofStrip({ stats, note, className = '' }: ProofStripProps) {
  return (
    <Reveal variant="fade" className={className}>
      <ParallaxCard depth={20} className="border-gold-300/30 bg-gold-300/[0.05] p-6 md:p-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
            >
              <p className="text-2xl font-semibold tracking-tight text-gold-300 sm:text-3xl">{stat.value}</p>
              <p className="mt-1.5 text-[11px] font-medium uppercase leading-snug tracking-wide text-white/65">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
        {note && <p className="mt-5 text-xs text-white/65">{note}</p>}
      </ParallaxCard>
    </Reveal>
  )
}
