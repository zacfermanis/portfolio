"use client"

import React from 'react'
import { WorkExperienceEntry } from '../../types/cv'

interface WorkHistorySectionProps {
  workExperience: WorkExperienceEntry[]
}

const WorkHistorySection: React.FC<WorkHistorySectionProps> = ({ workExperience }) => {
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
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Timeline dot with date */}
              <div className="absolute left-2 top-6 flex items-center z-20">
                <div className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-xs font-bold text-white text-center leading-tight">
                    {entry.yearRange}
                  </span>
                </div>
              </div>
              
              <div className="ml-20">
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
            </div>
          ))}
          
          {/* Start dot at the bottom */}
          <div className="relative">
            <div className="absolute left-2 top-0 flex items-center z-20">
              <div className="w-12 h-12 bg-sky-400 rounded-full flex items-center justify-center shadow-md">
                <span className="text-xs font-bold text-white text-center leading-tight">
                  START
                </span>
              </div>
            </div>
            <div className="ml-20">
              <div className="h-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkHistorySection 