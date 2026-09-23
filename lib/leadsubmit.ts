export interface LeadSubmission {
  name: string
  email: string
  company: string
  areas: string[]
  source: 'homepage' | 'briefing'
}

export async function submitLead(lead: LeadSubmission): Promise<void> {
  const response = await fetch('/api/leads', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  })

  if (!response.ok) {
    const body = await response.json().catch(() => null)
    throw new Error(body?.error || 'Submission failed')
  }
}
