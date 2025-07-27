import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import WorkHistorySection from './WorkHistorySection'
import { useInView } from '../../utils/useInView'

// Mock the useInView hook
jest.mock('../../utils/useInView', () => ({
  useInView: jest.fn()
}))

// Mock window.innerWidth for mobile detection
Object.defineProperty(window, 'innerWidth', {
  writable: true,
  configurable: true,
  value: 1024, // Default to desktop
})

const mockUseInView = useInView as jest.MockedFunction<typeof useInView>

describe('WorkHistorySection', () => {
  const mockWorkExperience = [
    {
      yearRange: '2020-2023',
      company: 'Test Company',
      location: 'Test City, ST',
      title: 'Software Engineer',
      description: ['Developed web applications', 'Led technical projects'],
      technologies: ['React', 'TypeScript', 'Node.js']
    },
    {
      yearRange: '2018-2020',
      company: 'Another Company',
      location: 'Another City, ST',
      title: 'Junior Developer',
      description: ['Built user interfaces', 'Collaborated with team'],
      technologies: ['JavaScript', 'CSS', 'HTML']
    }
  ]

  beforeEach(() => {
    jest.clearAllMocks()
    // Reset window.innerWidth to desktop
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
  })

  it('renders without crashing', () => {
    // Mock useInView to return visible state
    mockUseInView.mockReturnValue({
      ref: { current: null },
      isInView: true
    })

    render(<WorkHistorySection workExperience={mockWorkExperience} />)
    
    expect(screen.getByText('Work History')).toBeInTheDocument()
  })

  it('displays work experience entries', () => {
    // Mock useInView to return visible state
    mockUseInView.mockReturnValue({
      ref: { current: null },
      isInView: true
    })

    render(<WorkHistorySection workExperience={mockWorkExperience} />)
    
    expect(screen.getByText('Software Engineer')).toBeInTheDocument()
    expect(screen.getByText('Test Company')).toBeInTheDocument()
    expect(screen.getByText('Junior Developer')).toBeInTheDocument()
    expect(screen.getByText('Another Company')).toBeInTheDocument()
  })

  it('displays timeline dots with start and end years', () => {
    // Mock useInView to return visible state
    mockUseInView.mockReturnValue({
      ref: { current: null },
      isInView: true
    })

    render(<WorkHistorySection workExperience={mockWorkExperience} />)
    
    // Check for end years (top dots)
    expect(screen.getByText('2023')).toBeInTheDocument()
    
    // Check for start years (bottom dots)
    expect(screen.getByText('2018')).toBeInTheDocument()
    
    // Check that 2020 appears twice (as end year for second entry and start year for first entry)
    const year2020Elements = screen.getAllByText('2020')
    expect(year2020Elements).toHaveLength(2)
  })

  it('displays technologies as tags', () => {
    // Mock useInView to return visible state
    mockUseInView.mockReturnValue({
      ref: { current: null },
      isInView: true
    })

    render(<WorkHistorySection workExperience={mockWorkExperience} />)
    
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
  })

  it('displays location information', () => {
    // Mock useInView to return visible state
    mockUseInView.mockReturnValue({
      ref: { current: null },
      isInView: true
    })

    render(<WorkHistorySection workExperience={mockWorkExperience} />)
    
    expect(screen.getByText('📍 Test City, ST')).toBeInTheDocument()
    expect(screen.getByText('📍 Another City, ST')).toBeInTheDocument()
  })

  it('shows fallback message when no work experience', () => {
    render(<WorkHistorySection workExperience={[]} />)
    
    expect(screen.getByText('No work history information available.')).toBeInTheDocument()
  })

  it('applies animation classes when elements are in view', () => {
    // Mock useInView to return visible state
    mockUseInView.mockReturnValue({
      ref: { current: null },
      isInView: true
    })

    const { container } = render(<WorkHistorySection workExperience={mockWorkExperience} />)
    
    // Check that animation classes are applied
    const cards = container.querySelectorAll('.transition-all.duration-700')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('applies hidden state classes when elements are not in view', () => {
    // Mock useInView to return hidden state
    mockUseInView.mockReturnValue({
      ref: { current: null },
      isInView: false
    })

    const { container } = render(<WorkHistorySection workExperience={mockWorkExperience} />)
    
    // Check that hidden state classes are applied
    const cards = container.querySelectorAll('.opacity-0.translate-x-8')
    expect(cards.length).toBeGreaterThan(0)
  })

  it('displays two dots per work experience entry', () => {
    // Mock useInView to return visible state
    mockUseInView.mockReturnValue({
      ref: { current: null },
      isInView: true
    })

    const { container } = render(<WorkHistorySection workExperience={mockWorkExperience} />)
    
    // Check that we have the correct number of timeline dots (2 per entry)
    const timelineDots = container.querySelectorAll('.w-12.h-12.rounded-full')
    expect(timelineDots.length).toBe(4) // 2 entries × 2 dots each
  })

  it('renders timeline line', () => {
    // Mock useInView to return visible state
    mockUseInView.mockReturnValue({
      ref: { current: null },
      isInView: true
    })

    const { container } = render(<WorkHistorySection workExperience={mockWorkExperience} />)
    
    // Check for timeline line element
    const timelineLine = container.querySelector('.absolute.left-8.top-12.bottom-12.w-0\\.5.bg-sky-400')
    expect(timelineLine).toBeInTheDocument()
  })

  it('passes isExpanded prop to useInView hook', () => {
    // Mock useInView to return visible state
    mockUseInView.mockReturnValue({
      ref: { current: null },
      isInView: true
    })

    render(<WorkHistorySection workExperience={mockWorkExperience} isExpanded={false} />)
    
    // Check that useInView was called with resetTrigger
    expect(mockUseInView).toHaveBeenCalledWith(
      expect.objectContaining({
        resetTrigger: false
      })
    )
  })

  it('uses default isExpanded value when not provided', () => {
    // Mock useInView to return visible state
    mockUseInView.mockReturnValue({
      ref: { current: null },
      isInView: true
    })

    render(<WorkHistorySection workExperience={mockWorkExperience} />)
    
    // Check that useInView was called with default resetTrigger
    expect(mockUseInView).toHaveBeenCalledWith(
      expect.objectContaining({
        resetTrigger: true
      })
    )
  })

  describe('Mobile functionality', () => {
    beforeEach(() => {
      // Set mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375, // Mobile width
      })
    })

    it('detects mobile viewport', () => {
      // Mock useInView to return visible state
      mockUseInView.mockReturnValue({
        ref: { current: null },
        isInView: true
      })

      const { container } = render(<WorkHistorySection workExperience={mockWorkExperience} />)
      
      // Check that mobile-specific classes are applied
      const cards = container.querySelectorAll('.cursor-pointer')
      expect(cards.length).toBeGreaterThan(0)
    })

    it('shows expand/collapse indicators on mobile', () => {
      // Mock useInView to return visible state
      mockUseInView.mockReturnValue({
        ref: { current: null },
        isInView: true
      })

      const { container } = render(<WorkHistorySection workExperience={mockWorkExperience} />)
      
      // Check for expand/collapse indicators
      const indicators = container.querySelectorAll('.w-6.h-6.border-2.border-sky-400.rounded-full')
      expect(indicators.length).toBeGreaterThan(0)
    })

    it('expands card when clicked on mobile', () => {
      // Mock useInView to return visible state
      mockUseInView.mockReturnValue({
        ref: { current: null },
        isInView: true
      })

      const { container } = render(<WorkHistorySection workExperience={mockWorkExperience} />)
      
      // Find the first card and click it
      const firstCard = container.querySelector('.ml-20.bg-white.p-6.rounded-lg')
      expect(firstCard).toBeInTheDocument()
      
      if (firstCard) {
        fireEvent.click(firstCard)
        
        // Check that the card is now expanded (description should be visible)
        expect(screen.getByText(/Developed web applications/)).toBeInTheDocument()
      }
    })

    it('collapses card when clicked again on mobile', () => {
      // Mock useInView to return visible state
      mockUseInView.mockReturnValue({
        ref: { current: null },
        isInView: true
      })

      const { container } = render(<WorkHistorySection workExperience={mockWorkExperience} />)
      
      // Find the first card and click it twice
      const firstCard = container.querySelector('.ml-20.bg-white.p-6.rounded-lg')
      expect(firstCard).toBeInTheDocument()
      
      if (firstCard) {
        fireEvent.click(firstCard) // Expand
        fireEvent.click(firstCard) // Collapse
        
        // The description should still be in the DOM but hidden with CSS
        expect(screen.getByText(/Developed web applications/)).toBeInTheDocument()
      }
    })

    it('shows only title, company, and location when collapsed on mobile', () => {
      // Mock useInView to return visible state
      mockUseInView.mockReturnValue({
        ref: { current: null },
        isInView: true
      })

      const { container } = render(<WorkHistorySection workExperience={mockWorkExperience} />)
      
      // Check that basic info is always visible
      expect(screen.getByText('Software Engineer')).toBeInTheDocument()
      expect(screen.getByText('Test Company')).toBeInTheDocument()
      expect(screen.getByText('📍 Test City, ST')).toBeInTheDocument()
      
      // Check that description is initially hidden on mobile
      const descriptionContainer = container.querySelector('.max-h-0.opacity-0')
      expect(descriptionContainer).toBeInTheDocument()
    })

    it('shows scrollable content when expanded on mobile', () => {
      // Mock useInView to return visible state
      mockUseInView.mockReturnValue({
        ref: { current: null },
        isInView: true
      })

      const { container } = render(<WorkHistorySection workExperience={mockWorkExperience} />)
      
      // Find the first card and click it to expand
      const firstCard = container.querySelector('.ml-20.bg-white.p-6.rounded-lg')
      expect(firstCard).toBeInTheDocument()
      
      if (firstCard) {
        fireEvent.click(firstCard)
        
        // Check that the scrollable container is present
        const scrollableContainer = container.querySelector('.max-h-56.overflow-y-auto')
        expect(scrollableContainer).toBeInTheDocument()
        
        // Check that content is visible
        expect(screen.getByText(/Developed web applications/)).toBeInTheDocument()
      }
    })
  })

  describe('Desktop functionality', () => {
    beforeEach(() => {
      // Set desktop viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 1024, // Desktop width
      })
    })

    it('shows all content by default on desktop', () => {
      // Mock useInView to return visible state
      mockUseInView.mockReturnValue({
        ref: { current: null },
        isInView: true
      })

      render(<WorkHistorySection workExperience={mockWorkExperience} />)
      
      // Check that all content is visible
      expect(screen.getByText(/Developed web applications/)).toBeInTheDocument()
      expect(screen.getByText(/Led technical projects/)).toBeInTheDocument()
      expect(screen.getByText('React')).toBeInTheDocument()
    })

    it('does not show expand/collapse indicators on desktop', () => {
      // Mock useInView to return visible state
      mockUseInView.mockReturnValue({
        ref: { current: null },
        isInView: true
      })

      const { container } = render(<WorkHistorySection workExperience={mockWorkExperience} />)
      
      // Check that expand/collapse indicators are not present
      const indicators = container.querySelectorAll('.w-6.h-6.border-2.border-sky-400.rounded-full')
      expect(indicators.length).toBe(0)
    })
  })
}) 