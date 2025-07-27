"use client"

import React, { useState } from 'react'
import { SkillCategory } from '../../types/cv'

interface SkillsSectionProps {
  skills: SkillCategory[]
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
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

  if (!skills || skills.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No skills information available.</p>
      </div>
    )
  }

  return (
    <section className="mb-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Technical Skills
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((category, index) => {
          const isExpanded = expandedCards.has(index)
          return (
            <div
              key={index}
              className={`bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer transform hover:scale-105 ${
                isExpanded ? 'ring-2 ring-blue-500 shadow-lg' : ''
              }`}
              onClick={() => toggleCard(index)}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900 text-center flex-1">
                  {category.name}
                </h4>
                <div className={`ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                  <svg 
                    className="w-4 h-4 text-blue-600" 
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
              
              <div className={`flex flex-wrap gap-2 transition-all duration-300 ease-in-out overflow-hidden ${
                isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {!isExpanded && (
                <div className="text-center text-blue-600 text-xs font-medium mt-2">
                  Click to expand
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default SkillsSection 