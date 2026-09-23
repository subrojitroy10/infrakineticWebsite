import { NextResponse } from 'next/server'
import { getSupabaseUrl, isSupabaseConfigured, supabaseHeaders } from '@/lib/supabase-rest'

export const dynamic = 'force-dynamic'

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({ count: null }, { status: 200 })
  }

  try {
    const response = await fetch(
      `${getSupabaseUrl()}/rest/v1/early_access_public_counts?product=eq.infrakinetic&select=count`,
      {
        headers: supabaseHeaders(),
        cache: 'no-store',
      }
    )

    if (!response.ok) {
      console.error('Early Access count failed:', await response.text())
      return NextResponse.json({ count: null }, { status: 200 })
    }

    const rows = (await response.json()) as Array<{ count: number | string }>
    return NextResponse.json({ count: Number(rows[0]?.count ?? 0) }, { status: 200 })
  } catch (error) {
    console.error('Early Access count failed:', error)
    return NextResponse.json({ count: null }, { status: 200 })
  }
}
