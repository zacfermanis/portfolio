"use client"

import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

interface AnimationConfig {
  enabled: boolean
  quality: 'low' | 'medium' | 'high'
  particleCount: number
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
  }
  performance: {
    targetFPS: number
    maxMemoryUsage: number
    mobileOptimization: boolean
  }
  accessibility: {
    respectReducedMotion: boolean
    reducedMotionAlternative: 'static' | 'minimal' | 'disabled'
  }
}

interface ThreeJSBackgroundProps {
  enabled?: boolean
  quality?: 'low' | 'medium' | 'high'
  className?: string
}

const defaultConfig: AnimationConfig = {
  enabled: true,
  quality: 'high',
  particleCount: 1000,
  colors: {
    primary: '#1e40af', // blue-700 - darker for better visibility
    secondary: '#4338ca', // indigo-700 - darker for better visibility
    accent: '#7c3aed', // violet-600 - darker for better visibility
    background: 'transparent'
  },
  performance: {
    targetFPS: 60,
    maxMemoryUsage: 50 * 1024 * 1024, // 50MB
    mobileOptimization: true
  },
  accessibility: {
    respectReducedMotion: true,
    reducedMotionAlternative: 'minimal'
  }
}

const ThreeJSBackground: React.FC<ThreeJSBackgroundProps> = ({
  enabled = true,
  quality = 'high',
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const frameCountRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false })
  const rippleRef = useRef({ x: 0, y: 0, strength: 0, time: 0 })

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false

  // Adjust config based on props and preferences
  const config: AnimationConfig = {
    ...defaultConfig,
    enabled: enabled && !prefersReducedMotion,
    quality,
            particleCount: quality === 'low' ? 500 : quality === 'medium' ? 800 : 1500
  }

  // Debug logging
  console.log('ThreeJSBackground config:', config)

  useEffect(() => {
    console.log('ThreeJSBackground useEffect triggered', { enabled: config.enabled, canvasRef: !!canvasRef.current })
    
    if (!config.enabled || !canvasRef.current) {
      console.log('ThreeJSBackground early return - not enabled or no canvas ref')
      return
    }

    const canvas = canvasRef.current
    const container = canvas.parentElement

    if (!container) {
      console.log('ThreeJSBackground early return - no container')
      return
    }

    console.log('ThreeJSBackground container dimensions:', { width: container.clientWidth, height: container.clientHeight })

    // Initialize Three.js scene
    const scene = new THREE.Scene()
    scene.background = null // Transparent background
    sceneRef.current = scene

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 15
    cameraRef.current = camera

    // Create particle system
    const createParticleSystem = () => {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(config.particleCount * 3)
      const sizes = new Float32Array(config.particleCount)
      const velocities = new Float32Array(config.particleCount * 3)

      for (let i = 0; i < config.particleCount; i++) {
        // Random positions in a medium sphere
        const radius = 30
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(Math.random() * 2 - 1)
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = radius * Math.cos(phi)

        // Random sizes for visibility - bigger particles
        sizes[i] = Math.random() * 30 + 20

        // Gentle velocities for smooth movement
        velocities[i * 3] = (Math.random() - 0.5) * 0.03
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.03
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.03
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
      geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))

      return geometry
    }

    const particleGeometry = createParticleSystem()
    
    console.log('Particle geometry created:', {
      particleCount: config.particleCount,
      hasPosition: !!particleGeometry.attributes.position,
      hasSize: !!particleGeometry.attributes.size,
      hasVelocity: !!particleGeometry.attributes.velocity
    })

    // Create a fuzzy circular particle texture
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      const ctx = canvas.getContext('2d')!
      
      // Clear the canvas with transparent background
      ctx.clearRect(0, 0, 64, 64)
      
      // Create multiple gradients for a more fuzzy effect
      const gradient1 = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
      gradient1.addColorStop(0, 'rgba(255, 255, 255, 1)')
      gradient1.addColorStop(0.3, 'rgba(255, 255, 255, 0.9)')
      gradient1.addColorStop(0.6, 'rgba(255, 255, 255, 0.6)')
      gradient1.addColorStop(1, 'rgba(255, 255, 255, 0)')
      
      ctx.fillStyle = gradient1
      ctx.fillRect(0, 0, 64, 64)
      
      // Add a second, larger gradient for extra fuzziness
      const gradient2 = ctx.createRadialGradient(32, 32, 0, 32, 32, 48)
      gradient2.addColorStop(0, 'rgba(255, 255, 255, 0.3)')
      gradient2.addColorStop(0.5, 'rgba(255, 255, 255, 0.1)')
      gradient2.addColorStop(1, 'rgba(255, 255, 255, 0)')
      
      ctx.fillStyle = gradient2
      ctx.fillRect(0, 0, 64, 64)
      
      const texture = new THREE.CanvasTexture(canvas)
      texture.needsUpdate = true
      return texture
    }

    // Create particle material with basic PointsMaterial
    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color(0x1e40af), // Darker blue
      size: 10,
      transparent: true,
      opacity: 0.4,
      sizeAttenuation: true,
      map: createParticleTexture(),
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    // Create and add particle system to scene
    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)
    particlesRef.current = particles
    
    // Create additional particle systems with different colors
    const createColoredParticles = (color: number, count: number, radius: number) => {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(count * 3)
      const sizes = new Float32Array(count)
      const velocities = new Float32Array(count * 3)

      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(Math.random() * 2 - 1)
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = radius * Math.cos(phi)

        sizes[i] = Math.random() * 15 + 10

        velocities[i * 3] = (Math.random() - 0.5) * 0.02
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
      geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))

      const material = new THREE.PointsMaterial({
        color: color,
        size: 8,
        transparent: true,
        opacity: 0.4,
        sizeAttenuation: true,
        map: createParticleTexture(),
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })

      return new THREE.Points(geometry, material)
    }

    // Add different colored particle systems
    const lightBlueParticles = createColoredParticles(0x3b82f6, 150, 18) // Light blue
    const darkBlueParticles = createColoredParticles(0x1e3a8a, 100, 25) // Dark blue
    const navyParticles = createColoredParticles(0x0f172a, 80, 28) // Navy blue
    scene.add(lightBlueParticles)
    scene.add(darkBlueParticles)
    scene.add(navyParticles)

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rendererRef.current = renderer

    // Handle window resize
    const handleResize = () => {
      if (!container || !camera || !renderer) return
      
      const width = container.clientWidth
      const height = container.clientHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Mouse interaction handlers
    const handleMouseMove = (event: MouseEvent) => {
      if (!container) return
      
      const rect = container.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      
      mouseRef.current.x = x
      mouseRef.current.y = y
      mouseRef.current.isMoving = true
      
      // Create ripple effect
      rippleRef.current.x = x
      rippleRef.current.y = y
      rippleRef.current.strength = 1.0
      rippleRef.current.time = 0
    }

    const handleMouseLeave = () => {
      mouseRef.current.isMoving = false
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    // Animation loop
    const animate = () => {
      if (!scene || !camera || !renderer || !particles) return

      frameCountRef.current++

      // Update particle positions
      const positions = particleGeometry.attributes.position.array as Float32Array
      const velocities = particleGeometry.attributes.velocity.array as Float32Array

      // Debug: Log first few particle positions every 120 frames
      if (frameCountRef.current % 120 === 0) {
        console.log('Particle positions:', {
          first: [positions[0], positions[1], positions[2]],
          second: [positions[3], positions[4], positions[5]],
          velocities: [velocities[0], velocities[1], velocities[2]]
        })
      }

      // Update ripple effect
      if (rippleRef.current.strength > 0) {
        rippleRef.current.time += 0.016 // ~60fps
        rippleRef.current.strength = Math.max(0, rippleRef.current.strength - 0.02)
      }

      for (let i = 0; i < config.particleCount; i++) {
        const i3 = i * 3
        
        // Update positions based on velocities
        positions[i3] += velocities[i3]
        positions[i3 + 1] += velocities[i3 + 1]
        positions[i3 + 2] += velocities[i3 + 2]

        // Apply ripple distortion
        if (rippleRef.current.strength > 0) {
          const particleX = positions[i3] / 35 // Normalize to -1 to 1
          const particleY = positions[i3 + 1] / 35
          
          const distanceToRipple = Math.sqrt(
            (particleX - rippleRef.current.x) ** 2 + 
            (particleY - rippleRef.current.y) ** 2
          )
          
          if (distanceToRipple < 0.5) {
            const rippleEffect = Math.sin(distanceToRipple * 10 - rippleRef.current.time * 5) * 
                               rippleRef.current.strength * 
                               (1 - distanceToRipple / 0.5)
            
            positions[i3] += rippleEffect * 2
            positions[i3 + 1] += rippleEffect * 2
          }
        }

        // Keep particles within bounds
        const distance = Math.sqrt(
          positions[i3] ** 2 + 
          positions[i3 + 1] ** 2 + 
          positions[i3 + 2] ** 2
        )

        if (distance > 35) {
          const scale = 35 / distance
          positions[i3] *= scale
          positions[i3 + 1] *= scale
          positions[i3 + 2] *= scale
        }
      }

      particleGeometry.attributes.position.needsUpdate = true

      animationIdRef.current = requestAnimationFrame(animate)
      renderer.render(scene, camera)
    }

    console.log('Animation loop created, starting animation...')

    console.log('ThreeJSBackground initialized successfully')

    animate()
    setIsInitialized(true)

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }

      if (renderer) {
        renderer.dispose()
      }

      if (scene) {
        scene.clear()
      }
    }
  }, [config.enabled])

  if (!config.enabled) {
    return null
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: 'none'
        }}
      />
    </div>
  )
}

export default ThreeJSBackground 