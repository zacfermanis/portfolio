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
      <div className="space-y-6">
        {workExperience.map((entry, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Timeline indicator */}
            <div className="absolute left-0 top-6 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1.5"></div>
            
            <div className="ml-4">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {entry.title}
                  </h4>
                  <p className="text-blue-600 font-medium">
                    {entry.company}
                  </p>
                </div>
                <div className="text-sm text-gray-500 mt-1 sm:mt-0">
                  {entry.yearRange}
                </div>
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
      </div>
    </section>
  )
}

export default WorkHistorySection 