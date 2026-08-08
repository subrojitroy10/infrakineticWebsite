import React from 'react'

interface TrendDeltaProps {
  value?: number | string | null
  positive?: boolean
  showIcon?: boolean
  className?: string
  prefix?: string
  suffix?: string
}

export default function TrendDelta({
  value,
  positive = true,
  showIcon = true,
  className = '',
  prefix = '',
  suffix = '',
}: TrendDeltaProps) {
  if (value === null || value === undefined || value === '') return null

  const isPositive = typeof value === 'number' ? value >= 0 : positive
  const absValue = typeof value === 'number' ? Math.abs(value) : value

  return (
    <span
      className={`inline-flex items-center gap-1 font-medium ${
        isPositive ? 'text-gold-300' : 'text-red-400'
      } ${className}`}
    >
      {showIcon && (
        <span className="text-[10px] leading-none" aria-hidden>
          {isPositive ? '▲' : '▼'}
        </span>
      )}
      <span>{prefix}{absValue}{suffix}</span>
    </span>
  )
}
