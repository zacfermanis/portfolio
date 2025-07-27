"use client"

import React, { useState } from 'react'
import { H2, H3, P, Button, Icon } from '@/components/ui'

interface Social {
  linkedin?: string
  github?: string
  twitter?: string
  website?: string
}

interface ContactProps {
  title: string
  subtitle: string
  description: string
  email: string
  phone?: string
  location?: string
  social: Social
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const Contact: React.FC<ContactProps> = ({ 
  title, 
  subtitle, 
  description, 
  email, 
  phone, 
  location, 
  social 
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else {
      // More comprehensive email validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Email is invalid'
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Send form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        // Clear form data after successful submission
        setFormData({ name: '', email: '', subject: '', message: '' })
        // Clear any existing errors
        setErrors({})
      } else {
        setSubmitStatus('error')
        // Handle server-side validation errors
        if (result.details && Array.isArray(result.details)) {
          const serverErrors: Partial<FormData> = {}
          result.details.forEach((error: string) => {
            if (error.includes('Name')) serverErrors.name = error
            if (error.includes('Email')) serverErrors.email = error
            if (error.includes('Subject')) serverErrors.subject = error
            if (error.includes('Message')) serverErrors.message = error
          })
          setErrors(serverErrors)
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-t border-slate-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(16,185,129,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <H2 className="mb-4">{title}</H2>
          <P variant="lead" className="max-w-3xl mx-auto mb-4">
            {subtitle}
          </P>
          <P className="max-w-4xl mx-auto text-gray-600">
            {description}
          </P>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <H3 className="mb-6">Get In Touch</H3>
              
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4">
                  <Icon name="email" size="large" className="text-sky-400" />
                  <div>
                    <P variant="small" className="text-gray-600">Email</P>
                    <a 
                      href={`mailto:${email}`}
                      className="text-sky-400 hover:text-sky-500 font-medium"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                {phone && (
                  <div className="flex items-center space-x-4">
                    <Icon name="star" size="large" className="text-sky-400" />
                    <div>
                      <P variant="small" className="text-gray-600">Phone</P>
                      <a 
                        href={`tel:${phone}`}
                        className="text-sky-400 hover:text-sky-500 font-medium"
                      >
                        {phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Location */}
                {location && (
                  <div className="flex items-center space-x-4">
                    <Icon name="star" size="large" className="text-sky-400" />
                    <div>
                      <P variant="small" className="text-gray-600">Location</P>
                      <P className="font-medium">{location}</P>
                    </div>
                  </div>
                )}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <H3 className="mb-4">Connect With Me</H3>
                <div className="flex space-x-4">
                  {social.linkedin && (
                    <a
                      href={social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      title="LinkedIn"
                    >
                      <Icon name="linkedin" size="large" />
                    </a>
                  )}
                  {social.github && (
                    <a
                      href={social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      title="GitHub"
                    >
                      <Icon name="github" size="large" />
                    </a>
                  )}
                  {social.website && (
                    <a
                      href={social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      title="Website"
                    >
                      <Icon name="star" size="large" />
                    </a>
                  )}
                  {social.twitter && (
                    <a
                      href={social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                      title="Twitter"
                    >
                      <Icon name="star" size="large" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <H3 className="mb-6">Send Message</H3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 text-gray-900 bg-white placeholder-gray-500 ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 text-gray-900 bg-white placeholder-gray-500 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 text-gray-900 bg-white placeholder-gray-500 ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 text-gray-900 bg-white placeholder-gray-500 ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">
                    Failed to send message. Please check your connection and try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Arrow */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => {
            const bandSection = document.getElementById('band')
            if (bandSection) {
              bandSection.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          className="p-3 rounded-full bg-white/80 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-slate-200"
          aria-label="Scroll to band section"
        >
          <Icon name="arrow" size="large" className="text-sky-400" />
        </button>
      </div>
      </div>
    </section>
  )
}

export default Contact 