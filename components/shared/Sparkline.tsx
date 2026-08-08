import React from 'react'

const TOKEN_COLORS: Record<string, string> = {
  'gold-300': '#E6D3A3',
  'gold-400': '#D4B88C',
  'gold-500': '#9A8F6A',
  'violet-300': '#A78BFA',
  'violet-400': '#8B5CF6',
  'violet-500': '#7C3AED',
  'white/40': 'rgba(255,255,255,0.4)',
  'white/60': 'rgba(255,255,255,0.6)',
}

const resolveColor = (color: string) => {
  if (color.startsWith('#') || color.startsWith('rgb') || color === 'currentColor') return color
  return TOKEN_COLORS[color] || '#E6D3A3'
}

interface SparklineProps {
  data: number[]
  color?: string
  width?: number
  height?: number
  strokeWidth?: number
  className?: string
  fill?: boolean
}

export default function Sparkline({
  data,
  color = 'gold-300',
  width = 64,
  height = 20,
  strokeWidth = 2,
  className = '',
  fill = true,
}: SparklineProps) {
  if (!data?.length) return null

  const resolvedColor = resolveColor(color)
  const gradientId = `sparkline-gradient-${color.replace(/[^a-zA-Z0-9]/g, '-')}`

  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1

  const points = data.map((value, i) => {
    const x = (i / (data.length - 1)) * width
    const y = height - ((value - min) / range) * height
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(' ')

  const fillPath = fill
    ? `${width},${height} 0,${height} 0,${height - ((data[0] - min) / range) * height}`
    : ''

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ width, height }}
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {fill && (
        <path
          d={`M${points} L${fillPath} Z`}
          fill={`url(#${gradientId})`}
          fillOpacity={0.3}
        />
      )}
      <path
        d={`M${points}`}
        fill="none"
        stroke={resolvedColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={resolvedColor} stopOpacity={0.4} />
          <stop offset="100%" stopColor={resolvedColor} stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}
