import React from 'react'

interface ContextRailProps {
  children: React.ReactNode
  className?: string
  width?: string
}

export default function ContextRail({ children, className = '', width = 'w-72' }: ContextRailProps) {
  return (
    <aside className={`${width} shrink-0 flex flex-col gap-4 ${className}`} aria-label="Contextual actions">
      {children}
    </aside>
  )
}

interface ContextCardProps {
  title?: string
  children?: React.ReactNode
  icon?: React.ComponentType<{ size?: number; className?: string }>
  action?: React.ReactNode
  className?: string
}

export function ContextCard({ title, children, icon: Icon, action, className = '' }: ContextCardProps) {
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
