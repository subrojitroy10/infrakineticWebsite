import { useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

export default function ParallaxCard({ children, className = '', depth = 18 }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  const reduceMotion = useReducedMotion()
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const rawY = useTransform(scrollYProgress, [0, 1], [depth * 1.8, -depth * 1.8])
  const y = useSpring(rawY, { stiffness: 110, damping: 28, mass: 0.35 })
  const rawRotateX = useTransform(mouseY, [0, 1], [6, -6])
  const rawRotateY = useTransform(mouseX, [0, 1], [-7, 7])
  const rotateX = useSpring(rawRotateX, { stiffness: 160, damping: 20, mass: 0.25 })
  const rotateY = useSpring(rawRotateY, { stiffness: 160, damping: 20, mass: 0.25 })

  const handleMouseMove = (event) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left) / rect.width)
    mouseY.set((event.clientY - rect.top) / rect.height)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        mouseX.set(0.5)
        mouseY.set(0.5)
      }}
      style={{
        y: reduceMotion ? 0 : y,
        rotateX: reduceMotion || !hovered ? 0 : rotateX,
        rotateY: reduceMotion || !hovered ? 0 : rotateY,
        transformPerspective: 1200,
        transformStyle: 'preserve-3d',
        willChange: reduceMotion ? undefined : 'transform',
      }}
      whileHover={reduceMotion ? undefined : { scale: 1.018 }}
      transition={{ type: 'spring', stiffness: 180, damping: 22 }}
    >
      {children}
    </motion.div>
  )
}
