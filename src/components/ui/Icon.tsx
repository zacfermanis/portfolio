import React from 'react'

interface IconProps {
  name: string
  size?: 'small' | 'medium' | 'large' | 'xl'
  color?: string
  className?: string
  'aria-label'?: string
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 'medium',
  color,
  className = '',
  'aria-label': ariaLabel
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const baseClasses = 'inline-block'
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`

  // Simple icon mapping - in a real app, you'd use a proper icon library
  const iconMap: Record<string, React.ReactNode> = {
    github: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={classes}>
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={classes}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={classes}>
        <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={classes}>
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
      </svg>
    ),
    star: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={classes}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    download: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={classes}>
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
      </svg>
    )
  }

  const icon = iconMap[name] || (
    <div className={`${classes} bg-gray-300 rounded flex items-center justify-center text-xs`}>
      {name}
    </div>
  )

  const style = color ? { color } : {}

  return (
    <span
      style={style}
      role="img"
      aria-label={ariaLabel || name}
      className="inline-flex items-center justify-center"
    >
      {icon}
    </span>
  )
}

export default Icon 