import React from 'react'
import { H2, H3, P, Button } from '@/components/ui'
import Icon from '../ui/Icon'
import CVDetails from './CVDetails'
import { cvData } from '../../data/portfolio'

interface AboutProps {
  title: string
  subtitle: string
  description: string
  details: string[]
  image?: string
  resumeUrl?: string
}

const About: React.FC<AboutProps> = ({
  title,
  subtitle,
  description,
  details,
  image,
  resumeUrl
}) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <H2 className="mb-4">{title}</H2>
            <P variant="lead" className="max-w-3xl mx-auto">
              {subtitle}
            </P>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div>
                <H3 className="mb-4">Professional Background</H3>
                <P className="mb-6">{description}</P>
              </div>

              {/* Key Achievements */}
              <div>
                <H3 className="mb-4">Key Achievements</H3>
                <div className="space-y-3">
                  {details.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <P className="text-gray-700">{detail}</P>
                    </div>
                  ))}
                </div>
              </div>

              {/* CV Details */}
              <div className="pt-4">
                <CVDetails cvData={cvData} />
              </div>

              {/* CTA Button */}
              {resumeUrl && (
                <div className="pt-6">
                  <Button href={resumeUrl} variant="outline" size="large">
                    <span className="flex items-center gap-2">
                      <Icon name="download" size="small" />
                      Download Resume
                    </span>
                  </Button>
                </div>
              )}
            </div>

            {/* Image */}
            {image && (
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src={image}
                    alt="Professional headshot"
                    className="w-full h-auto rounded-lg shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-200 rounded-lg -z-10"></div>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <P variant="small" className="text-gray-600">Years of Experience</P>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
              <P variant="small" className="text-gray-600">Enterprise Systems</P>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$1M+</div>
              <P variant="small" className="text-gray-600">Annual Revenue Generated</P>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 