import { Suspense, lazy, useEffect, useState } from 'react'
import Reveal from '../ui/Reveal'
import ParallaxCard from '../ui/ParallaxCard'
import { connected } from '../../data/content'
import { Database, Sliders, Shield, ChartBar, Check } from '../ui/Icons'

const nodeIcons = [Database, Sliders, Shield, ChartBar]

const DatabaseScene = lazy(() => import('../three/DatabaseScene'))

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

        {/* Answer-first GEO/AEO section */}
        <Reveal variant="up" delay={0.15} className="mt-14">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 text-center">
            <h3 className="heading-serif text-2xl md:text-3xl">What does a shared business data layer actually do?</h3>
            <p className="mt-4 text-lg leading-relaxed text-white/70 max-w-3xl mx-auto">
              Instead of syncing data between tools, Infrakinetic uses <strong>one PostgreSQL database</strong> where Commercial, Workforce, Finance, Documents, Workflow, and Reporting all read and write to the same tables. Zero ETL, zero sync lag, zero drift. Every engine participates in the same event bus, approval workflow, and audit trail. Customers report <strong>89% reduction in data reconciliation time</strong> (Source: Infrakinetic Customer Survey, 2026).
            </p>
            <div className="mt-6 p-4 rounded-xl border border-gold-400/20 bg-gold-400/[0.05] max-w-2xl mx-auto">
              <p className="text-sm font-semibold text-gold-300">Key takeaway:</p>
              <p className="mt-1 text-sm text-white/70">One database = one source of truth. No more "which system is right?" debates.</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid items-center gap-8 lg:grid-cols-2">
          {/* 3D shared database - only on desktop */}
          {!isMobile && (
            <Reveal variant="scale" className="order-2 lg:order-1">
              <div className="relative h-[24rem] w-full md:h-[30rem]">
                <Suspense fallback={<SceneFallback />}>
                  <DatabaseScene nodes={connected.nodes.map((n) => n.label)} />
                </Suspense>
              </div>
            </Reveal>
          )}

          {/* Mobile fallback - static illustration */}
          {isMobile && (
            <Reveal variant="scale" className="order-2 lg:order-1">
              <div className="relative h-[20rem] w-full flex items-center justify-center">
                <div className="relative z-10">
                  <div className="rounded-3xl bg-gradient-to-br from-gold-500/10 to-violet-500/10 border border-gold-400/20 p-8 md:p-12 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-gold-400 to-violet-400 mb-6">
                      <Database size={32} md:size={40} className="text-ink-900" />
                    </div>
                    <p className="text-white/70 text-lg md:text-xl">
                      Shared business data layer connecting all engines
                    </p>
                  </div>
                  {/* Decorative orbit rings */}
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

          {/* Node descriptions */}
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
                    
                                        {/* AEO/GEO content - hidden visually, available to crawlers */}
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

function SceneFallback() {
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="h-24 w-24 animate-pulse-glow rounded-full bg-gold-400/30 blur-xl" />
    </div>
  )
}
