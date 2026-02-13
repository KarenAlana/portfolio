"use client"
import { useEffect, useState } from 'react'

export function useProjectsCarousel(projects: any[], itemsPerPage: number) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const totalSlides = Math.ceil(projects.length / itemsPerPage)

  useEffect(() => {
    if (isPaused || projects.length <= itemsPerPage) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % totalSlides)
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused, projects.length, itemsPerPage])

  const next = () => setCurrentIndex(prev => (prev + 1) % totalSlides)
  const prev = () => setCurrentIndex(prev => (prev - 1 + totalSlides) % totalSlides)
  const goToIndex = (i: number) => setCurrentIndex(i)

  const canGoNext = projects.length > itemsPerPage
  const canGoPrev = currentIndex > 0

  return {
    currentIndex: currentIndex * itemsPerPage,
    next,
    prev,
    goToIndex,
    isPaused,
    setIsPaused,
    canGoNext,
    canGoPrev
  }
}