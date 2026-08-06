import { Suspense, lazy } from 'react'
import Reveal from '../ui/Reveal'
import ParallaxCard from '../ui/ParallaxCard'
import { connected } from '../../data/content'
import { Database, Sliders, Shield, ChartBar } from '../ui/Icons'

const nodeIcons = [Database, Sliders, Shield, ChartBar]

const DatabaseScene = lazy(() => import('../three/DatabaseScene'))

export default function Connected() {
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

        <div className="mt-4 grid items-center gap-8 lg:grid-cols-2">
          {/* 3D shared database */}
          <Reveal variant="scale" className="order-2 lg:order-1">
            <div className="relative h-[24rem] w-full md:h-[30rem]">
              <Suspense fallback={<SceneFallback />}>
                <DatabaseScene nodes={connected.nodes.map((n) => n.label)} />
              </Suspense>
            </div>
          </Reveal>

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
