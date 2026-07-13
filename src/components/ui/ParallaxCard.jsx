import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

/**
 * A card surface that drifts gently against the page scroll to create depth.
 * Keep this inside Reveal when both entrance and parallax motion are needed so
 * the two transforms live on separate elements and do not compete.
 */
export default function ParallaxCard({ children, className = '', depth = 18 }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const rawY = useTransform(scrollYProgress, [0, 1], [depth, -depth])
  const y = useSpring(rawY, { stiffness: 110, damping: 28, mass: 0.35 })

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y: reduceMotion ? 0 : y, willChange: reduceMotion ? undefined : 'transform' }}
    >
      {children}
    </motion.div>
  )
}
