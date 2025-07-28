import { SettingsManager } from './settingsManager'
import { ParticleSettings, DEFAULT_PARTICLE_SETTINGS } from '../types/particle'

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  length: 0,
  key: jest.fn(),
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

describe('SettingsManager', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('getDefaultSettings', () => {
    it('should return default particle settings', () => {
      const defaults = SettingsManager.getDefaultSettings()
      
      expect(defaults).toEqual(DEFAULT_PARTICLE_SETTINGS)
    })
  })

  describe('validateSettings', () => {
    it('should return validated settings for valid input', () => {
      const validSettings: ParticleSettings = {
        particleCount: 100,
        particleSpeed: 0.5,
        particleSize: 2,
        particleOpacity: 0.8,
        colorScheme: 'blue',
        customColor: '#1e40af',
        rippleEffectEnabled: true,
        quality: 'medium',
        modalOpen: false
      }
      
      const result = SettingsManager.validateSettings(validSettings)
      
      expect(result).toEqual(validSettings)
    })

    it('should correct invalid particle count', () => {
      const invalidSettings: Partial<ParticleSettings> = {
        particleCount: -1, // Invalid
        particleSpeed: 0.5,
        particleSize: 2,
        particleOpacity: 0.8,
        colorScheme: 'blue',
        customColor: '#1e40af',
        rippleEffectEnabled: true,
        quality: 'medium',
        modalOpen: false
      }
      
      const result = SettingsManager.validateSettings(invalidSettings)
      
      expect(result.particleCount).toBe(100) // Should be corrected to min value
    })

    it('should correct invalid particle speed', () => {
      const invalidSettings: Partial<ParticleSettings> = {
        particleCount: 100,
        particleSpeed: 15.0, // Invalid (should be clamped to max)
        particleSize: 2,
        particleOpacity: 0.8,
        colorScheme: 'blue',
        customColor: '#1e40af',
        rippleEffectEnabled: true,
        quality: 'medium',
        modalOpen: false
      }
      
      const result = SettingsManager.validateSettings(invalidSettings)
      
      expect(result.particleSpeed).toBe(10.0) // Should be clamped to max value
    })

    it('should correct invalid particle size', () => {
      const invalidSettings: Partial<ParticleSettings> = {
        particleCount: 100,
        particleSpeed: 0.5,
        particleSize: 0, // Invalid (should be corrected to min)
        particleOpacity: 0.8,
        colorScheme: 'blue',
        customColor: '#1e40af',
        rippleEffectEnabled: true,
        quality: 'medium',
        modalOpen: false
      }
      
      const result = SettingsManager.validateSettings(invalidSettings)
      
      expect(result.particleSize).toBe(0.5) // Should be corrected to min value
    })

    it('should correct invalid particle opacity', () => {
      const invalidSettings: Partial<ParticleSettings> = {
        particleCount: 100,
        particleSpeed: 0.5,
        particleSize: 2,
        particleOpacity: 1.5, // Invalid (should be clamped to max)
        colorScheme: 'blue',
        customColor: '#1e40af',
        rippleEffectEnabled: true,
        quality: 'medium',
        modalOpen: false
      }
      
      const result = SettingsManager.validateSettings(invalidSettings)
      
      expect(result.particleOpacity).toBe(1.0) // Should be clamped to max value
    })

    it('should correct invalid color scheme', () => {
      const invalidSettings = {
        particleCount: 100,
        particleSpeed: 0.5,
        particleSize: 2,
        particleOpacity: 0.8,
        colorScheme: 'invalid', // Invalid
        customColor: '#1e40af',
        rippleEffectEnabled: true,
        quality: 'medium',
        modalOpen: false
      } as unknown as ParticleSettings
      
      const result = SettingsManager.validateSettings(invalidSettings)
      
      expect(result.colorScheme).toBe('blue') // Should be corrected to default
    })

    it('should correct invalid quality', () => {
      const invalidSettings = {
        particleCount: 100,
        particleSpeed: 0.5,
        particleSize: 2,
        particleOpacity: 0.8,
        colorScheme: 'blue',
        customColor: '#1e40af',
        rippleEffectEnabled: true,
        quality: 'invalid', // Invalid
        modalOpen: false
      } as unknown as ParticleSettings
      
      const result = SettingsManager.validateSettings(invalidSettings)
      
      expect(result.quality).toBe('high') // Should be corrected to default
    })
  })

  describe('loadSettings', () => {
    it('should load settings from localStorage', () => {
      const savedSettings = {
        particleCount: 150,
        particleSpeed: 0.7,
        particleSize: 2,
        particleOpacity: 0.9,
        colorScheme: 'purple',
        customColor: '#7c3aed',
        rippleEffectEnabled: false,
        quality: 'high',
        modalOpen: false
      }
      
      localStorageMock.getItem.mockReturnValue(JSON.stringify(savedSettings))
      
      const result = SettingsManager.loadSettings()
      
      expect(localStorageMock.getItem).toHaveBeenCalledWith('particleSettings')
      expect(result).toEqual(savedSettings)
    })

    it('should return default settings when localStorage is empty', () => {
      localStorageMock.getItem.mockReturnValue(null)
      
      const result = SettingsManager.loadSettings()
      const defaults = SettingsManager.getDefaultSettings()
      
      expect(result).toEqual(defaults)
    })

    it('should return default settings when localStorage has invalid JSON', () => {
      localStorageMock.getItem.mockReturnValue('invalid json')
      
      const result = SettingsManager.loadSettings()
      const defaults = SettingsManager.getDefaultSettings()
      
      expect(result).toEqual(defaults)
    })

    it('should return validated settings when localStorage has invalid settings', () => {
      const invalidSettings = {
        particleCount: -1, // Invalid
        particleSpeed: 0.5,
        particleSize: 2,
        particleOpacity: 0.8,
        colorScheme: 'blue',
        customColor: '#1e40af',
        rippleEffectEnabled: true,
        quality: 'medium',
        modalOpen: false
      }
      
      localStorageMock.getItem.mockReturnValue(JSON.stringify(invalidSettings))
      
      const result = SettingsManager.loadSettings()
      
      // Should return validated settings, not the original invalid ones
      expect(result.particleCount).toBe(100) // Should be corrected
      expect(result).not.toEqual(invalidSettings)
    })

    it('should handle localStorage unavailability gracefully', () => {
      // Simulate localStorage being unavailable
      const originalLocalStorage = window.localStorage
      delete (window as unknown as { localStorage: unknown }).localStorage
      
      const result = SettingsManager.loadSettings()
      const defaults = SettingsManager.getDefaultSettings()
      
      expect(result).toEqual(defaults)
      
      // Restore localStorage
      ;(window as unknown as { localStorage: unknown }).localStorage = originalLocalStorage
    })
  })

  describe('saveSettings', () => {
    it('should save valid settings to localStorage', () => {
      const settings: ParticleSettings = {
        particleCount: 150,
        particleSpeed: 0.7,
        particleSize: 2,
        particleOpacity: 0.9,
        colorScheme: 'purple',
        customColor: '#7c3aed',
        rippleEffectEnabled: false,
        quality: 'high',
        modalOpen: false
      }
      
      SettingsManager.saveSettings(settings)
      
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'particleSettings',
        expect.any(String)
      )
      
      // Verify the saved content by parsing it back
      const savedCall = localStorageMock.setItem.mock.calls[0]
      const savedSettings = JSON.parse(savedCall[1])
      expect(savedSettings).toEqual(settings)
    })

    it('should save validated settings when input is invalid', () => {
      const invalidSettings: ParticleSettings = {
        particleCount: -1, // Invalid
        particleSpeed: 0.5,
        particleSize: 2,
        particleOpacity: 0.8,
        colorScheme: 'blue',
        customColor: '#1e40af',
        rippleEffectEnabled: true,
        quality: 'medium',
        modalOpen: false
      }
      
      SettingsManager.saveSettings(invalidSettings)
      
      // Should save validated settings, not the original invalid ones
      const savedCall = localStorageMock.setItem.mock.calls[0]
      const savedSettings = JSON.parse(savedCall[1])
      expect(savedSettings.particleCount).toBe(100) // Should be corrected
    })

    it('should handle localStorage unavailability gracefully', () => {
      // Simulate localStorage being unavailable
      const originalLocalStorage = window.localStorage
      delete (window as unknown as { localStorage: unknown }).localStorage
      
      const settings: ParticleSettings = {
        particleCount: 100,
        particleSpeed: 0.5,
        particleSize: 2,
        particleOpacity: 0.8,
        colorScheme: 'blue',
        customColor: '#1e40af',
        rippleEffectEnabled: true,
        quality: 'medium',
        modalOpen: false
      }
      
      // Should not throw an error
      expect(() => SettingsManager.saveSettings(settings)).not.toThrow()
      
      // Restore localStorage
      ;(window as unknown as { localStorage: unknown }).localStorage = originalLocalStorage
    })

    it('should handle localStorage errors gracefully', () => {
      localStorageMock.setItem.mockImplementation(() => {
        throw new Error('localStorage error')
      })
      
      const settings: ParticleSettings = {
        particleCount: 100,
        particleSpeed: 0.5,
        particleSize: 2,
        particleOpacity: 0.8,
        colorScheme: 'blue',
        customColor: '#1e40af',
        rippleEffectEnabled: true,
        quality: 'medium',
        modalOpen: false
      }
      
      // Should not throw an error
      expect(() => SettingsManager.saveSettings(settings)).not.toThrow()
    })
  })

  describe('resetToDefaults', () => {
    it('should reset settings to defaults and save to localStorage', () => {
      const result = SettingsManager.resetToDefaults()
      const defaults = SettingsManager.getDefaultSettings()
      
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'particleSettings',
        JSON.stringify(defaults)
      )
      expect(result).toEqual(defaults)
    })

    it('should handle localStorage unavailability gracefully', () => {
      // Simulate localStorage being unavailable
      const originalLocalStorage = window.localStorage
      delete (window as unknown as { localStorage: unknown }).localStorage
      
      const result = SettingsManager.resetToDefaults()
      const defaults = SettingsManager.getDefaultSettings()
      
      expect(result).toEqual(defaults)
      
      // Restore localStorage
      ;(window as unknown as { localStorage: unknown }).localStorage = originalLocalStorage
    })
  })
}) 