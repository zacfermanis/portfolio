import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import About from './About'

describe('About', () => {
  const defaultProps = {
    title: 'About Me',
    subtitle: 'Get to know me better',
    description: 'I am a passionate software engineer with experience in full-stack development.',
    details: [
      'Led technical operations for Elegant Elephant Travel, achieving $1M+ annual revenue',
      'Developed 40+ enterprise systems across various FinTech industries',
      'Specialized in AI/ML integration and cloud-native architectures'
    ],
    resumeUrl: '/resume.pdf'
  }

  it('renders without crashing', () => {
    render(<About {...defaultProps} />)
  })

  it('displays the title and subtitle', () => {
    const { container } = render(<About {...defaultProps} />)
    
    expect(container).toHaveTextContent('About Me')
    expect(container).toHaveTextContent('Get to know me better')
  })

  it('displays the description', () => {
    render(<About {...defaultProps} />)
    
    expect(screen.getByText('I am a passionate software engineer with experience in full-stack development.')).toBeInTheDocument()
  })

  it('displays the key achievements', () => {
    render(<About {...defaultProps} />)
    
    expect(screen.getByText('Led technical operations for Elegant Elephant Travel, achieving $1M+ annual revenue')).toBeInTheDocument()
    expect(screen.getByText('Developed 40+ enterprise systems across various FinTech industries')).toBeInTheDocument()
    expect(screen.getByText('Specialized in AI/ML integration and cloud-native architectures')).toBeInTheDocument()
  })

  it('renders without resume button when resumeUrl is not provided', () => {
    const propsWithoutResume = {
      ...defaultProps,
      resumeUrl: undefined
    }
    render(<About {...propsWithoutResume} />)
    
    expect(screen.queryByText('Download Resume')).not.toBeInTheDocument()
  })

  it('renders with image when provided', () => {
    const propsWithImage = {
      ...defaultProps,
      image: '/test-image.jpg'
    }
    render(<About {...propsWithImage} />)
    
    const image = screen.getByAltText('Professional headshot')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/test-image.jpg')
  })

  it('renders without image when not provided', () => {
    render(<About {...defaultProps} />)
    
    expect(screen.queryByAltText('Professional headshot')).not.toBeInTheDocument()
  })

  it('displays professional background section', () => {
    render(<About {...defaultProps} />)
    
    expect(screen.getByText('Professional Background')).toBeInTheDocument()
  })

  it('displays key achievements section', () => {
    render(<About {...defaultProps} />)
    
    expect(screen.getByText('Key Achievements')).toBeInTheDocument()
  })

  it('displays resume download button when resumeUrl is provided', () => {
    render(<About {...defaultProps} />)
    
    const resumeButton = screen.getByText('Download Resume')
    expect(resumeButton).toBeInTheDocument()
    expect(resumeButton).toHaveAttribute('href', '/resume.pdf')
  })

  it('displays experience statistics', () => {
    const { container } = render(<About {...defaultProps} />)
    
    expect(container).toHaveTextContent('20+')
    expect(container).toHaveTextContent('Years of Experience')
    expect(container).toHaveTextContent('40+')
    expect(container).toHaveTextContent('Enterprise Systems')
    expect(container).toHaveTextContent('$1M+')
    expect(container).toHaveTextContent('Annual Revenue Generated')
  })

  it('renders with correct CSS classes', () => {
    const { container } = render(<About {...defaultProps} />)
    
    expect(container.querySelector('.py-20')).toBeInTheDocument()
    expect(container.querySelector('.bg-white')).toBeInTheDocument()
  })

  it('renders with proper grid layout', () => {
    const { container } = render(<About {...defaultProps} />)
    
    expect(container.querySelector('.grid')).toBeInTheDocument()
    expect(container.querySelector('.lg\\:grid-cols-2')).toBeInTheDocument()
  })
}) 