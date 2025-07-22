'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type LoaderThreeProps = {
  duration?: number // total loader duration (default: 2300ms)
  className?: string
  text?: string
}

export default function LoaderThree({
  duration = 2300, // includes 300ms delay + 1000ms enter + 1000ms exit
  className,
  text = 'Logo',
}: LoaderThreeProps) {
  const [phase, setPhase] = useState<'idle' | 'enter' | 'exit' | 'hidden'>('idle')

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase('enter'), 300)                 // Start slide-up after 300ms
    const exitTimer = setTimeout(() => setPhase('exit'), 1300)                 // Slide-down + fade at 1300ms
    const removeTimer = setTimeout(() => setPhase('hidden'), duration)         // Fully remove after total duration

    return () => {
      clearTimeout(enterTimer)
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [duration])

  if (phase === 'hidden') return null

  return (
    <div className="h-screen">
    <div
      className={cn(
        'fixed inset-0 z-[9999] bg-secondary flex items-center justify-center transition-opacity duration-500',
        phase === 'exit' ? 'opacity-0' : 'opacity-100',
        className
      )}
    >
      <h1
        className={cn(
          'text-4xl font-bold text-primary transition-all duration-500 transform',
          phase === 'idle' && 'opacity-0 translate-y-10',
          phase === 'enter' && 'opacity-100 translate-y-0',
          phase === 'exit' && 'opacity-0 translate-y-10'
        )}
      >
        {text}
      </h1>
    </div>
    </div>
  )
}
