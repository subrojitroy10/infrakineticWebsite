import { motion } from 'framer-motion'

const variants = {
  up: {
    hidden: { opacity: 0, y: 72, filter: 'blur(10px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  fade: {
    hidden: { opacity: 0, filter: 'blur(8px)' },
    show: { opacity: 1, filter: 'blur(0px)' },
  },
  left: {
    hidden: { opacity: 0, x: -72, rotateY: -8, filter: 'blur(10px)' },
    show: { opacity: 1, x: 0, rotateY: 0, filter: 'blur(0px)' },
  },
  right: {
    hidden: { opacity: 0, x: 72, rotateY: 8, filter: 'blur(10px)' },
    show: { opacity: 1, x: 0, rotateY: 0, filter: 'blur(0px)' },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(12px)' },
    show: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
}

/**
 * Fires a one-shot entrance animation when the element scrolls into view.
 */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 0.9,
  className = '',
  as = 'div',
  amount = 0.25,
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[variant]}
    >
      {children}
    </MotionTag>
  )
}
