import test from 'node:test'
import assert from 'node:assert/strict'
import {
  calculatePricing,
  createEstimateSnapshot,
  resolveOrganisationScale,
  type StandardPricingCalculation,
} from './calculate'
import { engineIds, type EngineId } from './config'

const base = {
  billingTerm: 'monthly' as const,
  migrationPackageId: null,
  launchPartnerMigrationCredit: false,
}

function quote(employeeCount: number, selectedEngineIds: EngineId[]) {
  return calculatePricing({ ...base, employeeCount, selectedEngineIds })
}

function standardQuote(
  employeeCount: number,
  selectedEngineIds: EngineId[],
): StandardPricingCalculation {
  const result = quote(employeeCount, selectedEngineIds)
  assert.equal(result.kind, 'standard')
  if (result.kind !== 'standard') throw new Error('Expected standard pricing')
  return result
}

function scaleBps(employeeCount: number) {
  const scale = resolveOrganisationScale(employeeCount)
  assert.equal(scale.kind, 'standard')
  if (scale.kind !== 'standard') throw new Error('Expected standard organisation scale')
  return scale.multiplierBpsNumerator / scale.multiplierBpsDenominator
}

const fullStack = [...engineIds] as EngineId[]

test('1 employee, Commercial only = 1.00× and ₹10,000 MRR', () => {
  const result = standardQuote(1, ['commercial'])
  assert.equal(scaleBps(1), 10_000)
  assert.equal(result.minimumPlatformCommitmentTriggered, true)
  assert.equal(result.monthlyRecurringListPaise, 1_000_000)
})

test('5 employees, Commercial only = 1.00× and ₹10,000 MRR', () => {
  const result = standardQuote(5, ['commercial'])
  assert.equal(scaleBps(5), 10_000)
  assert.equal(result.monthlyRecurringListPaise, 1_000_000)
})

test('6 employees, Commercial only = 1.02× and ₹10,200 MRR with no band cliff', () => {
  const result = standardQuote(6, ['commercial'])
  assert.equal(scaleBps(6), 10_200)
  assert.equal(result.monthlyRecurringListPaise, 1_020_000)
})

test('25 employees, Commercial only = 1.40× and ₹14,000 MRR', () => {
  const result = standardQuote(25, ['commercial'])
  assert.equal(scaleBps(25), 14_000)
  assert.equal(result.monthlyRecurringListPaise, 1_400_000)
})

test('26 employees interpolates slightly above 1.40× instead of jumping to 1.80×', () => {
  const result = standardQuote(26, ['commercial'])
  assert.equal(scaleBps(26), 14_160)
  assert.equal(result.monthlyRecurringListPaise, 1_416_000)
})

test('50 employees = 1.80×', () => {
  assert.equal(scaleBps(50), 18_000)
})

test('51 employees interpolates slightly above 1.80× instead of jumping to 2.40×', () => {
  const result = standardQuote(51, ['commercial'])
  assert.equal(scaleBps(51), 18_120)
  assert.equal(result.monthlyRecurringListPaise, 1_812_000)
})

test('100 employees, full stack = 2.40× and ₹1,08,000 MRR', () => {
  const result = standardQuote(100, fullStack)
  assert.equal(result.adjustedEngineValuePaise, 4_500_000)
  assert.equal(scaleBps(100), 24_000)
  assert.equal(result.monthlyRecurringListPaise, 10_800_000)
})

test('101 employees, full stack = 2.406× and ₹1,08,270 MRR', () => {
  const result = standardQuote(101, fullStack)
  assert.equal(scaleBps(101), 24_060)
  assert.equal(result.monthlyRecurringListPaise, 10_827_000)
  assert.notEqual(result.monthlyRecurringListPaise, 14_850_000)
})

test('150 employees, full stack = 2.70× and ₹1,21,500 MRR', () => {
  const result = standardQuote(150, fullStack)
  assert.equal(scaleBps(150), 27_000)
  assert.equal(result.monthlyRecurringListPaise, 12_150_000)
})

test('200 employees, full stack = 3.00× and ₹1,35,000 MRR', () => {
  const result = standardQuote(200, fullStack)
  assert.equal(scaleBps(200), 30_000)
  assert.equal(result.monthlyRecurringListPaise, 13_500_000)
})

test('250 employees, full stack = 3.30× and ₹1,48,500 MRR', () => {
  const result = standardQuote(250, fullStack)
  assert.equal(scaleBps(250), 33_000)
  assert.equal(result.monthlyRecurringListPaise, 14_850_000)
})

test('251 employees, full stack = exact 3.3048× and ₹1,48,716 MRR', () => {
  const result = standardQuote(251, fullStack)
  assert.equal(scaleBps(251), 33_048)
  assert.equal(result.monthlyRecurringListPaise, 14_871_600)
  assert.notEqual(result.monthlyRecurringListPaise, 20_250_000)
})

test('500 employees, full stack preserves 4.50× and ₹2,02,500 MRR', () => {
  const result = standardQuote(500, fullStack)
  assert.equal(scaleBps(500), 45_000)
  assert.equal(result.monthlyRecurringListPaise, 20_250_000)
})

test('501 employees returns Custom / Enterprise pricing instead of extrapolating', () => {
  const result = quote(501, fullStack)
  assert.equal(result.kind, 'custom')
  assert.equal(result.organisationScale.kind, 'custom')
  assert.equal(result.employeeCount, 501)
})

test('Revenue Core at 5 employees still respects the ₹10,000 minimum', () => {
  const result = standardQuote(5, ['commercial', 'sales'])
  assert.equal(result.rawEngineSubtotalPaise, 1_000_000)
  assert.equal(result.depthFactorBps, 9_800)
  assert.equal(result.adjustedEngineValuePaise, 980_000)
  assert.equal(result.monthlyRecurringListPaise, 1_000_000)
})

test('Commercial + Sales + Billing at 5 employees remains ₹15,040 MRR', () => {
  const result = standardQuote(5, ['commercial', 'sales', 'billing'])
  assert.equal(result.rawEngineSubtotalPaise, 1_600_000)
  assert.equal(result.depthFactorBps, 9_400)
  assert.equal(result.monthlyRecurringListPaise, 1_504_000)
})

test('annual prepay preserves list MRR and applies 12% only to annual contracted recurring', () => {
  const result = calculatePricing({
    employeeCount: 5,
    selectedEngineIds: ['commercial', 'sales', 'customerSuccess'],
    billingTerm: 'annual',
    migrationPackageId: null,
    launchPartnerMigrationCredit: false,
  })
  assert.equal(result.kind, 'standard')
  if (result.kind !== 'standard') throw new Error('Expected standard pricing')
  assert.equal(result.monthlyRecurringListPaise, 1_598_000)
  assert.equal(result.annualRecurringListPaise, 19_176_000)
  assert.equal(result.annualPrepayAdjustmentPaise, 2_301_120)
  assert.equal(result.contractedRecurringAnnualPaise, 16_874_880)
  assert.equal(result.effectiveMonthlyEquivalentPaise, 1_406_240)
})

test('migration credit offsets fixed migration value without touching recurring subscription', () => {
  const result = calculatePricing({
    employeeCount: 75,
    selectedEngineIds: ['finance', 'billing'],
    billingTerm: 'annual',
    migrationPackageId: 'standard',
    launchPartnerMigrationCredit: true,
  })
  assert.equal(result.kind, 'standard')
  if (result.kind !== 'standard') throw new Error('Expected standard pricing')
  assert.equal(result.migrationListPaise, 6_000_000)
  assert.equal(result.migrationCreditPaise, 6_000_000)
  assert.equal(result.netMigrationDuePaise, 0)
  assert.equal(result.firstYearContractedValuePaise, result.contractedRecurringAnnualPaise)
})

test('enterprise migration stays custom/SOW and does not fabricate a first-year total', () => {
  const result = calculatePricing({
    employeeCount: 75,
    selectedEngineIds: ['commercial', 'sales'],
    billingTerm: 'monthly',
    migrationPackageId: 'enterprise',
    launchPartnerMigrationCredit: false,
  })
  assert.equal(result.kind, 'standard')
  if (result.kind !== 'standard') throw new Error('Expected standard pricing')
  assert.equal(result.migrationListPaise, null)
  assert.equal(result.netMigrationDuePaise, null)
  assert.equal(result.firstYearContractedValuePaise, null)
})

test('snapshot remains serializable for standard and custom organisation sizes', () => {
  const standard = createEstimateSnapshot(
    {
      employeeCount: 101,
      selectedEngineIds: ['commercial', 'sales', 'finance', 'billing'],
      billingTerm: 'annual',
      migrationPackageId: 'light',
      launchPartnerMigrationCredit: false,
    },
    '2026-09-14T04:30:00.000Z',
  )
  const custom = createEstimateSnapshot(
    {
      employeeCount: 501,
      selectedEngineIds: ['commercial', 'sales'],
      billingTerm: 'monthly',
      migrationPackageId: null,
      launchPartnerMigrationCredit: false,
    },
    '2026-09-14T04:30:00.000Z',
  )

  assert.match(standard.referenceId, /^IK-20260914043000-/)
  assert.equal(standard.pricingModelVersion, 'IK-2026.01-DRAFT')
  assert.equal(custom.calculation.kind, 'custom')
  assert.doesNotThrow(() => JSON.stringify(standard))
  assert.doesNotThrow(() => JSON.stringify(custom))
})

test('zero-engine state is rejected instead of inventing a foundation-only SKU', () => {
  assert.throws(() => quote(5, []), /At least one paid engine must be selected/)
})

test('invalid employee counts below one are rejected', () => {
  assert.throws(() => quote(0, ['commercial']), /employeeCount must be an integer/)
})
