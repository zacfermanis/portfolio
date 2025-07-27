"use client"

import React from 'react'
import { Button, H1, H2, P } from '@/components/ui'
import { ThreeJSBackground } from '@/components/background'

interface HeroProps {
  name: string
  title: string
  description: string
  ctaText: string
  ctaLink: string
  image?: string
}

const Hero: React.FC<HeroProps> = ({
  name,
  title,
  description,
  ctaText,
  ctaLink,
  image
}) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleCtaClick = () => {
    if (ctaLink.startsWith('#')) {
      const targetSection = document.getElementById(ctaLink.substring(1))
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(ctaLink, '_blank')
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-cyan-100 relative overflow-hidden">
      <ThreeJSBackground enabled={true} quality="high" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <H1 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-sky-400 to-cyan-500 bg-clip-text text-transparent">
              {name}
            </H1>
            <H2 className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-6 font-medium">
              {title}
            </H2>
            
            {image && (
              <div className="mb-8 animate-fade-in-up">
                <img 
                  src={image} 
                  alt={`${name} - ${title}`}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-lg border-4 border-white"
                />
              </div>
            )}
            
            <P variant="lead" className="mb-8 max-w-2xl mx-auto text-lg md:text-xl">
              {description}
            </P>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handleCtaClick}
                variant="primary" 
                size="large"
                className="w-full sm:w-auto"
              >
                {ctaText}
              </Button>
              <Button 
                onClick={scrollToNextSection} 
                variant="outline" 
                size="large"
                className="w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="mt-16 animate-bounce">
            <button
              onClick={scrollToNextSection}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Scroll to next section"
            >
              <svg 
                className="w-6 h-6 mx-auto" 
                fill="none"
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 