'use client'

import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Circle, Heart, Square, Star, Triangle } from 'lucide-react'

export default function LoaderTwo() {
  const screens = [
    <Circle className="size-12 animate-ping" key="LoaderScreen1" />,
    <Square className="size-12 animate-ping" key="LoaderScreen2" />,
    <Triangle className="size-12 animate-ping" key="LoaderScreen3" />,
    <Star className="size-12 animate-ping" key="LoaderScreen4" />,
    <Heart className="size-12 animate-ping" key="LoaderScreen5" />,
  ]
  const screenDuration = 300 // milliseconds

  const [currentScreen, setCurrentScreen] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (screens.length === 0) return

    const interval = setInterval(() => {
      setCurrentScreen((prev) => {
        if (prev < screens.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          setFadeOut(true)
          return prev
        }
      })
    }, screenDuration)

    const totalDuration = screens.length * screenDuration + 500 // buffer

    const removeTimer = setTimeout(() => {
      setVisible(false)
    }, totalDuration)

    return () => {
      clearInterval(interval)
      clearTimeout(removeTimer)
    }
  }, [screens.length])

  if (!visible) return null

  return (
    <div className="h-screen">
      <div
        className={cn(
          'fixed inset-0 bg-secondary flex items-center justify-center z-[9999] transition-opacity duration-500',
          fadeOut ? 'opacity-0' : 'opacity-100'
        )}
      >
        <div className="transition-opacity duration-300 ease-in-out">
          {screens[currentScreen]}
        </div>
      </div>
    </div>
  )
}
