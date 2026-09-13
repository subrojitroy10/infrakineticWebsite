export const pricingConfig = {
  version: 'IK-2026.01-DRAFT',
  displayName: 'Draft Balanced Pricing Model — IK-2026.01',
  status: 'draft',
  currency: 'INR',
  effectiveFrom: null,
  minimumPlatformCommitmentPaise: 1_000_000,
  annualPrepayDiscountBps: 1_200,
  standardVariableUsagePaise: 0,
  minimumEmployeeCount: 1,
  selfServiceEmployeeMax: 500,
  engines: {
    commercial: { label: 'Commercial', monthlyBasePaise: 400_000 },
    sales: { label: 'Sales', monthlyBasePaise: 600_000 },
    customerSuccess: { label: 'Customer Success', monthlyBasePaise: 700_000 },
    finance: { label: 'Finance', monthlyBasePaise: 700_000 },
    billing: { label: 'Billing & Invoicing', monthlyBasePaise: 600_000 },
    marketing: { label: 'Marketing', monthlyBasePaise: 500_000 },
    marketingAgency: { label: 'Marketing Agency', monthlyBasePaise: 800_000 },
    hr: { label: 'HR', monthlyBasePaise: 400_000 },
    payroll: { label: 'Payroll', monthlyBasePaise: 300_000 },
    recruitment: { label: 'Recruitment', monthlyBasePaise: 500_000 },
    workforce: { label: 'Workforce', monthlyBasePaise: 500_000 },
  },
  organisationScaleAnchors: [
    { employees: 5, multiplierBps: 10_000 },
    { employees: 25, multiplierBps: 14_000 },
    { employees: 50, multiplierBps: 18_000 },
    { employees: 100, multiplierBps: 24_000 },
    { employees: 250, multiplierBps: 33_000 },
    { employees: 500, multiplierBps: 45_000 },
  ],
  displayBands: [
    { id: '1-5', label: '1–5 employees', min: 1, max: 5 },
    { id: '6-25', label: '6–25 employees', min: 6, max: 25 },
    { id: '26-50', label: '26–50 employees', min: 26, max: 50 },
    { id: '51-100', label: '51–100 employees', min: 51, max: 100 },
    { id: '101-250', label: '101–250 employees', min: 101, max: 250 },
    { id: '251-500', label: '251–500 employees', min: 251, max: 500 },
  ],
  depthFactors: [
    { min: 1, max: 1, factorBps: 10_000 },
    { min: 2, max: 2, factorBps: 9_800 },
    { min: 3, max: 4, factorBps: 9_400 },
    { min: 5, max: 7, factorBps: 8_800 },
    { min: 8, max: 10, factorBps: 8_200 },
    { min: 11, max: 11, factorBps: 7_500 },
  ],
  suites: {
    revenueCore: {
      label: 'Revenue Core',
      description: 'Commercial + Sales',
      engineIds: ['commercial', 'sales'],
    },
    revenueSuite: {
      label: 'Revenue Suite',
      description: 'Commercial + Sales + Customer Success',
      engineIds: ['commercial', 'sales', 'customerSuccess'],
    },
    financeSuite: {
      label: 'Finance Suite',
      description: 'Finance + Billing & Invoicing',
      engineIds: ['finance', 'billing'],
    },
    peopleSuite: {
      label: 'People Suite',
      description: 'HR + Payroll + Recruitment + Workforce',
      engineIds: ['hr', 'payroll', 'recruitment', 'workforce'],
    },
    agencySuite: {
      label: 'Agency Suite',
      description: 'Commercial + Marketing + Marketing Agency + Billing',
      engineIds: ['commercial', 'marketing', 'marketingAgency', 'billing'],
    },
  },
  migrationPackages: {
    light: { label: 'Light', oneTimePaise: 2_500_000 },
    standard: { label: 'Standard', oneTimePaise: 6_000_000 },
    complex: { label: 'Complex', oneTimePaise: 15_000_000 },
    enterprise: { label: 'Enterprise', oneTimePaise: null, note: 'Custom / SOW' },
  },
  platformFoundation: [
    'Governance',
    'Approvals',
    'Workflows',
    'Automation',
    'Documents',
    'Identity',
    'Permissions',
    'Tenancy',
    'Audit',
    'Events',
    'Shared organisational infrastructure',
  ],
} as const

export type EngineId = keyof typeof pricingConfig.engines
export type SuiteId = keyof typeof pricingConfig.suites
export type MigrationPackageId = keyof typeof pricingConfig.migrationPackages
export type BillingTerm = 'monthly' | 'annual'

export const engineIds = Object.keys(pricingConfig.engines) as EngineId[]
export const suiteIds = Object.keys(pricingConfig.suites) as SuiteId[]
export const migrationPackageIds = Object.keys(
  pricingConfig.migrationPackages,
) as MigrationPackageId[]
