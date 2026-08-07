import { motion } from 'framer-motion'
import {
  Home,
  Users,
  Wallet,
  Target,
  ChartBar,
  Briefcase,
  Search,
  Bell,
  Check,
  TrendingUp,
} from '../ui/Icons'

/**
 * A realistic Infrakinetic app window rendered in HTML/CSS with 3D perspective.
 * This is what makes the page read as a *product* â€” visitors see the actual
 * platform, not abstract shapes.
 */

const navItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Target, label: 'CRM' },
  { icon: Users, label: 'HR' },
  { icon: Wallet, label: 'Payroll' },
  { icon: ChartBar, label: 'Finance' },
  { icon: Briefcase, label: 'Projects' },
]

const kpis = [
  { label: 'Pipeline value', value: '$2.4M', delta: '+12.4%', up: true },
  { label: 'Active deals', value: '148', delta: '+8', up: true },
  { label: 'Headcount', value: '62', delta: '+3 this mo', up: true },
]

const deals = [
  { name: 'Meridian Systems', stage: 'Proposal', stageColor: 'bg-violet-400/15 text-violet-300', value: '$86,000', owner: 'AR' },
  { name: 'Northwind Retail', stage: 'Negotiation', stageColor: 'bg-gold-400/15 text-gold-300', value: '$124,500', owner: 'PK' },
  { name: 'Cobalt Health', stage: 'Won', stageColor: 'bg-gold-400/15 text-gold-300', value: '$58,200', owner: 'SM' },
]

function AreaChart() {
  return (
    <svg viewBox="0 0 320 90" className="h-full w-full" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id="dm-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E6D3A3" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E6D3A3" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* gridlines */}
      {[22, 44, 66].map((y) => (
        <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}
      <path
        d="M0 72 C 28 68, 44 56, 70 58 S 116 66, 140 54 S 186 30, 212 34 S 262 24, 288 16 L 320 12 L 320 90 L 0 90 Z"
        fill="url(#dm-fill)"
      />
      <path
        d="M0 72 C 28 68, 44 56, 70 58 S 116 66, 140 54 S 186 30, 212 34 S 262 24, 288 16 L 320 12"
        fill="none"
        stroke="#E6D3A3"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* dashed target line */}
      <path d="M0 40 L 320 28" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="4 5" />
      <circle cx="288" cy="16" r="3.5" fill="#0A0A0A" stroke="#E6D3A3" strokeWidth="2" />
    </svg>
  )
}

export default function DashboardMock() {
  return (
    <div className="relative [perspective:1600px]">
      {/* Ambient glow behind the window */}
      <div className="absolute -inset-8 rounded-[2rem] bg-gold-500/10 blur-3xl" aria-hidden />

      <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-full lg:[transform:rotateX(6deg)_rotateY(-8deg)_rotateZ(1deg)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
        {/* â”€â”€ App window â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-800/90 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">
          {/* Title bar */}
          <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.02] px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-md bg-white/[0.04] px-3 py-1 text-[10px] text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
              app.infrakinetic.io/dashboard
            </div>
            <div className="flex items-center gap-3 text-white/30">
              <Search size={13} />
              <Bell size={13} />
              <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-gold-400 to-violet-400 text-[9px] font-bold text-ink-900">
                Z
              </span>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="hidden w-40 shrink-0 border-r border-white/[0.06] p-3 sm:block">
              <div className="mb-4 flex items-center gap-2 px-2">
                <span className="grid h-6 w-6 place-items-center rounded-lg bg-gradient-to-br from-gold-400 to-violet-400 text-[11px] font-bold text-ink-900">
                  I
                </span>
                <span className="text-xs font-semibold text-white">Infrakinetic</span>
              </div>
              <div className="space-y-0.5">
                {navItems.map(({ icon: Icon, label, active }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[11px] font-medium ${
                      active
                        ? 'bg-gold-400/10 text-gold-300'
                        : 'text-white/40'
                    }`}
                  >
                    <Icon size={13} />
                    {label}
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-white/[0.06] pt-3">
                <div className="rounded-lg bg-white/[0.03] p-2.5">
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-white/30">Modules</p>
                  <p className="mt-1 text-[10px] text-white/50">3 active Â· 6 available</p>
                  <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-gold-400 to-violet-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main panel */}
            <div className="min-w-0 flex-1 p-4">
              {/* Header */}
              <div className="mb-3.5 flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-semibold text-white">Overview</p>
                  <p className="text-[10px] text-white/35">Monday, 13 July</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md border border-white/10 px-2 py-1 text-[10px] text-white/40">
                    This quarter
                  </span>
                  <span className="rounded-md bg-gold-400/90 px-2 py-1 text-[10px] font-semibold text-ink-900">
                    + New
                  </span>
                </div>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-3 gap-2">
                {kpis.map((k) => (
                  <div key={k.label} className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
                    <p className="truncate text-[9px] font-medium uppercase tracking-wide text-white/35">
                      {k.label}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-white">{k.value}</p>
                    <p className="mt-0.5 flex items-center gap-1 text-[9px] font-medium text-gold-300">
                      <TrendingUp size={9} />
                      {k.delta}
                    </p>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="mt-2 rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-[10px] font-semibold text-white/70">Revenue</p>
                  <div className="flex items-center gap-3 text-[9px] text-white/35">
                    <span className="flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> Actual
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="h-px w-3 border-t border-dashed border-white/40" /> Target
                    </span>
                  </div>
                </div>
                <div className="h-[72px]">
                  <AreaChart />
                </div>
              </div>

              {/* Deals table */}
              <div className="mt-2 overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02]">
                {deals.map((d, i) => (
                  <div
                    key={d.name}
                    className={`flex items-center gap-2 px-3 py-2 ${i > 0 ? 'border-t border-white/[0.05]' : ''}`}
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/[0.06] text-[8px] font-semibold text-white/60">
                      {d.owner}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-[11px] font-medium text-white/80">
                      {d.name}
                    </span>
                    <span className={`hidden rounded-full px-2 py-0.5 text-[9px] font-medium sm:block ${d.stageColor}`}>
                      {d.stage}
                    </span>
                    <span className="text-[11px] font-semibold tabular-nums text-white/70">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* â”€â”€ Floating notification cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-4 -top-5 hidden md:block"
          style={{ transform: 'translateZ(60px)' }}
        >
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-ink-800/95 px-3.5 py-2.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-gold-400/15 text-gold-300">
              <Check size={13} />
            </span>
            <div>
              <p className="text-[11px] font-semibold text-white">Payroll completed</p>
              <p className="text-[9px] text-white/40">62 employees Â· 2 min ago</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          className="absolute -bottom-6 -left-5 hidden md:block"
          style={{ transform: 'translateZ(50px)' }}
        >
          <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-ink-800/95 px-3.5 py-2.5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.6)] backdrop-blur">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-400/15 text-violet-300">
              <Target size={13} />
            </span>
            <div>
              <p className="text-[11px] font-semibold text-white">New lead assigned</p>
              <p className="text-[9px] text-white/40">Meridian Systems â†’ Ananya</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
