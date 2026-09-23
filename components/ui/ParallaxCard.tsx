import React from 'react'

interface ParallaxCardProps {
  children: React.ReactNode
  className?: string
  depth?: number
}

/**
 * Legacy-compatible card wrapper.
 *
 * The old implementation tilted, translated and scaled cards based on pointer
 * and scroll position. That interaction made information-heavy product pages
 * feel like a template demo rather than enterprise software. Keep the public
 * API so existing sections do not need to care, but render a stable surface.
 */
export default function ParallaxCard({ children, className = '' }: ParallaxCardProps) {
  return <div className={className}>{children}</div>
}
