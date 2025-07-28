"use client"

import React, { useCallback } from 'react';
import { ControlCheckboxProps } from '@/types/particle';

const ControlCheckbox: React.FC<ControlCheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled = false
}) => {
  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  }, [onChange]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (disabled) return;

    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      onChange(!checked);
    }
  }, [checked, onChange, disabled]);

  const checkboxId = `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <input
          type="checkbox"
          id={checkboxId}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="sr-only"
          aria-label={label}
        />
        <label
          htmlFor={checkboxId}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          className={`
            flex items-center justify-center w-5 h-5 border-2 rounded cursor-pointer
            transition-all duration-200 ease-in-out
            ${checked 
              ? 'bg-sky-500 border-sky-500' 
              : 'bg-white border-gray-300 hover:border-sky-400'
            }
            ${disabled 
              ? 'opacity-50 cursor-not-allowed' 
              : 'focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
            }
          `}
          role="checkbox"
          aria-checked={checked}
        >
          {checked && (
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </label>
      </div>
      
      <label
        htmlFor={checkboxId}
        className={`
          text-sm font-semibold cursor-pointer select-none
          ${disabled 
            ? 'text-gray-400 cursor-not-allowed' 
            : 'text-gray-900 hover:text-gray-700'
          }
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default ControlCheckbox; 