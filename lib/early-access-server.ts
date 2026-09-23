import { getSupabaseUrl, isSupabaseConfigured, supabaseHeaders } from '@/lib/supabase-rest'

export async function getInfrakineticEarlyAccessCount(): Promise<number | null> {
  if (!isSupabaseConfigured()) return null

  try {
    const response = await fetch(
      `${getSupabaseUrl()}/rest/v1/early_access_public_counts?product=eq.infrakinetic&select=count`,
      {
        headers: supabaseHeaders(),
        next: { revalidate: 60 },
      }
    )

    if (!response.ok) return null
    const rows = (await response.json()) as Array<{ count: number | string }>
    return Number(rows[0]?.count ?? 0)
  } catch {
    return null
  }
}
