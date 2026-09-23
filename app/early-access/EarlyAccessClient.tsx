'use client'

import Link from 'next/link'
import { FormEvent, useEffect, useMemo, useState } from 'react'

const ENGINE_OPTIONS = [
  'CRM & Sales',
  'Billing & Invoicing',
  'Payments',
  'Finance & Accounting',
  'HR',
  'Payroll',
  'Recruitment',
  'Customer Success',
  'Marketing',
  'Operations',
  'Migration',
  'Platform Infrastructure',
  'Full platform / not sure yet',
]

const COMPANY_SIZES = ['1–25', '26–50', '51–100', '101–250', '251–500', '501–1,000', '1,001+']
const TIMELINES = ['As soon as possible', 'Within 1–3 months', 'Within 3–6 months', '6+ months', 'Still evaluating']

interface Props {
  initialCount: number | null
}

export default function EarlyAccessClient({ initialCount }: Props) {
  const [count, setCount] = useState<number | null>(initialCount)
  const [selected, setSelected] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const selectionSummary = useMemo(
    () => (selected.length ? `${selected.length} ${selected.length === 1 ? 'area' : 'areas'} selected` : 'Select at least one area.'),
    [selected]
  )

  const refreshCount = async () => {
    try {
      const response = await fetch('/api/early-access/infrakinetic/count', { cache: 'no-store' })
      if (!response.ok) return
      const data = (await response.json()) as { count?: number | null }
      if (typeof data.count === 'number') setCount(data.count)
    } catch {
      // The form remains usable even if the public count cannot refresh.
    }
  }

  useEffect(() => {
    void refreshCount()
  }, [])

  const toggle = (engine: string) => {
    setSelected((current) =>
      current.includes(engine) ? current.filter((item) => item !== engine) : [...current, engine]
    )
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    if (selected.length === 0) {
      setError('Select at least one engine or operating area.')
      return
    }

    const formData = new FormData(event.currentTarget)
    setSubmitting(true)

    try {
      const response = await fetch('/api/early-access/infrakinetic/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          role: formData.get('role'),
          companySize: formData.get('companySize'),
          timeline: formData.get('timeline'),
          currentStack: formData.get('currentStack'),
          problemStatement: formData.get('problemStatement'),
          engines: selected,
        }),
      })

      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.error || 'We could not add you to Early Access.')

      setSubmitted(true)
      await refreshCount()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="pt-28 md:pt-36">
      <section className="pb-20 md:pb-28">
        <div className="container-page">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="eyebrow">Controlled Early Access</p>
              <h1 className="heading-serif mt-5 text-4xl leading-tight md:text-6xl">
                Join an Infrakinetic onboarding cohort.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
                Early Access is for organisations that want to be considered for deployment. We are onboarding deliberately rather than opening unrestricted signup.
              </p>

              <div className="mt-10 border-y border-white/10 py-7" aria-live="polite">
                <div className="flex items-end gap-4">
                  <strong className="heading-serif text-5xl text-gold-300 md:text-6xl">{count ?? '—'}</strong>
                  <div className="pb-1">
                    <p className="font-semibold text-white">organisations joined</p>
                    <p className="mt-1 text-sm text-white/45">Only explicit Early Access signups are counted.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-5 border-t border-white/10 pt-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">Need to understand the platform first?</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    A briefing is separate from Early Access and does not change the waitlist count.
                  </p>
                </div>
                <Link href="/briefing" className="inline-flex text-sm font-semibold text-gold-300 hover:text-gold-200">
                  Request a platform briefing →
                </Link>
              </div>
            </div>

            <div className="border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              {submitted ? (
                <div className="py-16">
                  <p className="eyebrow">Early Access</p>
                  <h2 className="heading-serif mt-4 text-3xl md:text-4xl">You&apos;re on the list.</h2>
                  <p className="mt-4 max-w-lg leading-relaxed text-white/60">
                    We&apos;ll review your operating requirements when forming upcoming cohorts. Joining the list does not lock you into a deployment.
                  </p>
                  <div className="mt-8 border-y border-white/10 py-5">
                    <strong className="text-3xl text-gold-300">{count ?? '—'}</strong>
                    <span className="ml-3 text-sm text-white/55">organisations have joined</span>
                  </div>
                  <Link href="/" className="btn-ghost mt-8 inline-flex">Back to Infrakinetic</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <p className="eyebrow">Join Early Access</p>
                    <h2 className="heading-serif mt-4 text-3xl">Tell us where you want to start.</h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/55">
                      We use this to understand fit, deployment readiness and which engines matter first.
                    </p>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm text-white/70">Full name
                      <input className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-gold-300/50" name="name" required autoComplete="name" />
                    </label>
                    <label className="block text-sm text-white/70">Work email
                      <input className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-gold-300/50" name="email" type="email" required autoComplete="email" />
                    </label>
                    <label className="block text-sm text-white/70">Company
                      <input className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-gold-300/50" name="company" required autoComplete="organization" />
                    </label>
                    <label className="block text-sm text-white/70">Your role
                      <input className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-gold-300/50" name="role" autoComplete="organization-title" />
                    </label>
                    <label className="block text-sm text-white/70">Company size
                      <select className="mt-2 w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-white outline-none focus:border-gold-300/50" name="companySize" defaultValue="" required>
                        <option value="" disabled>Select employee count</option>
                        {COMPANY_SIZES.map((size) => <option key={size} value={size}>{size}</option>)}
                      </select>
                    </label>
                    <label className="block text-sm text-white/70">Expected timeline
                      <select className="mt-2 w-full rounded-lg border border-white/10 bg-ink-900 px-4 py-3 text-white outline-none focus:border-gold-300/50" name="timeline" defaultValue="" required>
                        <option value="" disabled>Select a timeline</option>
                        {TIMELINES.map((timeline) => <option key={timeline} value={timeline}>{timeline}</option>)}
                      </select>
                    </label>
                  </div>

                  <fieldset>
                    <legend className="text-sm font-semibold text-white">Which engines or operating areas matter to you?</legend>
                    <p className="mt-1 text-xs text-white/45">{selectionSummary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {ENGINE_OPTIONS.map((engine) => {
                        const active = selected.includes(engine)
                        return (
                          <button
                            key={engine}
                            type="button"
                            aria-pressed={active}
                            onClick={() => toggle(engine)}
                            className={`rounded-md border px-3 py-2 text-xs transition-colors ${active ? 'border-gold-300/55 bg-gold-300/10 text-gold-200' : 'border-white/10 text-white/55 hover:border-white/25 hover:text-white/80'}`}
                          >
                            {engine}
                          </button>
                        )
                      })}
                    </div>
                  </fieldset>

                  <label className="block text-sm text-white/70">What are you using today?
                    <textarea className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-gold-300/50" name="currentStack" rows={3} placeholder="CRM, HRMS, accounting software, spreadsheets, custom systems…" />
                  </label>

                  <label className="block text-sm text-white/70">What problem are you trying to solve?
                    <textarea className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none focus:border-gold-300/50" name="problemStatement" rows={5} required placeholder="Describe the fragmentation, workflow, handoff or replacement problem you want us to understand." />
                  </label>

                  {error ? <p className="text-sm text-red-300">{error}</p> : null}

                  <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60">
                    {submitting ? 'Joining…' : 'Join Early Access'}
                  </button>
                  <p className="text-xs leading-relaxed text-white/40">
                    This form explicitly joins the Early Access list. Requesting a briefing or contacting Infrakinetic elsewhere does not add you to the list.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
