"use client"

import React, { useState } from 'react'
import { H2, P, Button } from '@/components/ui'
import ProjectCard from './ProjectCard'

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  category: 'web' | 'mobile' | 'backend' | 'ai' | 'games' | 'other'
}

interface ProjectsProps {
  title: string
  subtitle: string
  projects: Project[]
}

const Projects: React.FC<ProjectsProps> = ({ title, subtitle, projects }) => {
  const [filter, setFilter] = useState<string>('all')

  // Get unique categories from projects
  const categories = ['all', ...Array.from(new Set(projects.map(p => p.category)))]

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-t border-slate-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      <div className="relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <H2 className="mb-4">{title}</H2>
          <P variant="lead" className="max-w-3xl mx-auto">
            {subtitle}
          </P>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? 'primary' : 'outline'}
              size="small"
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <P variant="muted" className="text-lg">
              No projects found for the selected category.
            </P>
            <Button
              onClick={() => setFilter('all')}
              variant="outline"
              size="medium"
              className="mt-4"
            >
              View All Projects
            </Button>
          </div>
        )}

        {/* View More Button */}
        {filteredProjects.length > 0 && (
          <div className="text-center mt-12">
            <Button href="#contact" variant="primary" size="large">
              Get In Touch
            </Button>
          </div>
        )}
      </div>
      </div>
    </section>
  )
}

export default Projects 