"use client"

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ControlSliderProps } from '@/types/particle';

const ControlSlider: React.FC<ControlSliderProps> = ({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange,
  disabled = false
}) => {
  const [localValue, setLocalValue] = useState<number>(value);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>();
  const sliderRef = useRef<HTMLInputElement>(null);

  // Update local value when prop changes
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  // Debounced onChange handler
  const debouncedOnChange = useCallback((newValue: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      onChange(newValue);
    }, 100); // 100ms debounce
  }, [onChange]);

  // Handle slider change
  const handleSliderChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setLocalValue(newValue);
    debouncedOnChange(newValue);
  }, [debouncedOnChange]);

  // Handle input change (for number input)
  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    if (!isNaN(newValue)) {
      const clampedValue = Math.max(min, Math.min(max, newValue));
      setLocalValue(clampedValue);
      debouncedOnChange(clampedValue);
    }
  }, [min, max, debouncedOnChange]);

  // Handle key navigation
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (disabled) return;

    let newValue = localValue;
    const stepAmount = event.shiftKey ? step * 10 : step;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        newValue = Math.max(min, localValue - stepAmount);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        newValue = Math.min(max, localValue + stepAmount);
        break;
      case 'Home':
        event.preventDefault();
        newValue = min;
        break;
      case 'End':
        event.preventDefault();
        newValue = max;
        break;
      case 'PageDown':
        event.preventDefault();
        newValue = Math.max(min, localValue - stepAmount * 10);
        break;
      case 'PageUp':
        event.preventDefault();
        newValue = Math.min(max, localValue + stepAmount * 10);
        break;
      default:
        return;
    }

    setLocalValue(newValue);
    debouncedOnChange(newValue);
  }, [localValue, min, max, step, disabled, debouncedOnChange]);

  // Calculate percentage for visual feedback
  const percentage = ((localValue - min) / (max - min)) * 100;

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Format value for display
  const formatValue = (val: number): string => {
    if (unit === 'x') {
      return `${val.toFixed(1)}x`;
    }
    if (unit === '%') {
      return `${Math.round(val * 100)}%`;
    }
    if (unit) {
      return `${val}${unit}`;
    }
    return val.toString();
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label 
          htmlFor={`slider-${label.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-sm font-semibold text-gray-900"
        >
          {label}
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={localValue}
            min={min}
            max={max}
            step={step}
            onChange={handleInputChange}
            disabled={disabled}
            className="w-16 px-2 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-sky-500 focus:border-sky-500 disabled:bg-gray-100 disabled:text-gray-500 text-gray-900"
            aria-label={`${label} value`}
          />
          {unit && (
            <span className="text-sm text-gray-700">
              {unit}
            </span>
          )}
        </div>
      </div>
      
      <div className="relative h-6 flex items-center">
        {/* Background track */}
        <div 
          className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 rounded-lg pointer-events-none z-0 -translate-y-1/2"
          aria-hidden="true"
        />
        
        {/* Visual progress indicator */}
        <div 
          className="absolute top-1/2 left-0 h-2 bg-sky-500 rounded-lg pointer-events-none transition-all duration-200 z-5 -translate-y-1/2"
          style={{ width: `${percentage}%` }}
          aria-hidden="true"
        />
        
        <input
          ref={sliderRef}
          type="range"
          id={`slider-${label.toLowerCase().replace(/\s+/g, '-')}`}
          min={min}
          max={max}
          step={step}
          value={localValue}
          onChange={handleSliderChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={`
            relative z-20 w-full h-6 bg-transparent rounded-lg appearance-none cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-sky-500
            disabled:opacity-50 disabled:cursor-not-allowed
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:bg-sky-500
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:hover:bg-sky-600
            [&::-webkit-slider-thumb]:focus:ring-2
            [&::-webkit-slider-thumb]:focus:ring-sky-500
            [&::-webkit-slider-thumb]:focus:ring-offset-2
            [&::-webkit-slider-thumb]:z-30
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:bg-sky-500
            [&::-moz-range-thumb]:border-0
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:cursor-pointer
            [&::-moz-range-thumb]:hover:bg-sky-600
            [&::-moz-range-track]:bg-transparent
            [&::-moz-range-track]:rounded-lg
            [&::-moz-range-track]:h-2
          `}
          aria-label={`${label} slider`}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={localValue}
          aria-valuetext={formatValue(localValue)}
          role="slider"
          tabIndex={disabled ? -1 : 0}
        />
      </div>
      
      {/* Min/Max labels */}
      <div className="flex justify-between text-xs text-gray-600">
        <span>{formatValue(min)}</span>
        <span>{formatValue(max)}</span>
      </div>
    </div>
  );
};

export default ControlSlider; 