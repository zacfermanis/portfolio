import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Projects from './Projects'

describe('Projects', () => {
  const mockProjects = [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'A modern e-commerce platform',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js'],
      liveUrl: 'https://project1.com',
      githubUrl: 'https://github.com/user/project1',
      category: 'web' as const
    },
    {
      id: '2',
      title: 'Mobile App',
      description: 'A mobile application',
      image: '/project2.jpg',
      technologies: ['React Native', 'Firebase'],
      liveUrl: 'https://project2.com',
      category: 'mobile' as const
    },
    {
      id: '3',
      title: 'API Service',
      description: 'A backend API service',
      image: '/project3.jpg',
      technologies: ['Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/user/project3',
      category: 'backend' as const
    }
  ]

  const defaultProps = {
    title: 'My Projects',
    subtitle: 'Check out some of my recent work',
    projects: mockProjects
  }

  it('renders with all required props', () => {
    render(<Projects {...defaultProps} />)
    
    expect(screen.getByText('My Projects')).toBeInTheDocument()
    expect(screen.getByText('Check out some of my recent work')).toBeInTheDocument()
  })

  it('renders section with correct id', () => {
    const { container } = render(<Projects {...defaultProps} />)
    
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'projects')
  })

  it('renders all projects by default', () => {
    render(<Projects {...defaultProps} />)
    
    expect(screen.getByText('E-commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('Mobile App')).toBeInTheDocument()
    expect(screen.getByText('API Service')).toBeInTheDocument()
  })

  it('renders filter buttons for all categories', () => {
    render(<Projects {...defaultProps} />)
    
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /web/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /mobile/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /backend/i })).toBeInTheDocument()
  })

  it('filters projects when category button is clicked', () => {
    render(<Projects {...defaultProps} />)
    
    // Click on web filter
    const webButton = screen.getByRole('button', { name: /web/i })
    fireEvent.click(webButton)
    
    // Should only show web projects
    expect(screen.getByText('E-commerce Platform')).toBeInTheDocument()
    expect(screen.queryByText('Mobile App')).not.toBeInTheDocument()
    expect(screen.queryByText('API Service')).not.toBeInTheDocument()
  })

  it('shows all projects when all filter is clicked', () => {
    render(<Projects {...defaultProps} />)
    
    // First filter to web
    const webButton = screen.getByRole('button', { name: /web/i })
    fireEvent.click(webButton)
    
    // Then click all
    const allButton = screen.getByRole('button', { name: /all/i })
    fireEvent.click(allButton)
    
    // Should show all projects
    expect(screen.getByText('E-commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('Mobile App')).toBeInTheDocument()
    expect(screen.getByText('API Service')).toBeInTheDocument()
  })

  it('highlights active filter button', () => {
    render(<Projects {...defaultProps} />)
    
    const webButton = screen.getByRole('button', { name: /web/i })
    fireEvent.click(webButton)
    
    // Web button should have primary variant (active)
    expect(webButton).toHaveClass('bg-blue-600', 'text-white')
    
    // All button should have outline variant (inactive)
    const allButton = screen.getByRole('button', { name: /all/i })
    expect(allButton).toHaveClass('border-2', 'border-blue-600', 'text-blue-600')
  })

  it('shows no projects message when no projects exist', () => {
    render(<Projects {...defaultProps} projects={[]} />)
    
    expect(screen.getByText('No projects found for the selected category.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /view all projects/i })).toBeInTheDocument()
  })

  it('resets filter when view all projects is clicked', () => {
    render(<Projects {...defaultProps} projects={[]} />)
    
    // Click view all projects
    const viewAllButton = screen.getByRole('button', { name: /view all projects/i })
    fireEvent.click(viewAllButton)
    
    // Should still show no projects message
    expect(screen.getByText('No projects found for the selected category.')).toBeInTheDocument()
  })

  it('renders get in touch button when projects are shown', () => {
    render(<Projects {...defaultProps} />)
    
    const getInTouchButton = screen.getByRole('link', { name: /get in touch/i })
    expect(getInTouchButton).toBeInTheDocument()
    expect(getInTouchButton).toHaveAttribute('href', '#contact')
  })

  it('does not render get in touch button when no projects are shown', () => {
    render(<Projects {...defaultProps} projects={[]} />)
    
    const getInTouchButton = screen.queryByRole('link', { name: /get in touch/i })
    expect(getInTouchButton).not.toBeInTheDocument()
  })

  it('renders with responsive grid layout', () => {
    const { container } = render(<Projects {...defaultProps} />)
    
    const grid = container.querySelector('.grid')
    expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3')
  })

  it('renders with proper section styling', () => {
    const { container } = render(<Projects {...defaultProps} />)
    
    const section = container.querySelector('section')
    expect(section).toHaveClass('py-20', 'bg-gradient-to-br', 'from-blue-50', 'via-indigo-50', 'to-purple-50', 'border-t', 'border-slate-200', 'relative', 'overflow-hidden')
  })

  it('renders filter buttons with proper styling', () => {
    const { container } = render(<Projects {...defaultProps} />)
    
    const filterContainer = container.querySelector('.flex.flex-wrap.justify-center.gap-4')
    expect(filterContainer).toBeInTheDocument()
  })

  it('has proper heading structure', () => {
    render(<Projects {...defaultProps} />)
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('My Projects')
  })
}) 