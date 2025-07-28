"use client"

import React, { useState, useCallback } from 'react';
import { ColorPickerProps, COLOR_SCHEMES, ColorScheme } from '@/types/particle';

const ColorPicker: React.FC<ColorPickerProps> = ({
  value,
  customColor,
  onChange,
  disabled = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomPicker, setShowCustomPicker] = useState(false);

  const handleSchemeChange = useCallback((scheme: ColorScheme) => {
    if (scheme === 'custom') {
      setShowCustomPicker(true);
      setIsOpen(false);
    } else {
      setShowCustomPicker(false);
      setIsOpen(false);
      onChange(scheme);
    }
  }, [onChange]);

  const handleCustomColorChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    onChange('custom', newColor);
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

  const currentScheme = COLOR_SCHEMES[value];
  const displayColor = value === 'custom' ? customColor : currentScheme.primary;

  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-900">
        Color Scheme
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
          aria-label="Select color scheme"
        >
          <div className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded border border-gray-300"
              style={{ backgroundColor: displayColor }}
              aria-hidden="true"
            />
            <span>{currentScheme.name}</span>
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
              {Object.entries(COLOR_SCHEMES).map(([key, scheme]) => (
                <li key={key} role="option" aria-selected={value === key}>
                  <button
                    type="button"
                    onClick={() => handleSchemeChange(key as ColorScheme)}
                    className={`
                      w-full flex items-center space-x-3 px-3 py-2 text-sm text-left hover:bg-gray-100
                      ${value === key ? 'bg-sky-50 text-sky-700' : 'text-gray-700'}
                    `}
                  >
                    <div 
                      className="w-4 h-4 rounded border border-gray-300"
                      style={{ backgroundColor: scheme.primary }}
                      aria-hidden="true"
                    />
                    <span>{scheme.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Custom Color Picker */}
      {showCustomPicker && (
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Custom Color
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="color"
              value={customColor}
              onChange={handleCustomColorChange}
              disabled={disabled}
              className="w-12 h-10 border border-gray-300 rounded cursor-pointer disabled:opacity-50"
              aria-label="Select custom color"
            />
            <input
              type="text"
              value={customColor}
              onChange={handleCustomColorChange}
              disabled={disabled}
              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 disabled:bg-gray-100"
              placeholder="#000000"
              pattern="^#[0-9A-Fa-f]{6}$"
              aria-label="Custom color hex value"
            />
          </div>
        </div>
      )}

      {/* Color Preview */}
      <div className="flex items-center space-x-2 text-xs text-gray-500">
        <span>Preview:</span>
        <div className="flex space-x-1">
          <div 
            className="w-3 h-3 rounded border border-gray-300"
            style={{ backgroundColor: currentScheme.primary }}
            title="Primary color"
          />
          <div 
            className="w-3 h-3 rounded border border-gray-300"
            style={{ backgroundColor: currentScheme.secondary }}
            title="Secondary color"
          />
          <div 
            className="w-3 h-3 rounded border border-gray-300"
            style={{ backgroundColor: currentScheme.accent }}
            title="Accent color"
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker; 