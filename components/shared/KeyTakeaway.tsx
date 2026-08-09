interface KeyTakeawayProps {
  children: React.ReactNode
  label?: string
}

/** Standalone-answer callout — the AEO signal search/AI engines look for at the end of a topic section. */
export default function KeyTakeaway({ children, label = 'Key takeaway' }: KeyTakeawayProps) {
  return (
    <p className="mt-6 rounded-xl border border-gold-300/25 bg-gold-300/[0.05] px-5 py-4 text-sm leading-relaxed text-white/70">
      <span className="font-semibold text-gold-300">{label}: </span>
      {children}
    </p>
  )
}
