import { motion } from 'framer-motion'

const variants = {
  up: { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  left: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.94 }, show: { opacity: 1, scale: 1 } },
}

/**
 * Fires a one-shot entrance animation when the element scrolls into view.
 */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 0.7,
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
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[variant]}
    >
      {children}
    </MotionTag>
  )
}
