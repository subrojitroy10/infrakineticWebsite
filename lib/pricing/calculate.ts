import {
  engineIds,
  pricingConfig,
  type BillingTerm,
  type EngineId,
  type MigrationPackageId,
} from './config'

const BPS = 10_000
const PAISE_PER_RUPEE = 100

export type PricingInput = {
  employeeCount: number
  selectedEngineIds: EngineId[]
  billingTerm: BillingTerm
  migrationPackageId: MigrationPackageId | null
  launchPartnerMigrationCredit: boolean
}

export type OrganisationScale = {
  kind: 'standard'
  lowerAnchorEmployees: number
  upperAnchorEmployees: number
  multiplierBpsNumerator: number
  multiplierBpsDenominator: number
}

export type CustomOrganisationScale = {
  kind: 'custom'
  reason: 'employee_count_above_self_service_max'
}

export type StandardPricingCalculation = {
  kind: 'standard'
  modelVersion: string
  employeeCount: number
  displayBand: (typeof pricingConfig.displayBands)[number]
  organisationScale: OrganisationScale
  selectedEngineIds: EngineId[]
  engineCount: number
  rawEngineSubtotalPaise: number
  depthFactorBps: number
  adjustedEngineValuePaise: number
  minimumPlatformCommitmentPaise: number
  minimumPlatformCommitmentTriggered: boolean
  baseSubscriptionPaise: number
  monthlyRecurringListPaise: number
  annualRecurringListPaise: number
  annualPrepayAdjustmentPaise: number
  contractedRecurringAnnualPaise: number
  effectiveMonthlyEquivalentPaise: number
  billingTerm: BillingTerm
  migrationPackageId: MigrationPackageId | null
  migrationListPaise: number | null
  migrationCreditPaise: number | null
  netMigrationDuePaise: number | null
  firstYearContractedValuePaise: number | null
  standardVariableUsagePaise: number
}

export type CustomPricingCalculation = {
  kind: 'custom'
  modelVersion: string
  employeeCount: number
  organisationScale: CustomOrganisationScale
  selectedEngineIds: EngineId[]
  engineCount: number
  billingTerm: BillingTerm
  migrationPackageId: MigrationPackageId | null
  standardVariableUsagePaise: number
}

export type PricingCalculation = StandardPricingCalculation | CustomPricingCalculation

export type EstimateSnapshot = {
  referenceId: string
  generatedAt: string
  pricingModelVersion: string
  pricingModelStatus: string
  currency: string
  input: PricingInput
  calculation: PricingCalculation
}

export function multiplyByBps(amountPaise: number, bps: number): number {
  assertSafeInteger(amountPaise, 'amountPaise')
  assertSafeInteger(bps, 'bps')
  return Math.floor((amountPaise * bps + BPS / 2) / BPS)
}

export function divideRoundHalfUp(amountPaise: number, divisor: number): number {
  assertSafeInteger(amountPaise, 'amountPaise')
  assertSafeInteger(divisor, 'divisor')
  if (divisor <= 0) throw new Error('divisor must be positive')
  return Math.floor((amountPaise + divisor / 2) / divisor)
}

export function resolveDisplayBand(employeeCount: number) {
  assertEmployeeCount(employeeCount)
  if (employeeCount > pricingConfig.selfServiceEmployeeMax) return null

  const band = pricingConfig.displayBands.find(
    (candidate) => employeeCount >= candidate.min && employeeCount <= candidate.max,
  )

  if (!band) throw new Error(`No display group configured for ${employeeCount} employees`)
  return band
}

export function resolveOrganisationScale(
  employeeCount: number,
): OrganisationScale | CustomOrganisationScale {
  assertEmployeeCount(employeeCount)

  if (employeeCount > pricingConfig.selfServiceEmployeeMax) {
    return {
      kind: 'custom',
      reason: 'employee_count_above_self_service_max',
    }
  }

  const anchors = pricingConfig.organisationScaleAnchors
  const first = anchors[0]

  if (employeeCount <= first.employees) {
    return {
      kind: 'standard',
      lowerAnchorEmployees: first.employees,
      upperAnchorEmployees: first.employees,
      multiplierBpsNumerator: first.multiplierBps,
      multiplierBpsDenominator: 1,
    }
  }

  const upperIndex = anchors.findIndex((anchor) => anchor.employees >= employeeCount)
  if (upperIndex <= 0) {
    throw new Error(`No organisation-scale anchors configured for ${employeeCount} employees`)
  }

  const lower = anchors[upperIndex - 1]
  const upper = anchors[upperIndex]

  if (employeeCount === upper.employees) {
    return {
      kind: 'standard',
      lowerAnchorEmployees: upper.employees,
      upperAnchorEmployees: upper.employees,
      multiplierBpsNumerator: upper.multiplierBps,
      multiplierBpsDenominator: 1,
    }
  }

  const span = upper.employees - lower.employees
  const progress = employeeCount - lower.employees
  const multiplierDeltaBps = upper.multiplierBps - lower.multiplierBps
  const numerator = lower.multiplierBps * span + progress * multiplierDeltaBps
  const divisor = gcd(numerator, span)

  return {
    kind: 'standard',
    lowerAnchorEmployees: lower.employees,
    upperAnchorEmployees: upper.employees,
    multiplierBpsNumerator: numerator / divisor,
    multiplierBpsDenominator: span / divisor,
  }
}

export function organisationScaleAsNumber(scale: OrganisationScale): number {
  return scale.multiplierBpsNumerator / scale.multiplierBpsDenominator / BPS
}

export function resolveDepthFactor(engineCount: number) {
  if (!Number.isInteger(engineCount) || engineCount < 1 || engineCount > engineIds.length) {
    throw new Error(`engineCount must be between 1 and ${engineIds.length}`)
  }

  const depth = pricingConfig.depthFactors.find(
    (candidate) => engineCount >= candidate.min && engineCount <= candidate.max,
  )

  if (!depth) throw new Error(`No depth factor configured for ${engineCount} engines`)
  return depth
}

export function calculatePricing(input: PricingInput): PricingCalculation {
  const selectedEngineIds = normaliseEngineIds(input.selectedEngineIds)
  if (selectedEngineIds.length === 0) {
    throw new Error('At least one paid engine must be selected to create an estimate')
  }

  const organisationScale = resolveOrganisationScale(input.employeeCount)

  if (organisationScale.kind === 'custom') {
    return {
      kind: 'custom',
      modelVersion: pricingConfig.version,
      employeeCount: input.employeeCount,
      organisationScale,
      selectedEngineIds,
      engineCount: selectedEngineIds.length,
      billingTerm: input.billingTerm,
      migrationPackageId: input.migrationPackageId,
      standardVariableUsagePaise: pricingConfig.standardVariableUsagePaise,
    }
  }

  const displayBand = resolveDisplayBand(input.employeeCount)
  if (!displayBand) throw new Error('Expected a display group for standard pricing')

  const depth = resolveDepthFactor(selectedEngineIds.length)
  const rawEngineSubtotalPaise = selectedEngineIds.reduce(
    (sum, engineId) => sum + pricingConfig.engines[engineId].monthlyBasePaise,
    0,
  )

  const adjustedEngineValuePaise = multiplyByBps(
    rawEngineSubtotalPaise,
    depth.factorBps,
  )

  const minimumPlatformCommitmentTriggered =
    adjustedEngineValuePaise < pricingConfig.minimumPlatformCommitmentPaise

  const baseSubscriptionPaise = Math.max(
    pricingConfig.minimumPlatformCommitmentPaise,
    adjustedEngineValuePaise,
  )

  const scaledRecurringPaise = multiplyByScaleAndRoundToNearestRupee(
    baseSubscriptionPaise,
    organisationScale,
  )

  const monthlyRecurringListPaise =
    scaledRecurringPaise + pricingConfig.standardVariableUsagePaise
  const annualRecurringListPaise = monthlyRecurringListPaise * 12
  const annualPrepayAdjustmentPaise =
    input.billingTerm === 'annual'
      ? multiplyByBps(annualRecurringListPaise, pricingConfig.annualPrepayDiscountBps)
      : 0
  const contractedRecurringAnnualPaise =
    annualRecurringListPaise - annualPrepayAdjustmentPaise
  const effectiveMonthlyEquivalentPaise = divideRoundHalfUp(
    contractedRecurringAnnualPaise,
    12,
  )

  const migration = input.migrationPackageId
    ? pricingConfig.migrationPackages[input.migrationPackageId]
    : null
  const migrationListPaise = migration ? migration.oneTimePaise : 0
  const migrationCreditPaise =
    input.launchPartnerMigrationCredit && migrationListPaise !== null
      ? migrationListPaise
      : migrationListPaise === null
        ? null
        : 0
  const netMigrationDuePaise =
    migrationListPaise === null || migrationCreditPaise === null
      ? null
      : migrationListPaise - migrationCreditPaise
  const firstYearContractedValuePaise =
    netMigrationDuePaise === null
      ? null
      : contractedRecurringAnnualPaise + netMigrationDuePaise

  return {
    kind: 'standard',
    modelVersion: pricingConfig.version,
    employeeCount: input.employeeCount,
    displayBand,
    organisationScale,
    selectedEngineIds,
    engineCount: selectedEngineIds.length,
    rawEngineSubtotalPaise,
    depthFactorBps: depth.factorBps,
    adjustedEngineValuePaise,
    minimumPlatformCommitmentPaise: pricingConfig.minimumPlatformCommitmentPaise,
    minimumPlatformCommitmentTriggered,
    baseSubscriptionPaise,
    monthlyRecurringListPaise,
    annualRecurringListPaise,
    annualPrepayAdjustmentPaise,
    contractedRecurringAnnualPaise,
    effectiveMonthlyEquivalentPaise,
    billingTerm: input.billingTerm,
    migrationPackageId: input.migrationPackageId,
    migrationListPaise,
    migrationCreditPaise,
    netMigrationDuePaise,
    firstYearContractedValuePaise,
    standardVariableUsagePaise: pricingConfig.standardVariableUsagePaise,
  }
}

export function createEstimateSnapshot(
  input: PricingInput,
  generatedAt = new Date().toISOString(),
): EstimateSnapshot {
  const calculation = calculatePricing(input)
  const identityPayload = JSON.stringify({
    version: pricingConfig.version,
    generatedAt,
    input: {
      ...input,
      selectedEngineIds: [...calculation.selectedEngineIds],
    },
  })

  return {
    referenceId: makeReferenceId(identityPayload, generatedAt),
    generatedAt,
    pricingModelVersion: pricingConfig.version,
    pricingModelStatus: pricingConfig.status,
    currency: pricingConfig.currency,
    input: {
      ...input,
      selectedEngineIds: [...calculation.selectedEngineIds],
    },
    calculation,
  }
}

function multiplyByScaleAndRoundToNearestRupee(
  amountPaise: number,
  scale: OrganisationScale,
): number {
  assertSafeInteger(amountPaise, 'amountPaise')
  const numerator = amountPaise * scale.multiplierBpsNumerator
  const denominator =
    scale.multiplierBpsDenominator * BPS * PAISE_PER_RUPEE

  assertSafeInteger(numerator, 'scaled pricing numerator')
  assertSafeInteger(denominator, 'scaled pricing denominator')

  const roundedRupees = Math.floor((numerator + denominator / 2) / denominator)
  return roundedRupees * PAISE_PER_RUPEE
}

function normaliseEngineIds(ids: EngineId[]): EngineId[] {
  const known = new Set(engineIds)
  const deduped = Array.from(new Set(ids))
  for (const id of deduped) {
    if (!known.has(id)) throw new Error(`Unknown engine id: ${id}`)
  }
  return engineIds.filter((id) => deduped.includes(id))
}

function assertEmployeeCount(employeeCount: number) {
  if (!Number.isInteger(employeeCount) || employeeCount < pricingConfig.minimumEmployeeCount) {
    throw new Error(
      `employeeCount must be an integer greater than or equal to ${pricingConfig.minimumEmployeeCount}`,
    )
  }
}

function gcd(a: number, b: number): number {
  let left = Math.abs(a)
  let right = Math.abs(b)
  while (right !== 0) {
    const next = left % right
    left = right
    right = next
  }
  return left || 1
}

function makeReferenceId(payload: string, generatedAt: string): string {
  let hash = 2166136261
  for (let index = 0; index < payload.length; index += 1) {
    hash ^= payload.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  const datePart = generatedAt.replace(/\D/g, '').slice(0, 14)
  return `IK-${datePart}-${(hash >>> 0).toString(36).toUpperCase().padStart(7, '0')}`
}

function assertSafeInteger(value: number, name: string) {
  if (!Number.isSafeInteger(value)) {
    throw new Error(`${name} must be a safe integer`)
  }
}
