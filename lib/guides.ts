// Registry for the /guides content hub — symptom-led, long-tail pages that
// intercept search queries the flagship pages (/, /platform, /migration)
// don't target directly. Adding an entry here is what makes a guide show up
// on the /guides index and in the sitemap; the page itself still lives at
// app/guides/<slug>/page.tsx.

export interface GuideMeta {
  slug: string
  eyebrow: string
  title: string
  dek: string
  category: 'Migration' | 'Architecture' | 'Data Integrity'
}

export const guides: GuideMeta[] = [
  {
    slug: 'salesforce-to-netsuite-sync-breaking',
    eyebrow: 'Migration & Integration',
    title:
      'Why Salesforce-to-NetSuite Sync Keeps Breaking (And How to Actually Fix It)',
    dek: 'Two-way sync between a CRM and an ERP fails for a small, recurring set of structural reasons, not bad luck. Here is what actually breaks it, and why governed migration avoids the failure mode entirely.',
    category: 'Migration',
  },
]
