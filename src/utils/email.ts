import { Resend } from 'resend'

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY)

// Validate environment variables
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY environment variable is not set')
  console.error('For local development, create a .env.local file with:')
  console.error('RESEND_API_KEY=your_resend_api_key_here')
  console.error('For production, set the environment variable in your deployment platform')
  throw new Error('RESEND_API_KEY environment variable is required')
}

// Email template interface
interface EmailData {
  name: string
  email: string
  subject: string
  message: string
}

// Create email template for contact form submissions
const createContactEmailTemplate = (data: EmailData): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #2563eb; margin-top: 0;">New Contact Form Submission</h2>
        <p style="margin-bottom: 0;">You have received a new message from your portfolio website.</p>
      </div>
      
      <div style="background-color: white; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">From:</strong>
          <p style="margin: 5px 0 0 0;">${data.name} (${data.email})</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Subject:</strong>
          <p style="margin: 5px 0 0 0;">${data.subject}</p>
        </div>
        
        <div>
          <strong style="color: #374151;">Message:</strong>
          <div style="margin: 10px 0 0 0; padding: 15px; background-color: #f9fafb; border-radius: 4px; white-space: pre-wrap;">${data.message}</div>
        </div>
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 14px; color: #6b7280;">
        <p style="margin: 0;">This message was sent from your portfolio contact form at ${new Date().toLocaleString()}</p>
      </div>
    </body>
    </html>
  `
}

// Sanitize input to prevent XSS
const sanitizeInput = (input: string): string => {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email)
}

// Send contact form email
export const sendContactEmail = async (data: EmailData): Promise<{ success: boolean; error?: string }> => {
  try {
    // Log environment info for debugging (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('Email service configuration:')
      console.log('- Environment:', process.env.NODE_ENV)
      console.log('- API Key configured:', !!process.env.RESEND_API_KEY)
      console.log('- From domain: noreply@zacfermanis.com')
    }
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return { success: false, error: 'All fields are required' }
    }

    // Validate email format
    if (!isValidEmail(data.email)) {
      return { success: false, error: 'Invalid email format' }
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(data.name.trim()),
      email: sanitizeInput(data.email.trim()),
      subject: sanitizeInput(data.subject.trim()),
      message: sanitizeInput(data.message.trim())
    }

    // Create email content
    const emailHtml = createContactEmailTemplate(sanitizedData)
    const emailSubject = `[ZF.COM] - ${sanitizedData.subject}`

    // Send email via Resend
    const result = await resend.emails.send({
      from: 'Portfolio Contact Form <noreply@zacfermanis.com>', // Using verified domain
      to: ['zacfermanis@gmail.com'],
      subject: emailSubject,
      html: emailHtml,
      replyTo: sanitizedData.email
    })

    if (result.error) {
      console.error('Resend API error:', result.error)
      
      // Provide more specific error messages based on the error type
      if (result.error.name === 'validation_error') {
        if (result.error.message?.includes('domain is not verified')) {
          return { 
            success: false, 
            error: 'Email service configuration error. Please contact the site administrator.' 
          }
        }
        return { 
          success: false, 
          error: `Email validation error: ${result.error.message}` 
        }
      }
      
      return { success: false, error: 'Failed to send email. Please try again later.' }
    }

    return { success: true }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, error: 'Internal server error' }
  }
}

// Export validation utilities for use in API route
export { isValidEmail, sanitizeInput } 