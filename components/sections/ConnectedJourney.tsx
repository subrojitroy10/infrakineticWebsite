import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { ArrowRight, Check, FileText, Shield, Target, Wallet, Zap } from '@/components/ui/Icons'

const steps = [
  { stage: 'Account', owner: 'Commercial', detail: 'One organization record anchors the relationship.', icon: Target },
  { stage: 'Opportunity', owner: 'Sales', detail: 'Pipeline, proposal context and deal state stay with Sales.', icon: Target },
  { stage: 'Agreement', owner: 'Documents', detail: 'The business document stays linked to the deal that created it.', icon: FileText },
  { stage: 'Decision', owner: 'Approvals', detail: 'Required authority is resolved before the next governed state.', icon: Shield },
  { stage: 'Deal won', owner: 'Sales', detail: 'The commercial event becomes the controlled handoff point.', icon: Check },
  { stage: 'Delivery', owner: 'Operations', detail: 'Work starts from the originating business event and keeps its context.', icon: Zap },
  { stage: 'Invoice', owner: 'Billing', detail: 'Billing turns approved commercial facts into an invoice lifecycle.', icon: FileText },
  { stage: 'Settlement', owner: 'Payments', detail: 'Payment evidence joins the flow only when Payments is enabled.', icon: Wallet, optional: true },
  { stage: 'Accounting', owner: 'Finance', detail: 'Finance records accounting truth only when the Finance engine is enabled.', icon: Wallet, optional: true },
  { stage: 'Renewal', owner: 'Customer Success', detail: 'The relationship keeps its commercial and operational context into renewal.', icon: Target },
]

const tracks = [
  {
    label: 'Commercial decision track',
    note: 'The customer, deal, document and authority stay connected.',
    steps: steps.slice(0, 5),
  },
  {
    label: 'Execution & value track',
    note: 'Optional engines join the flow only when the customer has enabled them.',
    steps: steps.slice(5),
  },
]

const rails = ['Documents', 'Approvals', 'Workflow', 'Automation', 'Governance']

function JourneyTrack({
  label,
  note,
  items,
  startIndex,
}: {
  label: string
  note: string
  items: typeof steps
  startIndex: number
}) {
  return (
    <div>
      <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/38">{label}</p>
        <p className="text-xs text-white/38">{note}</p>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="flex min-w-[980px] items-stretch lg:min-w-0">
          {items.map((step, index) => (
            <div key={step.stage} className="contents">
              <Reveal variant="up" delay={(startIndex + index) * 0.03} className="min-w-0 flex-1">
                <div
                  className={`relative h-full min-h-[220px] rounded-2xl border p-5 ${
                    step.optional
                      ? 'border-dashed border-white/[0.14] bg-white/[0.012]'
                      : 'border-white/[0.08] bg-white/[0.026]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${
                        step.optional
                          ? 'border border-white/[0.08] bg-white/[0.025] text-white/45'
                          : 'border border-gold-300/10 bg-gold-300/[0.07] text-gold-300'
                      }`}
                    >
                      <step.icon size={16} />
                    </span>
                    {step.optional ? (
                      <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-white/38">
                        Optional engine
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-6">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/36">{step.owner}</p>
                    <h3 className="mt-1.5 text-base font-semibold leading-tight text-white">{step.stage}</h3>
                    <p className="mt-3 max-w-[18rem] text-[12px] leading-[1.65] text-white/48">{step.detail}</p>
                  </div>
                </div>
              </Reveal>

              {index < items.length - 1 ? (
                <div className="flex w-9 shrink-0 items-center justify-center" aria-hidden>
                  <div className="relative flex w-full items-center">
                    <span className="h-px flex-1 bg-gradient-to-r from-gold-300/10 via-gold-300/35 to-gold-300/10" />
                    <ArrowRight size={14} className="-ml-1 shrink-0 text-gold-300/55" />
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

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
        <div className="flex flex-col gap-4 border-b border-white/[0.07] px-5 py-5 md:flex-row md:items-center md:justify-between md:px-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">Revenue journey</p>
            <p className="mt-1 text-sm text-white/58">From account to renewal, with optional engines joining only when enabled.</p>
          </div>
          <span className="w-fit rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
            Connected, not monolithic
          </span>
        </div>

        <div className="space-y-8 px-5 py-7 md:px-7 md:py-8">
          <JourneyTrack label={tracks[0].label} note={tracks[0].note} items={tracks[0].steps} startIndex={0} />

          <div className="flex items-center gap-4 px-1" aria-hidden>
            <span className="h-px flex-1 bg-white/[0.07]" />
            <span className="rounded-full border border-gold-300/15 bg-gold-300/[0.04] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-gold-300/70">
              governed handoff into execution
            </span>
            <span className="h-px flex-1 bg-white/[0.07]" />
          </div>

          <JourneyTrack label={tracks[1].label} note={tracks[1].note} items={tracks[1].steps} startIndex={5} />
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
