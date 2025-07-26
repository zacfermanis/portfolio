"use client"

import React from 'react'

interface CVDetailsPanelProps {
  isExpanded: boolean
  children: React.ReactNode
}

const CVDetailsPanel: React.FC<CVDetailsPanelProps> = ({
  isExpanded,
  children
}) => {
  return (
    <div
      id="cv-details-panel"
      className={`
        overflow-hidden transition-all duration-300 ease-in-out
        ${isExpanded ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'}
      `}
      {...(!isExpanded && { 'aria-hidden': 'true' })}
    >
      <div
        className={`
          transform transition-all duration-300 ease-in-out delay-100
          ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          mt-6 p-6 pb-8 bg-gray-50 rounded-lg border border-gray-200
        `}
      >
        {children}
      </div>
    </div>
  )
}

export default CVDetailsPanel 