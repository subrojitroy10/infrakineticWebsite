'use client'

import React from 'react'
import { motion } from 'framer-motion'

export type KpiVariant = 'neutral' | 'positive' | 'warning' | 'danger'

const variantStyles: Record<KpiVariant, string> = {
  neutral: 'border-white/10 bg-white/[0.02]',
  positive: 'border-success/20 bg-success/[0.04]',
  warning: 'border-warning/20 bg-warning/[0.04]',
  danger: 'border-danger/20 bg-danger/[0.04]',
}

const iconBgStyles: Record<KpiVariant, string> = {
  neutral: 'bg-white/[0.06] text-white/60',
  positive: 'bg-success/15 text-success',
  warning: 'bg-warning/15 text-warning',
  danger: 'bg-danger/15 text-danger',
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
    <motion.div
      className={`rounded-xl border p-4 transition-all ${variantStyles[variant]} ${className}`}
      style={style}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start gap-3">
        {Icon && (
          <div className={`shrink-0 grid h-9 w-9 place-items-center rounded-lg ${iconBgStyles[variant]}`}>
            <Icon size={18} />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/40 leading-snug">
            {label}
          </p>
          <p className="mt-1 break-words text-xl font-semibold tracking-tight text-white">{value}</p>
          {subLine && (
            <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-white/60">
              {SubIcon && <SubIcon size={12} />}
              {subLine}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
