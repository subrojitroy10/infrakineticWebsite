import React from 'react'

const NEUTRAL_BADGE = 'bg-white/5 text-white/50 border-white/10 light:bg-black/5 light:text-black/50 light:border-black/10'
const badge = (color: string, weight = 400) =>
  `bg-${color}-${weight}/15 text-${color}-300 border-${color}-${weight}/30 light:text-${color}-700`
const goldBadge = 'bg-gold-300/15 text-gold-300 border-gold-300/30'
// Semantic states (success/warning/danger/review) always route through the
// design-system tokens, never raw Tailwind hues — see color spec §13.
const successBadge = 'bg-success/15 text-success border-success/30'
const warningBadge = 'bg-warning/15 text-warning border-warning/30'
const dangerBadge = 'bg-danger/15 text-danger border-danger/30'

const familyStyles: Record<string, Record<string, string>> = {
  lifecycle: {
    prospect: NEUTRAL_BADGE,
    qualified: badge('violet'),
    in_pipeline: badge('blue'),
    committed: badge('cyan'),
    onboarding: badge('indigo'),
    active: goldBadge,
    at_risk: warningBadge,
    renewing: badge('violet'),
    expanding: badge('emerald'),
    churned: dangerBadge,
    won_back: badge('lime'),
    lost: badge('neutral'),
  },
  severity: {
    low: successBadge,
    medium: goldBadge,
    high: warningBadge,
    critical: dangerBadge,
  },
  outcome: {
    recovered: successBadge,
    unchanged: goldBadge,
    deteriorated: warningBadge,
    churned: dangerBadge,
    pending: NEUTRAL_BADGE,
  },
  ticket: {
    blocked: dangerBadge,
    open: badge('blue'),
    in_progress: badge('violet'),
    on_hold: goldBadge,
    waiting_on_customer: warningBadge,
    done: successBadge,
    cancelled: badge('neutral'),
  },
  invoice: {
    draft: NEUTRAL_BADGE,
    sent: badge('blue'),
    overdue: dangerBadge,
    paid: successBadge,
    written_off: badge('neutral'),
    in_review: badge('violet'),
    approved: goldBadge,
    partially_paid: warningBadge,
  },
  document: {
    draft: NEUTRAL_BADGE,
    in_review: badge('violet'),
    approved: goldBadge,
    signed: successBadge,
    archived: badge('neutral'),
  },
}

function humanize(value: string) {
  return value
    .split('_')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
}

interface StatusBadgeProps {
  value: string
  family?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  dot?: boolean
  className?: string
}

export default function StatusBadge({
  value,
  family = 'lifecycle',
  size = 'md',
  dot = false,
  className = '',
}: StatusBadgeProps) {
  const styles = familyStyles[family] || familyStyles.lifecycle
  const style = styles[value] || styles.prospect || 'bg-white/5 text-white/50 border-white/10'

  const sizeStyles = {
    xs: 'px-1.5 py-0.5 text-[9px]',
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-2.5 py-1 text-[11px]',
    lg: 'px-3 py-1.5 text-[12px]',
  }

  const dotSizes = {
    xs: 'h-1 w-1',
    sm: 'h-1.5 w-1.5',
    md: 'h-2 w-2',
    lg: 'h-2.5 w-2.5',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium ${style} ${sizeStyles[size]} ${className}`}
    >
      {dot && <span className={`${dotSizes[size]} rounded-full bg-current`} aria-hidden />}
      {humanize(value)}
    </span>
  )
}

interface StatusFilterRowProps {
  family?: string
  counts?: Record<string, number>
  active?: string
  onChange?: (key: string) => void
}

export function StatusFilterRow({ family = 'lifecycle', counts = {}, active, onChange }: StatusFilterRowProps) {
  const styles = familyStyles[family] || familyStyles.lifecycle
  const keys = Object.keys(styles)

  const activeShadows: Record<string, string> = {
    prospect: 'shadow-[0_0_0_1px_rgba(245,241,232,0.3)]',
    qualified: 'shadow-[0_0_0_1px_rgba(140,111,153,0.5)]',
    in_pipeline: 'shadow-[0_0_0_1px_rgba(139,185,231,0.5)]',
    committed: 'shadow-[0_0_0_1px_rgba(6,182,212,0.5)]',
    onboarding: 'shadow-[0_0_0_1px_rgba(99,102,241,0.5)]',
    active: 'shadow-[0_0_0_1px_rgba(216,181,106,0.5)]',
    at_risk: 'shadow-[0_0_0_1px_rgba(240,195,106,0.5)]',
    renewing: 'shadow-[0_0_0_1px_rgba(140,111,153,0.5)]',
    expanding: 'shadow-[0_0_0_1px_rgba(121,211,167,0.5)]',
    churned: 'shadow-[0_0_0_1px_rgba(242,140,148,0.5)]',
    won_back: 'shadow-[0_0_0_1px_rgba(132,204,22,0.5)]',
    lost: 'shadow-[0_0_0_1px_rgba(113,113,122,0.5)]',
    low: 'shadow-[0_0_0_1px_rgba(121,211,167,0.5)]',
    medium: 'shadow-[0_0_0_1px_rgba(216,181,106,0.5)]',
    high: 'shadow-[0_0_0_1px_rgba(240,195,106,0.5)]',
    critical: 'shadow-[0_0_0_1px_rgba(242,140,148,0.5)]',
    recovered: 'shadow-[0_0_0_1px_rgba(121,211,167,0.5)]',
    unchanged: 'shadow-[0_0_0_1px_rgba(216,181,106,0.5)]',
    deteriorated: 'shadow-[0_0_0_1px_rgba(240,195,106,0.5)]',
    pending: 'shadow-[0_0_0_1px_rgba(245,241,232,0.3)]',
    blocked: 'shadow-[0_0_0_1px_rgba(242,140,148,0.5)]',
    open: 'shadow-[0_0_0_1px_rgba(139,185,231,0.5)]',
    in_progress: 'shadow-[0_0_0_1px_rgba(140,111,153,0.5)]',
    on_hold: 'shadow-[0_0_0_1px_rgba(216,181,106,0.5)]',
    waiting_on_customer: 'shadow-[0_0_0_1px_rgba(240,195,106,0.5)]',
    done: 'shadow-[0_0_0_1px_rgba(121,211,167,0.5)]',
    cancelled: 'shadow-[0_0_0_1px_rgba(113,113,122,0.5)]',
    draft: 'shadow-[0_0_0_1px_rgba(245,241,232,0.3)]',
    sent: 'shadow-[0_0_0_1px_rgba(139,185,231,0.5)]',
    overdue: 'shadow-[0_0_0_1px_rgba(242,140,148,0.5)]',
    paid: 'shadow-[0_0_0_1px_rgba(121,211,167,0.5)]',
    written_off: 'shadow-[0_0_0_1px_rgba(113,113,122,0.5)]',
    in_review: 'shadow-[0_0_0_1px_rgba(140,111,153,0.5)]',
    approved: 'shadow-[0_0_0_1px_rgba(216,181,106,0.5)]',
    partially_paid: 'shadow-[0_0_0_1px_rgba(240,195,106,0.5)]',
    signed: 'shadow-[0_0_0_1px_rgba(121,211,167,0.5)]',
    archived: 'shadow-[0_0_0_1px_rgba(113,113,122,0.5)]',
  }

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={`${family} filters`}>
      {keys.map((key) => {
        const count = counts[key] ?? 0
        const isActive = active === key || (active === undefined && key === 'prospect')
        const activeShadow = activeShadows[key] || ''
        return (
          <button
            key={key}
            type="button"
            onClick={() => onChange?.(key)}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all ${
              isActive
                ? `${styles[key]} ${activeShadow}`
                : 'bg-white/5 text-white/50 border-white/10 hover:border-white/20 hover:bg-white/10'
            }`}
            aria-pressed={isActive}
          >
            {humanize(key)}
            {count > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/10 px-1.5 text-[10px] font-mono">
                {count}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
