import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Icon from './Icon'

describe('Icon', () => {
  it('renders with default props', () => {
    const { container } = render(<Icon name="github" />)
    const icon = screen.getByRole('img', { name: /github/i })
    expect(icon).toBeInTheDocument()
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('w-6', 'h-6')
  })

  it('renders with small size', () => {
    const { container } = render(<Icon name="github" size="small" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('w-4', 'h-4')
  })

  it('renders with medium size', () => {
    const { container } = render(<Icon name="github" size="medium" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('w-6', 'h-6')
  })

  it('renders with large size', () => {
    const { container } = render(<Icon name="github" size="large" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('w-8', 'h-8')
  })

  it('renders with xl size', () => {
    const { container } = render(<Icon name="github" size="xl" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('w-12', 'h-12')
  })

  it('renders with custom color', () => {
    render(<Icon name="github" color="#ff0000" />)
    const icon = screen.getByRole('img', { name: /github/i })
    expect(icon).toHaveStyle({ color: '#ff0000' })
  })

  it('renders with custom aria-label', () => {
    render(<Icon name="github" aria-label="GitHub Profile" />)
    const icon = screen.getByRole('img', { name: /github profile/i })
    expect(icon).toBeInTheDocument()
  })

  it('uses name as aria-label when no aria-label provided', () => {
    render(<Icon name="linkedin" />)
    const icon = screen.getByRole('img', { name: /linkedin/i })
    expect(icon).toBeInTheDocument()
  })

  it('renders GitHub icon', () => {
    render(<Icon name="github" />)
    const icon = screen.getByRole('img', { name: /github/i })
    expect(icon).toBeInTheDocument()
  })

  it('renders LinkedIn icon', () => {
    render(<Icon name="linkedin" />)
    const icon = screen.getByRole('img', { name: /linkedin/i })
    expect(icon).toBeInTheDocument()
  })

  it('renders email icon', () => {
    render(<Icon name="email" />)
    const icon = screen.getByRole('img', { name: /email/i })
    expect(icon).toBeInTheDocument()
  })

  it('renders arrow icon', () => {
    render(<Icon name="arrow" />)
    const icon = screen.getByRole('img', { name: /arrow/i })
    expect(icon).toBeInTheDocument()
  })

  it('renders star icon', () => {
    render(<Icon name="star" />)
    const icon = screen.getByRole('img', { name: /star/i })
    expect(icon).toBeInTheDocument()
  })

  it('renders music icon', () => {
    render(<Icon name="music" />)
    const icon = screen.getByRole('img', { name: /music/i })
    expect(icon).toBeInTheDocument()
  })

  it('renders external-link icon', () => {
    render(<Icon name="external-link" />)
    const icon = screen.getByRole('img', { name: /external-link/i })
    expect(icon).toBeInTheDocument()
  })

  it('renders fallback for unknown icon', () => {
    render(<Icon name="unknown" />)
    const icon = screen.getByRole('img', { name: /unknown/i })
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveTextContent('unknown')
  })

  it('applies custom className', () => {
    const { container } = render(<Icon name="github" className="custom-class" />)
    const svg = container.querySelector('svg')
    expect(svg).toHaveClass('custom-class')
  })

  it('has proper accessibility attributes', () => {
    render(<Icon name="github" />)
    const icon = screen.getByRole('img', { name: /github/i })
    expect(icon).toHaveAttribute('role', 'img')
    expect(icon).toHaveAttribute('aria-label', 'github')
  })
}) 