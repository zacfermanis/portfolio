import '@testing-library/jest-dom';
import React from 'react';

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    };
  },
  useSearchParams() {
    return new URLSearchParams();
  },
  usePathname() {
    return '/';
  },
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: props => {
    // eslint-disable-next-line @next/next/no-img-element
    return React.createElement('img', props);
  },
}));

// Mock window.matchMedia for tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock Three.js for tests
jest.mock('three', () => ({
  Scene: jest.fn().mockImplementation(() => ({
    add: jest.fn(),
    clear: jest.fn(),
  })),
  PerspectiveCamera: jest.fn().mockImplementation(() => ({
    position: { z: 0 },
    aspect: 1,
    updateProjectionMatrix: jest.fn(),
  })),
  WebGLRenderer: jest.fn().mockImplementation(() => ({
    setSize: jest.fn(),
    setPixelRatio: jest.fn(),
    render: jest.fn(),
    dispose: jest.fn(),
  })),
  BufferGeometry: jest.fn().mockImplementation(() => ({
    setAttribute: jest.fn(),
    attributes: {
      position: { needsUpdate: false, array: new Float32Array(3000) },
      velocity: { needsUpdate: false, array: new Float32Array(3000) },
    },
  })),
  BufferAttribute: jest.fn(),
  ShaderMaterial: jest.fn().mockImplementation(() => ({
    uniforms: {
      time: { value: 0 },
      primaryColor: { value: {} },
      secondaryColor: { value: {} },
      accentColor: { value: {} },
    },
  })),
  Points: jest.fn().mockImplementation(() => ({
    geometry: {},
    material: {},
  })),
  Color: jest.fn(),
  AdditiveBlending: 'additive',
}));

// Mock canvas getContext for tests
HTMLCanvasElement.prototype.getContext = jest.fn().mockReturnValue({
  canvas: {},
  drawImage: jest.fn(),
  getImageData: jest.fn(),
  putImageData: jest.fn(),
  createImageData: jest.fn(),
  setTransform: jest.fn(),
  drawImage: jest.fn(),
  save: jest.fn(),
  fillText: jest.fn(),
  restore: jest.fn(),
  beginPath: jest.fn(),
  moveTo: jest.fn(),
  lineTo: jest.fn(),
  closePath: jest.fn(),
  stroke: jest.fn(),
  translate: jest.fn(),
  scale: jest.fn(),
  rotate: jest.fn(),
  arc: jest.fn(),
  fill: jest.fn(),
  measureText: jest.fn(() => ({ width: 0 })),
  clearRect: jest.fn(),
  removeEventListener: jest.fn(),
  addEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

// Suppress console warnings for SVG fill attributes and form submission errors in tests
const originalError = console.error;
console.error = (...args) => {
  const message = args[0];
  if (typeof message === 'string') {
    if (message.includes('Received `true` for a non-boolean attribute `fill`')) {
      return;
    }
    if (message.includes('Form submission error:')) {
      return;
    }
    if (message.includes('Error creating WebGL context')) {
      return;
    }
    if (message.includes('Not implemented: HTMLCanvasElement.prototype.getContext')) {
      return;
    }
  }
  // For all other errors, call the original
  originalError.apply(console, args);
};
