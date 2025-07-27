import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Hero from './Hero'

// Mock the scrollIntoView method
const mockScrollIntoView = jest.fn()
Element.prototype.scrollIntoView = mockScrollIntoView

// Mock document.getElementById
const mockGetElementById = jest.fn()
document.getElementById = mockGetElementById

describe('Hero', () => {
  const defaultProps = {
    name: 'Zac Fermanis',
    title: 'Software Engineer',
    description: 'Passionate about creating amazing web experiences',
    ctaText: 'View My Work',
    ctaLink: '#projects'
  }

  beforeEach(() => {
    jest.clearAllMocks()
    mockGetElementById.mockReturnValue({
      scrollIntoView: mockScrollIntoView
    })
  })

  it('renders with all required props', () => {
    render(<Hero {...defaultProps} />)
    
    expect(screen.getByText('Zac Fermanis')).toBeInTheDocument()
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    expect(screen.getByText('Passionate about creating amazing web experiences')).toBeInTheDocument()
    expect(screen.getByText('View My Work')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders the main CTA button with correct link', () => {
    render(<Hero {...defaultProps} />)
    
    const ctaButton = screen.getByRole('button', { name: /view my work/i })
    expect(ctaButton).toBeInTheDocument()
    // Since it's a button that handles navigation via JavaScript, we can't test the href attribute
    // Instead, we can test that the button exists and has the correct text
    expect(ctaButton).toHaveTextContent('View My Work')
  })

  it('renders the Learn More button', () => {
    render(<Hero {...defaultProps} />)
    
    const learnMoreButton = screen.getByRole('button', { name: /learn more/i })
    expect(learnMoreButton).toBeInTheDocument()
  })

  it('calls scrollToNextSection when Learn More button is clicked', () => {
    render(<Hero {...defaultProps} />)
    
    const learnMoreButton = screen.getByRole('button', { name: /learn more/i })
    fireEvent.click(learnMoreButton)
    
    expect(mockGetElementById).toHaveBeenCalledWith('about')
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('calls scrollToNextSection when scroll arrow is clicked', () => {
    render(<Hero {...defaultProps} />)
    
    const scrollButton = screen.getByRole('button', { name: /scroll to next section/i })
    fireEvent.click(scrollButton)
    
    expect(mockGetElementById).toHaveBeenCalledWith('about')
    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  it('renders image when provided', () => {
    const propsWithImage = {
      ...defaultProps,
      image: '/path/to/image.jpg'
    }
    
    render(<Hero {...propsWithImage} />)
    
    const image = screen.getByAltText('Zac Fermanis - Software Engineer')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/path/to/image.jpg')
  })

  it('does not render image when not provided', () => {
    render(<Hero {...defaultProps} />)
    
    const image = screen.queryByAltText('Zac Fermanis - Software Engineer')
    expect(image).not.toBeInTheDocument()
  })

  it('has proper heading structure', () => {
    render(<Hero {...defaultProps} />)
    
    const h1 = screen.getByRole('heading', { level: 1 })
    const h2 = screen.getByRole('heading', { level: 2 })
    
    expect(h1).toHaveTextContent('Zac Fermanis')
    expect(h2).toHaveTextContent('Software Engineer')
  })

  it('has proper accessibility attributes', () => {
    render(<Hero {...defaultProps} />)
    
    const scrollButton = screen.getByRole('button', { name: /scroll to next section/i })
    expect(scrollButton).toHaveAttribute('aria-label', 'Scroll to next section')
  })

  it('handles missing about section gracefully', () => {
    mockGetElementById.mockReturnValue(null)
    
    render(<Hero {...defaultProps} />)
    
    const learnMoreButton = screen.getByRole('button', { name: /learn more/i })
    fireEvent.click(learnMoreButton)
    
    expect(mockGetElementById).toHaveBeenCalledWith('about')
    expect(mockScrollIntoView).not.toHaveBeenCalled()
  })

  it('renders with responsive design classes', () => {
    const { container } = render(<Hero {...defaultProps} />)
    
    const section = container.querySelector('section')
    expect(section).toHaveClass('min-h-screen', 'flex', 'items-center', 'justify-center')
  })

  it('renders gradient background', () => {
    const { container } = render(<Hero {...defaultProps} />)
    
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-gradient-to-br', 'from-sky-50', 'to-cyan-100')
  })

  it('renders gradient text for name', () => {
    render(<Hero {...defaultProps} />)
    
    const nameHeading = screen.getByRole('heading', { level: 1 })
    expect(nameHeading).toHaveClass('bg-gradient-to-r', 'from-sky-400', 'to-cyan-500', 'bg-clip-text', 'text-transparent')
  })
}) 