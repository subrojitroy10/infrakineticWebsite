import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { ArrowRight, Check, FileText, Shield, Target, Wallet, Zap } from '@/components/ui/Icons'

const steps = [
  { stage: 'Account', owner: 'Commercial', detail: 'One organization record anchors the relationship.', icon: Target },
  { stage: 'Opportunity', owner: 'Sales', detail: 'Pipeline, proposal context and deal state stay with Sales.', icon: Target },
  { stage: 'Agreement', owner: 'Documents', detail: 'The business document stays linked to the deal that created it.', icon: FileText },
  { stage: 'Decision', owner: 'Approvals', detail: 'Required authority is resolved before the next governed state.', icon: Shield },
  { stage: 'Deal won', owner: 'Sales', detail: 'The commercial event becomes the controlled handoff point.', icon: Check },
  { stage: 'Delivery', owner: 'Operations', detail: 'Work can start from the originating business event and context.', icon: Zap },
  { stage: 'Invoice', owner: 'Billing', detail: 'Billing turns approved commercial facts into an invoice lifecycle.', icon: FileText },
  { stage: 'Settlement', owner: 'Payments', detail: 'Payment evidence joins the flow when Payments is enabled.', icon: Wallet, optional: true },
  { stage: 'Accounting', owner: 'Finance', detail: 'Finance records accounting truth when the Finance engine is enabled.', icon: Wallet, optional: true },
  { stage: 'Renewal', owner: 'Customer Success', detail: 'The ongoing relationship keeps its commercial and operational context.', icon: Target },
]

const rails = ['Documents', 'Approvals', 'Workflow', 'Automation', 'Governance']

export default function ConnectedJourney() {
  return (
    <Section
      id="connected-journey"
      eyebrow="One business event, many owners"
      title="Watch the work move without forcing every team into the same engine."
      lead="The point of Infrakinetic is not that every function becomes one giant module. Each engine keeps clear ownership, while the platform carries context and governed handoffs between them."
      className="border-b border-white/[0.06]"
    >
      <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-ink-800/45">
        <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4 md:px-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">Revenue journey</p>
            <p className="mt-1 text-sm text-white/58">From account to renewal, with optional engines joining only when enabled.</p>
          </div>
          <span className="hidden rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45 sm:inline-flex">
            Connected, not monolithic
          </span>
        </div>

        <div className="relative overflow-x-auto px-5 py-8 md:px-7">
          <div className="pointer-events-none absolute left-0 right-0 top-[6.4rem] hidden h-px bg-gradient-to-r from-transparent via-gold-300/25 to-transparent lg:block" aria-hidden />
          <div className="grid min-w-[980px] grid-cols-10 gap-3">
            {steps.map((step, index) => (
              <Reveal key={step.stage} variant="up" delay={index * 0.03}>
                <div className={`relative h-full rounded-2xl border p-4 ${step.optional ? 'border-dashed border-white/[0.12] bg-white/[0.012]' : 'border-white/[0.08] bg-white/[0.025]'}`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`grid h-8 w-8 place-items-center rounded-lg ${step.optional ? 'bg-white/[0.035] text-white/45' : 'bg-gold-300/[0.07] text-gold-300'}`}>
                      <step.icon size={15} />
                    </span>
                    {step.optional ? (
                      <span className="rounded-full border border-white/10 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/35">if enabled</span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/34">{step.owner}</p>
                  <h3 className="mt-1 text-sm font-semibold text-white">{step.stage}</h3>
                  <p className="mt-2 text-[11px] leading-relaxed text-white/42">{step.detail}</p>
                  {index < steps.length - 1 ? (
                    <ArrowRight size={13} className="absolute -right-2.5 top-[4.8rem] z-10 text-gold-300/45" />
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.07] bg-white/[0.012] px-5 py-5 md:px-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">The infrastructure underneath the journey</p>
              <p className="mt-1 text-sm text-white/48">These capabilities stay common even as the business engines change.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {rails.map((item) => (
                <span key={item} className="rounded-lg border border-violet-400/20 bg-violet-400/[0.05] px-3 py-1.5 text-[11px] font-medium text-violet-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {[
          ['Clear ownership', 'Sales remains Sales. Billing remains Billing. Finance remains Finance.'],
          ['Optional participation', 'If Payments or Finance is not enabled, Billing can still run cleanly.'],
          ['No context reset', 'The handoff keeps the originating customer, document, decision and event context.'],
        ].map(([title, body]) => (
          <div key={title} className="rounded-xl border border-white/[0.07] bg-white/[0.015] p-4">
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-white/45">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
