"use client"

import React from 'react'
import { EducationEntry } from '../../types/cv'
import Image from 'next/image'

interface EducationSectionProps {
  education: EducationEntry[]
  firstHeadingRef?: React.RefObject<HTMLHeadingElement | null>
}

// Map of institution names to their logo paths
const institutionLogos: Record<string, string> = {
  'Boston University': '/logos/bu_logo.gif',
  'University of Southern Maine': '/logos/USM_headerLogo_blue.png'
}

const EducationSection: React.FC<EducationSectionProps> = ({ education, firstHeadingRef }) => {
  if (!education || education.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p>No education information available.</p>
      </div>
    )
  }

  return (
    <section className="mb-8">
      <h3 
        ref={firstHeadingRef}
        className="text-xl font-semibold text-gray-900 mb-4"
        tabIndex={-1}
      >
        Education
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((entry, index) => {
          const logoPath = institutionLogos[entry.institution]
          
          return (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col"
            >
              <div className="flex items-start space-x-4 flex-1">
                {logoPath && (
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={logoPath}
                        alt={`${entry.institution} logo`}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                  </div>
                )}
                <div className="flex-1 flex flex-col space-y-2">
                  <h4 className="font-medium text-gray-900">
                    {entry.institution}
                  </h4>
                  <p className="text-gray-700 text-sm">
                    {entry.degree}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4 pt-2 border-t border-gray-100">
                <span>{entry.location}</span>
                <span className="font-medium">{entry.yearRange}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default EducationSection 