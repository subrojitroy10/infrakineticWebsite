import React from 'react'
import { ArrowRight } from '@/components/ui/Icons'
import type { WorkflowStep } from '@/lib/content'

interface ConnectedWorkflowProps {
  title?: string
  steps: WorkflowStep[]
  className?: string
}

/**
 * Horizontal step chain for a real end-to-end business journey
 * (e.g. Lead -> Opportunity -> ... -> Renewal). Scrolls horizontally on
 * narrow viewports instead of wrapping into an unreadable stack.
 */
export default function ConnectedWorkflow({ title, steps, className = '' }: ConnectedWorkflowProps) {
  return (
    <div className={className}>
      {title && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">{title}</p>
      )}
      <div className="flex items-stretch gap-2 overflow-x-auto pb-2">
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            <div className="min-w-[9rem] shrink-0 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <p className="text-sm font-medium text-white">{step.label}</p>
              {step.desc && <p className="mt-1 text-xs text-white/50">{step.desc}</p>}
            </div>
            {i < steps.length - 1 && (
              <ArrowRight size={16} className="my-auto shrink-0 text-white/25" aria-hidden />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
