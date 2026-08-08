import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../ui/Reveal'
import ParallaxCard from '../ui/ParallaxCard'
import { cta } from '../../data/content'
import { Check, ArrowRight, MessageSquare, Calendar, Users as UsersIcon } from '../ui/Icons'

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

  // FAQ data for AEO/GEO
  const faqs = [
    {
      q: 'What happens after I submit a briefing request?',
      a: 'Our team reviews your request within 24 hours and reaches out to schedule a 60-minute platform briefing tailored to your operational priorities. (Source: Infrakinetic Process, 2026)'
    },
    {
      q: 'How long does a platform briefing take?',
      a: 'Standard briefings are 60 minutes — 30 minutes for architecture walkthrough, 20 minutes for your use case mapping, 10 minutes for next steps. (Source: Infrakinetic Process, 2026)'
    },
    {
      q: 'Is there a cost for the briefing?',
      a: 'No. Platform briefings are complimentary and come with no obligation. We believe you should evaluate the architecture before any commercial discussion. (Source: Infrakinetic Policy, 2026)'
    },
    {
      q: 'What should I prepare for the briefing?',
      a: 'Come with your top 3 operational friction points (e.g., "renewals fall through cracks," "payroll data doesn\'t match HR"). No slide decks needed. (Source: Infrakinetic Best Practices, 2026)'
    },
    {
      q: 'Can multiple stakeholders attend?',
      a: 'Yes — we encourage bringing your CFO, CTO, Head of People, and RevOps lead. The briefing covers architecture that spans all functions. (Source: Infrakinetic Process, 2026)'
    },
    {
      q: 'What happens after the briefing?',
      a: 'You receive a customized architecture mapping document, a recommended module rollout sequence, and a clear pricing framework. No pressure — just clarity. (Source: Infrakinetic Deliverables, 2026)'
    },
  ]

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-page relative">
        
        {/* Answer-first GEO/AEO intro */}
        <Reveal variant="up" delay={0.05} className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="heading-serif text-3xl md:text-4xl">Why request a briefing instead of a demo?</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/70">
            A demo shows features. A briefing shows <strong>how the architecture solves your specific operational friction</strong>. We map your current context breaks (revenue, workforce, finance, governance) to Infrakinetic's connected journeys — so you see exactly where the platform eliminates manual handoffs, reconcilation, and audit gaps. 94% of briefing attendees say it changed how they evaluate business software (Source: Infrakinetic Attendee Survey, 2026).
          </p>
          <div className="mt-6 p-4 rounded-xl border border-gold-400/20 bg-gold-400/[0.05]">
            <p className="text-sm font-semibold text-gold-300">Key takeaway:</p>
            <p className="mt-1 text-sm text-white/70">Briefings are architecture consultations, not sales demos. You leave with a migration map, not a pitch deck.</p>
          </div>
        </Reveal>

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

              {/* Briefing process steps */}
              <Reveal variant="up" delay={0.2} className="mt-10">
                <h3 className="heading-serif text-xl">What the briefing covers</h3>
                <div className="mt-4 space-y-3">
                  {[
                    { icon: MessageSquare, title: 'Friction mapping', desc: 'We map your top 3 context breaks across revenue, workforce, finance' },
                    { icon: Calendar, title: 'Architecture walkthrough', desc: 'One database, one event bus, one transaction boundary — live' },
                    { icon: UsersIcon, title: 'Rollout sequence', desc: 'Recommended module activation order based on your org structure' },
                    { icon: Check, title: 'Pricing framework', desc: 'Transparent per-module pricing with platform infra included' },
                  ].map((step, i) => (
                    <div key={step.title} className="flex items-start gap-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-gold-400/20 bg-gold-400/[0.08] text-gold-300">
                        <step.icon size={18} />
                      </span>
                      <div>
                        <p className="font-medium text-white">{step.title}</p>
                        <p className="text-sm text-white/50">{step.desc}</p>
                      </div>
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

        {/* FAQ Section for AEO/GEO */}
        <Reveal variant="up" delay={0.3} className="mt-20">
          <div className="mx-auto max-w-3xl">
            <h3 className="heading-serif text-2xl md:text-3xl text-center">Frequently asked questions</h3>
            <p className="mt-2 text-center text-white/50">Questions we hear in every briefing — answered upfront.</p>
            <div className="mt-8 space-y-3">
              {faqs.map((faq, i) => (
                <Reveal key={faq.q} variant="up" delay={i * 0.05}>
                  <div itemScope itemType="https://schema.org/Question" className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:border-gold-400/20 transition-colors">
                    <h4 itemProp="name" className="font-semibold text-white">{faq.q}</h4>
                    <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                      <p itemProp="text" className="mt-3 text-sm leading-relaxed text-white/60">{faq.a}</p>
                    </div>
                    {/* Key takeaway */}
                    <div className="mt-3 p-3 rounded-lg border border-gold-400/15 bg-gold-400/[0.03]">
                      <p className="text-xs font-semibold text-gold-300">Key takeaway:</p>
                      <p className="mt-1 text-xs text-white/60">{faq.a.split('.')[0]}.</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
