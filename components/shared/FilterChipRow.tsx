import React from 'react'

export interface FilterItem {
  key: string
  label: string
  count?: number
  dotColor?: string
}

interface FilterChipRowProps {
  filters: FilterItem[]
  active?: string
  onChange?: (key: string) => void
  showCounts?: boolean
  variant?: 'default' | 'status'
  className?: string
}

export default function FilterChipRow({
  filters,
  active,
  onChange,
  showCounts = true,
  variant = 'default',
  className = '',
}: FilterChipRowProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      role="group"
      aria-label="Filters"
    >
      {filters.map((filter) => {
        const isActive = active === filter.key
        const count = filter.count ?? 0
        const dotColor = filter.dotColor

        return (
          <button
            key={filter.key}
            type="button"
            onClick={() => onChange?.(filter.key)}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
              variant === 'status' && dotColor
                ? `border-${dotColor}/30 bg-${dotColor}/10 text-${dotColor} hover:bg-${dotColor}/20`
                : isActive
                ? 'bg-gold-300/20 text-gold-300 border-gold-300/30 border'
                : 'bg-white/5 text-white/50 border-white/10 border hover:border-white/20 hover:bg-white/10'
            }`}
            aria-pressed={isActive}
          >
            {filter.label}
            {showCounts && count > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/10 px-1.5 text-[10px] font-mono">
                {count}
              </span>
            )}
            {variant === 'status' && dotColor && !showCounts && (
              <span className={`h-2 w-2 rounded-full bg-${dotColor}`} aria-hidden />
            )}
          </button>
        )
      })}
    </div>
  )
}
