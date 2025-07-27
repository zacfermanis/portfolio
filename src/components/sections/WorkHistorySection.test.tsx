import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import WorkHistorySection from './WorkHistorySection'
import { useInView } from '../../utils/useInView'

// Mock the useInView hook
jest.mock('../../utils/useInView', () => ({
  useInView: jest.fn()
}))

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
}) 