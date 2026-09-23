import Link from 'next/link'
import { ArrowRight, Check, FileText, GitBranch, Shield, Target, Users, Wallet } from '@/components/ui/Icons'
import EarlyAccessRail from '@/components/sections/EarlyAccessRail'

const buyerCategories = [
  { label: 'CRM & Sales', href: '/crm-software' },
  { label: 'Billing & Invoicing', href: '/billing-software' },
  { label: 'Finance & Accounting', href: '/finance-software' },
  { label: 'HR', href: '/hr-software' },
  { label: 'Payroll', href: '/payroll-software' },
]

const starterEngines = [
  { label: 'CRM & Sales', state: 'Start here', icon: Target },
  { label: 'Billing & Invoicing', state: 'Start here', icon: FileText },
  { label: 'Finance', state: 'Add when needed', icon: Wallet },
  { label: 'HR', state: 'Add when needed', icon: Users },
  { label: 'Payroll', state: 'Add when needed', icon: Wallet },
]

const foundation = ['Documents', 'Approvals', 'Workflow', 'Automation', 'Governance']

interface HeroProps {
  earlyAccessCount: number | null
}

export default function Hero({ earlyAccessCount }: HeroProps) {
  return (
    <section id="top" className="relative bg-ink-900">
      <div className="container-page pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="grid items-start gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-20 xl:gap-24">
          <div className="max-w-3xl">
            <a href="https://www.polynovea.in" target="_blank" rel="noopener noreferrer" className="eyebrow">
              A Polynovea Product
            </a>

            <h1 className="mt-7 font-display text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.052em] text-white sm:text-6xl lg:text-[4.75rem]">
              CRM, billing, HR and finance software —
              <span className="mt-2 block text-gold-300">without another disconnected stack.</span>
            </h1>

            <EarlyAccessRail count={earlyAccessCount} />

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/66 md:text-xl">
              Start with the Infrakinetic engines your business needs now. Add others later without rebuilding the operating model. Documents, approvals, workflow, automation and governance remain shared underneath every deployment.
            </p>

            <nav className="mt-7 flex flex-wrap gap-x-5 gap-y-2" aria-label="Business software categories">
              {buyerCategories.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hairline-link text-xs font-semibold text-white/50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#engines" className="btn-primary">
                Explore the engines
                <ArrowRight size={15} />
              </a>
              <a href="#connected-journey" className="inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold text-white/62 transition-colors hover:text-white">
                See how it connects
                <ArrowRight size={15} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-xs text-white/45">
              {[
                'Buy only the engines you need',
                'Platform infrastructure included',
                'Governed migration built in',
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check size={12} className="shrink-0 text-gold-300" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative lg:pt-8">
            <aside className="feature-frame overflow-hidden" aria-label="Example modular Infrakinetic deployment">
              <div className="flex items-start justify-between gap-5 px-6 pb-5 pt-6 md:px-7 md:pt-7">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-300">Deployment model</p>
                  <p className="mt-2 max-w-sm text-lg font-semibold leading-snug text-white">Build the stack around the first problem worth solving.</p>
                </div>
                <span className="border border-success-border/40 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-success">
                  Modular
                </span>
              </div>

              <div className="relative px-6 pb-1 md:px-7">
                <span className="absolute bottom-0 left-[2.68rem] top-0 w-px bg-white/[0.09]" aria-hidden />
                {starterEngines.map((engine, index) => (
                  <div key={engine.label} className="relative grid grid-cols-[38px_1fr_auto] items-center gap-4 py-4">
                    <span className={`relative z-10 grid h-9 w-9 place-items-center rounded-lg border bg-ink-800 ${index < 2 ? 'border-gold-300/30 text-gold-300' : 'border-white/[0.1] text-white/45'}`}>
                      <engine.icon size={16} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{engine.label}</p>
                      <p className="mt-1 text-xs text-white/40">
                        {index < 2 ? 'Enabled as the starting stack.' : 'Joins the same operating context later.'}
                      </p>
                    </div>
                    <span className={`text-[9px] font-semibold uppercase tracking-[0.13em] ${index < 2 ? 'text-gold-300' : 'text-white/30'}`}>
                      {engine.state}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mx-6 mb-6 mt-4 rounded-xl bg-white/[0.025] px-5 py-5 md:mx-7 md:mb-7">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/42">
                  <Shield size={13} />
                  Shared platform infrastructure
                </div>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {foundation.map((item) => (
                    <span key={item} className="text-[11px] font-medium text-violet-300">{item}</span>
                  ))}
                </div>
                <div className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-white/42">
                  <GitBranch size={14} className="mt-0.5 shrink-0 text-gold-300" />
                  Add an engine later without rebuilding identity, controls, documents or operating context.
                </div>
              </div>
            </aside>

            <p className="mt-4 max-w-md text-xs leading-relaxed text-white/32 lg:ml-8">
              One operating foundation; independently enabled business engines. The visual is a deployment model, not a bundled-plan requirement.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
