'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  createEstimateSnapshot,
  calculatePricing,
  type PricingInput,
} from '@/lib/pricing/calculate'
import {
  engineIds,
  migrationPackageIds,
  pricingConfig,
  type BillingTerm,
  type EngineId,
  type MigrationPackageId,
  type SuiteId,
} from '@/lib/pricing/config'

const suiteEntries = Object.entries(pricingConfig.suites) as [
  SuiteId,
  (typeof pricingConfig.suites)[SuiteId],
][]

const migrationEntries = Object.entries(pricingConfig.migrationPackages) as [
  MigrationPackageId,
  (typeof pricingConfig.migrationPackages)[MigrationPackageId],
][]

const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

const minimumEmployees = pricingConfig.minimumEmployeeCount
const maximumSelfServiceEmployees = pricingConfig.selfServiceEmployeeMax
const annualDiscountPercent = pricingConfig.annualPrepayDiscountBps / 100

function formatMoney(amountPaise: number) {
  return inr.format(amountPaise / 100)
}

function formatOrganisationScale(scale: {
  multiplierBpsNumerator: number
  multiplierBpsDenominator: number
}) {
  const multiplier = scale.multiplierBpsNumerator / scale.multiplierBpsDenominator / 10_000
  const formatted = multiplier.toFixed(4).replace(/0+$/, '').replace(/\.$/, '')
  return `${formatted}×`
}

function formatFactor(bps: number) {
  return (bps / 10_000).toFixed(2)
}

function sameEngines(a: readonly EngineId[], b: readonly EngineId[]) {
  return a.length === b.length && a.every((id) => b.includes(id))
}

export default function PricingCalculatorClient() {
  const [employeeCount, setEmployeeCount] = useState<number>(
    pricingConfig.organisationScaleAnchors[0].employees,
  )
  const [selectedEngineIds, setSelectedEngineIds] = useState<EngineId[]>([
    ...pricingConfig.suites.revenueCore.engineIds,
  ])
  const [billingTerm, setBillingTerm] = useState<BillingTerm>('monthly')
  const [migrationPackageId, setMigrationPackageId] =
    useState<MigrationPackageId | null>(null)
  const [launchPartnerMigrationCredit, setLaunchPartnerMigrationCredit] =
    useState(false)
  const [queryHydrated, setQueryHydrated] = useState(false)
  const [generatedAt, setGeneratedAt] = useState('')
  const [copied, setCopied] = useState(false)

  const selectedKey = selectedEngineIds.join('.')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const count = Number.parseInt(params.get('n') ?? '', 10)
    if (Number.isInteger(count) && count >= minimumEmployees) {
      setEmployeeCount(count)
    }

    const moduleParam = params.get('m')
    if (moduleParam === 'none') {
      setSelectedEngineIds([])
    } else if (moduleParam) {
      const parsed = moduleParam
        .split('.')
        .filter((id): id is EngineId => engineIds.includes(id as EngineId))
      if (parsed.length > 0) setSelectedEngineIds(Array.from(new Set(parsed)))
    }

    if (params.get('t') === 'a') setBillingTerm('annual')

    const migrationParam = params.get('g')
    if (
      migrationParam &&
      migrationPackageIds.includes(migrationParam as MigrationPackageId)
    ) {
      const migrationId = migrationParam as MigrationPackageId
      setMigrationPackageId(migrationId)
      if (migrationId !== 'enterprise' && params.get('c') === '1') {
        setLaunchPartnerMigrationCredit(true)
      }
    }

    setQueryHydrated(true)
  }, [])

  useEffect(() => {
    if (!queryHydrated) return
    const params = new URLSearchParams()
    params.set('n', String(employeeCount))
    params.set('m', selectedEngineIds.length ? selectedKey : 'none')
    if (billingTerm === 'annual') params.set('t', 'a')
    if (migrationPackageId) params.set('g', migrationPackageId)
    if (
      launchPartnerMigrationCredit &&
      migrationPackageId &&
      migrationPackageId !== 'enterprise'
    ) {
      params.set('c', '1')
    }

    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}?${params.toString()}`,
    )
  }, [
    billingTerm,
    employeeCount,
    launchPartnerMigrationCredit,
    migrationPackageId,
    queryHydrated,
    selectedEngineIds.length,
    selectedKey,
  ])

  useEffect(() => {
    if (!queryHydrated) return
    setGeneratedAt(new Date().toISOString())
  }, [
    billingTerm,
    employeeCount,
    launchPartnerMigrationCredit,
    migrationPackageId,
    queryHydrated,
    selectedKey,
  ])

  const pricingInput = useMemo<PricingInput | null>(() => {
    if (selectedEngineIds.length === 0) return null
    return {
      employeeCount,
      selectedEngineIds,
      billingTerm,
      migrationPackageId,
      launchPartnerMigrationCredit,
    }
  }, [
    billingTerm,
    employeeCount,
    launchPartnerMigrationCredit,
    migrationPackageId,
    selectedEngineIds,
  ])

  const calculation = useMemo(
    () => (pricingInput ? calculatePricing(pricingInput) : null),
    [pricingInput],
  )

  const standardCalculation = calculation?.kind === 'standard' ? calculation : null
  const customPricingRequired = calculation?.kind === 'custom'

  const snapshot = useMemo(
    () =>
      pricingInput && generatedAt
        ? createEstimateSnapshot(pricingInput, generatedAt)
        : null,
    [generatedAt, pricingInput],
  )

  const activeSuiteId = useMemo(() => {
    const match = suiteEntries.find(([, suite]) =>
      sameEngines(selectedEngineIds, suite.engineIds),
    )
    return match?.[0] ?? null
  }, [selectedEngineIds])

  function selectSuite(suiteId: SuiteId) {
    setSelectedEngineIds([...pricingConfig.suites[suiteId].engineIds])
  }

  function toggleEngine(engineId: EngineId) {
    setSelectedEngineIds((current) =>
      current.includes(engineId)
        ? current.filter((id) => id !== engineId)
        : [...current, engineId],
    )
  }

  function chooseMigration(id: MigrationPackageId | null) {
    setMigrationPackageId(id)
    if (!id || id === 'enterprise') setLaunchPartnerMigrationCredit(false)
  }

  async function copyConfiguredLink() {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  const foundationText = pricingConfig.platformFoundation.join(', ')

  return (
    <main className="relative overflow-hidden pb-24 pt-28 md:pt-36">
      <div className="container-page">
        <header className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end">
          <div>
            <p className="eyebrow">Selective pricing workspace</p>
            <h1 className="heading-serif mt-6 max-w-4xl text-4xl leading-[1.05] md:text-6xl">
              Configure an Infrakinetic deployment.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
              Estimate recurring software and onboarding separately. Broader adoption improves platform economics; normal platform usage is included.
            </p>
          </div>
          <div className="border-l border-white/10 pl-5 text-xs leading-5 text-neutral-400">
            <p className="font-semibold uppercase tracking-[0.16em] text-gold-300">Pricing model</p>
            <p className="mt-3 text-sm font-medium text-white/78">{pricingConfig.displayName}</p>
            <p className="mt-1">Draft · selective use</p>
            <p className="mt-4">The calculator separates recurring software from one-time migration and onboarding.</p>
          </div>
        </header>

        <div className="mt-12 grid gap-8 xl:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.65fr)]">
          <div className="feature-frame divide-y divide-white/[0.08] overflow-hidden">
            <section className="px-6 py-8 md:px-8 md:py-10" aria-labelledby="organisation-size">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">
                    Step 1
                  </p>
                  <h2 id="organisation-size" className="mt-2 text-2xl font-semibold text-white">
                    How many people are in your organisation?
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-neutral-400">
                    Employee count is used to determine organisational scale. Infrakinetic is not licensed per seat.
                  </p>
                </div>
                <div className="border-l border-gold-300/30 pl-5 text-right">
                  <div className="text-xs uppercase tracking-[0.14em] text-neutral-400">Headcount</div>
                  <div className="mt-1 text-2xl font-semibold text-white">{employeeCount}</div>
                </div>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-[150px_1fr] md:items-center">
                <label className="text-sm font-medium text-neutral-300" htmlFor="employee-count">
                  Employees
                </label>
                <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-center">
                  <input
                    id="employee-count"
                    type="number"
                    min={minimumEmployees}
                    value={employeeCount}
                    onChange={(event) => {
                      const next = Number.parseInt(
                        event.target.value || String(minimumEmployees),
                        10,
                      )
                      setEmployeeCount(
                        Math.max(minimumEmployees, Number.isNaN(next) ? minimumEmployees : next),
                      )
                    }}
                    className="w-full rounded-md border border-white/12 bg-ink-900/35 px-4 py-3 text-white outline-none transition-colors focus:border-gold-300/60"
                  />
                  <input
                    aria-label="Employee count slider"
                    type="range"
                    min={minimumEmployees}
                    max={maximumSelfServiceEmployees}
                    value={Math.min(employeeCount, maximumSelfServiceEmployees)}
                    onChange={(event) => setEmployeeCount(Number(event.target.value))}
                    className="w-full accent-[rgb(var(--action-primary))]"
                  />
                </div>
              </div>

              {standardCalculation && (
                <p className="mt-4 text-sm text-neutral-400">
                  Organisation Scale:{' '}
                  <span className="font-medium text-white">
                    {formatOrganisationScale(standardCalculation.organisationScale)}
                  </span>
                  {' · '}display group {standardCalculation.displayBand.label}
                </p>
              )}
              {customPricingRequired && (
                <p className="mt-4 text-sm text-warning">
                  Organisations above {maximumSelfServiceEmployees} employees use Custom / Enterprise Pricing. The current curve is not extrapolated beyond its approved range.
                </p>
              )}
            </section>

            <section className="px-6 py-8 md:px-8 md:py-10" aria-labelledby="choose-needs">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">Step 2</p>
              <h2 id="choose-needs" className="mt-2 text-2xl font-semibold text-white">
                Choose what you need
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Suites are selection shortcuts only. Every estimate uses the same underlying pricing rules.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                {suiteEntries.map(([id, suite]) => {
                  const active = activeSuiteId === id
                  return (
                    <button
                      key={id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => selectSuite(id)}
                      className={`rounded-md border p-4 text-left transition-colors ${
                        active
                          ? 'border-gold-300/60 bg-gold-300/[0.08]'
                          : 'border-white/10 bg-white/[0.02] hover:border-violet-400/45 hover:bg-white/[0.04]'
                      }`}
                    >
                      <span className="block text-sm font-semibold text-white">{suite.label}</span>
                      <span className="mt-2 block text-xs leading-5 text-neutral-400">{suite.description}</span>
                    </button>
                  )
                })}
                <button
                  type="button"
                  aria-pressed={activeSuiteId === null}
                  onClick={() => setSelectedEngineIds([])}
                  className={`rounded-md border p-4 text-left transition-colors ${
                    activeSuiteId === null
                      ? 'border-violet-400/60 bg-violet-400/[0.08]'
                      : 'border-white/10 bg-white/[0.02] hover:border-violet-400/45 hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="block text-sm font-semibold text-white">Build Your Own</span>
                  <span className="mt-2 block text-xs leading-5 text-neutral-400">
                    Start clean, then select the paid engines that match the operating scope.
                  </span>
                </button>
              </div>

              <fieldset className="mt-8">
                <legend className="text-sm font-semibold text-neutral-300">Paid engines</legend>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {engineIds.map((engineId) => {
                    const engine = pricingConfig.engines[engineId]
                    const selected = selectedEngineIds.includes(engineId)
                    return (
                      <label
                        key={engineId}
                        className={`flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 transition-colors ${
                          selected
                            ? 'border-gold-300/45 bg-gold-300/[0.06]'
                            : 'border-white/10 bg-ink-800/50 hover:border-white/20'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selected}
                          onChange={() => toggleEngine(engineId)}
                          className="h-4 w-4 accent-[rgb(var(--action-primary))]"
                        />
                        <span className="text-sm text-white">{engine.label}</span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              {selectedEngineIds.length === 0 && (
                <div className="mt-5 rounded-xl border border-warning-border bg-warning-bg px-4 py-3 text-sm text-warning">
                  Select at least one paid engine to generate an estimate. The platform foundation is included with a deployment; it is not sold as a standalone zero-engine SKU.
                </div>
              )}
            </section>

            <section className="px-6 py-8 md:px-8 md:py-10" aria-labelledby="billing-term">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">Step 3</p>
              <h2 id="billing-term" className="mt-2 text-2xl font-semibold text-white">
                Commitment structure
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Annual prepayment receives the current {annualDiscountPercent}% adjustment. List MRR remains visible in either view.
              </p>

              <div className="mt-6 inline-flex rounded-md border border-white/10 bg-ink-800 p-1">
                <button
                  type="button"
                  aria-pressed={billingTerm === 'monthly'}
                  onClick={() => setBillingTerm('monthly')}
                  className={`rounded-sm px-5 py-2.5 text-sm font-semibold transition-colors ${
                    billingTerm === 'monthly'
                      ? 'bg-white text-ink-900'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  aria-pressed={billingTerm === 'annual'}
                  onClick={() => setBillingTerm('annual')}
                  className={`rounded-sm px-5 py-2.5 text-sm font-semibold transition-colors ${
                    billingTerm === 'annual'
                      ? 'bg-action text-action-text'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  Annual prepay · {annualDiscountPercent}%
                </button>
              </div>
            </section>

            <section className="px-6 py-8 md:px-8 md:py-10" aria-labelledby="onboarding">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">Step 4</p>
              <h2 id="onboarding" className="mt-2 text-2xl font-semibold text-white">
                Migration & data onboarding
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                One-time services are separated from recurring software and never counted as ARR.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                <button
                  type="button"
                  aria-pressed={migrationPackageId === null}
                  onClick={() => chooseMigration(null)}
                  className={`rounded-md border px-4 py-3 text-left transition-colors ${
                    migrationPackageId === null
                      ? 'border-gold-300/50 bg-gold-300/[0.07]'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                  }`}
                >
                  <span className="block text-sm font-semibold text-white">None</span>
                  <span className="mt-1 block text-xs text-neutral-400">No migration service</span>
                </button>
                {migrationEntries.map(([id, migration]) => (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={migrationPackageId === id}
                    onClick={() => chooseMigration(id)}
                    className={`rounded-md border px-4 py-3 text-left transition-colors ${
                      migrationPackageId === id
                        ? 'border-gold-300/50 bg-gold-300/[0.07]'
                        : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                    }`}
                  >
                    <span className="block text-sm font-semibold text-white">{migration.label}</span>
                    <span className="mt-1 block text-xs text-neutral-400">
                      {migration.oneTimePaise === null
                        ? 'Custom / SOW'
                        : formatMoney(migration.oneTimePaise)}
                    </span>
                  </button>
                ))}
              </div>

              <label
                className={`mt-5 flex items-start gap-3 rounded-md border px-4 py-4 ${
                  migrationPackageId && migrationPackageId !== 'enterprise'
                    ? 'cursor-pointer border-white/10 bg-white/[0.02]'
                    : 'cursor-not-allowed border-white/5 bg-white/[0.01] opacity-55'
                }`}
              >
                <input
                  type="checkbox"
                  checked={launchPartnerMigrationCredit}
                  disabled={!migrationPackageId || migrationPackageId === 'enterprise'}
                  onChange={(event) => setLaunchPartnerMigrationCredit(event.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-[rgb(var(--action-primary))]"
                />
                <span>
                  <span className="block text-sm font-semibold text-white">Launch Partner Migration Credit</span>
                  <span className="mt-1 block text-xs leading-5 text-neutral-400">
                    Preserves the recognised migration service value and applies an equal one-time credit to eligible fixed-price onboarding.
                  </span>
                </span>
              </label>
            </section>

            <section className="px-6 py-8 md:px-8 md:py-10" aria-labelledby="foundation">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">Included foundation</p>
              <h2 id="foundation" className="mt-2 text-2xl font-semibold text-white">
                Infrakinetic platform foundation included with every deployment.
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                {foundationText}. These shared capabilities are part of the operating substrate and are not separately priced SKUs.
              </p>
            </section>
          </div>

          <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
            <section className="feature-frame border-gold-300/20 p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">Estimated Infrakinetic subscription</p>

              {standardCalculation ? (
                <>
                  <div className="mt-5 flex items-end gap-2">
                    <span className="font-display text-4xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                      {formatMoney(standardCalculation.monthlyRecurringListPaise)}
                    </span>
                    <span className="pb-1.5 text-sm text-neutral-400">/ month</span>
                  </div>
                  <p className="mt-2 text-xs text-neutral-400">
                    Monthly recurring list price · taxes excluded
                  </p>

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                    <SummaryRow
                      label="Annual recurring list"
                      value={formatMoney(standardCalculation.annualRecurringListPaise)}
                    />
                    {billingTerm === 'annual' && (
                      <>
                        <SummaryRow
                          label="Annual prepayment adjustment"
                          value={`−${formatMoney(standardCalculation.annualPrepayAdjustmentPaise)}`}
                          accent
                        />
                        <SummaryRow
                          label="Annual commitment"
                          value={formatMoney(standardCalculation.contractedRecurringAnnualPaise)}
                          strong
                        />
                        <SummaryRow
                          label="Effective monthly equivalent"
                          value={formatMoney(standardCalculation.effectiveMonthlyEquivalentPaise)}
                        />
                      </>
                    )}
                  </div>

                  <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.025] p-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs uppercase tracking-[0.12em] text-neutral-400">Selected paid engines</span>
                      <span className="text-xs font-semibold text-white">{standardCalculation.engineCount}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {standardCalculation.selectedEngineIds.map((id) => (
                        <span
                          key={id}
                          className="rounded-sm border border-white/10 bg-ink-900 px-2.5 py-1 text-[11px] text-neutral-300"
                        >
                          {pricingConfig.engines[id].label}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <h3 className="text-sm font-semibold text-white">Estimate summary</h3>
                    <div className="mt-4 space-y-3">
                      <SummaryRow
                        label="Recurring subscription"
                        value={
                          billingTerm === 'annual'
                            ? `${formatMoney(standardCalculation.contractedRecurringAnnualPaise)} / year`
                            : `${formatMoney(standardCalculation.monthlyRecurringListPaise)} / month`
                        }
                        strong
                      />
                      <SummaryRow
                        label="One-time onboarding"
                        value={
                          standardCalculation.netMigrationDuePaise === null
                            ? 'Custom / SOW'
                            : formatMoney(standardCalculation.netMigrationDuePaise)
                        }
                      />
                      <SummaryRow label="Taxes" value="Charged separately" />
                      <div className="my-3 h-px bg-white/10" />
                      <SummaryRow
                        label="First-year contracted value"
                        value={
                          standardCalculation.firstYearContractedValuePaise === null
                            ? 'Pending migration SOW'
                            : formatMoney(standardCalculation.firstYearContractedValuePaise)
                        }
                        strong
                      />
                    </div>
                    <p className="mt-4 text-xs leading-5 text-neutral-400">
                      Taxes charged separately as applicable. Migration and other one-time services are excluded from ARR.
                    </p>
                  </div>
                </>
              ) : customPricingRequired ? (
                <div className="mt-6 rounded-lg border border-violet-400/35 bg-violet-400/[0.07] p-5">
                  <div className="text-xl font-semibold text-white">Custom / Enterprise Pricing</div>
                  <p className="mt-2 text-sm leading-6 text-neutral-300">
                    The approved progressive organisation-scale curve currently ends at {maximumSelfServiceEmployees} employees. For {employeeCount.toLocaleString('en-IN')} employees, the calculator deliberately does not extrapolate a price.
                  </p>
                  <p className="mt-3 text-xs leading-5 text-neutral-400">
                    Engine selection and estimate identity are preserved so the configuration can still be shared with the founding/commercial team.
                  </p>
                </div>
              ) : (
                <div className="mt-6 rounded-lg border border-warning-border bg-warning-bg p-5 text-sm leading-6 text-warning">
                  Select at least one paid engine to calculate a subscription estimate.
                </div>
              )}
            </section>

            <button
              type="button"
              onClick={copyConfiguredLink}
              disabled={!queryHydrated}
              className="btn-ghost w-full"
            >
              {copied ? 'Configured link copied' : 'Copy configured estimate link'}
            </button>

            {standardCalculation && (
              <details className="soft-panel group p-5">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white marker:hidden">
                  <span className="flex items-center justify-between gap-4">
                    Pricing Breakdown
                    <span className="text-xs font-normal text-neutral-400 transition group-open:rotate-180">⌄</span>
                  </span>
                </summary>
                <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  <DiagnosticRow label="Display group" value={standardCalculation.displayBand.label} />
                  <DiagnosticRow label="Organisation scale" value={formatOrganisationScale(standardCalculation.organisationScale)} />
                  <DiagnosticRow label="Engine subtotal" value={formatMoney(standardCalculation.rawEngineSubtotalPaise)} />
                  <DiagnosticRow label="Engine count" value={String(standardCalculation.engineCount)} />
                  <DiagnosticRow label="Engine-depth factor" value={formatFactor(standardCalculation.depthFactorBps)} />
                  <DiagnosticRow label="Adjusted engine value" value={formatMoney(standardCalculation.adjustedEngineValuePaise)} />
                  <DiagnosticRow label="Minimum commitment" value={formatMoney(standardCalculation.minimumPlatformCommitmentPaise)} />
                  <DiagnosticRow
                    label="Minimum triggered"
                    value={standardCalculation.minimumPlatformCommitmentTriggered ? 'Yes' : 'No'}
                  />
                  <DiagnosticRow label="Base subscription" value={formatMoney(standardCalculation.baseSubscriptionPaise)} />
                  <DiagnosticRow label="Monthly recurring list" value={formatMoney(standardCalculation.monthlyRecurringListPaise)} />
                  <DiagnosticRow label="Annual recurring list" value={formatMoney(standardCalculation.annualRecurringListPaise)} />
                  <DiagnosticRow
                    label="Annual-prepay adjustment"
                    value={formatMoney(standardCalculation.annualPrepayAdjustmentPaise)}
                  />
                  <DiagnosticRow
                    label="Contracted recurring annual"
                    value={formatMoney(standardCalculation.contractedRecurringAnnualPaise)}
                  />
                  <DiagnosticRow
                    label="Migration"
                    value={
                      standardCalculation.migrationListPaise === null
                        ? 'Custom / SOW'
                        : formatMoney(standardCalculation.migrationListPaise)
                    }
                  />
                  <DiagnosticRow
                    label="Migration credit"
                    value={
                      standardCalculation.migrationCreditPaise === null
                        ? 'Subject to SOW'
                        : standardCalculation.migrationCreditPaise > 0
                          ? `−${formatMoney(standardCalculation.migrationCreditPaise)}`
                          : formatMoney(0)
                    }
                  />
                  <DiagnosticRow
                    label="First-year total"
                    value={
                      standardCalculation.firstYearContractedValuePaise === null
                        ? 'Pending SOW'
                        : formatMoney(standardCalculation.firstYearContractedValuePaise)
                    }
                  />
                </div>
              </details>
            )}

            <section className="border-l border-white/12 pl-4 text-xs leading-5 text-neutral-400">
              <div className="font-semibold text-neutral-300">Estimate identity</div>
              <div className="mt-3 space-y-1.5">
                <p>Model: {pricingConfig.version}</p>
                <p>Reference: {snapshot?.referenceId ?? 'Generating…'}</p>
                <p>
                  Generated:{' '}
                  {snapshot
                    ? new Date(snapshot.generatedAt).toLocaleString('en-IN')
                    : 'Generating…'}
                </p>
              </div>
              <p className="mt-4">
                This is an estimate under a draft pricing model, not a final commercial quotation.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  )
}

function SummaryRow({
  label,
  value,
  strong = false,
  accent = false,
}: {
  label: string
  value: string
  strong?: boolean
  accent?: boolean
}) {
  return (
    <div className="flex items-start justify-between gap-5 text-sm">
      <span className="text-neutral-400">{label}</span>
      <span
        className={`text-right ${
          accent ? 'text-gold-300' : strong ? 'font-semibold text-white' : 'text-neutral-300'
        }`}
      >
        {value}
      </span>
    </div>
  )
}

function DiagnosticRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 text-xs">
      <span className="text-neutral-400">{label}</span>
      <span className="text-right font-medium text-neutral-300">{value}</span>
    </div>
  )
}
