import React from 'react'

export type KpiVariant = 'neutral' | 'positive' | 'warning' | 'danger'

const variantStyles: Record<KpiVariant, string> = {
  neutral: 'border-white/10',
  positive: 'border-success/30',
  warning: 'border-warning/30',
  danger: 'border-danger/30',
}

const iconStyles: Record<KpiVariant, string> = {
  neutral: 'text-white/55',
  positive: 'text-success',
  warning: 'text-warning',
  danger: 'text-danger',
}

export interface KpiTileProps {
  icon?: React.ComponentType<{ size?: number; className?: string }>
  label: string
  value: React.ReactNode
  subLine?: React.ReactNode
  subIcon?: React.ComponentType<{ size?: number; className?: string }>
  variant?: KpiVariant
  className?: string
  style?: React.CSSProperties
}

export default function KpiTile({
  icon: Icon,
  label,
  value,
  subLine,
  subIcon: SubIcon,
  variant = 'neutral',
  className = '',
  style,
}: KpiTileProps) {
  return (
    <div className={`border-t p-4 ${variantStyles[variant]} ${className}`} style={style}>
      <div className="flex items-start gap-3">
        {Icon && (
          <div className={`shrink-0 pt-0.5 ${iconStyles[variant]}`}>
            <Icon size={18} />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/38 leading-snug">
            {label}
          </p>
          <p className="mt-1 break-words text-xl font-semibold tracking-tight text-white">{value}</p>
          {subLine && (
            <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-white/55">
              {SubIcon && <SubIcon size={12} />}
              {subLine}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
