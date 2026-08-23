'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Reveal from '@/components/ui/Reveal'
import ParallaxCard from '@/components/ui/ParallaxCard'
import { connected, connectedWorkflows } from '@/lib/content'
import { Database, Sliders, Shield, ChartBar } from '@/components/ui/Icons'
import { ConnectedWorkflow } from '@/components/shared'

const nodeIcons = [Database, Sliders, Shield, ChartBar]

const DatabaseScene = dynamic(() => import('@/components/three/DatabaseScene'), {
  ssr: false,
  loading: () => <SceneFallback />,
})

function SceneFallback() {
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="h-24 w-24 animate-pulse-glow rounded-full bg-gold-400/30 blur-xl" />
    </div>
  )
}

export default function Connected() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="connected" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-page relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal variant="fade">
            <span className="eyebrow">{connected.eyebrow}</span>
          </Reveal>
          <Reveal variant="up" delay={0.05}>
            <h2 className="heading-serif mt-5 text-4xl leading-[1.1] md:text-5xl">
              {connected.title}
            </h2>
          </Reveal>
          <Reveal variant="up" delay={0.12}>
            <p className="mt-5 text-lg leading-relaxed text-white/60">{connected.lead}</p>
          </Reveal>
        </div>

        <Reveal variant="up" delay={0.15} className="mt-14">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 text-center">
            <h3 className="heading-serif text-2xl md:text-3xl">What does a shared business data layer actually do?</h3>
            <p className="mt-4 text-lg leading-relaxed text-white/70 max-w-3xl mx-auto">
              Instead of syncing data between tools, Infrakinetic uses <strong>one PostgreSQL database</strong> where Commercial, Workforce, Finance, Documents, Workflow, and Reporting all read and write to the same tables. Zero ETL, zero sync lag, zero drift. Engines react to the same catalogued business events, approval framework, and audit trail.
            </p>
            <div className="mt-6 p-4 rounded-xl border border-gold-400/20 bg-gold-400/[0.05] max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-gold-300">Key takeaway:</p>
              <p className="mt-1 text-sm text-white/70">One database = one source of truth. No more &quot;which system is right?&quot; debates.</p>
            </div>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={0.1} className="mt-10">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <p className="text-sm text-white/60">Two real journeys that move through the platform without a manual handoff:</p>
            <div className="mt-6 space-y-8">
              {connectedWorkflows.map((workflow) => (
                <ConnectedWorkflow key={workflow.key} title={workflow.title} steps={workflow.steps} />
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid items-center gap-8 lg:grid-cols-2">
          {!isMobile && (
            <Reveal variant="scale" className="order-2 lg:order-1">
              <div className="relative h-[24rem] w-full md:h-[30rem]">
                <DatabaseScene nodes={connected.nodes.map((n) => n.label)} />
              </div>
            </Reveal>
          )}

          {isMobile && (
            <Reveal variant="scale" className="order-2 lg:order-1">
              <div className="relative h-[20rem] w-full flex items-center justify-center">
                <div className="relative z-10">
                  <div className="rounded-3xl bg-gradient-to-br from-gold-500/10 to-violet-500/10 border border-gold-400/20 p-8 md:p-12 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-gold-400 to-violet-400 mb-6">
                      <Database size={32} className="text-ink-900" />
                    </div>
                    <p className="text-white/70 text-lg md:text-xl">
                      Shared business data layer connecting all engines
                    </p>
                  </div>
                  <div className="absolute inset-0 pointer-events-none">
                    {[1, 2, 3].map((r) => (
                      <div
                        key={r}
                        className="absolute inset-0 rounded-full border border-gold-400/10 animate-pulse"
                        style={{ animationDelay: `${r * 0.5}s`, animationDuration: '4s' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          <div className="order-1 grid gap-4 sm:grid-cols-2 lg:order-2">
            {connected.nodes.map((n, i) => {
              const Icon = nodeIcons[i]
              return (
                <Reveal key={n.label} variant="up" delay={i * 0.08}>
                  <ParallaxCard
                    depth={14 + i * 2}
                    className="glass-card h-full p-5 transition-colors hover:border-gold-400/30"
                  >
                    <div className="mb-3 grid h-9 w-9 place-items-center rounded-lg border border-gold-400/20 bg-gold-400/[0.08] text-gold-300">
                      <Icon size={16} />
                    </div>
                    <h3 className="font-semibold text-white">{n.label}</h3>
                    <p className="mt-1 text-sm text-white/50">{n.desc}</p>

                    <div className="sr-only" itemProp="description">
                      {n.label} is natively connected — not integrated.
                    </div>
                  </ParallaxCard>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal variant="fade" className="mt-14 text-center">
          <p className="text-lg font-medium text-gradient">{connected.closer}</p>
        </Reveal>
      </div>
    </section>
  )
}
