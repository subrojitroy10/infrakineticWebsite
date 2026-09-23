import { NextRequest, NextResponse } from 'next/server'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const NOTIFICATION_ENDPOINT = 'https://formsubmit.co/ajax/admin@infrakinetic.in'
const NOTIFY_CC = 'subrojitroy@polynovea.in,raahul.thakur@polynovea.in,roopa.walekar@polynovea.in'

interface LeadPayload {
  name?: unknown
  email?: unknown
  company?: unknown
  areas?: unknown
  source?: unknown
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const ALLOWED_SOURCES = new Set(['homepage', 'briefing'])

const clean = (value: unknown, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : ''

function supabaseHeaders(extra: Record<string, string> = {}) {
  if (!SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is not configured')
  }

  return {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    'Content-Type': 'application/json',
    ...extra,
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({ error: 'Lead datastore is not configured.' }, { status: 503 })
    }

    const body = (await request.json()) as LeadPayload
    const name = clean(body.name, 140)
    const email = clean(body.email, 254).toLowerCase()
    const company = clean(body.company, 180)
    const sourceCandidate = clean(body.source, 40)
    const source = ALLOWED_SOURCES.has(sourceCandidate) ? sourceCandidate : 'homepage'
    const areas = Array.isArray(body.areas)
      ? body.areas
          .filter((item): item is string => typeof item === 'string')
          .map((item) => item.trim().slice(0, 120))
          .filter(Boolean)
          .slice(0, 20)
      : []

    if (!name || !email || !company) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 })
    }
    if (!EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid work email.' }, { status: 400 })
    }
    if (areas.length === 0) {
      return NextResponse.json({ error: 'Select at least one operating area.' }, { status: 400 })
    }

    const table = source === 'briefing'
      ? 'infrakinetic_briefing_requests'
      : 'infrakinetic_contact_submissions'

    const record = {
      full_name: name,
      email,
      email_normalized: email,
      company,
      areas,
      status: source === 'briefing' ? 'requested' : 'new',
      notification_status: 'pending',
      source_page: source === 'briefing' ? '/briefing' : '/',
      updated_at: new Date().toISOString(),
    }

    const insertResponse = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
      method: 'POST',
      headers: supabaseHeaders({ Prefer: 'return=representation' }),
      body: JSON.stringify(record),
      cache: 'no-store',
    })

    if (!insertResponse.ok) {
      console.error('Infrakinetic lead persistence failed:', await insertResponse.text())
      return NextResponse.json({ error: 'We could not save your request. Please try again.' }, { status: 503 })
    }

    const rows = (await insertResponse.json()) as Array<{ id: string }>
    const storedId = rows[0]?.id
    let notificationStatus: 'sent' | 'failed' = 'failed'

    try {
      const notifyResponse = await fetch(NOTIFICATION_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          areas: areas.join(', '),
          source: source === 'briefing' ? 'Briefing page' : 'Homepage contact form',
          _subject:
            source === 'briefing'
              ? `Platform briefing request - ${company}`
              : `Infrakinetic website enquiry - ${company}`,
          _cc: NOTIFY_CC,
          _template: 'table',
          _captcha: 'false',
        }),
        cache: 'no-store',
      })
      notificationStatus = notifyResponse.ok ? 'sent' : 'failed'
    } catch (notifyError) {
      console.error('Infrakinetic notification failed:', notifyError)
    }

    if (storedId) {
      const statusResponse = await fetch(
        `${SUPABASE_URL}/rest/v1/${table}?id=eq.${encodeURIComponent(storedId)}`,
        {
          method: 'PATCH',
          headers: supabaseHeaders(),
          body: JSON.stringify({
            notification_status: notificationStatus,
            updated_at: new Date().toISOString(),
          }),
          cache: 'no-store',
        }
      )
      if (!statusResponse.ok) {
        console.error('Infrakinetic notification-status update failed:', await statusResponse.text())
      }
    }

    return NextResponse.json(
      { success: true, stored: true, notified: notificationStatus === 'sent' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Infrakinetic lead submission failed:', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
