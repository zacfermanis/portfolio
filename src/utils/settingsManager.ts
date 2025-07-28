import { 
  ParticleSettings, 
  DEFAULT_PARTICLE_SETTINGS, 
  SETTINGS_RANGES,
  ColorScheme 
} from '@/types/particle';

const STORAGE_KEY = 'particleSettings';

/**
 * Settings Manager for Particle Background Controls
 * Handles localStorage persistence, validation, and default settings
 */
export class SettingsManager {
  /**
   * Load settings from localStorage with fallback to defaults
   */
  static loadSettings(): ParticleSettings {
    try {
      if (typeof window === 'undefined') {
        return { ...DEFAULT_PARTICLE_SETTINGS };
      }

      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        return { ...DEFAULT_PARTICLE_SETTINGS };
      }

      const parsed = JSON.parse(stored);
      return this.validateSettings(parsed);
    } catch (error) {
      console.warn('Failed to load particle settings from localStorage:', error);
      return { ...DEFAULT_PARTICLE_SETTINGS };
    }
  }

  /**
   * Save settings to localStorage with error handling
   */
  static saveSettings(settings: ParticleSettings): void {
    try {
      if (typeof window === 'undefined') {
        return;
      }

      const validated = this.validateSettings(settings);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(validated));
    } catch (error) {
      console.warn('Failed to save particle settings to localStorage:', error);
    }
  }

  /**
   * Get default settings
   */
  static getDefaultSettings(): ParticleSettings {
    return { ...DEFAULT_PARTICLE_SETTINGS };
  }

  /**
   * Reset settings to defaults and save to localStorage
   */
  static resetToDefaults(): ParticleSettings {
    const defaults = this.getDefaultSettings();
    this.saveSettings(defaults);
    return defaults;
  }

  /**
   * Validate and correct settings to ensure they're within valid ranges
   */
  static validateSettings(settings: Partial<ParticleSettings>): ParticleSettings {
    const validated = { ...DEFAULT_PARTICLE_SETTINGS, ...settings };

    // Validate particle count
    validated.particleCount = Math.max(
      SETTINGS_RANGES.particleCount.min,
      Math.min(SETTINGS_RANGES.particleCount.max, validated.particleCount)
    );

    // Validate particle speed
    validated.particleSpeed = Math.max(
      SETTINGS_RANGES.particleSpeed.min,
      Math.min(SETTINGS_RANGES.particleSpeed.max, validated.particleSpeed)
    );

    // Validate particle size
    validated.particleSize = Math.max(
      SETTINGS_RANGES.particleSize.min,
      Math.min(SETTINGS_RANGES.particleSize.max, validated.particleSize)
    );

    // Validate particle opacity
    validated.particleOpacity = Math.max(
      SETTINGS_RANGES.particleOpacity.min,
      Math.min(SETTINGS_RANGES.particleOpacity.max, validated.particleOpacity)
    );

    // Validate color scheme
    if (!this.isValidColorScheme(validated.colorScheme)) {
      validated.colorScheme = 'blue';
    }

    // Validate custom color (must be valid hex)
    if (!this.isValidHexColor(validated.customColor)) {
      validated.customColor = '#1e40af';
    }

    // Validate quality level
    if (!['low', 'medium', 'high'].includes(validated.quality)) {
      validated.quality = 'high';
    }

    // Validate boolean values
    validated.rippleEffectEnabled = Boolean(validated.rippleEffectEnabled);
    validated.modalOpen = Boolean(validated.modalOpen);

    return validated;
  }

  /**
   * Check if localStorage is available
   */
  static isLocalStorageAvailable(): boolean {
    try {
      if (typeof window === 'undefined') {
        return false;
      }
      
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Clear all stored settings
   */
  static clearSettings(): void {
    try {
      if (typeof window === 'undefined') {
        return;
      }
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear particle settings:', error);
    }
  }

  /**
   * Update specific settings and save to localStorage
   */
  static updateSettings(updates: Partial<ParticleSettings>): ParticleSettings {
    const current = this.loadSettings();
    const updated = { ...current, ...updates };
    const validated = this.validateSettings(updated);
    this.saveSettings(validated);
    return validated;
  }

  /**
   * Get settings for a specific quality level
   */
  static getSettingsForQuality(quality: 'low' | 'medium' | 'high'): Partial<ParticleSettings> {
    const qualityConfigs = {
      low: { particleCount: 500, effects: false },
      medium: { particleCount: 800, effects: true },
      high: { particleCount: 1500, effects: true }
    };

    const config = qualityConfigs[quality];
    return {
      particleCount: config.particleCount,
      rippleEffectEnabled: config.effects,
      quality
    };
  }

  /**
   * Validate color scheme
   */
  private static isValidColorScheme(scheme: string): scheme is ColorScheme {
    return ['blue', 'purple', 'green', 'orange', 'custom'].includes(scheme);
  }

  /**
   * Validate hex color
   */
  private static isValidHexColor(color: string): boolean {
    return /^#[0-9A-F]{6}$/i.test(color);
  }

  /**
   * Get storage usage information
   */
  static getStorageInfo(): { used: number; available: number; percentage: number } {
    try {
      if (typeof window === 'undefined') {
        return { used: 0, available: 0, percentage: 0 };
      }

      const stored = localStorage.getItem(STORAGE_KEY);
      const used = stored ? new Blob([stored]).size : 0;
      const available = 5 * 1024 * 1024; // 5MB typical localStorage limit
      const percentage = (used / available) * 100;

      return { used, available, percentage };
    } catch {
      return { used: 0, available: 0, percentage: 0 };
    }
  }
}

// Export convenience functions with proper binding
export const loadParticleSettings = SettingsManager.loadSettings.bind(SettingsManager);
export const saveParticleSettings = SettingsManager.saveSettings.bind(SettingsManager);
export const resetParticleSettings = SettingsManager.resetToDefaults.bind(SettingsManager);
export const updateParticleSettings = SettingsManager.updateSettings.bind(SettingsManager); 