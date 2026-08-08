'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check } from '@/components/ui/Icons'
import { cta } from '@/lib/content'

const fields = [
  { name: 'name', label: 'Full name', type: 'text', placeholder: 'Ananya Sharma' },
  { name: 'email', label: 'Work email', type: 'email', placeholder: 'ananya@company.in' },
  { name: 'company', label: 'Company', type: 'text', placeholder: 'Polynovea LLP' },
]

const areas = ['Commerce', 'People', 'Finance', 'Marketing', 'Operations', 'CX360', 'Intelligence']

export default function BriefingClient() {
  const [submitted, setSubmitted] = useState(false)
  const [picked, setPicked] = useState(['Commerce'])

  const toggle = (area: string) =>
    setPicked((current) =>
      current.includes(area) ? current.filter((item) => item !== area) : [...current, area],
    )

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-page relative">
        <div className="mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-r border-white/10 pr-8 lg:pr-12"
            >
              <span className="eyebrow">{cta.eyebrow}</span>
              <h2 className="heading-serif mt-5 text-3xl leading-tight md:text-4xl">
                {cta.title}
              </h2>
              <p className="mt-4 text-white/60">{cta.lead}</p>

              <div className="mt-10 space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-300">What the briefing covers</h3>
                <div className="space-y-3">
                  {[
                    'Architecture walkthrough — one schema, one event bus, one TX boundary',
                    'Governance & security — RLS, tenant isolation, DPDP 2023 by architecture',
                    'Lifecycle spine & signal framework — how the loop closes',
                    'Calibrated ML intelligence — three tiers, conformal intervals, SHAP',
                    'Pilot scope & timeline — 4-6 weeks, your data, your pace',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-gold-300/20 text-gold-300">
                        <Check size={10} />
                      </span>
                      <span className="text-sm text-white/70">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-2xl border border-gold-300/30 bg-gold-300/[0.04]">
                  <p className="text-sm font-semibold text-gold-300 mb-2">60 minutes. Technical. No sales fluff.</p>
                  <p className="text-sm text-white/60">
                    You&apos;ll speak with a platform engineer, not an SDR. Come with questions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="glass-card p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="thanks"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex h-full flex-col items-center justify-center py-10 text-center"
                    >
                      <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-violet-400 text-ink-900">
                        <Check size={26} />
                      </div>
                      <h3 className="heading-serif mt-6 text-2xl">Request received.</h3>
                      <p className="mt-2 max-w-xs text-sm text-white/55">
                        The Infrakinetic team will reach out within 24 hours to schedule the platform briefing.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-sm font-medium text-gold-300 hover:text-gold-200"
                      >
                        Submit another request
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {fields.map((field) => (
                        <div key={field.name}>
                          <label
                            htmlFor={field.name}
                            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/40"
                          >
                            {field.label}
                          </label>
                          <input
                            id={field.name}
                            name={field.name}
                            type={field.type}
                            required
                            placeholder={field.placeholder}
                            className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-gold-300/60 focus:bg-white/[0.05] light:text-black light:placeholder-black/30 light:bg-black/[0.03] light:border-black/10 light:focus:bg-black/[0.05]"
                          />
                        </div>
                      ))}

                      <div>
                        <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
                          Areas to review
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {areas.map((area) => {
                            const active = picked.includes(area)
                            return (
                              <button
                                type="button"
                                key={area}
                                onClick={() => toggle(area)}
                                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                                  active
                                    ? 'border-gold-300/60 bg-gold-300/15 text-gold-200'
                                    : 'border-white/10 bg-white/[0.02] text-white/50 hover:border-white/25'
                                }`}
                              >
                                {area}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      <button type="submit" className="btn-primary w-full">
                        Request a platform briefing
                        <ArrowRight size={15} />
                      </button>
                      <p className="text-center text-xs text-white/30">
                        Briefing requests are reviewed by the Infrakinetic team.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
