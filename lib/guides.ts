import { longTailGuides } from '@/lib/longTailGuides'

export interface GuideMeta {
  slug: string
  eyebrow: string
  title: string
  dek: string
  category: string
}

const staticGuides: GuideMeta[] = [
  {
    slug: 'why-crm-erp-sync-breaks',
    eyebrow: 'Migration & Integration',
    title: 'Why CRM-to-ERP Sync Keeps Breaking (And What Actually Fixes It)',
    dek: 'Two-way sync between CRM and ERP systems fails for recurring structural reasons: competing ownership, mapping drift, retries, and missing reconciliation. Here is how to design the handoff differently.',
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
    dek: 'A dropped sync between CRM and accounting can become a duplicated invoice or mismatched write-off. Here is why financial data needs reconciliation, not just a faster sync.',
    category: 'Data Integrity',
  },
  {
    slug: 'crm-finance-integration-without-duplicates',
    eyebrow: 'Finance & Integration',
    title: 'How to Connect CRM and Finance Without Duplicate Customers or Invoices',
    dek: 'CRM and finance systems often identify the same customer differently. The result is duplicate accounts, invoices, and broken revenue history. Here is the identity and reconciliation model that prevents it.',
    category: 'Data Integrity',
  },
  {
    slug: 'unified-business-data-model',
    eyebrow: 'Architecture',
    title: 'What a Unified Business Data Model Actually Means (Not Just a Buzzword)',
    dek: '“Unified data model” gets used to describe everything from a data warehouse to master-data tooling. Here is the difference between unifying data after the fact and designing operating records to share context from the beginning.',
    category: 'Architecture',
  },
  {
    slug: 'why-api-first-isnt-enough',
    eyebrow: 'Architecture',
    title: 'Why “API-First” Is Not the Fix for CRM-ERP Integration',
    dek: 'An API-first system makes an integration easier to build. It does not decide record ownership, preserve identity, reconcile financial totals, or stop drift. Those are architecture problems.',
    category: 'Architecture',
  },
  {
    slug: 'erp-implementation-failure-rate',
    eyebrow: 'Migration Risk',
    title: 'Why ERP Implementations Fail (And Where Migration Fits In)',
    dek: 'ERP implementation failures rarely come from one technical defect. Migration is where planning problems, ownership ambiguity, data quality, and cutover risk compound each other.',
    category: 'Migration',
  },
  {
    slug: 'transactional-integrity-and-tenant-isolation',
    eyebrow: 'Architecture',
    title: 'Transactional Integrity and Tenant Isolation, Explained',
    dek: 'A shared business data model and a shared database schema are two different questions. Here is what ACID transactions guarantee, and how tenant isolation remains explicit when engines share an operating foundation.',
    category: 'Architecture',
  },
  {
    slug: 'hidden-cost-of-integration-middleware',
    eyebrow: 'Architecture',
    title: 'The Hidden Cost of CRM-ERP Integration Middleware',
    dek: 'The license cost is visible. Connector maintenance, duplicate data, exception handling, and admin time often are not. Here is how integration overhead compounds as the stack grows.',
    category: 'Architecture',
  },
  {
    slug: 'outgrowing-disconnected-business-software',
    eyebrow: 'Business Systems',
    title: 'What to Do When Disconnected Business Software Stops Scaling',
    dek: 'Growing companies often upgrade CRM, finance, HR, and workflow tools one silo at a time. That can preserve the same handoff problem at a larger scale. Here is a different way to evaluate the operating stack.',
    category: 'Architecture',
  },
]

export const guides: GuideMeta[] = [
  ...staticGuides,
  ...longTailGuides.map((guide) => ({
    slug: guide.slug,
    eyebrow: guide.eyebrow,
    title: guide.title,
    dek: guide.dek,
    category: guide.category,
  })),
]
