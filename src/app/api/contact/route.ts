import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail, isValidEmail, sanitizeInput } from '@/utils/email'

// Simple in-memory rate limiting (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Rate limiting configuration
const RATE_LIMIT_MAX = 5 // Maximum requests per window
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute window

// Check rate limit for IP address
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }

  record.count++
  return true
}

// Validate request data
const validateContactData = (data: Record<string, unknown>): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []

  if (!data.name || typeof data.name !== 'string' || data.name.trim().length === 0) {
    errors.push('Name is required')
  }

  if (!data.email || typeof data.email !== 'string' || data.email.trim().length === 0) {
    errors.push('Email is required')
  } else if (!isValidEmail(data.email)) {
    errors.push('Invalid email format')
  }

  if (!data.subject || typeof data.subject !== 'string' || data.subject.trim().length === 0) {
    errors.push('Subject is required')
  }

  if (!data.message || typeof data.message !== 'string' || data.message.trim().length === 0) {
    errors.push('Message is required')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Sanitize request data
const sanitizeContactData = (data: Record<string, unknown>) => {
  return {
    name: sanitizeInput((data.name as string)?.trim() || ''),
    email: sanitizeInput((data.email as string)?.trim() || ''),
    subject: sanitizeInput((data.subject as string)?.trim() || ''),
    message: sanitizeInput((data.message as string)?.trim() || '')
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please wait a moment before trying again.' 
        },
        { status: 429 }
      )
    }

    // Parse request body
    let body
    try {
      body = await request.json()
    } catch {
      return NextResponse.json(
        { success: false, error: 'Invalid JSON in request body' },
        { status: 400 }
      )
    }

    // Validate request data
    const validation = validateContactData(body)
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed',
          details: validation.errors 
        },
        { status: 400 }
      )
    }

    // Sanitize data
    const sanitizedData = sanitizeContactData(body)

    // Send email
    const emailResult = await sendContactEmail(sanitizedData)

    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error)
      return NextResponse.json(
        { 
          success: false, 
          error: emailResult.error || 'Failed to send email' 
        },
        { status: 500 }
      )
    }

    // Success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
} 