import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../ui/Reveal'
import ParallaxCard from '../ui/ParallaxCard'
import { cta } from '../../data/content'
import { Check, ArrowRight } from '../ui/Icons'

const fields = [
  { name: 'name', label: 'Full name', type: 'text', placeholder: 'Jane Doe' },
  { name: 'email', label: 'Work email', type: 'email', placeholder: 'jane@company.com' },
  { name: 'company', label: 'Company', type: 'text', placeholder: 'Acme Inc.' },
]

const areas = ['Commercial', 'Workforce', 'Payroll', 'Finance', 'Governance', 'Reporting']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [picked, setPicked] = useState(['Commercial'])

  const toggle = (area) =>
    setPicked((current) =>
      current.includes(area) ? current.filter((item) => item !== area) : [...current, area],
    )

  const handleSubmit = (event) => {
    event.preventDefault()
    // Placeholder: wire to a real endpoint when the acquisition flow is ready.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-page relative">
        <ParallaxCard
          depth={20}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-2">
            <div className="relative border-b border-white/10 p-8 md:p-12 lg:border-b-0 lg:border-r">
              <Reveal variant="fade">
                <span className="eyebrow">{cta.eyebrow}</span>
              </Reveal>
              <Reveal variant="up" delay={0.05}>
                <h2 className="heading-serif mt-5 text-3xl leading-tight md:text-4xl">
                  {cta.title}
                </h2>
              </Reveal>
              <Reveal variant="up" delay={0.1}>
                <p className="mt-4 text-white/60">{cta.lead}</p>
              </Reveal>
              <Reveal variant="up" delay={0.15}>
                <div className="mt-8 space-y-3 text-sm text-white/50">
                  {[
                    'Operating model review',
                    'Architecture and governance walkthrough',
                    'Enterprise fit discussion',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-gold-400/20 text-gold-300">
                        <Check size={10} />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="thanks"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex h-full flex-col items-center justify-center py-10 text-center"
                  >
                    <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-violet-400 text-ink-900">
                      <Check size={26} />
                    </div>
                    <h3 className="heading-serif mt-6 text-2xl">Request received.</h3>
                    <p className="mt-2 max-w-xs text-sm text-white/55">
                      The Infrakinetic team will reach out to schedule the platform briefing.
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
                          className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-gold-400/60 focus:bg-white/[0.05]"
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
                              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all min-w-[80px] ${
                                active
                                  ? 'border-gold-400/60 bg-gold-400/15 text-gold-200'
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
          </div>
        </ParallaxCard>
      </div>
    </section>
  )
}
