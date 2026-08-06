import { motion } from 'framer-motion'

/**
 * EmptyState — Designed empty state with icon, explanation, and primary action
 * Not just "<p>No rows</p>"
 */
export default function EmptyState({
  icon,
  title = 'No data',
  description = 'No records found.',
  action,
  className = '',
  illustration,
}) {
  return (
    <motion.div
      className={`flex flex-col items-center text-center py-12 px-6 ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {illustration ? (
        <div className="mb-6">{illustration}</div>
      ) : icon && (
        <div className="mx-auto w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white/40">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-white/50 max-w-sm mb-6">{description}</p>
      {action && (
        <button type="button" onClick={action.onClick} className="btn-primary">
          {action.label}
          {action.icon}
        </button>
      )}
    </motion.div>
  )
}