interface KeyTakeawayProps {
  children: React.ReactNode
  label?: string
}

/** Standalone-answer callout — the AEO signal search/AI engines look for at the end of a topic section. */
export default function KeyTakeaway({ children, label = 'Key takeaway' }: KeyTakeawayProps) {
  return (
    <p className="mt-6 rounded-xl border border-brand-bronze/30 bg-brand-bronze/[0.06] px-5 py-4 text-sm leading-relaxed text-white/70">
      <span className="font-semibold text-brand-bronze">{label}: </span>
      {children}
    </p>
  )
}
