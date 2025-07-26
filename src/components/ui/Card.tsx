import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'small' | 'medium' | 'large'
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'medium'
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm border border-gray-200'
  const hoverClasses = hover ? 'hover:shadow-md hover:border-gray-300 transition-all duration-200' : ''
  const paddingClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  }

  const classes = `${baseClasses} ${hoverClasses} ${paddingClasses[padding]} ${className}`

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Card 