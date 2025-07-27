"use client"

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeJSDebug: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const animationIdRef = useRef<number | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const frameCountRef = useRef(0)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const container = canvas.parentElement

    if (!container) return

    console.log('ThreeJSDebug: Initializing...')

    // Initialize Three.js scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000) // Black background for debugging
    sceneRef.current = scene

    // Set up camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 30
    cameraRef.current = camera

    // Create particle system
    const createParticleSystem = () => {
      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(500 * 3) // Fewer particles for debugging
      const sizes = new Float32Array(500)
      const velocities = new Float32Array(500 * 3)

      for (let i = 0; i < 500; i++) {
        // Random positions in a medium sphere
        const radius = 30
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(Math.random() * 2 - 1)
        
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = radius * Math.cos(phi)

        // Large sizes for visibility
        sizes[i] = Math.random() * 20 + 15

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
    
    console.log('ThreeJSDebug: Particle geometry created')

    // Create a circular particle texture
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 32
      canvas.height = 32
      const ctx = canvas.getContext('2d')!
      
      // Clear the canvas with transparent background
      ctx.clearRect(0, 0, 32, 32)
      
      // Create gradient for soft circular particle
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
      gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.8)')
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 32, 32)
      
      const texture = new THREE.CanvasTexture(canvas)
      texture.needsUpdate = true
      return texture
    }

    // Create particle material with basic PointsMaterial for debugging
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6, // Blue
      size: 6,
      transparent: true,
      opacity: 0.7,
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

        sizes[i] = Math.random() * 10 + 5

        velocities[i * 3] = (Math.random() - 0.5) * 0.02
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
      geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))

      const material = new THREE.PointsMaterial({
        color: color,
        size: 4,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
        map: createParticleTexture(),
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })

      return new THREE.Points(geometry, material)
    }

    // Add different colored particle systems
    const purpleParticles = createColoredParticles(0x8b5cf6, 200, 22) // Purple
    const orangeParticles = createColoredParticles(0xf59e0b, 150, 18) // Orange
    scene.add(purpleParticles)
    scene.add(orangeParticles)
    
    console.log('ThreeJSDebug: Added particles to scene')

    // Set up renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: false,
      antialias: true
    })
    
    // Check for WebGL errors
    const gl = renderer.getContext()
    if (!gl) {
      console.error('ThreeJSDebug: WebGL not supported!')
      return
    }
    
    console.log('ThreeJSDebug: WebGL context created successfully')
    console.log('ThreeJSDebug: Canvas size:', container.clientWidth, 'x', container.clientHeight)
    
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

    // Animation loop
    const animate = () => {
      if (!scene || !camera || !renderer || !particles) return

      frameCountRef.current++
      
      // Log every 60 frames
      if (frameCountRef.current % 60 === 0) {
        console.log('ThreeJSDebug: Animation frame:', frameCountRef.current)
      }

      // Update particle positions
      const positions = particleGeometry.attributes.position.array as Float32Array
      const velocities = particleGeometry.attributes.velocity.array as Float32Array

      for (let i = 0; i < 500; i++) {
        const i3 = i * 3
        
        positions[i3] += velocities[i3]
        positions[i3 + 1] += velocities[i3 + 1]
        positions[i3 + 2] += velocities[i3 + 2]

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

    console.log('ThreeJSDebug: Starting animation...')
    animate()

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize)
      
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
  }, [])

  return (
    <div className="w-full h-96 bg-black border-2 border-red-500 relative">
      <div className="absolute top-2 left-2 text-white text-sm bg-red-500 px-2 py-1 rounded">
        Three.js Debug Area
      </div>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </div>
  )
}

export default ThreeJSDebug 