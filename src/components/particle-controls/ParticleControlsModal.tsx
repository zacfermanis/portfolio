"use client"

import React from 'react';
import { ParticleControlsModalProps } from '@/types/particle';
import Modal from '@/components/ui/Modal';
import ParticleControlsPanel from './ParticleControlsPanel';

const ParticleControlsModal: React.FC<ParticleControlsModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSettingsChange,
  onReset
}) => {

  const handleClose = () => {
    onSettingsChange({ modalOpen: false });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Particle Background Controls"
      showCloseButton={true}
    >
      <ParticleControlsPanel
        settings={settings}
        onSettingsChange={onSettingsChange}
        onReset={onReset}
      />
    </Modal>
  );
};

export default ParticleControlsModal; 