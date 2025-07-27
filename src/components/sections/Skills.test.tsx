import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import Skills from './Skills'

describe('Skills', () => {
  const defaultProps = {
    title: 'Skills & Technologies',
    subtitle: 'My technical expertise',
    description: 'I\'ve worked with a wide range of technologies throughout my career.',
    skills: [
      {
        category: 'Frontend Development',
        technologies: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3']
      },
      {
        category: 'Backend Development',
        technologies: ['Node.js', 'Python', 'Java', 'C#', '.NET']
      },
      {
        category: 'Database & Cloud',
        technologies: ['PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'Docker']
      }
    ]
  }

  it('renders without crashing', () => {
    render(<Skills {...defaultProps} />)
  })

  it('displays the title and subtitle', () => {
    const { container } = render(<Skills {...defaultProps} />)
    
    expect(container).toHaveTextContent('Skills & Technologies')
    expect(container).toHaveTextContent('My technical expertise')
  })

  it('displays the description', () => {
    render(<Skills {...defaultProps} />)
    
    expect(screen.getByText('I\'ve worked with a wide range of technologies throughout my career.')).toBeInTheDocument()
  })

  it('displays all skill categories', () => {
    render(<Skills {...defaultProps} />)
    
    const frontendElements = screen.getAllByText('Frontend Development')
    const backendElements = screen.getAllByText('Backend Development')
    const databaseElements = screen.getAllByText('Database & Cloud')
    
    expect(frontendElements.length).toBe(1) // One in card header
    expect(backendElements.length).toBe(1) // One in card header
    expect(databaseElements.length).toBe(1) // One in card header
  })

  it('displays skill count when cards are collapsed', () => {
    render(<Skills {...defaultProps} />)
    
    const skillCounts = screen.getAllByText('5')
    expect(skillCounts.length).toBe(3) // One for each skill category
  })

  it('shows technologies when card is expanded', async () => {
    render(<Skills {...defaultProps} />)
    
    // Initially, technologies should be hidden (but present in DOM)
    const reactElement = screen.getByText('React')
    expect(reactElement).toBeInTheDocument()
    expect(reactElement.closest('.opacity-0')).toBeInTheDocument()
    
    // Click on the first card to expand it
    const cards = screen.getAllByText('Frontend Development')
    const firstCard = cards[0].closest('.cursor-pointer')
    
    await act(async () => {
      fireEvent.click(firstCard!)
    })
    
    // Now technologies should be visible
    expect(reactElement.closest('.opacity-100')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
  })

  it('hides technologies when card is collapsed', async () => {
    render(<Skills {...defaultProps} />)
    
    // Click on the first card to expand it
    const cards = screen.getAllByText('Frontend Development')
    const firstCard = cards[0].closest('.cursor-pointer')
    
    await act(async () => {
      fireEvent.click(firstCard!)
    })
    
    // Verify technologies are visible
    const reactElement = screen.getByText('React')
    expect(reactElement.closest('.opacity-100')).toBeInTheDocument()
    
    // Click again to collapse
    await act(async () => {
      fireEvent.click(firstCard!)
    })
    
    // Technologies should be hidden again
    expect(reactElement.closest('.opacity-0')).toBeInTheDocument()
  })

  it('shows visual indicators when cards are expanded', async () => {
    render(<Skills {...defaultProps} />)
    
    const cards = screen.getAllByText('Frontend Development')
    const firstCard = cards[0].closest('.cursor-pointer')
    
    // Initially should not have expanded styling
    expect(firstCard).not.toHaveClass('ring-2', 'ring-blue-500', 'shadow-lg')
    
    // Click to expand
    await act(async () => {
      fireEvent.click(firstCard!)
    })
    
    // Should now have expanded styling
    expect(firstCard).toHaveClass('ring-2', 'ring-blue-500', 'shadow-lg')
  })

  it('rotates chevron icon when card is expanded', async () => {
    render(<Skills {...defaultProps} />)
    
    const cards = screen.getAllByText('Frontend Development')
    const firstCard = cards[0].closest('.cursor-pointer')
    
    // Find the chevron icon
    const chevron = firstCard!.querySelector('svg')
    expect(chevron).toBeInTheDocument()
    
    // Initially should not be rotated
    expect(chevron!.parentElement).not.toHaveClass('rotate-180')
    
    // Click to expand
    await act(async () => {
      fireEvent.click(firstCard!)
    })
    
    // Should now be rotated
    expect(chevron!.parentElement).toHaveClass('rotate-180')
  })

  it('allows multiple cards to be expanded simultaneously', async () => {
    render(<Skills {...defaultProps} />)
    
    const frontendCard = screen.getAllByText('Frontend Development')[0].closest('.cursor-pointer')
    const backendCard = screen.getAllByText('Backend Development')[0].closest('.cursor-pointer')
    
    // Expand first card
    await act(async () => {
      fireEvent.click(frontendCard!)
    })
    
    // Expand second card
    await act(async () => {
      fireEvent.click(backendCard!)
    })
    
    // Both should show their technologies
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
  })

  it('displays all technologies in each category when expanded', async () => {
    render(<Skills {...defaultProps} />)
    
    // Expand all cards first
    const frontendCard = screen.getAllByText('Frontend Development')[0].closest('.cursor-pointer')
    const backendCard = screen.getAllByText('Backend Development')[0].closest('.cursor-pointer')
    const databaseCard = screen.getAllByText('Database & Cloud')[0].closest('.cursor-pointer')
    
    await act(async () => {
      fireEvent.click(frontendCard!)
    })
    
    await act(async () => {
      fireEvent.click(backendCard!)
    })
    
    await act(async () => {
      fireEvent.click(databaseCard!)
    })
    
    // Frontend technologies
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('HTML5')).toBeInTheDocument()
    expect(screen.getByText('CSS3')).toBeInTheDocument()
    
    // Backend technologies
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('C#')).toBeInTheDocument()
    expect(screen.getByText('.NET')).toBeInTheDocument()
    
    // Database & Cloud technologies
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument()
    expect(screen.getByText('MongoDB')).toBeInTheDocument()
    expect(screen.getByText('AWS')).toBeInTheDocument()
    expect(screen.getByText('Azure')).toBeInTheDocument()
    expect(screen.getByText('Docker')).toBeInTheDocument()
  })

  it('displays skills summary with correct counts', () => {
    render(<Skills {...defaultProps} />)
    
    const countElements = screen.getAllByText('5')
    expect(countElements.length).toBe(3) // Should have 3 categories with 5 technologies each
  })

  it('renders with correct CSS classes', () => {
    const { container } = render(<Skills {...defaultProps} />)
    
    expect(container.querySelector('.py-20')).toBeInTheDocument()
    expect(container.querySelector('.bg-white')).toBeInTheDocument()
  })

  it('renders with proper grid layout', () => {
    const { container } = render(<Skills {...defaultProps} />)
    
    expect(container.querySelector('.grid')).toBeInTheDocument()
    expect(container.querySelector('.md\\:grid-cols-2')).toBeInTheDocument()
    expect(container.querySelector('.lg\\:grid-cols-3')).toBeInTheDocument()
  })

  it('renders skills grid with proper columns', () => {
    const { container } = render(<Skills {...defaultProps} />)
    
    expect(container.querySelector('.grid-cols-1')).toBeInTheDocument()
    expect(container.querySelector('.md\\:grid-cols-2')).toBeInTheDocument()
    expect(container.querySelector('.lg\\:grid-cols-3')).toBeInTheDocument()
  })

  it('renders category cards with proper styling', () => {
    const { container } = render(<Skills {...defaultProps} />)
    
    const cards = container.querySelectorAll('.h-full')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('renders technology items with bullet points', async () => {
    const { container } = render(<Skills {...defaultProps} />)
    
    // Expand first card to see technologies
    const cards = screen.getAllByText('Frontend Development')
    const firstCard = cards[0].closest('.cursor-pointer')
    
    await act(async () => {
      fireEvent.click(firstCard!)
    })
    
    const bulletPoints = container.querySelectorAll('.w-2.h-2.bg-blue-500.rounded-full')
    expect(bulletPoints.length).toBeGreaterThan(0)
  })

  it('renders category headers with blue color', () => {
    const { container } = render(<Skills {...defaultProps} />)
    
    const categoryHeaders = container.querySelectorAll('.text-blue-600')
    expect(categoryHeaders.length).toBeGreaterThan(0)
  })

  it('handles empty skills array', () => {
    const emptyProps = {
      ...defaultProps,
      skills: []
    }
    
    render(<Skills {...emptyProps} />)
    
    expect(screen.getByText('Skills & Technologies')).toBeInTheDocument()
    expect(screen.getByText('My technical expertise')).toBeInTheDocument()
  })

  it('handles skills with empty technologies', () => {
    const skillsWithEmptyCategories = [
      {
        category: 'Empty Category',
        technologies: []
      }
    ]
    
    render(<Skills {...defaultProps} skills={skillsWithEmptyCategories} />)
    
    const emptyCategoryElements = screen.getAllByText('Empty Category')
    expect(emptyCategoryElements.length).toBe(1) // One in the card header
  })

  it('renders with proper section structure', () => {
    const { container } = render(<Skills {...defaultProps} />)
    
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'skills')
  })

  it('renders with proper container structure', () => {
    const { container } = render(<Skills {...defaultProps} />)
    
    const containerDiv = container.querySelector('.container')
    expect(containerDiv).toHaveClass('mx-auto', 'px-4', 'sm:px-6', 'lg:px-8')
  })

  it('renders with proper spacing', () => {
    const { container } = render(<Skills {...defaultProps} />)
    
    expect(container.querySelector('.mb-16')).toBeInTheDocument()
    expect(container.querySelector('.gap-8')).toBeInTheDocument()
  })

  it('renders technology text with proper styling', async () => {
    const { container } = render(<Skills {...defaultProps} />)
    
    // Expand first card to see technologies
    const cards = screen.getAllByText('Frontend Development')
    const firstCard = cards[0].closest('.cursor-pointer')
    
    await act(async () => {
      fireEvent.click(firstCard!)
    })
    
    const technologyTexts = container.querySelectorAll('.text-gray-700.font-medium')
    expect(technologyTexts.length).toBeGreaterThan(0)
  })

  it('renders summary numbers with proper styling', () => {
    const { container } = render(<Skills {...defaultProps} />)
    
    const summaryNumbers = container.querySelectorAll('.text-4xl.font-bold')
    expect(summaryNumbers.length).toBeGreaterThan(0)
  })
}) 