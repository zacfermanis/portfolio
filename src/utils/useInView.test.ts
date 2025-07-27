import { renderHook, act } from '@testing-library/react'
import { useInView } from './useInView'

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn()
const mockDisconnect = jest.fn()
const mockObserve = jest.fn()
const mockUnobserve = jest.fn()

beforeEach(() => {
  mockIntersectionObserver.mockReturnValue({
    observe: mockObserve,
    unobserve: mockUnobserve,
    disconnect: mockDisconnect,
  })
  global.IntersectionObserver = mockIntersectionObserver
})

afterEach(() => {
  jest.clearAllMocks()
})

describe('useInView', () => {
  it('should initialize with isInView as false', () => {
    const { result } = renderHook(() => useInView())
    
    expect(result.current.isInView).toBe(false)
    expect(result.current.ref.current).toBe(null)
  })

  it('should return a ref that can be attached to an element', () => {
    const { result } = renderHook(() => useInView())
    
    expect(result.current.ref).toBeDefined()
    expect(typeof result.current.ref.current).toBe('object')
  })

  it('should accept custom options', () => {
    const options = {
      threshold: 0.8,
      rootMargin: '-20px',
      triggerOnce: true
    }
    
    const { result } = renderHook(() => useInView(options))
    
    expect(result.current.isInView).toBe(false)
    expect(result.current.ref).toBeDefined()
  })

  it('should reset animation state when resetTrigger changes', () => {
    const { result, rerender } = renderHook(
      ({ resetTrigger }) => useInView({ resetTrigger }),
      { initialProps: { resetTrigger: true } }
    )

    expect(result.current.isInView).toBe(false)

    // Change resetTrigger to false
    rerender({ resetTrigger: false })

    // Animation state should be reset
    expect(result.current.isInView).toBe(false)
  })
}) 