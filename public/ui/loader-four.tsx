'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type LoaderFourProps = {
  duration?: number // total loading time in ms (default: 3000ms)
  className?: string
}

export default function LoaderFour({
  duration = 3000,
  className,
}: LoaderFourProps) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const intervalTime = 30 // every 30ms increase
    const increment = 100 / (duration / intervalTime)

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev + increment >= 100) {
          clearInterval(interval)
          setProgress(100)
          setFadeOut(true)
          setTimeout(() => setVisible(false), 500) // wait for fade-out
          return 100
        }
        return prev + increment
      })
    }, intervalTime)

    return () => clearInterval(interval)
  }, [duration])

  if (!visible) return null

  return (
    <div className="h-screen">
      <div
        className={cn(
          'fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-500 bg-background',
          fadeOut ? 'opacity-0' : 'opacity-100',
          className
        )}
      >
        {/* Top loading bar */}
        <div className="absolute top-0 left-0 w-full h-4 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Center percentage */}
        <div className="text-3xl font-semibold text-primary">
          {Math.floor(progress)}%
        </div>
      </div>
    </div>
  )
}
