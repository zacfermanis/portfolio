import { render, screen } from '@testing-library/react'
import Layout from './Layout'

describe('Layout', () => {
  it('renders header, main content, and footer', () => {
    render(
      <Layout>
        <div>Test content</div>
      </Layout>
    )

    expect(screen.getByRole('banner')).toBeInTheDocument() // Header
    expect(screen.getByRole('main')).toBeInTheDocument() // Main
    expect(screen.getByRole('contentinfo')).toBeInTheDocument() // Footer
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders children in main content area', () => {
    render(
      <Layout>
        <div data-testid="child-content">Child content</div>
      </Layout>
    )

    const main = screen.getByRole('main')
    expect(main).toContainElement(screen.getByTestId('child-content'))
  })
}) 