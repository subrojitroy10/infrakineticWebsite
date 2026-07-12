import Reveal from './Reveal'

/**
 * Standard section shell: id anchor, vertical rhythm, optional eyebrow + title header.
 */
export default function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  className = '',
  align = 'left',
}) {
  const alignCls = align === 'center' ? 'mx-auto text-center items-center' : 'items-start'
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div className="container-page">
        {(eyebrow || title) && (
          <div className={`flex max-w-3xl flex-col gap-5 ${alignCls}`}>
            {eyebrow && (
              <Reveal variant="fade">
                <span className="eyebrow">{eyebrow}</span>
              </Reveal>
            )}
            {title && (
              <Reveal variant="up" delay={0.05}>
                <h2 className="heading-serif text-4xl leading-[1.1] md:text-5xl lg:text-[3.4rem]">
                  {title}
                </h2>
              </Reveal>
            )}
            {lead && (
              <Reveal variant="up" delay={0.12}>
                <p className="text-lg leading-relaxed text-white/60">{lead}</p>
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
