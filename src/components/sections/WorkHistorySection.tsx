"use client"

import React, { useState, useEffect } from 'react'
import { WorkExperienceEntry } from '../../types/cv'
import { useInView } from '../../utils/useInView'

interface WorkExperienceItemProps {
  entry: WorkExperienceEntry
  index: number
  isExpanded: boolean
  isMobile: boolean
  isCardExpanded: boolean
  onCardToggle: (index: number) => void
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({ 
  entry, 
  index, 
  isExpanded, 
  isMobile,
  isCardExpanded,
  onCardToggle
}) => {
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.5,
    rootMargin: '-50px 0px',
    triggerOnce: true,
    resetTrigger: isExpanded
  })

  // Parse the year range to extract start and end years
  const parseYearRange = (yearRange: string) => {
    if (yearRange.includes('-')) {
      const [startYear, endYear] = yearRange.split('-')
      return { startYear: startYear.trim(), endYear: endYear.trim() }
    }
    // Handle single year entries
    return { startYear: yearRange, endYear: yearRange }
  }

  const { startYear, endYear } = parseYearRange(entry.yearRange)

  const handleCardClick = () => {
    if (isMobile) {
      onCardToggle(index)
    }
  }

  return (
    <div className="relative">
      {/* Top timeline dot with end year - always visible */}
      <div className="absolute left-2 top-6 flex items-center z-20">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md ${endYear === 'Present' ? 'bg-green-500' : 'bg-sky-400'}`}>
          <span className="text-xs font-bold text-white text-center leading-tight">
            {endYear}
          </span>
        </div>
      </div>
      
      {/* Card content - animated */}
      <div 
        ref={ref}
        onClick={handleCardClick}
        className={`
          ml-20 bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-700 ease-out
          ${isInView 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-8'
          }
          ${isMobile ? 'cursor-pointer' : ''}
        `}
      >
        {/* Header - always visible */}
        <div className="mb-3">
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-lg font-semibold text-gray-900">
              {entry.title}
            </h4>
            <p className="text-sm text-gray-600">
              📍 {entry.location}
            </p>
          </div>
          <p className="text-sky-600 font-medium">
            {entry.company}
          </p>
        </div>
        
        {/* Expandable content - hidden on mobile when collapsed */}
        <div className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${isMobile && !isCardExpanded ? 'max-h-0 opacity-0' : isMobile ? 'max-h-64 opacity-100' : 'max-h-none opacity-100'}
        `}>
          {/* Scrollable content container */}
          <div className={`
            ${isMobile && isCardExpanded ? 'max-h-56 overflow-y-auto pr-2' : 'overflow-visible'}
          `}>
            {/* Description */}
            <div className="space-y-2 mb-4">
              {entry.description.map((item, itemIndex) => (
                <p key={itemIndex} className="text-sm text-gray-700 leading-relaxed">
                  • {item}
                </p>
              ))}
            </div>
            
            {/* Technologies */}
            {entry.technologies && entry.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {entry.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile expand/collapse indicator */}
        {isMobile && (
          <div className="flex justify-center mt-3">
            <div className={`
              w-6 h-6 border-2 border-sky-400 rounded-full flex items-center justify-center transition-transform duration-300
              ${isCardExpanded ? 'rotate-180' : ''}
            `}>
              <svg 
                className="w-3 h-3 text-sky-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Bottom timeline dot with start year - aligned with card bottom */}
      <div className="absolute left-2 bottom-6 flex items-center z-20">
        <div className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center shadow-md">
          <span className="text-xs font-bold text-white text-center leading-tight">
            {startYear}
          </span>
        </div>
      </div>
    </div>
  )
}

interface WorkHistorySectionProps {
  workExperience: WorkExperienceEntry[]
  isExpanded?: boolean
}

const WorkHistorySection: React.FC<WorkHistorySectionProps> = ({ 
  workExperience, 
  isExpanded = true 
}) => {
  const [isMobile, setIsMobile] = useState(false)
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set())

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleCardToggle = (index: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  if (!workExperience || workExperience.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No work history information available.</p>
      </div>
    )
  }

  return (
    <section className="mb-12">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Work History
      </h3>
      <div className="relative">
        {/* Timeline line - positioned to start at first dot center and end at last dot center */}
        <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-sky-400 z-10"></div>
        
        <div className="space-y-6">
          {workExperience.map((entry, index) => (
            <WorkExperienceItem 
              key={index} 
              entry={entry} 
              index={index}
              isExpanded={isExpanded}
              isMobile={isMobile}
              isCardExpanded={expandedCards.has(index)}
              onCardToggle={handleCardToggle}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkHistorySection 