'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Circle, Heart, Square, Star, Triangle } from 'lucide-react'

type LoaderTwoProps = {
  screens: React.ReactNode[]  // Array of screen content
  screenDuration?: number     // Each screen's duration (default: 300ms)
  className?: string
}

export default function LoaderTwo({
  screens = [
    <Circle className="size-12 animate-ping" key="LoaderFourScreenOne" />,
    <Square className="size-12 animate-ping" key="LoaderFourScreenTwo" />,
    <Triangle className="size-12 animate-ping" key="LoaderFourScreenThree" />,
    <Star className="size-12 animate-ping" key="LoaderFourScreenFour" />,
    <Heart className="size-12 animate-ping" key="LoaderFourScreenFive" />,
  ],
  screenDuration = 300,
  className,
}: LoaderTwoProps) {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (screens.length === 0) return

    const interval = setInterval(() => {
      setCurrentScreen(prev => {
        if (prev < screens.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          setFadeOut(true)
          return prev
        }
      })
    }, screenDuration)

    const totalDuration = screens.length * screenDuration + 500 // Extra buffer
    const removeTimer = setTimeout(() => {
      setVisible(false)
    }, totalDuration)

    return () => {
      clearInterval(interval)
      clearTimeout(removeTimer)
    }
  }, [screens.length, screenDuration])

  if (!visible) return null

  return (
    <div className="h-screen">
      <div
        className={cn(
          'fixed inset-0 bg-secondary flex items-center justify-center z-[9999] transition-opacity duration-500',
          fadeOut ? 'opacity-0' : 'opacity-100',
          className
        )}
      >
        <div className="transition-opacity duration-300 ease-in-out">
          {screens[currentScreen]}
        </div>
      </div>
    </div>
  )
}
