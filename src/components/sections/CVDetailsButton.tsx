"use client"

import React from 'react'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

interface CVDetailsButtonProps {
  isExpanded: boolean
  onToggle: () => void
}

const CVDetailsButton: React.FC<CVDetailsButtonProps> = ({
  isExpanded,
  onToggle
}) => {
  return (
    <Button
      variant="outline"
      size="large"
      onClick={onToggle}
      className="group transition-all duration-300 ease-in-out w-full"
      aria-expanded={isExpanded}
      aria-controls="cv-details-panel"
      aria-label={isExpanded ? "Hide Full Resume" : "View Full Resume"}
    >
      <span className="flex items-center gap-3">
        {isExpanded ? "Hide Full Resume" : "View Full Resume"}
        <Icon
          name="arrow"
          size="small"
          className={`transition-transform duration-300 ease-in-out ${
            isExpanded ? 'rotate-180' : 'rotate-0'
          }`}
          aria-label={isExpanded ? "Collapse" : "Expand"}
        />
      </span>
    </Button>
  )
}

export default CVDetailsButton 