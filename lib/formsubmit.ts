// FormSubmit.co — posts a form straight to an email address, no API key,
// no backend. The destination inbox must click the one-time confirmation
// link FormSubmit sends on its first-ever submission before mail actually
// starts flowing through.
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/admin@infrakinetic.in'
const NOTIFY_CC = 'subrojitroy@polynovea.in,raahul.thakur@polynovea.in,roopa.walekar@polynovea.in'

export interface LeadSubmission {
  name: string
  email: string
  company: string
  areas: string[]
  source: 'homepage' | 'briefing'
}

export async function submitLead(lead: LeadSubmission): Promise<void> {
  const sourceLabel = lead.source === 'briefing' ? 'Briefing page' : 'Homepage contact form'

  const res = await fetch(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: lead.name,
      email: lead.email,
      company: lead.company,
      areas: lead.areas.join(', ') || 'Not specified',
      source: sourceLabel,
      _subject: `Platform briefing request — ${lead.company}`,
      _cc: NOTIFY_CC,
      _template: 'table',
      _captcha: 'false',
    }),
  })

  if (!res.ok) {
    throw new Error('Submission failed')
  }
}
