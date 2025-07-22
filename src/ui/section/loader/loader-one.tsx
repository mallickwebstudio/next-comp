'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Loader } from 'lucide-react'

export default function LoaderOne() {
  const duration = 1500         // milliseconds
  const autoHide = true
  const fadeBefore = 300        // fade starts 300ms before duration ends

  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!autoHide) return

    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true)
    }, duration - fadeBefore)

    const removeTimer = setTimeout(() => {
      setIsVisible(false)
    }, duration)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(removeTimer)
    }
  }, [autoHide])

  if (!isVisible) return null

  return (
    <div className="h-screen">
      <div
        className={cn(
          'fixed inset-0 z-[9999] flex items-center justify-center bg-secondary transition-opacity duration-[3000ms]',
          isFadingOut ? 'opacity-0' : 'opacity-100'
        )}
      >
        <Loader className="size-12 animate-spin text-primary" />
      </div>
    </div>
  )
}
