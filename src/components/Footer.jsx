import { brand, nav } from '../data/content'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-900">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-400 font-serif text-lg font-bold text-ink-900">
                N
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">{brand.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
              Your business, one operating system. CRM · HR · Payroll — unified from the start,
              designed to scale.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400/80">
              {brand.parent}
            </p>
          </div>

          {/* Nav */}
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

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#contact" className="text-sm text-white/55 transition-colors hover:text-white">
                  Book a demo
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@noviq.app"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  hello@noviq.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Noviq — A Polynovea Product. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/35">
            <a href="#" className="transition-colors hover:text-white/70">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white/70">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-white/70">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
