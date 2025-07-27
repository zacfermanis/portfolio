"use client"

import React, { useState } from 'react'
import { H2, H3, P, Card } from '@/components/ui'

// Add CSS for staggered animations
const skillAnimationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .skill-item-animate {
    animation: fadeInUp 0.3s ease-out forwards;
  }
`

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
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  const toggleCard = (index: number) => {
    const newExpandedCards = new Set(expandedCards)
    if (newExpandedCards.has(index)) {
      newExpandedCards.delete(index)
    } else {
      newExpandedCards.add(index)
    }
    setExpandedCards(newExpandedCards)
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <style dangerouslySetInnerHTML={{ __html: skillAnimationStyles }} />
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
          {skills.map((skillCategory, index) => {
            const isExpanded = expandedCards.has(index)
            return (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105 ${
                  isExpanded ? 'ring-2 ring-sky-400 shadow-lg' : 'hover:shadow-md'
                }`}
                onClick={() => toggleCard(index)}
              >
                <Card className="h-full">
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <H3 className="text-gray-900">{skillCategory.category}</H3>
                    </div>
                    
                    <div className={`relative ${isExpanded ? 'transition-all duration-500 ease-in-out h-auto min-h-24' : 'h-24'}`}>
                      {/* Skills List - Animated */}
                      <div 
                        className={`${isExpanded ? 'transition-all duration-500 ease-in-out opacity-100 transform translate-y-0 relative' : 'opacity-0 transform translate-y-4 pointer-events-none absolute inset-0'}`}
                      >
                        <div className="space-y-3">
                          {skillCategory.technologies.map((tech, techIndex) => (
                            <div 
                              key={techIndex} 
                              className={`flex items-center ${isExpanded ? 'skill-item-animate' : ''}`}
                              style={{
                                animationDelay: isExpanded ? `${techIndex * 50}ms` : '0ms'
                              }}
                            >
                              <div className="w-2 h-2 bg-sky-400 rounded-full mr-3"></div>
                              <span className="text-gray-700 font-medium">{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Skill Count - Animated */}
                      <div 
                        className={`${isExpanded ? 'transition-all duration-500 ease-in-out opacity-0 transform scale-95 -translate-y-2 pointer-events-none absolute inset-0 flex flex-col justify-center items-center' : 'opacity-100 transform scale-100 translate-y-0 absolute inset-0 flex flex-col justify-center items-center'}`}
                      >
                        <div className="text-center text-sky-400">
                          <div className="text-4xl font-bold mb-1">
                            {skillCategory.technologies.length}
                          </div>
                          <div className="text-sm font-medium text-gray-900 mb-2">
                            skills
                          </div>
                          <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                            <svg 
                              className="w-5 h-5 text-sky-400 mx-auto" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M19 9l-7 7-7-7" 
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )
          })}
        </div>


      </div>
    </section>
  )
}

export default Skills 