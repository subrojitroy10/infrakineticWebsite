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
  {
    slug: 'preventing-crm-data-drift',
    eyebrow: 'Data Integrity',
    title: 'How to Prevent CRM Data Drift (Without Adding a Cleanup Job)',
    dek: 'Most advice for CRM data drift is a maintenance routine: scheduled audits, dedup passes, freshness checks. That treats decay as inevitable. Here is the architectural difference between cleaning up drift and not producing it.',
    category: 'Data Integrity',
  },
  {
    slug: 'crm-accounting-sync-errors',
    eyebrow: 'Finance & Migration',
    title: 'How to Fix Data Sync Errors Between Your CRM and Accounting System',
    dek: 'A dropped sync between a CRM and a marketing tool is an inconvenience. A dropped sync between a CRM and accounting is a duplicated invoice or a mismatched write-off. Here is why financial data needs reconciliation, not just a sync fix.',
    category: 'Data Integrity',
  },
  {
    slug: 'unified-business-data-model',
    eyebrow: 'Architecture',
    title:
      'What a Unified Business Data Model Actually Means (Not Just a Buzzword)',
    dek: '"Unified data model" gets used to describe everything from a data warehouse to a CDP to an MDM tool. Here is the specific architectural difference between unifying data after the fact and never splitting it in the first place.',
    category: 'Architecture',
  },
  {
    slug: 'why-api-first-isnt-enough',
    eyebrow: 'Architecture',
    title: 'Why "API-First" Isn\'t the Fix for CRM-ERP Integration',
    dek: 'An API-first CRM makes it easier to build an integration. It does not make the integration correct. Here is the difference between an API you can connect to and a data model that does not need connecting.',
    category: 'Architecture',
  },
  {
    slug: 'erp-implementation-failure-rate',
    eyebrow: 'Migration Risk',
    title: 'Why ERP Implementations Fail (And Where Migration Fits In)',
    dek: 'Gartner puts ERP failure rates above 70%, and most postmortems blame leadership and planning, not software. Here is the narrower, honest claim: migration is where planning failure and technical failure compound each other.',
    category: 'Migration',
  },
  {
    slug: 'transactional-integrity-and-tenant-isolation',
    eyebrow: 'Architecture',
    title: 'Transactional Integrity and Tenant Isolation, Explained',
    dek: 'A shared business data model and a shared database schema are two different questions. Here is what ACID transactions actually guarantee, and how tenant isolation stays intact when engines share a data model.',
    category: 'Architecture',
  },
]
