"use client"

import React, { useState } from 'react'
import { H2, H3, P, Button, Modal } from '@/components/ui'
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
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)

  const handleDownloadResume = (format: 'pdf' | 'docx' | 'rtf') => {
    const fileMap = {
      pdf: '/Zac_Fermanis-Resume.pdf',
      docx: '/Zac_Fermanis-Resume.docx',
      rtf: '/Zac_Fermanis-Resume.rtf'
    }
    
    const url = fileMap[format]
    window.open(url, '_blank')
    setIsResumeModalOpen(false)
  }

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
                      <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <P className="text-gray-700">{detail}</P>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              {resumeUrl && (
                <div className="pt-6 text-center">
                  <Button 
                    onClick={() => setIsResumeModalOpen(true)}
                    variant="secondary" 
                    size="large"
                  >
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
              <div className="relative flex justify-center">
                <div className="relative z-10 max-w-lg">
                  <img
                    src={image}
                    alt="Professional headshot"
                    className="w-full h-auto rounded-lg shadow-xl max-w-md"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-full h-full bg-sky-200 rounded-lg -z-10 max-w-lg"></div>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">20+</div>
              <P variant="small" className="text-gray-600">Years of Experience</P>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">40+</div>
              <P variant="small" className="text-gray-600">Enterprise Systems</P>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-400 mb-2">$1M+</div>
              <P variant="small" className="text-gray-600">Annual Revenue Generated</P>
            </div>
          </div>
        </div>
      </div>

      {/* CV Details - Full Width Section */}
      <div className="mt-20 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CVDetails cvData={cvData} />
        </div>
      </div>

      {/* Resume Download Modal */}
      <Modal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        title="Download Resume"
        showCloseButton={true}
      >
        <div className="space-y-4">
          <P className="text-gray-600 mb-6">
            Choose your preferred format to download my resume:
          </P>
          
          <div className="space-y-3">
            <button
              onClick={() => handleDownloadResume('pdf')}
              className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-sky-400 hover:bg-sky-50 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <Icon name="file" size="medium" className="text-red-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">PDF Format</div>
                  <div className="text-sm text-gray-500">Best for printing and sharing</div>
                </div>
              </div>
              <Icon name="external-link" size="small" className="text-gray-400 group-hover:text-sky-400 transition-colors" />
            </button>

            <button
              onClick={() => handleDownloadResume('docx')}
              className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-sky-400 hover:bg-sky-50 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Icon name="file" size="medium" className="text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">Word Document</div>
                  <div className="text-sm text-gray-500">Editable format for Microsoft Word</div>
                </div>
              </div>
              <Icon name="external-link" size="small" className="text-gray-400 group-hover:text-sky-400 transition-colors" />
            </button>

            <button
              onClick={() => handleDownloadResume('rtf')}
              className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-sky-400 hover:bg-sky-50 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Icon name="file" size="medium" className="text-green-600" />
                </div>
                <div className="text-left">
                  <div className="font-medium text-gray-900">RTF Format</div>
                  <div className="text-sm text-gray-500">Rich text format for compatibility</div>
                </div>
              </div>
              <Icon name="external-link" size="small" className="text-gray-400 group-hover:text-sky-400 transition-colors" />
            </button>
          </div>
        </div>
      </Modal>
    </section>
  )
}

export default About 