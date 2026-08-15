'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check } from '@/components/ui/Icons'
import { cta } from '@/lib/content'
import { submitLead } from '@/lib/formsubmit'
import { FAQSection, KeyTakeaway } from '@/components/shared'
import Section from '@/components/ui/Section'

const briefingFaqItems = [
  {
    question: 'Who runs the platform briefing?',
    answer: 'A platform engineer, not a sales rep. The session is a technical walkthrough of the architecture, governance model, and lifecycle spine — you can bring implementation questions and expect a direct, specific answer.',
  },
  {
    question: 'How long does the briefing take?',
    answer: 'Sixty minutes. It covers the shared-database architecture, governance and security model, lifecycle spine and signal framework, and calibrated ML intelligence, with time left for your specific questions.',
  },
  {
    question: 'Do I need to prepare anything before the call?',
    answer: 'No preparation is required. If you already know which engines matter most to your organization — Commerce, People, Finance, Marketing, Operations, or Customer 360 — flagging that when you request the briefing helps us focus the walkthrough.',
  },
  {
    question: 'Is this a sales pitch or a technical review?',
    answer: 'A technical review. The briefing covers architecture, data model, and governance in enough depth for an engineering or platform evaluation — not a features-and-pricing deck.',
  },
  {
    question: 'What happens after I submit the request?',
    answer: 'The Infrakinetic team reaches out within 24 hours to schedule the session at a time that works for you and your team.',
  },
]

const fields = [
  { name: 'name', label: 'Full name', type: 'text', placeholder: 'Ananya Sharma' },
  { name: 'email', label: 'Work email', type: 'email', placeholder: 'ananya@company.in' },
  { name: 'company', label: 'Company', type: 'text', placeholder: 'Polynovea LLP' },
]

const areas = ['Commerce', 'People', 'Finance', 'Marketing', 'Operations', 'CX360', 'Intelligence']

export default function BriefingClient() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [picked, setPicked] = useState(['Commerce'])

  const toggle = (area: string) =>
    setPicked((current) =>
      current.includes(area) ? current.filter((item) => item !== area) : [...current, area],
    )

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)
    setSubmitting(true)

    const formData = new FormData(event.currentTarget)
    try {
      await submitLead({
        name: String(formData.get('name') ?? ''),
        email: String(formData.get('email') ?? ''),
        company: String(formData.get('company') ?? ''),
        areas: picked,
        source: 'briefing',
      })
      setSubmitted(true)
    } catch {
      setError("Something went wrong — email us directly at hello@infrakinetic.io")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
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
              <h1 className="heading-serif mt-5 text-3xl leading-tight md:text-4xl">
                {cta.title}
              </h1>
              <p className="mt-4 text-white/60">{cta.lead}</p>
              <p className="mt-3 text-sm text-white/50">
                A platform engineer walks you through the shared-database architecture, governance and security model, and lifecycle spine in a single 60-minute session — no sales deck, no SDR.
              </p>

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

                      <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
                        {submitting ? 'Sending…' : 'Request a platform briefing'}
                        {!submitting && <ArrowRight size={15} />}
                      </button>
                      {error ? (
                        <p className="text-center text-xs text-red-400">{error}</p>
                      ) : (
                        <p className="text-center text-xs text-white/30">
                          Briefing requests are reviewed by the Infrakinetic team.
                        </p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    <Section
      id="who-its-for"
      eyebrow="Who this is for"
      title="Who is the platform briefing for?"
      lead="The briefing is aimed at whoever owns the decision to run commercial, workforce, finance, and reporting on one connected platform instead of six disconnected tools."
    >
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <p className="text-sm font-semibold text-white mb-1">Founders & operators</p>
          <p className="text-sm text-white/50">Deciding what the company runs its operations on before the stack fragments across departments.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <p className="text-sm font-semibold text-white mb-1">Platform & engineering leads</p>
          <p className="text-sm text-white/50">Evaluating the data model, tenant isolation, and event architecture before committing to a migration.</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
          <p className="text-sm font-semibold text-white mb-1">Finance & governance owners</p>
          <p className="text-sm text-white/50">Assessing the ledger, approval engine, and audit trail against compliance and control requirements.</p>
        </div>
      </div>
      <KeyTakeaway>
        The briefing is a 60-minute architecture review led by a platform engineer — bring your hardest integration or governance question, not just a features checklist.
      </KeyTakeaway>
      <p className="mt-6 text-sm text-white/45 max-w-2xl">
        In 60 minutes, we walk through how Infrakinetic&apos;s 15 engines, 5 always-included platform
        capabilities, and 8-layer security architecture map onto your specific commercial, workforce,
        and finance workflows.
      </p>
    </Section>

    <FAQSection
      id="briefing-faq"
      eyebrow="Briefing FAQ"
      title="Questions people ask before booking"
      items={briefingFaqItems}
    />
    </>
  )
}
