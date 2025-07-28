"use client"

import React, { useState, useCallback } from 'react';
import { QualitySelectorProps, QualityLevel } from '@/types/particle';

const QUALITY_OPTIONS: Array<{ value: QualityLevel; label: string; description: string; impact: string }> = [
  {
    value: 'low',
    label: 'Low',
    description: 'Better performance, fewer particles',
    impact: 'Fast'
  },
  {
    value: 'medium',
    label: 'Medium',
    description: 'Balanced performance and quality',
    impact: 'Moderate'
  },
  {
    value: 'high',
    label: 'High',
    description: 'Best visual quality, more particles',
    impact: 'Heavy'
  }
];

const QualitySelector: React.FC<QualitySelectorProps> = ({
  value,
  onChange,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleQualityChange = useCallback((quality: QualityLevel) => {
    setIsOpen(false);
    onChange(quality);
  }, [onChange]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        setIsOpen(!isOpen);
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  }, [disabled, isOpen]);

  const currentOption = QUALITY_OPTIONS.find(option => option.value === value);

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-900">
        Quality Level
      </label>
      
      <div className="relative">
        {/* Dropdown Button */}
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={`
            w-full flex items-center justify-between px-3 py-2 text-sm border rounded-md
            ${disabled 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-white border-gray-300 text-gray-700 hover:border-sky-400 focus:border-sky-500'
            }
            focus:outline-none focus:ring-2 focus:ring-sky-500
          `}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label="Select quality level"
        >
          <div className="flex items-center space-x-2">
            <span>{currentOption?.label}</span>
            <span className="text-xs text-gray-500">({currentOption?.impact})</span>
          </div>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            <ul role="listbox" className="py-1">
              {QUALITY_OPTIONS.map((option) => (
                <li key={option.value} role="option" aria-selected={value === option.value}>
                  <button
                    type="button"
                    onClick={() => handleQualityChange(option.value)}
                    className={`
                      w-full text-left px-3 py-2 text-sm hover:bg-gray-100
                      ${value === option.value ? 'bg-sky-50 text-sky-700' : 'text-gray-700'}
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <div className="text-xs text-gray-500">{option.description}</div>
                      </div>
                      <span className="text-xs text-gray-400">({option.impact})</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Performance Indicator */}
      <div className="flex items-center space-x-2 text-xs text-gray-500">
        <span>Performance Impact:</span>
        <div className="flex space-x-1">
          {QUALITY_OPTIONS.map((option, index) => (
            <div
              key={option.value}
              className={`
                w-2 h-2 rounded-full
                ${value === option.value 
                  ? 'bg-sky-500' 
                  : index < QUALITY_OPTIONS.findIndex(o => o.value === value)
                    ? 'bg-gray-300'
                    : 'bg-gray-100'
                }
              `}
              title={`${option.label}: ${option.description}`}
            />
          ))}
        </div>
        <span className="text-xs font-medium">{currentOption?.impact}</span>
      </div>
    </div>
  );
};

export default QualitySelector; 