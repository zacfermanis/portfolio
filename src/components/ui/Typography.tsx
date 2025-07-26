import React from 'react'

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

interface HeadingProps extends TypographyProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

interface TextProps extends TypographyProps {
  variant?: 'body' | 'lead' | 'small' | 'muted'
}

export const H1: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 ${className}`}>
    {children}
  </h1>
)

export const H2: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-4xl font-bold text-gray-900 ${className}`}>
    {children}
  </h2>
)

export const H3: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h3 className={`text-2xl md:text-3xl font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
)

export const H4: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h4 className={`text-xl md:text-2xl font-semibold text-gray-900 ${className}`}>
    {children}
  </h4>
)

export const H5: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h5 className={`text-lg md:text-xl font-medium text-gray-900 ${className}`}>
    {children}
  </h5>
)

export const H6: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h6 className={`text-base md:text-lg font-medium text-gray-900 ${className}`}>
    {children}
  </h6>
)

export const Heading: React.FC<HeadingProps> = ({ 
  children, 
  as = 'h2', 
  className = '' 
}) => {
  const Component = as
  const baseClasses = 'font-bold text-gray-900'
  const sizeClasses = {
    h1: 'text-4xl md:text-5xl lg:text-6xl',
    h2: 'text-3xl md:text-4xl',
    h3: 'text-2xl md:text-3xl font-semibold',
    h4: 'text-xl md:text-2xl font-semibold',
    h5: 'text-lg md:text-xl font-medium',
    h6: 'text-base md:text-lg font-medium'
  }

  return (
    <Component className={`${baseClasses} ${sizeClasses[as]} ${className}`}>
      {children}
    </Component>
  )
}

export const P: React.FC<TextProps> = ({ 
  children, 
  variant = 'body', 
  className = '' 
}) => {
  const variantClasses = {
    body: 'text-base text-gray-700',
    lead: 'text-lg md:text-xl text-gray-700',
    small: 'text-sm text-gray-600',
    muted: 'text-sm text-gray-500'
  }

  return (
    <p className={`${variantClasses[variant]} ${className}`}>
      {children}
    </p>
  )
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'body', 
  className = '' 
}) => {
  const variantClasses = {
    body: 'text-base text-gray-700',
    lead: 'text-lg md:text-xl text-gray-700',
    small: 'text-sm text-gray-600',
    muted: 'text-sm text-gray-500'
  }

  return (
    <span className={`${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  )
}

export const Strong: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <strong className={`font-semibold text-gray-900 ${className}`}>
    {children}
  </strong>
)

export const Em: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <em className={`italic text-gray-700 ${className}`}>
    {children}
  </em>
)

export const Code: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <code className={`bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono ${className}`}>
    {children}
  </code>
)

export const Pre: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <pre className={`bg-gray-100 text-gray-800 p-4 rounded-lg overflow-x-auto text-sm font-mono ${className}`}>
    {children}
  </pre>
) 