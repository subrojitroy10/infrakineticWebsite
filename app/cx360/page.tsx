import type { Metadata } from 'next'
import CX360Client from './CX360Client'

export const metadata: Metadata = {
  title: 'CX360 — Portfolio Radar & Churn Intelligence',
  description:
    'Customer Lifecycle Intelligence module for Infrakinetic. Portfolio Radar server-ranked by risk, account shell with health score breakdown, measured interventions (+30d outcomes), action rail, and SLA case management.',
}

export default function CX360Page() {
  return <CX360Client />
}
