'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, FileText, GitBranch, Shield, Target, Users, Wallet } from '@/components/ui/Icons'

const buyerCategories = [
  { label: 'CRM & Sales', href: '/crm-software' },
  { label: 'Billing & Invoicing', href: '/billing-software' },
  { label: 'Finance & Accounting', href: '/finance-software' },
  { label: 'HR & Payroll', href: '/hr-software' },
]

const starterEngines = [
  { label: 'CRM & Sales', state: 'Start here', icon: Target },
  { label: 'Billing & Invoicing', state: 'Start here', icon: FileText },
  { label: 'Finance', state: 'Add when needed', icon: Wallet },
  { label: 'HR & Payroll', state: 'Add when needed', icon: Users },
]

const foundation = ['Documents', 'Approvals', 'Workflow', 'Automation', 'Governance']

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-ink-900" />
      <div className="pointer-events-none absolute left-1/2 top-[-18rem] -z-10 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-gold-500/[0.08] blur-[150px]" aria-hidden />
      <div className="pointer-events-none absolute -right-48 top-36 -z-10 h-[36rem] w-[36rem] rounded-full bg-violet-500/[0.11] blur-[140px]" aria-hidden />

      <div className="container-page pb-20 pt-32 md:pb-28 md:pt-40 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.03fr_.97fr] lg:gap-14">
          <div>
            <a href="https://www.polynovea.in" target="_blank" rel="noopener noreferrer" className="eyebrow">
              A Polynovea Product
            </a>

            <h1 className="mt-7 max-w-4xl font-display text-[2.8rem] font-semibold leading-[0.99] tracking-[-0.05em] text-white sm:text-6xl lg:text-[4.65rem]">
              CRM, billing, HR and finance software —
              <span className="mt-2 block text-gradient">without another disconnected stack.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/68 md:text-xl">
              Start with the Infrakinetic engines your business needs now. Add others later without rebuilding the operating model. Documents, approvals, workflow, automation and governance run underneath every deployment so enabled engines connect instead of becoming another set of silos.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5" aria-label="Business software categories">
              {buyerCategories.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-white/10 bg-white/[0.025] px-3.5 py-2 text-xs font-medium text-white/58 transition-colors hover:border-gold-300/35 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#engines" className="btn-primary">
                Explore the engines
                <ArrowRight size={15} />
              </a>
              <a href="#connected-journey" className="btn-ghost">
                See how it connects
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 text-sm text-white/55 sm:grid-cols-3">
              {[
                'Buy only the engines you need',
                'Platform infrastructure included',
                'Governed migration built in',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-gold-300/25 bg-gold-300/[0.06] text-gold-300">
                    <Check size={10} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-gold-500/[0.09] via-transparent to-violet-500/[0.1] blur-3xl" aria-hidden />

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800/78 shadow-[0_42px_100px_-52px_rgba(0,0,0,0.85)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 md:px-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-300">Land and expand</p>
                  <p className="mt-1 text-sm font-medium text-white">Build the stack around your first problem</p>
                </div>
                <span className="rounded-full border border-success-border/50 bg-success-bg/40 px-2.5 py-1 text-[10px] font-semibold text-success">
                  Modular
                </span>
              </div>

              <div className="grid gap-3 p-4 sm:grid-cols-2 md:p-5">
                {starterEngines.map((engine, index) => (
                  <motion.div
                    key={engine.label}
                    initial={false}
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className={`rounded-2xl border p-4 ${index < 2 ? 'border-gold-300/30 bg-gold-300/[0.05]' : 'border-white/[0.08] bg-white/[0.02]'}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className={`grid h-9 w-9 place-items-center rounded-xl ${index < 2 ? 'bg-gold-300/10 text-gold-300' : 'bg-white/[0.04] text-white/55'}`}>
                        <engine.icon size={17} />
                      </span>
                      <span className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${index < 2 ? 'text-gold-300' : 'text-white/35'}`}>
                        {engine.state}
                      </span>
                    </div>
                    <p className="mt-4 text-sm font-semibold text-white">{engine.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/42">
                      {index < 2 ? 'Enabled as your starting stack.' : 'Can join the same platform later.'}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-white/[0.07] bg-white/[0.015] p-4 md:p-5">
                <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/38">
                  <Shield size={13} />
                  Shared platform infrastructure
                </div>
                <div className="flex flex-wrap gap-2">
                  {foundation.map((item) => (
                    <span key={item} className="rounded-lg border border-violet-400/20 bg-violet-400/[0.055] px-2.5 py-1.5 text-[11px] font-medium text-violet-300">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-4 text-xs text-white/45">
                  <GitBranch size={14} className="text-gold-300" />
                  Add an engine later. Keep the identity, controls, documents and operating context you already have.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
