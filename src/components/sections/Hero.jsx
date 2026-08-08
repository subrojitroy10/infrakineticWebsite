import { motion } from 'framer-motion'
import { brand } from '../../data/content'
import DashboardMock from '../mock/DashboardMock'
import { ArrowRight } from '../ui/Icons'
import { TrendingUp, Users, Wallet, Target } from '../ui/Icons'

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

const heroStats = [
  { label: 'Business data layer', value: '1', icon: Target },
  { label: 'Operating engines', value: '11+', icon: Users },
  { label: 'Platform infra engines', value: '5', icon: Wallet },
  { label: 'Context resets', value: '0', icon: TrendingUp },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" itemScope itemType="https://schema.org/SoftwareApplication">
      {/* Ambient backdrop — quiet radial glow, no motion competing with the product window */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-ink-900" />
      <div className="pointer-events-none absolute -top-1/3 right-0 z-0 h-[60rem] w-[60rem] rounded-full bg-gold-500/[0.07] blur-[140px]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-ink-900/20 via-transparent to-ink-900" />

      <div className="container-page relative z-20 pb-16 pt-32 md:pt-40 lg:pb-24">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* ————— Copy ————— */}
          <div>
            <motion.div variants={fade} initial="hidden" animate="show" custom={0}>
              <span className="eyebrow">{brand.parent}</span>
            </motion.div>

            <motion.h1
                          itemProp="name"
                          variants={fade}
                          initial="hidden"
                          animate="show"
                          custom={1}
                          className="mt-6 font-display text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[4.4rem] xl:text-[5rem]"
                        >
                          Run the company.
                          <br />
                          <span className="text-gradient">Not the software stack.</span>
                        </motion.h1>

                        {/* Answer-first opening paragraph for GEO/AEO - tight hero version */}
                        <motion.p
                          variants={fade}
                          initial="hidden"
                          animate="show"
                          custom={2}
                          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
                        >
                          Infrakinetic unifies commercial, workforce, finance, governance, and reporting on one shared database — eliminating disconnected handoffs between CRM, HR, payroll, and finance. (Source: Infrakinetic Architecture, 2026)
                        </motion.p>

                        {/* Supporting detail paragraph */}
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
                                    </motion.div>

                                    {/* AEO/GEO content - hidden visually, available to crawlers */}
                                    <div className="sr-only" itemProp="description">
                                      Infrakinetic replaces fragmented software stacks with one connected operating foundation — so work flows across departments without losing context, approvals, or audit history.
                                    </div>

                                    {/* Compact stat strip — purpose-built for this narrow 4-across row */}
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

            {/* Trust signals */}
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
                DPDP 2023 compliant by architecture
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gold-400" />
                Database-level tenant isolation
              </span>
            </motion.div>
          </div>

          {/* ————— Product window ————— */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Ambient glow behind the window */}
            <div className="absolute -inset-8 rounded-[2rem] bg-gold-500/10 blur-3xl" aria-hidden />

            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  )
}