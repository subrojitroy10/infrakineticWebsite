import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { Check, FileText, Shield, Target, Wallet, Zap } from '@/components/ui/Icons'

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
  { label: 'Commercial decision track', note: 'Customer, deal, document and authority remain connected.', steps: steps.slice(0, 5) },
  { label: 'Execution & value track', note: 'Optional engines join only when enabled.', steps: steps.slice(5) },
]

const rails = ['Documents', 'Approvals', 'Workflow', 'Automation', 'Governance']

function JourneyTrack({ label, note, items, startIndex }: { label: string; note: string; items: typeof steps; startIndex: number }) {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">{label}</p>
        <p className="text-xs text-white/35">{note}</p>
      </div>

      <div className="overflow-x-auto pb-3">
        <div className="relative flex min-w-[920px] items-start gap-6 lg:min-w-0 lg:gap-8">
          <span className="absolute left-4 right-4 top-[18px] h-px bg-white/[0.09]" aria-hidden />
          {items.map((step, index) => (
            <Reveal key={step.stage} variant="up" delay={(startIndex + index) * 0.025} className="relative min-w-0 flex-1">
              <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.1] bg-ink-800 text-white/50">
                <step.icon size={15} className={step.optional ? 'text-white/42' : 'text-gold-300'} />
              </div>
              <div className="mt-5 pr-3">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/30">{step.owner}</p>
                  {step.optional ? <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-review">optional</span> : null}
                </div>
                <h3 className="mt-1.5 text-base font-semibold leading-tight text-white">{step.stage}</h3>
                <p className="mt-2 max-w-[15rem] text-[12px] leading-[1.6] text-white/44">{step.detail}</p>
              </div>
            </Reveal>
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
      title="The work moves. Ownership stays clear."
      lead="Each engine keeps its own business responsibility while Infrakinetic carries the customer, document, decision and event context between them."
    >
      <div className="feature-frame mt-14 px-6 py-7 md:px-8 md:py-9">
        <div className="mb-9 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-300">Revenue journey</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/48">A representative path from account to renewal. Optional engines can participate without becoming prerequisites for the rest of the flow.</p>
          </div>
          <p className="max-w-xs text-xs leading-relaxed text-white/35 md:text-right">Connected does not mean monolithic. The platform carries context; engines keep ownership.</p>
        </div>

        <div className="space-y-12">
          <JourneyTrack label={tracks[0].label} note={tracks[0].note} items={tracks[0].steps} startIndex={0} />
          <JourneyTrack label={tracks[1].label} note={tracks[1].note} items={tracks[1].steps} startIndex={5} />
        </div>

        <div className="mt-10 grid gap-5 border-t border-white/[0.08] pt-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-300">Shared underneath the journey</p>
            <p className="mt-1.5 text-sm text-white/44">The common controls do not change when the enabled business engines do.</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 lg:justify-end">
            {rails.map((item) => <span key={item} className="text-[11px] font-medium text-violet-300">{item}</span>)}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {[
          ['Clear ownership', 'Sales remains Sales. Billing remains Billing. Finance remains Finance.'],
          ['Optional participation', 'If Payments or Finance is not enabled, Billing can still run cleanly.'],
          ['No context reset', 'The handoff keeps the originating customer, document, decision and event context.'],
        ].map(([title, body]) => (
          <div key={title}>
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="mt-2 text-xs leading-relaxed text-white/43">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
