'use client'

import React from 'react'
import { motion, Variants, useReducedMotion } from 'framer-motion'

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -14 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 14 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  },
}

interface RevealProps {
  children: React.ReactNode
  variant?: 'up' | 'fade' | 'left' | 'right' | 'scale'
  delay?: number
  duration?: number
  className?: string
  as?: keyof typeof motion
  amount?: number
}

/** A restrained, one-shot entrance animation for section hierarchy. */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration = 0.45,
  className = '',
  as = 'div',
  amount = 0.2,
}: RevealProps) {
  const reduceMotion = useReducedMotion()
  const MotionTag = (motion[as as keyof typeof motion] || motion.div) as any

  return (
    <MotionTag
      className={className}
      data-reveal={variant}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variants[variant]}
    >
      {children}
    </MotionTag>
  )
}
