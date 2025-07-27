"use client"

import React, { useState, useRef, useEffect } from 'react'
import CVDetailsButton from './CVDetailsButton'
import CVDetailsPanel from './CVDetailsPanel'
import EducationSection from './EducationSection'
import WorkHistorySection from './WorkHistorySection'
import { CVData } from '../../types/cv'

interface CVDetailsProps {
  cvData: CVData
}

const CVDetails: React.FC<CVDetailsProps> = ({ cvData }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const firstHeadingRef = useRef<HTMLHeadingElement>(null)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  // Focus management for accessibility
  useEffect(() => {
    if (isExpanded && firstHeadingRef.current) {
      // Small delay to ensure the panel is fully expanded
      setTimeout(() => {
        firstHeadingRef.current?.focus()
      }, 350)
    }
  }, [isExpanded])

  return (
    <div className="w-full">
      <CVDetailsButton
        isExpanded={isExpanded}
        onToggle={handleToggle}
      />
      
      <CVDetailsPanel isExpanded={isExpanded}>
        <div ref={panelRef}>
          <EducationSection 
            education={cvData.education}
            firstHeadingRef={firstHeadingRef}
          />
          <WorkHistorySection 
            workExperience={cvData.workExperience}
            isExpanded={isExpanded}
          />
        </div>
      </CVDetailsPanel>
    </div>
  )
}

export default CVDetails 