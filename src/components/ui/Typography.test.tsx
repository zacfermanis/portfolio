import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { H1, H2, H3, H4, H5, H6, Heading, P, Text, Strong, Em, Code, Pre } from './Typography'

describe('Typography Components', () => {
  describe('Heading Components', () => {
    it('renders H1 with correct styling', () => {
      render(<H1>Main Title</H1>)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Main Title')
      expect(heading).toHaveClass('text-4xl', 'md:text-5xl', 'lg:text-6xl', 'font-bold', 'text-gray-900')
    })

    it('renders H2 with correct styling', () => {
      render(<H2>Section Title</H2>)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Section Title')
      expect(heading).toHaveClass('text-3xl', 'md:text-4xl', 'font-bold', 'text-gray-900')
    })

    it('renders H3 with correct styling', () => {
      render(<H3>Subsection Title</H3>)
      const heading = screen.getByRole('heading', { level: 3 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Subsection Title')
      expect(heading).toHaveClass('text-2xl', 'md:text-3xl', 'font-semibold', 'text-gray-900')
    })

    it('renders H4 with correct styling', () => {
      render(<H4>Minor Title</H4>)
      const heading = screen.getByRole('heading', { level: 4 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Minor Title')
      expect(heading).toHaveClass('text-xl', 'md:text-2xl', 'font-semibold', 'text-gray-900')
    })

    it('renders H5 with correct styling', () => {
      render(<H5>Small Title</H5>)
      const heading = screen.getByRole('heading', { level: 5 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Small Title')
      expect(heading).toHaveClass('text-lg', 'md:text-xl', 'font-medium', 'text-gray-900')
    })

    it('renders H6 with correct styling', () => {
      render(<H6>Tiny Title</H6>)
      const heading = screen.getByRole('heading', { level: 6 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Tiny Title')
      expect(heading).toHaveClass('text-base', 'md:text-lg', 'font-medium', 'text-gray-900')
    })
  })

  describe('Heading Component', () => {
    it('renders as h1 by default', () => {
      render(<Heading>Default Heading</Heading>)
      const heading = screen.getByRole('heading', { level: 2 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Default Heading')
    })

    it('renders as specified heading level', () => {
      render(<Heading as="h1">Custom H1</Heading>)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveTextContent('Custom H1')
      expect(heading).toHaveClass('text-4xl', 'md:text-5xl', 'lg:text-6xl')
    })

    it('renders as h3 with correct styling', () => {
      render(<Heading as="h3">H3 Heading</Heading>)
      const heading = screen.getByRole('heading', { level: 3 })
      expect(heading).toBeInTheDocument()
      expect(heading).toHaveClass('text-2xl', 'md:text-3xl', 'font-semibold')
    })
  })

  describe('Text Components', () => {
    it('renders P with body variant by default', () => {
      render(<P>Body text</P>)
      const paragraph = screen.getByText('Body text')
      expect(paragraph).toBeInTheDocument()
      expect(paragraph).toHaveClass('text-base', 'text-gray-700')
    })

    it('renders P with lead variant', () => {
      render(<P variant="lead">Lead text</P>)
      const paragraph = screen.getByText('Lead text')
      expect(paragraph).toBeInTheDocument()
      expect(paragraph).toHaveClass('text-lg', 'md:text-xl', 'text-gray-700')
    })

    it('renders P with small variant', () => {
      render(<P variant="small">Small text</P>)
      const paragraph = screen.getByText('Small text')
      expect(paragraph).toBeInTheDocument()
      expect(paragraph).toHaveClass('text-sm', 'text-gray-600')
    })

    it('renders P with muted variant', () => {
      render(<P variant="muted">Muted text</P>)
      const paragraph = screen.getByText('Muted text')
      expect(paragraph).toBeInTheDocument()
      expect(paragraph).toHaveClass('text-sm', 'text-gray-500')
    })

    it('renders Text with body variant by default', () => {
      render(<Text>Inline text</Text>)
      const text = screen.getByText('Inline text')
      expect(text).toBeInTheDocument()
      expect(text).toHaveClass('text-base', 'text-gray-700')
    })

    it('renders Text with lead variant', () => {
      render(<Text variant="lead">Lead inline text</Text>)
      const text = screen.getByText('Lead inline text')
      expect(text).toBeInTheDocument()
      expect(text).toHaveClass('text-lg', 'md:text-xl', 'text-gray-700')
    })
  })

  describe('Inline Elements', () => {
    it('renders Strong with correct styling', () => {
      render(<Strong>Bold text</Strong>)
      const strong = screen.getByText('Bold text')
      expect(strong).toBeInTheDocument()
      expect(strong).toHaveClass('font-semibold', 'text-gray-900')
    })

    it('renders Em with correct styling', () => {
      render(<Em>Italic text</Em>)
      const em = screen.getByText('Italic text')
      expect(em).toBeInTheDocument()
      expect(em).toHaveClass('italic', 'text-gray-700')
    })

    it('renders Code with correct styling', () => {
      render(<Code>code snippet</Code>)
      const code = screen.getByText('code snippet')
      expect(code).toBeInTheDocument()
      expect(code).toHaveClass('bg-gray-100', 'text-gray-800', 'px-1', 'py-0.5', 'rounded', 'text-sm', 'font-mono')
    })

    it('renders Pre with correct styling', () => {
      render(<Pre>code block</Pre>)
      const pre = screen.getByText('code block')
      expect(pre).toBeInTheDocument()
      expect(pre).toHaveClass('bg-gray-100', 'text-gray-800', 'p-4', 'rounded-lg', 'overflow-x-auto', 'text-sm', 'font-mono')
    })
  })

  describe('Custom className', () => {
    it('applies custom className to H1', () => {
      render(<H1 className="custom-class">Custom H1</H1>)
      const heading = screen.getByRole('heading', { level: 1 })
      expect(heading).toHaveClass('custom-class')
    })

    it('applies custom className to P', () => {
      render(<P className="custom-class">Custom paragraph</P>)
      const paragraph = screen.getByText('Custom paragraph')
      expect(paragraph).toHaveClass('custom-class')
    })

    it('applies custom className to Text', () => {
      render(<Text className="custom-class">Custom text</Text>)
      const text = screen.getByText('Custom text')
      expect(text).toHaveClass('custom-class')
    })
  })
}) 