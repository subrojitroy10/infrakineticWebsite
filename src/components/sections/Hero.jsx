import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { brand } from '../../data/content'

// Lazy-load the WebGL scene so first paint isn't blocked by Three.js.
const HeroScene = lazy(() => import('../three/HeroScene'))

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* 3D backdrop */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Readability gradients over the canvas */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-ink-900/80 via-ink-900/20 to-transparent" />

      <div className="container-page relative z-20 py-28">
        <div className="max-w-3xl">
          <motion.div variants={fade} initial="hidden" animate="show" custom={0}>
            <span className="eyebrow">{brand.parent}</span>
          </motion.div>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="heading-serif mt-6 text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.2rem]"
          >
            Your Business.
            <br />
            <span className="text-gradient">One Operating System.</span>
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 max-w-xl text-lg leading-relaxed text-white/65 md:text-xl"
          >
            {brand.subtitle}
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#contact" className="btn-primary">
              Book a demo
              <span aria-hidden>→</span>
            </a>
            <a href="#platform" className="btn-ghost">
              Explore the platform
            </a>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/45"
          >
            <span className="flex items-center gap-2">
              <Dot /> One shared database
            </span>
            <span className="flex items-center gap-2">
              <Dot /> Modular by design
            </span>
            <span className="flex items-center gap-2">
              <Dot /> Enterprise ready
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-teal-400"
          />
        </div>
      </motion.div>
    </section>
  )
}

function Dot() {
  return <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_2px_rgba(45,212,191,0.6)]" />
}
