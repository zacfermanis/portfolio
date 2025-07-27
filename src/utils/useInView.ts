import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
  resetTrigger?: unknown // Trigger to reset the animation state
}

export const useInView = <T extends Element = Element>(options: UseInViewOptions = {}) => {
  const {
    threshold = 0.5,
    rootMargin = '0px',
    triggerOnce = false,
    resetTrigger
  } = options

  const [isInView, setIsInView] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<T>(null)

  // Reset animation state when resetTrigger changes
  useEffect(() => {
    if (resetTrigger !== undefined) {
      setIsInView(false)
      setHasTriggered(false)
    }
  }, [resetTrigger])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting
        
        if (triggerOnce && hasTriggered) {
          return
        }

        if (isIntersecting) {
          setIsInView(true)
          if (triggerOnce) {
            setHasTriggered(true)
          }
        } else if (!triggerOnce) {
          setIsInView(false)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { ref, isInView }
} 