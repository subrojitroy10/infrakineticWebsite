import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import { modules } from '../../data/content'
import { PipelineMock, PayrollMock } from '../mock/ModuleMocks'
import { Check } from '../ui/Icons'

const mocks = { crm: PipelineMock, hr: PayrollMock }

export default function Modules() {
  const [active, setActive] = useState(0)
  const mod = modules[active]
  const Mock = mocks[mod.key]

  return (
    <Section
      id="modules"
      eyebrow="The modules"
      title="Depth where it counts."
      lead="Each engine is a full-featured product in its own right, sharing one database so nothing lives in a silo."
    >
      {/* Tab switcher */}
      <Reveal variant="up" className="mt-12">
        <div className="inline-flex flex-wrap gap-1 rounded-full border border-white/10 bg-white/[0.02] p-1">
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
                  className="absolute inset-0 rounded-full bg-white"
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
          className="mt-12 grid items-center gap-12 lg:grid-cols-2"
        >
          {/* Feature list */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
              {mod.tag}
            </span>
            <h3 className="heading-serif mt-3 text-3xl md:text-[2.1rem]">{mod.name}</h3>
            <p className="mt-3 max-w-lg leading-relaxed text-white/55">{mod.summary}</p>

            <div className="mt-8 space-y-1">
              {mod.features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  className="group flex gap-4 rounded-xl p-4 transition-colors hover:bg-white/[0.03]"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-teal-400/25 bg-teal-400/10 text-teal-300">
                    <Check size={12} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-white">{f.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-white/50">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Product mock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-teal-500/[0.07] blur-3xl" aria-hidden />
            <div className="relative">
              <Mock />
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
