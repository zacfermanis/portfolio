import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProjectCard from './ProjectCard'

describe('ProjectCard', () => {
  const defaultProject = {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://project1.com',
    githubUrl: 'https://github.com/user/project1'
  }

  it('renders project with all required information', () => {
    render(<ProjectCard project={defaultProject} />)
    
    expect(screen.getByText('E-commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('A modern e-commerce platform built with React and Node.js')).toBeInTheDocument()
    expect(screen.getByAltText('E-commerce Platform')).toBeInTheDocument()
  })

  it('renders project image with correct src', () => {
    render(<ProjectCard project={defaultProject} />)
    
    const image = screen.getByAltText('E-commerce Platform')
    expect(image).toHaveAttribute('src', '/project1.jpg')
  })

  it('renders all technology tags', () => {
    render(<ProjectCard project={defaultProject} />)
    
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('MongoDB')).toBeInTheDocument()
  })

  it('renders live site button when liveUrl is provided', () => {
    render(<ProjectCard project={defaultProject} />)
    
    const liveButton = screen.getByRole('link', { name: /live site/i })
    expect(liveButton).toBeInTheDocument()
    expect(liveButton).toHaveAttribute('href', 'https://project1.com')
  })

  it('renders source code button when githubUrl is provided', () => {
    render(<ProjectCard project={defaultProject} />)
    
    const githubButton = screen.getByRole('link', { name: /source code/i })
    expect(githubButton).toBeInTheDocument()
    expect(githubButton).toHaveAttribute('href', 'https://github.com/user/project1')
  })

  it('does not render live site button when liveUrl is not provided', () => {
    const projectWithoutLive = {
      ...defaultProject,
      liveUrl: undefined
    }
    
    render(<ProjectCard project={projectWithoutLive} />)
    
    const liveButton = screen.queryByRole('link', { name: /live site/i })
    expect(liveButton).not.toBeInTheDocument()
  })

  it('does not render source code button when githubUrl is not provided', () => {
    const projectWithoutGithub = {
      ...defaultProject,
      githubUrl: undefined
    }
    
    render(<ProjectCard project={projectWithoutGithub} />)
    
    const githubButton = screen.queryByRole('link', { name: /source code/i })
    expect(githubButton).not.toBeInTheDocument()
  })

  it('renders featured badge when project is featured', () => {
    const featuredProject = {
      ...defaultProject,
      featured: true
    }
    
    render(<ProjectCard project={featuredProject} />)
    
    expect(screen.getByText('Featured')).toBeInTheDocument()
  })

  it('does not render featured badge when project is not featured', () => {
    render(<ProjectCard project={defaultProject} />)
    
    const featuredBadge = screen.queryByText('Featured')
    expect(featuredBadge).not.toBeInTheDocument()
  })

  it('renders technology tags with proper styling', () => {
    const { container } = render(<ProjectCard project={defaultProject} />)
    
    const techTags = container.querySelectorAll('.bg-gray-100.text-gray-700.rounded.text-xs.font-medium')
    expect(techTags).toHaveLength(3) // React, Node.js, MongoDB
    
    techTags.forEach(tag => {
      expect(tag).toHaveClass('px-2', 'py-1', 'bg-gray-100', 'text-gray-700', 'rounded', 'text-xs', 'font-medium')
    })
  })

  it('renders featured badge with proper styling', () => {
    const featuredProject = {
      ...defaultProject,
      featured: true
    }
    
    render(<ProjectCard project={featuredProject} />)
    
    const featuredBadge = screen.getByText('Featured')
    expect(featuredBadge).toHaveClass('bg-blue-600', 'text-white', 'px-2', 'py-1', 'rounded-full', 'text-xs', 'font-medium')
  })

  it('renders with proper card structure', () => {
    const { container } = render(<ProjectCard project={defaultProject} />)
    
    const card = container.querySelector('.bg-white')
    expect(card).toHaveClass('h-full', 'flex', 'flex-col')
  })

  it('renders image with hover effects', () => {
    render(<ProjectCard project={defaultProject} />)
    
    const image = screen.getByAltText('E-commerce Platform')
    expect(image).toHaveClass('transition-transform', 'duration-300', 'hover:scale-105')
  })

  it('renders action buttons with proper layout', () => {
    render(<ProjectCard project={defaultProject} />)
    
    const buttonContainer = screen.getByRole('link', { name: /live site/i }).parentElement
    expect(buttonContainer).toHaveClass('flex', 'gap-3', 'mt-auto')
  })

  it('renders buttons with flex-1 class for equal width', () => {
    render(<ProjectCard project={defaultProject} />)
    
    const liveButton = screen.getByRole('link', { name: /live site/i })
    const githubButton = screen.getByRole('link', { name: /source code/i })
    
    expect(liveButton).toHaveClass('flex-1')
    expect(githubButton).toHaveClass('flex-1')
  })

  it('renders with proper heading structure', () => {
    render(<ProjectCard project={defaultProject} />)
    
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveTextContent('E-commerce Platform')
  })
}) 