'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Loader } from 'lucide-react'

type LoaderOneProps = {
  duration?: number // Total time (e.g., 3000ms)
  className?: string
  autoHide?: boolean
}

export default function LoaderOne({
  duration = 1500,
  className,
  autoHide = true,
}: LoaderOneProps) {
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!autoHide) return

    const fadeStartDelay = duration - 300 // Trigger fade 300ms before removing
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true)
    }, fadeStartDelay)

    const removeTimer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [autoHide, duration])

  if (!isVisible) return null

  return (
    <div className="h-screen">
      <div
        className={cn(
          'fixed inset-0 z-[9999] flex items-center justify-center bg-secondary transition-opacity duration-[3000ms]',
          isFadingOut ? 'opacity-0' : 'opacity-100',
          className
        )}
      >
        <Loader
          className={cn(
            'size-12 animate-spin text-primary transition-all duration-300',
            // isFadingOut ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
          )}
        />
      </div>
    </div>
  )
}
