'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'

const variants: Record<string, Variants> = {
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

interface RevealProps {
  children: React.ReactNode
  variant?: 'up' | 'fade' | 'left' | 'right' | 'scale'
  delay?: number
  duration?: number
  className?: string
  as?: keyof typeof motion
  amount?: number
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
}: RevealProps) {
  const MotionTag = (motion[as as keyof typeof motion] || motion.div) as any
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
