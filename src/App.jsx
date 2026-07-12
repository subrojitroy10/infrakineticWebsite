import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Problem from './components/sections/Problem'
import MeetNoviq from './components/sections/MeetNoviq'
import Connected from './components/sections/Connected'
import Modules from './components/sections/Modules'
import Scale from './components/sections/Scale'
import Enterprise from './components/sections/Enterprise'
import WhyNoviq from './components/sections/WhyNoviq'
import Roadmap from './components/sections/Roadmap'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 })

  return (
    <div className="relative">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-teal-400 to-cyan-400"
      />

      <Navbar />

      <main>
        <Hero />
        <Problem />
        <MeetNoviq />
        <Connected />
        <Modules />
        <Scale />
        <Enterprise />
        <WhyNoviq />
        <Roadmap />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
