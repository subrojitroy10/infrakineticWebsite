import Section from '@/components/ui/Section'
import Reveal from '@/components/ui/Reveal'
import { engineeringProof } from '@/lib/content'

export default function EngineeringProof() {
  return (
    <Section
      id="engineering-proof"
      eyebrow={engineeringProof.eyebrow}
      title={engineeringProof.title}
      lead={engineeringProof.lead}
      className="bg-ink-800/14"
    >
      <div className="mt-16 grid gap-x-16 gap-y-0 lg:grid-cols-[.92fr_1.08fr] xl:gap-x-24">
        <div>
          {engineeringProof.items.slice(0, 3).map((item, index) => (
            <Reveal key={item.title} variant="up" delay={index * 0.04}>
              <article className="grid grid-cols-[42px_1fr] gap-4 border-t border-white/[0.09] py-7">
                <span className="font-display text-sm text-gold-300/55">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/62">{item.outcome}</p>
                  <p className="mt-2 text-xs leading-relaxed text-white/40">{item.mechanism}</p>
                  {item.detail ? <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-gold-300">{item.detail}</p> : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="lg:mt-16">
          {engineeringProof.items.slice(3).map((item, index) => (
            <Reveal key={item.title} variant="up" delay={(index + 3) * 0.04}>
              <article className="grid grid-cols-[42px_1fr] gap-4 border-t border-white/[0.09] py-7">
                <span className="font-display text-sm text-violet-300/55">0{index + 4}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/62">{item.outcome}</p>
                  <p className="mt-2 text-xs leading-relaxed text-white/40">{item.mechanism}</p>
                  {item.detail ? <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.14em] text-violet-300">{item.detail}</p> : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
