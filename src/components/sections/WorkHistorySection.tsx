"use client"

import React from 'react'
import { WorkExperienceEntry } from '../../types/cv'
import { useInView } from '../../utils/useInView'

interface WorkExperienceItemProps {
  entry: WorkExperienceEntry
  index: number
  isExpanded: boolean
}

const WorkExperienceItem: React.FC<WorkExperienceItemProps> = ({ entry, index, isExpanded }) => {
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
        className={`
          ml-20 bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-700 ease-out
          ${isInView 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 translate-x-8'
          }
        `}
      >
        {/* Header */}
        <div className="mb-3">
          <h4 className="text-lg font-semibold text-gray-900">
            {entry.title}
          </h4>
          <p className="text-sky-600 font-medium">
            {entry.company}
          </p>
        </div>
        
        {/* Location */}
        <p className="text-sm text-gray-600 mb-3">
          📍 {entry.location}
        </p>
        
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
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkHistorySection 