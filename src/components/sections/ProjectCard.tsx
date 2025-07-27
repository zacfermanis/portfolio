import React, { useState } from 'react'
import { Card, H3, P, Button, Icon, Modal } from '@/components/ui'

interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  isPrivate?: boolean
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePlayClick = () => {
    setIsModalOpen(true)
  }

  return (
    <Card hover className="h-full flex flex-col project-card" padding="small">
      {/* Flexible Layout Structure */}
      <div className="flex flex-col h-full">
        {/* Logo Section - Fixed Height for desktop, flexible for mobile */}
        <div className="h-48 md:h-48 relative overflow-hidden rounded-t-lg project-card-section">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain bg-gray-50 transition-transform duration-300 hover:scale-105 rounded-t-lg p-4"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🚀</div>
                <div className="text-gray-600 text-sm font-medium">{project.title}</div>
              </div>
            </div>
          )}
          {project.featured && (
            <div className="absolute top-4 right-4 bg-sky-400 text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          )}
          {project.isPrivate && (
            <div className="absolute top-4 left-4 bg-gray-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <span className="text-xs">🔒</span>
              Private
            </div>
          )}
        </div>

        {/* Title Section - Flexible Height */}
        <div className="pt-4 pb-2 project-card-section">
          <H3 className="min-h-[4rem] flex items-center justify-center text-center leading-tight">{project.title}</H3>
        </div>

        {/* Screenshot Section - Uniform height for desktop/tablet, flexible for mobile */}
        <div className="project-screenshot">
          {/* EET Screenshot - Only for Elegant Elephant Travel project */}
          {project.id === "elegant-elephant" && (
            <img
              src="/EET.png"
              alt="Elegant Elephant Travel Website Screenshot"
              className="w-full h-48 md:h-full object-contain rounded-lg shadow-md bg-gray-50"
            />
          )}
          
          {/* Memory Bank Screenshot - Only for Memory Banks project */}
          {project.id === "memory-banks" && (
            <img
              src="/MemoryBankSite.png"
              alt="Memory Bank for Agents Website Screenshot"
              className="w-full h-48 md:h-full object-contain rounded-lg shadow-md bg-gray-50"
            />
          )}
          
          {/* AI-GA Tetris Screenshot - Only for AI-GA Tetris project */}
          {project.id === "ai-ga-tetris" && (
            <img
              src="/TetrisPic.png"
              alt="AI-GA Tetris Game Screenshot"
              className="w-full h-48 md:h-full object-contain rounded-lg shadow-md bg-gray-50"
            />
          )}
          
          {/* Bad Neighbor Screenshot - Only for Bad Neighbor project */}
          {project.id === "bad-neighbor" && (
            <img
              src="/badNeighbor screenshot.png"
              alt="Bad Neighbor Game Screenshot"
              className="w-full h-48 md:h-full object-contain rounded-lg shadow-md bg-gray-50"
            />
          )}
          
          {/* Fermanis & Sons Screenshot - Only for Fermanis & Sons project */}
          {project.id === "fermanis-lawncare" && (
            <img
              src="/fermanisAndSonsScreenshot.png"
              alt="Fermanis & Sons Lawn Care Website Screenshot"
              className="w-full h-48 md:h-full object-contain rounded-lg shadow-md bg-gray-50"
            />
          )}
          
          {/* Portfolio Screenshot - Only for Portfolio project */}
          {project.id === "portfolio" && (
            <img
              src="/thisSite.png"
              alt="Personal Portfolio Website Screenshot"
              className="w-full h-48 md:h-full object-contain rounded-lg shadow-md bg-gray-50"
            />
          )}
        </div>

        {/* Content Section - Flexible with improved spacing */}
        <div className="flex-1 flex flex-col project-card-section">
          <P variant="small" className="mb-4 flex-1 project-description">
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
            {/* Live Site Button - Left side */}
            {project.liveUrl && project.liveUrl !== "#" && (
              <Button
                href={project.liveUrl}
                external={true}
                variant="primary"
                size="small"
                className="flex-1"
              >
                <Icon name="globe" size="small" className="mr-1" />
                Live Site
              </Button>
            )}
            
            {/* Bad Neighbor specific buttons */}
            {project.id === "bad-neighbor" && (
              <>
                <Button
                  onClick={handlePlayClick}
                  variant="primary"
                  size="small"
                  className="flex-1"
                >
                  <Icon name="play" size="small" className="mr-1" />
                  Play
                </Button>
                <Button
                  disabled={true}
                  variant="outline"
                  size="small"
                  className="flex-1 opacity-50 cursor-not-allowed"
                >
                  Source Code
                  <span className="ml-2 text-xs">🔒</span>
                  <span className="ml-1 text-xs">Private</span>
                </Button>
              </>
            )}
            
            {/* Source Code Button - Right side (for non-Bad Neighbor projects) */}
            {project.id !== "bad-neighbor" && (
              <>
                {project.githubUrl && project.githubUrl !== "#" && !project.isPrivate && (
                  <Button
                    href={project.githubUrl}
                    external={true}
                    variant="outline"
                    size="small"
                    className="flex-1"
                  >
                    <Icon name="github" size="small" className="mr-1" />
                    Source Code
                  </Button>
                )}
                {project.isPrivate && (
                  <Button
                    disabled={true}
                    variant="outline"
                    size="small"
                    className="flex-1 opacity-50 cursor-not-allowed"
                  >
                    Source Code
                    <span className="ml-2 text-xs">🔒</span>
                    <span className="ml-1 text-xs">Private</span>
                  </Button>
                )}
              </>
            )}
        </div>
      </div>
      </div>
      
      {/* Bad Neighbor Modal */}
      {project.id === "bad-neighbor" && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Bad Neighbor Game"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">🚧</div>
            <p className="text-lg text-gray-700 mb-4">
              Game is currently being developed. Coming Soon!
            </p>
            <p className="text-sm text-gray-500">
              This LUA-based game using the Love2D framework is in active development.
            </p>
          </div>
        </Modal>
      )}
    </Card>
  )
}

export default ProjectCard 