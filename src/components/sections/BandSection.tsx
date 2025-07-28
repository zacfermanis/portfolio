import React from 'react'
import { H3, P } from '@/components/ui'
import Icon from '../ui/Icon'

const BandSection: React.FC = () => {
  return (
    <section id="band" className="py-16 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Icon name="music" size="medium" className="text-sky-400" />
              <H3 className="text-white">Oh yeah, I&apos;m also in a band!</H3>
            </div>
            
            <div className="flex items-center justify-center mb-6">
              <a 
                href="https://echoblvd.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/logos/Echo Blvd Logo.svg"
                  alt="Echo Blvd Logo"
                  className="h-16 w-16 object-contain"
                />
              </a>
            </div>
            
            <P className="text-white mb-6 max-w-2xl mx-auto">
              When I&apos;m not coding, you can find me playing music with{' '}
              <a 
                href="https://echoblvd.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-500 font-semibold underline transition-colors"
              >
                Echo Blvd
              </a>
              . I made that website too!
            </P>
            

          </div>
        </div>
      </div>
    </section>
  )
}

export default BandSection 