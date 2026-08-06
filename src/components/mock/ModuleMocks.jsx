import { Check, Clock } from '../ui/Icons'

/**
 * Compact product-UI mocks shown inside the Modules section â€”
 * a CRM pipeline board and an HR/payroll run table.
 */

function Window({ title, children }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-800/80 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl">
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="text-[10px] font-medium text-white/40">{title}</span>
      </div>
      <div className="p-4">{children}</div>
    </div>
  )
}

/* â”€â”€ CRM: pipeline kanban â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const columns = [
  {
    stage: 'Qualified',
    count: 12,
    cards: [
      { name: 'Atlas Freight', value: '$42,000', owner: 'AR', pct: 30 },
      { name: 'Juniper Labs', value: '$18,500', owner: 'SM', pct: 45 },
    ],
  },
  {
    stage: 'Proposal',
    count: 8,
    cards: [
      { name: 'Meridian Systems', value: '$86,000', owner: 'PK', pct: 60 },
      { name: 'Halcyon Media', value: '$27,300', owner: 'AR', pct: 55 },
    ],
  },
  {
    stage: 'Negotiation',
    count: 5,
    cards: [
      { name: 'Northwind Retail', value: '$124,500', owner: 'ZJ', pct: 80 },
      { name: 'Cobalt Health', value: '$58,200', owner: 'SM', pct: 75 },
    ],
  },
]

export function PipelineMock() {
  return (
    <Window title="Infrakinetic CRM â€” Pipeline">
      <div className="grid grid-cols-3 gap-2.5">
        {columns.map((col) => (
          <div key={col.stage} className="min-w-0">
            <div className="mb-2 flex items-center justify-between px-0.5">
              <span className="truncate text-[10px] font-semibold uppercase tracking-wide text-white/50">
                {col.stage}
              </span>
              <span className="rounded-full bg-white/[0.06] px-1.5 text-[9px] font-medium text-white/40">
                {col.count}
              </span>
            </div>
            <div className="space-y-2">
              {col.cards.map((c) => (
                <div key={c.name} className="rounded-lg border border-white/[0.07] bg-white/[0.03] p-2.5">
                  <p className="truncate text-[11px] font-medium text-white/85">{c.name}</p>
                  <p className="mt-0.5 text-[10px] font-semibold tabular-nums text-gold-300">{c.value}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-gold-400 to-violet-400"
                        style={{ width: `${c.pct}%` }}
                      />
                    </div>
                    <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-white/[0.08] p-1 text-[7px] font-semibold text-white/60">
                      {c.owner}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Window>
  )
}

/* â”€â”€ HR: payroll run table â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */

const people = [
  { name: 'Ananya Rao', role: 'Sales Lead', status: 'Paid', amount: '$4,850' },
  { name: 'Pranav Kulkarni', role: 'Engineer', status: 'Paid', amount: '$5,200' },
  { name: 'Sara Mathew', role: 'HR Manager', status: 'Processing', amount: '$4,300' },
  { name: 'Dev Iyer', role: 'Designer', status: 'Paid', amount: '$3,950' },
]

export function PayrollMock() {
  return (
    <Window title="Infrakinetic HR â€” Payroll run Â· July">
      <div className="mb-3 flex items-center justify-between rounded-lg border border-gold-400/20 bg-gold-400/[0.06] px-3 py-2.5">
        <div>
          <p className="text-[11px] font-semibold text-white">July payroll</p>
          <p className="text-[9px] text-white/40">62 employees Â· runs in 2 days</p>
        </div>
        <span className="rounded-md bg-gold-400/90 px-2.5 py-1 text-[10px] font-semibold text-ink-900">
          Approve run
        </span>
      </div>
      <div className="overflow-hidden rounded-lg border border-white/[0.06]">
        <div className="grid grid-cols-[1fr_auto_auto] gap-3 border-b border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-white/30">
          <span>Employee</span>
          <span>Status</span>
          <span className="text-right">Net pay</span>
        </div>
        {people.map((p, i) => (
          <div
            key={p.name}
            className={`grid grid-cols-[1fr_auto_auto] items-center gap-3 px-3 py-2 ${
              i > 0 ? 'border-t border-white/[0.05]' : ''
            }`}
          >
            <div className="flex min-w-0 items-center gap-2">
              <span className="grid h-5.5 w-5.5 shrink-0 place-items-center rounded-full bg-white/[0.07] p-1.5 text-[8px] font-semibold text-white/60">
                {p.name.split(' ').map((w) => w[0]).join('')}
              </span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-medium text-white/85">{p.name}</p>
                <p className="truncate text-[9px] text-white/35">{p.role}</p>
              </div>
            </div>
            <span
              className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-medium ${
                p.status === 'Paid' ? 'bg-gold-400/15 text-gold-300' : 'bg-violet-400/15 text-violet-300'
              }`}
            >
              {p.status === 'Paid' ? <Check size={9} /> : <Clock size={9} />}
              {p.status}
            </span>
            <span className="text-right text-[11px] font-semibold tabular-nums text-white/70">
              {p.amount}
            </span>
          </div>
        ))}
      </div>
    </Window>
  )
}
