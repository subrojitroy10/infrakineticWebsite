import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import { modules } from '../../data/content'

export default function Modules() {
  const [active, setActive] = useState(0)
  const mod = modules[active]

  return (
    <Section
      id="modules"
      eyebrow="The modules"
      title="Depth where it counts."
      lead="Each engine is a full-featured product in its own right — sharing one database so nothing lives in a silo."
    >
      {/* Tab switcher */}
      <Reveal variant="up" className="mt-12">
        <div className="inline-flex flex-wrap gap-2 rounded-full border border-white/10 bg-white/[0.02] p-1.5">
          {modules.map((m, i) => (
            <button
              key={m.key}
              onClick={() => setActive(i)}
              className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
                active === i ? 'text-ink-900' : 'text-white/60 hover:text-white'
              }`}
            >
              {active === i && (
                <motion.span
                  layoutId="module-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{m.name}</span>
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={mod.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4 }}
          className="mt-10 grid gap-6 lg:grid-cols-3"
        >
          {/* Overview panel */}
          <div className="relative overflow-hidden rounded-2xl border border-teal-400/20 bg-gradient-to-br from-teal-500/[0.1] to-transparent p-8 lg:row-span-2">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal-400/15 blur-3xl" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">
              {mod.tag}
            </span>
            <h3 className="heading-serif mt-3 text-3xl">{mod.name}</h3>
            <p className="mt-4 text-base leading-relaxed text-white/60">{mod.summary}</p>
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-teal-300">
              <span className="h-px w-8 bg-teal-400/50" />
              {mod.features.length} core capabilities
            </div>
          </div>

          {/* Feature cards */}
          {mod.features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className="glass-card p-6 transition-colors hover:border-teal-400/30"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-teal-400/10 font-serif text-teal-300">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h4 className="font-semibold text-white">{f.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
