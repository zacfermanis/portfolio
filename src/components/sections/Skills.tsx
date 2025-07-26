import React from 'react'
import { H2, H3, P, Card } from '@/components/ui'

interface SkillCategory {
  category: string
  technologies: string[]
}

interface SkillsProps {
  title: string
  subtitle: string
  description: string
  skills: SkillCategory[]
}

const Skills: React.FC<SkillsProps> = ({ title, subtitle, description, skills }) => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <H2 className="mb-4">{title}</H2>
          <P variant="lead" className="max-w-3xl mx-auto mb-4">
            {subtitle}
          </P>
          <P className="max-w-4xl mx-auto text-gray-600">
            {description}
          </P>
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <Card key={index} className="h-full">
              <div className="p-6">
                <H3 className="mb-6 text-center text-blue-600">{skillCategory.category}</H3>
                
                <div className="space-y-3">
                  {skillCategory.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {skills.map((skillCategory, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {skillCategory.technologies.length}
                </div>
                <P variant="small" className="text-gray-600">{skillCategory.category}</P>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 