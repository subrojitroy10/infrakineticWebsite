import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { brand } from '../../data/content'
import DashboardMock from '../mock/DashboardMock'
import { ArrowRight } from '../ui/Icons'

// Lazy-load the WebGL scene so first paint isn't blocked by Three.js.
const HeroScene = lazy(() => import('../three/HeroScene'))

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stats = [
  { value: '1', label: 'Unified database' },
  { value: '9+', label: 'Business modules' },
  { value: '4', label: 'Expansion layers' },
  { value: '0', label: 'Integrations needed' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* 3D backdrop — deliberately subdued so the product window leads */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Readability gradients over the canvas */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-ink-900/60 via-ink-900/10 to-ink-900" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-ink-900/70 via-transparent to-ink-900/40" />

      <div className="container-page relative z-20 pb-16 pt-32 md:pt-40 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* ── Copy ─────────────────────────────────── */}
          <div>
            <motion.div variants={fade} initial="hidden" animate="show" custom={0}>
              <span className="eyebrow">{brand.parent}</span>
            </motion.div>

            <motion.h1
              variants={fade}
              initial="hidden"
              animate="show"
              custom={1}
              className="mt-6 font-sans text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.4rem]"
            >
              Your business.
              <br />
              <span className="text-gradient">One operating system.</span>
            </motion.h1>

            <motion.p
              variants={fade}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/60"
            >
              {brand.subtitle}
            </motion.p>

            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              custom={3}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href="#contact" className="btn-primary">
                Book a demo
                <ArrowRight size={15} />
              </a>
              <a href="#platform" className="btn-ghost">
                Explore the platform
              </a>
            </motion.div>
          </div>

          {/* ── Product window ───────────────────────── */}
          <div className="relative">
            <DashboardMock />
          </div>
        </div>

        {/* ── Stat strip ───────────────────────────────── */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-20 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4 lg:mt-24"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-sans text-3xl font-semibold tracking-tight text-white">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-white/45">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
