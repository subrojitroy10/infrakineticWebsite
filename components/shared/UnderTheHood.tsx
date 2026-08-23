import React from 'react'

interface UnderTheHoodProps {
  label?: string
  children: React.ReactNode
  className?: string
}

/**
 * Collapsed-by-default technical disclosure. Uses native <details> so it is
 * keyboard-operable and in the accessibility tree without extra JS state.
 */
export default function UnderTheHood({ label = 'Under the hood', children, className = '' }: UnderTheHoodProps) {
  return (
    <details className={`group mt-6 rounded-xl border border-white/10 bg-white/[0.02] ${className}`}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-3.5 text-sm font-medium text-white/70 marker:content-none">
        {label}
        <span className="text-white/40 transition-transform group-open:rotate-180">⌄</span>
      </summary>
      <div className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-white/60">
        {children}
      </div>
    </details>
  )
}
