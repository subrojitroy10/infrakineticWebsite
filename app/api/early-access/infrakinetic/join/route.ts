import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseUrl, isSupabaseConfigured, supabaseHeaders } from '@/lib/supabase-rest'

interface JoinPayload {
  name?: unknown
  email?: unknown
  company?: unknown
  role?: unknown
  companySize?: unknown
  timeline?: unknown
  currentStack?: unknown
  problemStatement?: unknown
  engines?: unknown
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const clean = (value: unknown, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : ''

const normalizeCompany = (value: string) =>
  value.trim().toLowerCase().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim()

export async function POST(request: NextRequest) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ error: 'Early Access is temporarily unavailable.' }, { status: 503 })
  }

  try {
    const body = (await request.json()) as JoinPayload
    const name = clean(body.name, 140)
    const email = clean(body.email, 254).toLowerCase()
    const company = clean(body.company, 180)
    const role = clean(body.role, 140)
    const companySize = clean(body.companySize, 60)
    const timeline = clean(body.timeline, 80)
    const currentStack = clean(body.currentStack, 2000)
    const problemStatement = clean(body.problemStatement, 4000)
    const engines = Array.isArray(body.engines)
      ? body.engines
          .filter((item): item is string => typeof item === 'string')
          .map((item) => item.trim().slice(0, 120))
          .filter(Boolean)
          .slice(0, 20)
      : []

    if (!name || !email || !company || !companySize || !timeline || !problemStatement) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 })
    }
    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid work email.' }, { status: 400 })
    }
    if (engines.length === 0) {
      return NextResponse.json({ error: 'Select at least one engine or operating area.' }, { status: 400 })
    }

    const baseUrl = getSupabaseUrl()
    const existingResponse = await fetch(
      `${baseUrl}/rest/v1/early_access_waitlist?product=eq.infrakinetic&email_normalized=eq.${encodeURIComponent(email)}&select=id,status`,
      { headers: supabaseHeaders(), cache: 'no-store' }
    )

    if (!existingResponse.ok) {
      console.error('Early Access dedupe failed:', await existingResponse.text())
      return NextResponse.json({ error: 'Early Access is temporarily unavailable.' }, { status: 503 })
    }

    const existingRows = (await existingResponse.json()) as Array<{ id: string; status: string }>
    const existing = existingRows[0]
    const fields = {
      full_name: name,
      email,
      email_normalized: email,
      company,
      company_normalized: normalizeCompany(company),
      role: role || null,
      company_size: companySize,
      timeline,
      engines,
      current_stack: currentStack || null,
      problem_statement: problemStatement,
      source_site: 'infrakinetic',
      explicit_opt_in: true,
      updated_at: new Date().toISOString(),
    }

    if (existing) {
      const updateResponse = await fetch(
        `${baseUrl}/rest/v1/early_access_waitlist?id=eq.${encodeURIComponent(existing.id)}`,
        {
          method: 'PATCH',
          headers: supabaseHeaders(),
          body: JSON.stringify(fields),
          cache: 'no-store',
        }
      )
      if (!updateResponse.ok) {
        console.error('Early Access update failed:', await updateResponse.text())
        return NextResponse.json({ error: 'We could not update your Early Access entry.' }, { status: 500 })
      }
      return NextResponse.json({ success: true, alreadyJoined: true }, { status: 200 })
    }

    const insertResponse = await fetch(`${baseUrl}/rest/v1/early_access_waitlist`, {
      method: 'POST',
      headers: supabaseHeaders(),
      body: JSON.stringify({ product: 'infrakinetic', ...fields, status: 'waitlisted' }),
      cache: 'no-store',
    })

    if (!insertResponse.ok) {
      console.error('Early Access insert failed:', await insertResponse.text())
      return NextResponse.json({ error: 'We could not add you to Early Access.' }, { status: 500 })
    }

    return NextResponse.json({ success: true, alreadyJoined: false }, { status: 201 })
  } catch (error) {
    console.error('Early Access join failed:', error)
    return NextResponse.json({ error: 'Early Access is temporarily unavailable.' }, { status: 503 })
  }
}
