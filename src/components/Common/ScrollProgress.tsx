'use client'
import { useEffect, useState } from 'react'

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY

      const totalScrollableHeight = documentHeight - windowHeight
      const progress = (scrollTop / totalScrollableHeight) * 100

      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className='fixed top-0 left-0 w-full h-1 bg-black/5 z-50'>
        <div
          className='h-full bg-gradient-to-r from-primary via-deepSlate to-primary transition-all duration-150 ease-out'
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      {/* Glow effect */}
      <div className='fixed top-0 left-0 w-full h-1 z-50 pointer-events-none'>
        <div
          className='h-full bg-gradient-to-r from-primary/50 via-deepSlate/50 to-primary/50 blur-sm'
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  )
}

export default ScrollProgress
