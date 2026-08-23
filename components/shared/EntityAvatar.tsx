import React from 'react'
import { avatarPalette } from '@/lib/colors'

const colours = avatarPalette.dark

function hashString(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

interface EntityAvatarProps {
  name: string
  type?: 'org' | 'person'
  src?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  fallbackColour?: string
}

export default function EntityAvatar({
  name,
  type = 'org',
  src,
  size = 'md',
  className = '',
  fallbackColour,
}: EntityAvatarProps) {
  const sizeStyles = {
    xs: 'h-6 w-6 text-[9px]',
    sm: 'h-8 w-8 text-[10px]',
    md: 'h-10 w-10 text-[12px]',
    lg: 'h-12 w-12 text-[14px]',
    xl: 'h-16 w-16 text-[18px]',
  }

  const shape = type === 'person' ? 'rounded-full' : 'rounded-xl'

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`${shape} object-cover ${sizeStyles[size]} ${className}`}
      />
    )
  }

  const initials = getInitials(name)
  const colourIndex = hashString(name) % colours.length
  const bgColor = fallbackColour || colours[colourIndex]
  const textColor = type === 'org' ? '#0B0910' : '#F5F1E8'

  return (
    <div
      className={`${shape} ${sizeStyles[size]} ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label={name}
    >
      {initials}
    </div>
  )
}
