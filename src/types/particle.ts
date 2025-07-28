// Particle Background Controls Types

export type ColorScheme = 'blue' | 'purple' | 'green' | 'orange' | 'custom';

export type QualityLevel = 'low' | 'medium' | 'high';

export interface ColorSchemeConfig {
  name: string;
  primary: string;    // Main particle color
  secondary: string;  // Secondary particle color
  accent: string;     // Accent particle color
  background: string; // Background color
}

export interface ParticleSettings {
  // Particle System Controls
  particleCount: number;        // 100-2000
  particleSpeed: number;        // 0.1-3.0 multiplier
  particleSize: number;         // 0.5-2.0 multiplier
  particleOpacity: number;      // 0.1-1.0
  
  // Visual Controls
  colorScheme: ColorScheme;     // 'blue' | 'purple' | 'green' | 'orange' | 'custom'
  customColor: string;          // RGB hex value
  
  // Performance Controls
  quality: QualityLevel;
  
  // Effect Controls
  rippleEffectEnabled: boolean;
  
  // UI State
  modalOpen: boolean;
}

// Control Component Props
export interface ControlSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  onChange: (value: number) => void;
  disabled?: boolean;
}

export interface ControlCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export interface ColorPickerProps {
  value: ColorScheme;
  customColor: string;
  onChange: (scheme: ColorScheme, customColor?: string) => void;
  disabled?: boolean;
}

export interface QualitySelectorProps {
  value: QualityLevel;
  onChange: (quality: QualityLevel) => void;
  disabled?: boolean;
}

// Modal Component Props
export interface ParticleControlsModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: ParticleSettings;
  onSettingsChange: (settings: Partial<ParticleSettings>) => void;
  onReset: () => void;
}

export interface ParticleControlsPanelProps {
  settings: ParticleSettings;
  onSettingsChange: (settings: Partial<ParticleSettings>) => void;
  onReset: () => void;
}

// Enhanced ThreeJS Background Props
export interface ThreeJSBackgroundProps {
  enabled?: boolean;
  quality?: QualityLevel;
  className?: string;
  // New props for dynamic control
  settings?: ParticleSettings;
  onSettingsChange?: (settings: Partial<ParticleSettings>) => void;
}

// Color Scheme Configurations
export const COLOR_SCHEMES: Record<ColorScheme, ColorSchemeConfig> = {
  blue: {
    name: 'Blue',
    primary: '#1e40af',
    secondary: '#3b82f6', 
    accent: '#1e3a8a',
    background: 'transparent'
  },
  purple: {
    name: 'Purple',
    primary: '#7c3aed',
    secondary: '#a855f7',
    accent: '#581c87',
    background: 'transparent'
  },
  green: {
    name: 'Green',
    primary: '#059669',
    secondary: '#10b981',
    accent: '#047857',
    background: 'transparent'
  },
  orange: {
    name: 'Orange',
    primary: '#ea580c',
    secondary: '#f97316',
    accent: '#c2410c',
    background: 'transparent'
  },
  custom: {
    name: 'Custom',
    primary: '#1e40af',
    secondary: '#3b82f6',
    accent: '#1e3a8a',
    background: 'transparent'
  }
};

// Default Settings
export const DEFAULT_PARTICLE_SETTINGS: ParticleSettings = {
  particleCount: 1000,
  particleSpeed: 1.0,
  particleSize: 1.0,
  particleOpacity: 0.4,
  colorScheme: 'blue',
  customColor: '#1e40af',
  quality: 'high',
  rippleEffectEnabled: true,
  modalOpen: false
};

// Settings Validation Ranges
export const SETTINGS_RANGES = {
  particleCount: { min: 100, max: 2000, step: 50 },
  particleSpeed: { min: 0.1, max: 10.0, step: 0.1 },
  particleSize: { min: 0.5, max: 2.0, step: 0.1 },
  particleOpacity: { min: 0.1, max: 1.0, step: 0.05 }
} as const;

// Quality Level Configurations
export const QUALITY_CONFIGS: Record<QualityLevel, { particleCount: number; effects: boolean }> = {
  low: {
    particleCount: 500,
    effects: false
  },
  medium: {
    particleCount: 800,
    effects: true
  },
  high: {
    particleCount: 1500,
    effects: true
  }
}; 