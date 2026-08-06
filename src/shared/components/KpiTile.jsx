import { motion } from 'framer-motion'

/**
 * KPI Tile — Icon + label + value + sub-line
 * Variants: neutral, positive, warning, danger
 */
const variantStyles = {
  neutral: 'border-white/10 bg-white/[0.02]',
  positive: 'border-gold-300/20 bg-gold-300/[0.04]',
  warning: 'border-violet-400/20 bg-violet-400/[0.04]',
  danger: 'border-red-400/20 bg-red-400/[0.04]',
}

const iconBgStyles = {
  neutral: 'bg-white/[0.06] text-white/60',
  positive: 'bg-gold-300/15 text-gold-300',
  warning: 'bg-violet-400/15 text-violet-300',
  danger: 'bg-red-400/15 text-red-300',
}

export default function KpiTile({
  icon: Icon,
  label,
  value,
  subLine,
  subIcon: SubIcon,
  variant = 'neutral',
  className = '',
}) {
  return (
    <motion.div
      className={`rounded-xl border p-4 transition-all ${variantStyles[variant]} ${className}`}
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
          <p className="text-[11px] font-semibold uppercase tracking-wide text-white/40 truncate">
            {label}
          </p>
          <p className="mt-1 text-xl font-semibold tracking-tight text-white">{value}</p>
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