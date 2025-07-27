import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

describe('Button', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-sky-400', 'text-white', 'px-4', 'py-2')
  })

  it('renders with primary variant', () => {
    render(<Button variant="primary">Primary Button</Button>)
    const button = screen.getByRole('button', { name: /primary button/i })
    expect(button).toHaveClass('bg-sky-400', 'text-white')
  })

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>)
    const button = screen.getByRole('button', { name: /secondary button/i })
    expect(button).toHaveClass('bg-gray-600', 'text-white')
  })

  it('renders with outline variant', () => {
    render(<Button variant="outline">Outline Button</Button>)
    const button = screen.getByRole('button', { name: /outline button/i })
    expect(button).toHaveClass('border-2', 'border-sky-400', 'text-sky-400')
  })

  it('renders with small size', () => {
    render(<Button size="small">Small Button</Button>)
    const button = screen.getByRole('button', { name: /small button/i })
    expect(button).toHaveClass('px-3', 'py-1.5', 'text-sm')
  })

  it('renders with medium size', () => {
    render(<Button size="medium">Medium Button</Button>)
    const button = screen.getByRole('button', { name: /medium button/i })
    expect(button).toHaveClass('px-4', 'py-2', 'text-base')
  })

  it('renders with large size', () => {
    render(<Button size="large">Large Button</Button>)
    const button = screen.getByRole('button', { name: /large button/i })
    expect(button).toHaveClass('px-6', 'py-3', 'text-lg')
  })

  it('renders as a link when href is provided', () => {
    render(<Button href="/test">Link Button</Button>)
    const link = screen.getByRole('link', { name: /link button/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable Button</Button>)
    const button = screen.getByRole('button', { name: /clickable button/i })
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders disabled state', () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole('button', { name: /disabled button/i })
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom Button</Button>)
    const button = screen.getByRole('button', { name: /custom button/i })
    expect(button).toHaveClass('custom-class')
  })

  it('renders with submit type', () => {
    render(<Button type="submit">Submit Button</Button>)
    const button = screen.getByRole('button', { name: /submit button/i })
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('renders with reset type', () => {
    render(<Button type="reset">Reset Button</Button>)
    const button = screen.getByRole('button', { name: /reset button/i })
    expect(button).toHaveAttribute('type', 'reset')
  })

  it('has proper focus styles', () => {
    render(<Button>Focusable Button</Button>)
    const button = screen.getByRole('button', { name: /focusable button/i })
    expect(button).toHaveClass('focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2')
  })
}) 