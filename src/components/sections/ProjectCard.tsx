import React from 'react'
import { Card, H3, P, Button, Icon } from '@/components/ui'

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card hover className="h-full flex flex-col">
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-t-lg">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <div className="text-gray-600 text-sm font-medium">{project.title}</div>
            </div>
          </div>
        )}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="flex-1 p-6 flex flex-col">
        <H3 className="mb-2">{project.title}</H3>
        <P variant="small" className="mb-4 flex-1">
          {project.description}
        </P>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              variant="primary"
              size="small"
              className="flex-1"
            >
              <Icon name="arrow" size="small" className="mr-1" />
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant="outline"
              size="small"
              className="flex-1"
            >
              <Icon name="github" size="small" className="mr-1" />
              Source Code
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard 