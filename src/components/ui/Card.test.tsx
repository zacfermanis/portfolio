import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './Card'

describe('Card', () => {
  it('renders with default props', () => {
    const { container } = render(<Card>Card content</Card>)
    const card = screen.getByText('Card content')
    expect(card).toBeInTheDocument()
    const cardContainer = container.firstChild as HTMLElement
    expect(cardContainer).toHaveClass('bg-white', 'rounded-lg', 'shadow-sm', 'border', 'border-gray-200', 'p-6')
  })

  it('renders with small padding', () => {
    const { container } = render(<Card padding="small">Small padding card</Card>)
    const cardContainer = container.firstChild as HTMLElement
    expect(cardContainer).toHaveClass('p-4')
  })

  it('renders with medium padding', () => {
    const { container } = render(<Card padding="medium">Medium padding card</Card>)
    const cardContainer = container.firstChild as HTMLElement
    expect(cardContainer).toHaveClass('p-6')
  })

  it('renders with large padding', () => {
    const { container } = render(<Card padding="large">Large padding card</Card>)
    const cardContainer = container.firstChild as HTMLElement
    expect(cardContainer).toHaveClass('p-8')
  })

  it('renders with hover effects when hover is true', () => {
    const { container } = render(<Card hover>Hover card</Card>)
    const cardContainer = container.firstChild as HTMLElement
    expect(cardContainer).toHaveClass('hover:shadow-md', 'hover:border-gray-300', 'transition-all', 'duration-200')
  })

  it('does not render hover effects when hover is false', () => {
    const { container } = render(<Card hover={false}>No hover card</Card>)
    const cardContainer = container.firstChild as HTMLElement
    expect(cardContainer).not.toHaveClass('hover:shadow-md', 'hover:border-gray-300')
  })

  it('applies custom className', () => {
    const { container } = render(<Card className="custom-class">Custom card</Card>)
    const cardContainer = container.firstChild as HTMLElement
    expect(cardContainer).toHaveClass('custom-class')
  })

  it('renders complex children', () => {
    render(
      <Card>
        <h2>Card Title</h2>
        <p>Card description</p>
        <button>Action</button>
      </Card>
    )
    expect(screen.getByText('Card Title')).toBeInTheDocument()
    expect(screen.getByText('Card description')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument()
  })

  it('has proper base styling', () => {
    const { container } = render(<Card>Base styled card</Card>)
    const cardContainer = container.firstChild as HTMLElement
    expect(cardContainer).toHaveClass(
      'bg-white',
      'rounded-lg',
      'shadow-sm',
      'border',
      'border-gray-200'
    )
  })
}) 