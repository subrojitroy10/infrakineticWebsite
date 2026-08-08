import type { Metadata } from 'next'
import PlatformIntelligenceClient from './PlatformIntelligenceClient'

export const metadata: Metadata = {
  title: 'Platform Intelligence — Calibrated Churn & Signal Framework',
  description:
    'Every prediction shows its provenance: mode, confidence interval, sample size. Three-tier model degrades truthfully: Heuristic → Statistical → Learned. SHAP explanations in business language.',
}

export default function PlatformIntelligencePage() {
  return <PlatformIntelligenceClient />
}
