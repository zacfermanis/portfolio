// Particle Controls Components
export { default as ParticleControlsModal } from './ParticleControlsModal'
export { default as ParticleControlsPanel } from './ParticleControlsPanel'

// Re-export types for convenience
export type {
  ParticleSettings,
  ColorScheme,
  ColorSchemeConfig,
  ParticleControlsModalProps,
  ParticleControlsPanelProps,
  ControlSliderProps,
  ControlCheckboxProps,
  ColorPickerProps,
  QualitySelectorProps
} from '../../types/particle'

// Re-export settings manager
export { SettingsManager } from '../../utils/settingsManager' 