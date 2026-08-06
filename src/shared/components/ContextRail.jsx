/**
 * ContextRail — Right-hand column of stacked cards
 * Used by Documents (categories, expiring soon), Opportunities (pipeline, top opps),
 * Custom Fields (groups), Pulse (breakdown, recommended actions)
 */
export default function ContextRail({ children, className = '', width = 'w-72' }) {
  return (
    <aside className={`${width} shrink-0 flex flex-col gap-4 ${className}`} aria-label="Contextual actions">
      {children}
    </aside>
  )
}

export function ContextCard({ title, children, icon: Icon, action, className = '' }) {
  return (
    <div className={`glass-card p-4 ${className}`}>
      {(title || Icon) && (
        <div className="flex items-center gap-2 mb-3">
          {Icon && <Icon size={16} className="text-gold-300" />}
          {title && <h4 className="text-sm font-semibold text-white">{title}</h4>}
        </div>
      )}
      <div>{children}</div>
      {action && (
        <div className="mt-3 pt-3 border-t border-white/10">
          {action}
        </div>
      )}
    </div>
  )
}