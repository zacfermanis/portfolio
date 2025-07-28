"use client"

import React from 'react';
import { ParticleControlsPanelProps, SETTINGS_RANGES, ColorScheme, QualityLevel } from '@/types/particle';
import ControlSlider from '@/components/ui/ControlSlider';
import ControlCheckbox from '@/components/ui/ControlCheckbox';
import ColorPicker from '@/components/ui/ColorPicker';
import QualitySelector from '@/components/ui/QualitySelector';
import { Button } from '@/components/ui';

const ParticleControlsPanel: React.FC<ParticleControlsPanelProps> = ({
  settings,
  onSettingsChange,
  onReset
}) => {
  const handleSliderChange = (key: keyof typeof settings, value: number) => {
    onSettingsChange({ [key]: value });
  };

  const handleCheckboxChange = (key: keyof typeof settings, value: boolean) => {
    onSettingsChange({ [key]: value });
  };

  const handleColorChange = (scheme: string, customColor?: string) => {
    onSettingsChange({ 
      colorScheme: scheme as ColorScheme,
      ...(customColor && { customColor })
    });
  };

  const handleQualityChange = (quality: string) => {
    onSettingsChange({ quality: quality as QualityLevel });
  };

  return (
    <div className="space-y-4">
      {/* Information Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">
          About the Particle Background
        </h3>
        <p className="text-sm text-gray-700">
          This interactive ThreeJS particle system creates a dynamic background effect. 
          You can customize the number of particles, their movement speed, size, and colors 
          to create your preferred visual experience. All changes are applied in real-time 
          and your settings will be remembered for future visits.
        </p>
      </div>

      {/* Particle System Controls */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">
          Particle System Controls
        </h3>
        
        <div className="space-y-3">
          <ControlSlider
            label="Particle Count"
            value={settings.particleCount}
            min={SETTINGS_RANGES.particleCount.min}
            max={SETTINGS_RANGES.particleCount.max}
            step={SETTINGS_RANGES.particleCount.step}
            onChange={(value) => handleSliderChange('particleCount', value)}
          />

          <ControlSlider
            label="Particle Speed"
            value={settings.particleSpeed}
            min={SETTINGS_RANGES.particleSpeed.min}
            max={SETTINGS_RANGES.particleSpeed.max}
            step={SETTINGS_RANGES.particleSpeed.step}
            unit="x"
            onChange={(value) => handleSliderChange('particleSpeed', value)}
          />

          <ControlSlider
            label="Particle Size"
            value={settings.particleSize}
            min={SETTINGS_RANGES.particleSize.min}
            max={SETTINGS_RANGES.particleSize.max}
            step={SETTINGS_RANGES.particleSize.step}
            unit="x"
            onChange={(value) => handleSliderChange('particleSize', value)}
          />

          <ControlSlider
            label="Particle Opacity"
            value={settings.particleOpacity}
            min={SETTINGS_RANGES.particleOpacity.min}
            max={SETTINGS_RANGES.particleOpacity.max}
            step={SETTINGS_RANGES.particleOpacity.step}
            unit="%"
            onChange={(value) => handleSliderChange('particleOpacity', value)}
          />
        </div>
      </div>

      {/* Visual Controls */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">
          Visual Controls
        </h3>
        
        <div className="space-y-3">
          <ColorPicker
            value={settings.colorScheme}
            customColor={settings.customColor}
            onChange={handleColorChange}
          />

          <ControlCheckbox
            label="Enable Ripple Effect"
            checked={settings.rippleEffectEnabled}
            onChange={(value) => handleCheckboxChange('rippleEffectEnabled', value)}
          />
        </div>
      </div>

      {/* Performance Controls */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-gray-900">
          Performance Controls
        </h3>
        
        <QualitySelector
          value={settings.quality}
          onChange={handleQualityChange}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-gray-200">
        <Button
          onClick={onReset}
          variant="outline"
          size="medium"
          className="flex-1"
        >
          Reset to Defaults
        </Button>
      </div>
    </div>
  );
};

export default ParticleControlsPanel; 