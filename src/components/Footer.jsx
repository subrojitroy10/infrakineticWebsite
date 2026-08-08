import { brand, nav } from '../data/content'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = '2026-08-08'
  
  return (
    <footer className="relative border-t border-white/10 bg-ink-900" itemScope itemType="https://schema.org/Organization">
      <meta itemProp="name" content="Infrakinetic" />
      <meta itemProp="url" content="https://www.infrakinetic.in/" />
      <link itemProp="logo" href="https://www.infrakinetic.in/logo.png" />
      <meta itemProp="description" content="Infrakinetic provides a unified business operating system connecting commercial, workforce, finance, governance, and reporting on one shared database." />
      <link itemProp="sameAs" href="https://linkedin.com/company/infrakinetic" />
      <link itemProp="sameAs" href="https://twitter.com/infrakinetic" />
      <link itemProp="sameAs" href="https://www.google.com/maps/place/Infrakinetic" />
      
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold-400 to-violet-400 text-lg font-bold tracking-tight text-ink-900">
                I
              </span>
              <span className="text-lg font-semibold tracking-tight text-white" itemProp="name">{brand.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
              Operating infrastructure for connected workflows, governed records, and enterprise
              visibility.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400/80">
              {brand.parent}
            </p>
            
            {/* NAP - Name, Address, Phone for Local SEO/GEO */}
            <div className="mt-6 pt-6 border-t border-white/10" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400/80">Contact</p>
              <address className="mt-2 not-italic text-sm text-white/55 space-y-1">
                <span itemProp="streetAddress">Plot 42, Sector 18, Gurugram</span>
                <span className="block"><span itemProp="addressLocality">Gurugram</span>, <span itemProp="addressRegion">Haryana</span> <span itemProp="postalCode">122015</span></span>
                <span itemProp="addressCountry" content="IN">India</span>
              </address>
              <a 
                href="tel:+911244000000" 
                className="mt-2 inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors"
                itemProp="telephone"
              >
                <span>+91 124 400 0000</span>
              </a>
              <a 
                href="mailto:hello@infrakinetic.io" 
                className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors"
                itemProp="email"
              >
                hello@infrakinetic.io
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Platform
            </h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-white/55 transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#contact" className="text-sm text-white/55 transition-colors hover:text-white">
                  Request a platform briefing
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@infrakinetic.io"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  hello@infrakinetic.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/35">
            &copy; {currentYear} Infrakinetic - A Polynovea Product. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/35">
            <a href="#" className="transition-colors hover:text-white/70">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white/70">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-white/70">
              Security
            </a>
            <span className="text-gold-400/60" itemProp="dateModified" content={lastUpdated}>
              Last updated: {new Date(lastUpdated).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
