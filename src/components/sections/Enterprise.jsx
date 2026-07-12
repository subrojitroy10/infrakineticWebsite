import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import { enterprise } from '../../data/content'

const icons = ['🛡️', '🔑', '☁️', '🧩']

export default function Enterprise() {
  return (
    <section className="relative overflow-hidden">
      {/* Faint grid backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-900 to-transparent" />

      <Section id="enterprise" eyebrow={enterprise.eyebrow} title={enterprise.title}>
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {enterprise.cards.map((c, i) => (
            <Reveal key={c.title} variant="up" delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-teal-400/40">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-teal-400/0 blur-2xl transition-all duration-500 group-hover:bg-teal-400/15" />
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-teal-400/20 bg-teal-400/10 text-2xl">
                  {icons[i]}
                </div>
                <h3 className="heading-serif text-xl">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </section>
  )
}
