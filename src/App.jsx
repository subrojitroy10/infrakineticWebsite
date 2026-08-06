import { motion, useScroll, useSpring } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme } from './shared/theme/ThemeContext.jsx'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import MeetInfrakinetic from './components/sections/MeetInfrakinetic'
import Connected from './components/sections/Connected'
import Modules from './components/sections/Modules'
import Intelligence from './components/sections/Intelligence'
import Scale from './components/sections/Scale'
import Enterprise from './components/sections/Enterprise'
import WhyInfrakinetic from './components/sections/WhyInfrakinetic'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import Briefing from './pages/Briefing'
import Platform from './pages/Platform'
import PlatformInfra from './pages/PlatformInfra'
import PlatformIntelligence from './pages/PlatformIntelligence'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })
  const { theme } = useTheme()

  return (
    <BrowserRouter>
      <div className="relative">
        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX }}
          className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-gold-300 via-gold-400 to-violet-400 shadow-[0_0_24px_rgba(230,211,163,0.5)]"
        />

        {/*
         * Keyed on theme: native form controls (input/button) don't reliably
         * repaint CSS-variable-driven styles when only an ancestor attribute
         * changes — remounting on toggle sidesteps that instead of chasing it.
         */}
        <div key={theme}>
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/briefing" element={<Briefing />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/platform/infra" element={<PlatformInfra />} />
            <Route path="/platform/intelligence" element={<PlatformIntelligence />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <MeetInfrakinetic />
      <Connected />
      <Modules />
      <Intelligence />
      <Scale />
      <Enterprise />
      <WhyInfrakinetic />
      <Contact />
    </main>
  )
}