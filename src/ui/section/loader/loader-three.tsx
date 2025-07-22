'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function LoaderThree() {
  const duration = 2300
  const text = 'Logo'

  const [phase, setPhase] = useState<'idle' | 'enter' | 'exit' | 'hidden'>('idle')

  useEffect(() => {
    const enterTimer = setTimeout(() => setPhase('enter'), 300)          // Start animation
    const exitTimer = setTimeout(() => setPhase('exit'), 1300)           // Begin fade/slide out
    const removeTimer = setTimeout(() => setPhase('hidden'), duration)   // Remove from DOM

    return () => {
      clearTimeout(enterTimer)
      clearTimeout(exitTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (phase === 'hidden') return null

  return (
    <div className="h-screen">
      <div
        className={cn(
          'fixed inset-0 z-[9999] bg-secondary flex items-center justify-center transition-opacity duration-500',
          phase === 'exit' ? 'opacity-0' : 'opacity-100'
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
