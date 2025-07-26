"use client"

import React from 'react'
import { SkillCategory } from '../../types/cv'

interface SkillsSectionProps {
  skills: SkillCategory[]
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
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
        {skills.map((category, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <h4 className="font-semibold text-gray-900 mb-3 text-center">
              {category.name}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="inline-block px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection 