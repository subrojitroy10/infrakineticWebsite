'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { brand } from '@/lib/content'
import Link from 'next/link'
import DashboardMock from '@/components/mock/DashboardMock'
import { ArrowRight, TrendingUp, Users, Wallet, Target } from '@/components/ui/Icons'

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

const heroStats = [
  { label: 'Shared operating foundation', value: '1', icon: Target },
  { label: 'Interconnected engines', value: '17', icon: Users },
  { label: 'Core platform capabilities', value: '5', icon: Wallet },
  { label: 'Migration data points executed', value: '900K', icon: TrendingUp },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" itemScope itemType="https://schema.org/SoftwareApplication">
      <div className="pointer-events-none absolute inset-0 z-0 bg-ink-900" />
      <div className="pointer-events-none absolute -top-1/3 right-0 z-0 h-[60rem] w-[60rem] rounded-full bg-gold-500/[0.07] blur-[140px]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-ink-900/20 via-transparent to-ink-900" />

      <div className="container-page relative z-20 pb-16 pt-32 md:pt-40 lg:pb-24">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            {/* Eyebrow, H1, and lead paragraph render immediately (no entrance
                animation) — this text is the LCP candidate, and animating it
                in was adding ~2.8s of element render delay to LCP. */}
            <span className="eyebrow">{brand.parent}</span>

            <h1
              itemProp="name"
              className="mt-6 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[4.4rem] xl:text-[5rem]"
            >
              Stop syncing CRM, ERP &amp; HR.
              <br />
              <span className="text-gradient">Run them on one system.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Stop maintaining sync jobs and integration middleware between separate CRM, ERP, HR, and finance tools. Infrakinetic connects sales, finance, billing, payments, HR, payroll, workflow, governance, and customer success on one shared data model — eliminating the disconnected handoffs between separate tools.
            </p>

            <motion.p
              variants={fade}
              initial="hidden"
              animate="show"
              custom={2}
              className="mt-4 max-w-xl text-lg leading-relaxed text-white/60"
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
              <a href="#contact" className="btn-primary" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="name" content="Platform Briefing" />
                <meta itemProp="description" content="Request a personalized Infrakinetic platform briefing" />
                Request a briefing
                <ArrowRight size={15} />
              </a>
              <Link href="/migration" className="btn-ghost">
                Assess a migration
                <ArrowRight size={15} />
              </Link>
            </motion.div>

            <div className="sr-only" itemProp="description">
              Infrakinetic replaces fragmented software stacks with one connected operating foundation — so work flows across departments without losing context, approvals, or audit history.
            </div>

            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              custom={4}
              className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {heroStats.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 min-w-0"
                >
                  <Icon size={16} className="text-gold-300/70" />
                  <p className="mt-2.5 text-xl font-semibold tracking-tight text-white truncate">{value}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase leading-snug tracking-wide text-white/40 truncate">
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fade}
              initial="hidden"
              animate="show"
              custom={5}
              className="mt-10 flex flex-wrap items-center gap-4 text-sm text-white/40"
            >
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gold-400" />
                SOC 2 Type II in progress
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                DPDP 2023 aligned by architecture
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gold-400" />
                Database-level tenant isolation
              </span>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-8 rounded-[2rem] bg-gold-500/10 blur-3xl" aria-hidden />

            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
